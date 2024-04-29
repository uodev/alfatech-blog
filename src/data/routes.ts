import { Route } from "@/types/types";

export function getRoutes() {
  const routes: { [key: string]: Route[] } = {
    en: [
      {
        path: "/news",
        name: "News",
      },
      {
        path: "/",
        name: "Most Viewed",
      },
      {
        path: "/topics",
        name: "Topics",
      },
      {
        path: "/application",
        name: "Application",
      },
    ],
  };
  return routes["en"];
}
