'use client'

import Link from "next/link";
import { Icon } from "@iconify/react";

const CategoryCard = ({
  slug,
  title,
  icon,
}: {
  slug: string;
  title: string;
  icon: string;
}) => {
  return (
    <Link href={`/topics/${slug}`}>
      <div className="bg-gray-800/40 topic-card-container shadow-md rounded-xl w-[220px] h-[110px] flex items-center justify-center gap-3 hover:-translate-y-1 transition-transform cursor-pointer">
        <Icon icon={icon} />
        <p className="font-semibold text-lg dark:text-white">{title}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
