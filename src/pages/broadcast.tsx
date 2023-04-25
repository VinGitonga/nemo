import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import { IconType } from "react-icons";
import ReactPlayer from "react-player/lazy";
import { GoPrimitiveDot } from "react-icons/go";
import { BsStar } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { FiUpload, FiFlag } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";
import { FaTelegramPlane, FaTwitter } from "react-icons/fa";
import { RiYoutubeFill } from "react-icons/ri";
import { IoLinkSharp } from "react-icons/io5";
import Head from "next/head";

interface NavBtnProps {
  Icon: IconType;
  text: string;
}

const Broadcast: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>NeMO | Broadcast</title>
      </Head>
      <div className="grid grid-cols-10 w-full max-h-[500px]">
        <div className="col-span-8">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width={"90%"}
            height={"500px"}
          />
        </div>
        <div className="col-span-2 bg-gray-200 rounded-lg shadow-md max-h-[500px]">
          <div className="px-5 w-full py-5 relative h-full ">
            <div className="max-h-[430px] overflow-y-auto">
              <p className="text-gray-900 font-semibold">Live Chat</p>
              {[...Array(15)].map((_, i) => (
                <ChatItem key={i} />
              ))}
            </div>

            <div className="absolute bottom-0">
              <input
                type="text"
                id="simple-search"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-purple-500 w-full focus:border-purple-500 block p-2.5 mb-2"
                placeholder="Write a message"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h1 className="text-xl font-semibold">
          Major League Hacking Opening Ceremony
        </h1>
        <div className="flex space-x-2 my-3">
          <div className="text-xs text-purple-600">The Cult of Presidency</div>
          <GoPrimitiveDot className="text-gray-400 w-3 h-3" />
          <div className="text-xs text-gray-400">42.4k Viewers</div>
          <GoPrimitiveDot className="text-gray-400 w-3 h-3" />
          <div className="text-xs text-gray-400">3:34:08</div>
        </div>
        <div className="flex space-x-2 my-3">
          <span className="bg-blue-100 text-gray-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            Hacking
          </span>
          <span className="bg-blue-100 text-gray-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
            Programming
          </span>
        </div>
      </div>
      <div className="w-[84%]">
        <div className="mt-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-center space-x-4">
              <img
                className="w-10 h-10 rounded-full"
                src="https://s3.r29static.com/bin/entry/946/x,80/1875019/image.jpg"
                alt=""
              />
              <div className="font-normal">
                <div>Scandal</div>
                <div className="text-xs text-purple-600">5.7k followers</div>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                type="button"
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
              >
                <BsStar className="w-5 h-5 mr-2 -ml-1" />
                Subscribe
              </button>
              <button
                type="button"
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
              >
                <AiFillHeart className="w-5 h-5 mr-2 -ml-1" />
                Following
              </button>
              <button
                type="button"
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2"
              >
                <FiUpload className="w-5 h-5 mr-2 -ml-1" />
                Share
              </button>
              <button
                type="button"
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm p-2.5 inline-flex items-center"
              >
                <HiOutlineBell className="w-7 h-7" />
              </button>
              <button
                type="button"
                className="text-gray-900 bg-gray-100 hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm p-2.5 inline-flex items-center"
              >
                <FiFlag className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-8 bg-gray-200 rounded-lg shadow-md px-5 py-6">
          <p className="text-gray-900 font-semibold">About Channel</p>
          <p className="text-gray-500 text-sm mt-2 w-[60%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptate, quibusdam, voluptatum, quia voluptas quod quos
          </p>

          <div className="space-y-2">
            <SocialItem Icon={FaTelegramPlane} text="Telegram" />
            <SocialItem Icon={FaTwitter} text="Twitter" />
            <SocialItem Icon={RiYoutubeFill} text="Youtube" />
            <SocialItem Icon={IoLinkSharp} text="pro.imaginegames.com" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          {[...Array(6)].map((_, i) => (
            <div className="max-w-sm" key={i}>
              <img
                src="https://assets1.ignimgs.com/2018/11/30/resident-evil-2-remake---button-fin-1543614996402.jpg"
                alt=""
                className="rounded-lg h-[280px]"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

const SocialItem = ({ Icon, text }: NavBtnProps) => (
  <div className="flex space-x-4 my-3">
    <Icon className="w-7 h-7" />
    <p>{text}</p>
  </div>
);

const ChatItem = () => {
  return (
    <div className="space-x-2 flex">
      <p className="text-teal-600">Joan:</p>
      <p> Lorem ipsum dolor sit</p>
    </div>
  );
};

const NavBtn = ({ Icon, text }: NavBtnProps) => {
  return (
    <button
      type="button"
      className="text-gray-400 hover:text-purple-700 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center"
    >
      <Icon className="w-7 h-7" />
      <span className="sr-only">{text}</span>
    </button>
  );
};

Broadcast.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Broadcast;
