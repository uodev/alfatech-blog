import BlogCard from "@/components/BlogCard";
import CategoryCards from "@/partials/home/CategoryCards";
import Subscribe from "@/partials/home/Subscribe";
import { IBlogs, IResponse } from "@/types/types";
import { Fragment } from "react";
import request from "@/lib/request";
import HeroSwiper from "@/partials/home/HeroSwiper";

const getNewBlogs = async () => {
  const response = await request("/blogs/newest", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  const data: IResponse = await response.json();

  const blogs: IBlogs[] = data.data;
  return blogs;
};

const NewsPage = async () => {
  const blogs = await getNewBlogs();
  const firstBlog = blogs[0];
  const secondBlog = blogs[1];
  const thirdBlog = blogs[2];
  const restBlogs = blogs.slice(3);
  return (
    <Fragment>
      <HeroSwiper firstBlog={firstBlog} secondBlog={secondBlog} thirdBlog={thirdBlog} />
      <section className="grid grid-cols-3 w-full mt-10 gap-10 max-lg:grid-cols-1">
        {restBlogs.length > 0 &&
          restBlogs.map((blog, index) => (
            <Fragment key={index}>
              <BlogCard blog={blog} />
            </Fragment>
          ))}
      </section>
      <div className="w-full h-96 flex items-center justify-center">
        <button className="border border-accent text-accent px-8 py-3 rounded-3xl font-semibold text-2xl hover:bg-accent hover:text-white transition-colors">
          Load More
        </button>
      </div>
      <CategoryCards />
      <Subscribe />
    </Fragment>
  );
};

export default NewsPage;
