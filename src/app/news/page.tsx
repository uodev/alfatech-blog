import BlogCard from "@/components/BlogCard";
import CategoryCards from "@/partials/home/CategoryCards";
import Subscribe from "@/partials/home/Subscribe";
import { IBlogs, IResponse } from "@/types/types";
import { Fragment } from "react";
import request from "@/lib/request";

const getNewBlogs = async () => {
  const response = await request("/blog/latest", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  })

  const data: IResponse = await response.json();
  const blogs: IBlogs[] = data.data;
  return blogs;
};

const NewsPage = async () => {
  const blogs = await getNewBlogs();
  return (
    <Fragment>
      <section className="grid grid-cols-2 gap-10 max-lg:grid-cols-1">
        {blogs.length > 0 &&
          blogs.map((blog, index) => (
            <Fragment key={index}>
              <BlogCard blog={blog} />
            </Fragment>
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
};

export default NewsPage;
