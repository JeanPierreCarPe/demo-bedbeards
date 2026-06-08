import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '..', 'images');
const DEST = path.join(__dirname, '..', 'public', 'images');

const MAX_KB = 200;
const MAX_PX = 1440; // max width or height

await mkdir(DEST, { recursive: true });

const files = await readdir(SRC);
const images = files.filter(f => /\.(jpe?g|png|webp|avif)$/i.test(f));

for (const file of images) {
  const src = path.join(SRC, file);
  const name = path.parse(file).name
    .replace(/\s+/g, '-')
    .replace(/[()]/g, '')
    .replace(/--+/g, '-')
    .toLowerCase();
  const dest = path.join(DEST, `${name}.webp`);

  const meta = await sharp(src).metadata();
  const needsResize = (meta.width ?? 0) > MAX_PX || (meta.height ?? 0) > MAX_PX;

  let q = 80;
  let buf;

  do {
    const pipeline = sharp(src);
    if (needsResize) {
      pipeline.resize(MAX_PX, MAX_PX, { fit: 'inside', withoutEnlargement: true });
    }
    buf = await pipeline.webp({ quality: q }).toBuffer();

    if (buf.length > MAX_KB * 1024 && q > 30) {
      q -= 10;
    } else {
      break;
    }
  } while (true);

  await sharp(buf).toFile(dest);
  console.log(`${file} → ${name}.webp (${(buf.length / 1024).toFixed(1)} KB, q=${q})`);
}

console.log(`\nDone. ${images.length} images → /public/images/`);
