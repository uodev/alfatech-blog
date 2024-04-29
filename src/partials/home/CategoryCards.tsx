import CategoryCard from "@/components/CategoryCard";
import Title1 from "@/components/Title1";
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
  const results: IResponse = await response.json();
  return results.data as Category[];
}

const CategoryCards = async () => {
  const categories = await getCategories();

  return (
    <div className="flex flex-col gap-8">
      <Title1 text="All topics" />
      <div className="grid grid-cols-4 gap-6 category-card dark:category-card-dark">
        {categories.map((category, index) => (
          <Fragment key={index}>
            <CategoryCard title={category.name} slug={category.slug} icon={category.icon} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
