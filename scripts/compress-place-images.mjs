import sharp from 'sharp';
import { readdir } from 'fs/promises';
import path from 'path';

const inputDir = 'images';
const outputDir = 'public/images';

const files = await readdir(inputDir);
const placeFiles = files.filter(f => f.startsWith('place-image'));

for (const file of placeFiles) {
  const num = file.match(/\((\d+)\)/)?.[1];
  if (!num) continue;
  const outName = `place-${num}.webp`;
  await sharp(path.join(inputDir, file))
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 78 })
    .toFile(path.join(outputDir, outName));
  console.log(`✓ ${file} → ${outName}`);
}
