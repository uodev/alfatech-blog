const H2 = ({ text, className }: { text: string, className: string }) => {
  return <h6 className={`font-normal text-sm ${className}`}>{text}</h6>;
};

export default H2;
