import H4 from "./H4";
import H2 from "./H2";
import NavbarIcons from "../partials/navbar/NavbarIcons";
import { getRoutes } from "@/data/routes";
import { Route } from "@/types/types";
import Link from "next/link";

const Navbar = () => {
  const routes: Route[] = getRoutes();

  return (
    <nav className="flex items-center justify-between mb-10 h-24">
      <div className="flex items-center gap-20 max-lg:justify-between max-lg:w-full max-lg:bg-green">
        <Link href={`/`}>
          <h2 className="font-semibold text-4xl text-white">Alfa<span className="text-accent underline">Tech</span></h2>
        </Link>
        <ul className="flex gap-16 items-center max-lg:hidden">
          {routes.map((route, index) => {
            if (index === 0) {
              return (
                <li key={index}>
                  <Link href={route.path}>
                    <div className="bg-accent !text-white px-4 rounded-xl py-1">
                      <h4 className="font-semibold text-lg text-white">
                        {route.name}
                      </h4>
                    </div>
                  </Link>
                </li>
              );
            } else {
              return (
                <li key={index}>
                  <Link href={route.path}>
                    <H4 text={route.name} />
                  </Link>
                </li>
              );
            }
          })}
        </ul>
      </div>
      <NavbarIcons />
    </nav>
  );
};

export default Navbar;
