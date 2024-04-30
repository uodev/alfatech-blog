import H3 from "./H3";
import H5 from "./H5";
import Image from "next/image";
import Link from "next/link";

interface Blog {
  blogSlug: string;
  blogImage: string;
  blogTitle: string;
  blogContent: string;
  category: {
    categoryName: string;
  };
  author: {
    authorFullName: string;
  };
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <article className=" max-lg:mx-auto ">
      <div className="relative">
        <Link
          href={`/article/${blog.blogSlug}`}
          className="!no-underline"
        >
          <Image
            className="object-cover max-lg:w-[780px] select-none"
            src={blog.blogImage}
            alt="post"
            width={780}
            height={410}
            quality={75}
            priority
          />
        </Link>
        <div className="flex flex-col gap-3 w-[330px] h-[40px] px-4 py-2 z-10 bg-background bottom-0 absolute">
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <H3 text={blog.blogTitle} className="w-[330px] text-white" />
        <p className="text-white font-medium tracking-[2px] w-[330px] text-xs">
          <span className="text-red">BY</span>{" "}
          <span className="text-white">
            {blog.author.authorFullName}
          </span>{" "}
          <span className="text-red">IN</span>{" "}
          <span className="text-white ">
            {blog.category.categoryName}
          </span>
        </p>
        <H5 className="text-passive text-sm font-normal z-10 font-Open-Sans w-[330px]" isHtml text={`${blog.blogContent}...`} />
        <div className="relative flex gap-3 uppercase items-center text-red text-xs hover:cursor-pointer group w-[95px]">
          <p className="tracking-wider font-[500] ">Read More </p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 transition-transform transform translate-x-0 group-hover:translate-x-2 absolute right-0 ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
