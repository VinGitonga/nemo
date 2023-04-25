import { IconType } from "react-icons";
import { HiOutlineBell, HiOutlineHome } from "react-icons/hi";
import {
  AiOutlineCompass,
  AiOutlineHeart,
  AiOutlinePlus,
} from "react-icons/ai";

interface NavBtnProps {
  Icon: IconType;
  text: string;
  href?: string;
}

export default function Navbar() {
  return (
    <nav className="bg-white fixed px-3 sm:px-4 py-2.5 z-20 top-0 left-0 w-full">
      <div className="grid grid-cols-10">
        <a href="/" className="flex items-center col-span-2">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-6 mr-3 sm:h-9"
            alt="Flowbite Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap">
            NeMO
          </span>
        </a>
        <div className="flex justify-between col-span-8">
          <div className="flex space-x-10 items-center">
            <NavBtn Icon={HiOutlineHome} text="Home" href="/" />
            <NavBtn Icon={AiOutlineCompass} text="Explore" href="/explore" />
            <NavBtn
              Icon={AiOutlineHeart}
              text="Popular"
              href="/subscriptions"
            />
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-[400px] pl-10 p-2.5"
                placeholder="What do you want to watch?"
                required
              />
            </div>
          </div>
          <div className="flex space-x-5 items-center">
            <NavBtn Icon={AiOutlinePlus} text="Add" href="/broadcast" />
            <NavBtn Icon={HiOutlineBell} text="Notify" />
            <img
              className="w-10 h-10 rounded-full"
              src="https://s3.r29static.com/bin/entry/946/x,80/1875019/image.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

const NavBtn = ({ Icon, text, href = "#" }: NavBtnProps) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
    >
      <Icon className="w-7 h-7" />
      <span className="sr-only">{text}</span>
    </a>
  );
};
