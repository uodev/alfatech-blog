import H1 from "@/components/H1";
import LargeCategoryCard from "@/components/LargeCategoryCard";
import { Category, IResponse } from "@/types/types";
import { Fragment } from "react";
import request from "@/lib/request";

const getCategories = async () => {
  const response = await request("/category", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  })
  const result: IResponse = await response.json();
  return result.data as Category[];
};

export async function generateMetadata() {
  return {
    title: "All Topics",
    description: "Explore all the topics here.",
  };
}

const TopicsPage = async () => {
  const categories = await getCategories();
  return (
    <Fragment>
      <H1 text={"All Topics"} />
      <section className="grid grid-cols-2 mt-10 gap-6 pb-32">
        {categories.map((category, index) => (
          <Fragment key={index}>
            <LargeCategoryCard
              slug={category.slug}
              title={category.name}
              icon={category.icon}
            />
          </Fragment>
        ))}
      </section>
    </Fragment>
  );
};

export default TopicsPage;
