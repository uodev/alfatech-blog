const H2 = ({ text, className }: { text: string, className?: string }) => {
  return (
    <h3 className={`font-semibold text-[28px] dark:text-white text-black ${className}`}>
      {text}
    </h3>
  );
};

export default H2;
