import BlogCard from "@/components/BlogCard";
import CategoryCards from "@/partials/home/CategoryCards";
import Subscribe from "@/partials/home/Subscribe";
import { IBlogs, IResponse } from "@/types/types";
import { Fragment } from "react";
import request from "@/lib/request";
import HeroSwiper from "@/partials/home/HeroSwiper";

const getBlogs = async () => {
  const response = await request("/blogs/most-view", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
  const data: IResponse = await response.json();
  const blogs: IBlogs[] = data.data;
  return blogs;
};

export default async function Home() {
  const blogs = await getBlogs();
  const firstBlog = blogs[0];
  const secondBlog = blogs[1];
  const thirdBlog = blogs[2];
  const restBlogs = blogs.slice(3);
  return (
    <Fragment>
      <HeroSwiper firstBlog={firstBlog} secondBlog={secondBlog} thirdBlog={thirdBlog} />
      <section className="grid grid-cols-3 w-full mt-10 gap-10 max-lg:grid-cols-1">
        {restBlogs.map((blog) => (
          <BlogCard key={blog.blogSlug} blog={blog} />
        ))}
      </section>
      <div className="w-full h-96 flex items-center justify-center">
        <button className="border border-red text-red px-8 py-3 rounded-3xl font-semibold text-2xl hover:bg-red hover:text-white transition-colors">
          Load More
        </button>
      </div>
      <CategoryCards />
      <Subscribe />
    </Fragment>
  );
}
