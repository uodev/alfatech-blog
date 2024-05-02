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

const HeroBlogCard = ({ blog }: { blog: Blog }) => {
  return (
    <article className="w-[1450px] h-[655px] bg-[#17172b]">
      <Link href={`/article/${blog.blogSlug}`}>
        <div className="flex flex-col items-center justify-center h-[655px] relative">
          <div className="absolute right-0 w-[900px] h-full">
            <Image
              src={blog.blogImage}
              alt="post"
              fill
              className=" object-cover "
              quality={100}
              priority
            />
          </div>
          <div className="bg-[#F5EFE6] w-[600px] h-[600px] flex flex-col gap-10 absolute left-40 px-10 py-28">
            <div>
              <p className="text-[#191919] font-medium tracking-[2px] text-xs z-10">
                {blog.author.fullname} <span className="text-red">IN</span>{" "}
                {blog.category.name}
              </p>
            </div>
            <h1 className="text-[#191919] text-5xl font-bold z-10 font-Source-Sans-Pro">
              {blog.blogTitle}
            </h1>
            <p className="text-[#191919] text-lg font-normal z-10 font-Open-Sans">
              {blog.blogContent}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default HeroBlogCard;
