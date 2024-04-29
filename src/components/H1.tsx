const H1 = ({ text }: { text: string }) => {
  return (
    <h1 className="font-semibold text-5xl dark:text-white text-black">
      {text}
    </h1>
  );
};

export default H1;
