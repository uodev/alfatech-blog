import BlogCard from "@/components/BlogCard";
import H1 from "@/components/H1";
import CategoryCards from "@/partials/home/CategoryCards";
import Subscribe from "@/partials/home/Subscribe";
import { IBlogs, IResponse } from "@/types/types";
import { Fragment } from "react";
import { API_URL } from "@/lib/config";

const getTopicBlogs = async (slug: string) => {
  const response = await fetch(`${API_URL}/category/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });

  const result: IResponse = await response.json();
  return result.data as IBlogs[];
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  return {
    title: `Topic - ${params.slug}`,
    description: `All blogs related to ${params.slug}. Read more about ${params.slug} here.`,
  };
}

const TopicBlogsPage = async ({ params }: { params: { slug: string } }) => {
  const blogs = await getTopicBlogs(params.slug);
  return (
    <Fragment>
      <H1 text={"Topic - " + params.slug} />
      <section className="grid grid-cols-2 gap-10 max-lg:grid-cols-1 mt-10 mb-52">
        {blogs.length > 0 &&
          blogs.map((blog, index) => (
            <Fragment key={index}>
              <BlogCard blog={blog} />
            </Fragment>
          ))}
        {blogs.length === 0 && (
          <div className="col-span-2 flex items-center justify-center">
            <p className="text-2xl text-gray-500">No blogs found</p>
          </div>
        )}
      </section>
      <CategoryCards />
      <Subscribe />
    </Fragment>
  );
};

export default TopicBlogsPage;
