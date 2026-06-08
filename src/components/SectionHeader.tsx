interface SectionHeaderProps {
  tag: string;
  headline: string;
  description?: string;
  align?: 'left' | 'right' | 'center';
}

export default function SectionHeader({ tag, headline, description, align = 'left' }: SectionHeaderProps) {
  const isRight  = align === 'right';
  const isCenter = align === 'center';

  const descriptionEl = description ? (
    <p className={`relative z-[1] font-light text-[16px] leading-[25px] text-white w-full md:w-[500px] min-w-0 md:min-w-[300px] shrink-0
      text-center ${isRight ? 'md:text-right order-last md:order-none' : isCenter ? '' : 'md:text-left'}`}>
      {description}
    </p>
  ) : null;

  return (
    <div
      className={`relative flex flex-wrap gap-x-10 md:gap-x-20 gap-y-8 items-end w-full
        justify-center px-4 md:px-0
        ${isRight ? 'md:justify-end md:pr-[120px]'
        : isCenter ? ''
        : 'md:justify-start md:pl-[120px]'}`}
    >
      {/* Ghost watermark */}
      <p
        className={`font-display text-ghost whitespace-nowrap absolute z-[0]
          text-[56px] leading-[56px] top-[-32px] left-1/2 -translate-x-1/2
          md:text-[128px] md:leading-[110px] md:top-[-72px]
          ${isRight
            ? 'md:left-auto md:right-0 md:translate-x-0'
            : isCenter
            ? ''
            : 'md:left-0 md:translate-x-0'}`}
        aria-hidden
      >
        {tag}
      </p>

      {isRight && descriptionEl}

      <p className={`relative z-[1] font-display text-[clamp(32px,5vw,64px)] leading-[1.1] text-white flex-1 min-w-[200px] md:min-w-[400px]
        text-center ${isRight ? 'md:text-right order-first md:order-none' : isCenter ? '' : 'md:text-left'}`}>
        {headline.split('\n').map((line, i, arr) => (
          <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
        ))}
      </p>

      {!isRight && descriptionEl}
    </div>
  );
}
