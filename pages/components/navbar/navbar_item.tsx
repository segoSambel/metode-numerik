import { Menu, Transition } from "@headlessui/react";
import { FC, Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import Link from "next/link";
import { CalculationMethod } from "../../../src/route";

interface MethodProps {
  item: CalculationMethod;
}

const NavbarItem: FC<MethodProps> = ({ item }) => {
  const router = useRouter();
  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
            {item.name}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1">
              {item.child.map((i, index: number) => {
                return (
                  <Menu.Item key={index}>
                    <Link href={i.href} passHref>
                      <button className="text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-sm hover:bg-gray-100">
                        {i.childName}
                      </button>
                    </Link>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
};

export default NavbarItem;
