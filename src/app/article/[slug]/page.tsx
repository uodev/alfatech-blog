import "highlight.js/styles/panda-syntax-dark.css";
import "@/assets/styles/article-detail.css";

import Title1 from "@/components/Title1";
import H4 from "@/components/H4";
import BlogCard from "@/components/BlogCard";
import H2 from "@/components/H2";
import Image from "next/image";
import { IBlog, IResponse } from "@/types/types";
import { Metadata } from "next";
import request from "@/lib/request";

const getBlogDetail = async (slug: string) => {
  const response = await request(`/blog/slug/${slug}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  })

  const result: IResponse = await response.json();
  return result.data as IBlog;
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogDetail(params.slug);
  const metadata: Metadata = {
    title: blog.blogTitle,
    description: blog.blogContent,
    openGraph: {
      images: [
        {
          url: blog.blogImage,
          width: 1021,
          height: 580,
          alt: blog.blogTitle,
        },
      ],
    },
  };
  return metadata;
}

const AricleDetailPage = async ({ params }: { params: { slug: string } }) => {
  const blog = await getBlogDetail(params.slug);
  return (
    <article className="flex flex-col gap-44">
      <div className="flex flex-col gap-10 content-section">
        <div className="flex flex-col gap-10">
          <Title1 text={blog.blogTitle} />
          <H4
            text={
              "People’s quest for creating websites has easily taken us to a new era of site development. Where, with the availability of robust page building tools, creating websites has become a lot more fun (especially for non-developers)."
            }
          />
          <p className="text-base">
            <span className="text-passive">BY</span>{" "}
            <span className="text-black dark:text-white">
              {blog.author.authorFullName}
            </span>{" "}
            <span className="text-passive">IN</span>{" "}
            <span className="text-black dark:text-white">
              {blog.category.categoryName}
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-10 w-[1021px]  mx-auto">
          <div className="relative w-[1021px] h-[550px]">
            <Image
              fill
              quality={85}
              src={blog.blogImage}
              className="mx-auto  object-cover rounded-lg"
              alt="post main image"
            />
            <div className="absolute top-0 -left-16">
              <Image
                width={45}
                height={45}
                quality={70}
                src={blog.author.authorAvatar}
                className="mx-auto w-[45px] h-[45px] object-cover rounded-lg"
                alt="post main image"
              />
            </div>
            <div className="absolute -right-14 top-0 flex flex-col justify-center items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 24 24"
                className="dark:text-white text-black"
              >
                <path
                  fill="currentColor"
                  d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                ></path>
              </svg>
              <p className="text-black dark:text-white font-bold">
                {blog.view}
              </p>
            </div>
          </div>

          <div
            className="dark:text-white text-black"
            dangerouslySetInnerHTML={{ __html: blog.blogContent }}
          />
        </div>
      </div>
      <div className="flex flex-col gap-8 mb-24">
        <div className="flex items-center justify-between">
          <H2 text="You might also like..." />
          <p className="text-passive text-base">More</p>
        </div>
        <div className="flex justify-between items-center">
          <BlogCard
            blog={{
              blogSlug: "how-to-reinstall-wordpress",
              blogImage: "/images/post_1.png",
              author: {
                authorFullName: "Uygar Öztürk Ceylan",
              },
              category: {
                categoryName: "DESIGN PROCESS",
              },
              blogContent:
                "User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.",
              blogTitle:
                "How to Reinstall WordPress: 5 Different Methods Depending On Your Needs",
            }}
          />
          <BlogCard
            blog={{
              blogSlug: "web-page-layout-101",
              blogImage: "/images/post_2.png",
              author: {
                authorFullName: "Onur Yücel",
              },
              category: {
                categoryName: "DESIGN PROCESS",
              },
              blogContent:
                "User research is the reality check every project needs. Here’s our guide to why you should be doing it — and how to get started.",
              blogTitle:
                "Web page layout 101: website anatomy every designer needs to learn",
            }}
          />
        </div>
      </div>
    </article>
  );
};

export default AricleDetailPage;
