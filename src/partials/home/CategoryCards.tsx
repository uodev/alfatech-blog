"use client";

import CategoryCard from "@/components/CategoryCard";
import Title1 from "@/components/Title1";
import { Category, IResponse } from "@/types/types";
import { Fragment, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import { API_URL } from "@/lib/config";

const getCategories = async () => {
  const response = await fetch(`${API_URL}/category`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "force-cache",
  });
  const results: IResponse = await response.json();
  return results.data as Category[];
};

const CategoryCards = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getCategories().then((data) => setCategories(data));
  }, []);

  return (
    <div className="flex flex-col gap-8">
      <Title1 text="All topics" />
      <div className="grid grid-cols-4 gap-6 category-card dark:category-card-dark">
        {categories.map((category, index) => (
          <Fragment key={index}>
            <CategoryCard title={category.name} slug={category.slug}>
              <Icon icon={category.icon} />
            </CategoryCard>
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
