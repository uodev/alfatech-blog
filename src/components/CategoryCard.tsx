import Link from "next/link";

const CategoryCard = ({
  slug,
  title,
  children,
}: {
  slug: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <Link href={`/topics/${slug}`}>
      <div className="bg-white dark:bg-gray-800/40 topic-card-container shadow-md rounded-xl w-[220px] h-[110px] flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
        {children}
        <p className="font-semibold text-lg dark:text-white">{title}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
