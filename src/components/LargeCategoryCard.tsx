'use client'

import Link from "next/link";
import { Icon } from "@iconify/react";
import H3 from "@/components/H3";
import H4 from "@/components/H4";

const LargeCategoryCard = ({
  slug,
  title,
  icon,
}: {
  slug: string;
  title: string;
  icon: string;
}) => {
  return (
    <Link
      href={`/topics/${slug}`}
      className="bg-white dark:bg-gray-800/40 shadow-md rounded-xl w-[570px] h-[250px] flex flex-col items-center gap-6 px-5 py-10"
    >
      <div className="topic-pages-card-container flex gap-5 w-full">
        <Icon icon={icon} />
        <H3 text={title} />
      </div>
      <H4 text="Get the web design inspiration you need from top 3layers users, amazing landing page and site designs, and 3layers Workshops." />
    </Link>
  );
};

export default LargeCategoryCard;
