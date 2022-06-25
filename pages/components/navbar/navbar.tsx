import Link from "next/link";
import { routeTable } from "../../../src/route";
import NavbarItem from "./navbar_item";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center">
              <div className="flex space-x-4">
                <Link href="/" passHref>
                  <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                    Home
                  </button>
                </Link>
                {routeTable.map((item, index) => {
                  return <NavbarItem key={index} item={item}></NavbarItem>;
                })}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
