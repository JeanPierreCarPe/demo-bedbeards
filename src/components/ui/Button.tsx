import { motion } from 'framer-motion';

interface ButtonProps {
  text: string;
  onClick?: () => void;
  href?: string;
  className?: string;
}

export default function Button({ text, onClick, href, className = '' }: ButtonProps) {
  const inner = (
    <motion.span
      className={`inline-flex items-center gap-0 h-10 bg-[rgba(186,112,79,0.85)] cursor-pointer ${className}`}
      whileHover={{ backgroundColor: 'rgba(186,112,79,1)' }}
      transition={{ duration: 0.2 }}
    >
      <span className="pl-[30px] font-body font-semibold text-[20px] text-white leading-none whitespace-nowrap">
        {text}
      </span>
      <span className="flex items-center justify-center w-12 h-10 bg-[#fbfbfb] shrink-0 ml-[30px]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="-rotate-90">
          <path d="M12 5v14M5 12l7 7 7-7" stroke="#0f0f0f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </motion.span>
  );

  if (href) {
    return <a href={href} className="inline-flex">{inner}</a>;
  }
  return (
    <button onClick={onClick} className="inline-flex">
      {inner}
    </button>
  );
}
