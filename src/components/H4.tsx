const H2 = ({ text, className }: { text: string, className?: string }) => {
  return (
    <h4 className={`font-semibold text-lg text-white ${className}`}>{text}</h4>
  );
};

export default H2;
