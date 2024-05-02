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
    name: string;
  };
  author: {
    fullname: string;
  };
}

const BlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <article className="w-[570px] max-xl:w-[460px] max-lg:mx-auto max-lg:w-[780px]">
      <Link
        data-astro-prefetch="tap"
        href={`/article/${blog.blogSlug}`}
        className="!no-underline"
      >
        <Image
          className="rounded-lg object-cover max-lg:w-[780px] "
          src={blog.blogImage}
          alt="post"
          width={780}
          height={410}
          quality={75}
          priority
        />
        <div className="mt-5 flex flex-col gap-3 w-fit">
          <p className="text-base">
            <span className="text-passive">BY</span>{" "}
            <span className="dark:text-white text-black ">
              {blog.author.fullname}
            </span>{" "}
            <span className="text-passive">IN</span>{" "}
            <span className="dark:text-white text-black ">
              {blog.category.name}
            </span>
          </p>
          <H3 text={blog.blogTitle} />
          <H5 className="text-passive" isHtml text={`${blog.blogContent}...`} />
        </div>
      </Link>
    </article>
  );
};

export default BlogCard;
