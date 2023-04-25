import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import Head from "next/head";
import { AiFillHeart } from "react-icons/ai";
import { BsStar } from "react-icons/bs";
import { FiUpload, FiFlag } from "react-icons/fi";
import { HiOutlineBell } from "react-icons/hi";

const Channel: NextPageWithLayout = () => {
  return (
    <>
    <Head>
      <title>NeMO | Channel</title>
    </Head>
      <img
        src="https://m.media-amazon.com/images/I/71vgPG6gLiL.jpg"
        alt=""
        className="rounded-t-xl h-[450px] w-full"
      />
      <div className="px-5 py-5">
        <div className="mt-4">
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
        <div className="my-4 space-x-3">
          <button
            type="button"
            className="text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 "
          >
            Home
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            About
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Upcoming Lives
          </button>
          <button
            type="button"
            className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
          >
            Merchs
          </button>
        </div>
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {[...Array(9)].map((_, i) => (
            <ChannelItem key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

const ChannelItem = () => {
  return (
    <div className="max-w-md">
      <img
        src="https://www.whats-on-netflix.com/wp-content/uploads/2018/03/scandal-season-7-netflix-release.jpg"
        alt=""
        className="rounded-lg"
      />
      <div className="mt-2">
        <div className="flex items-center">
          <img
            className="w-10 h-10 rounded-full"
            src="https://s3.r29static.com/bin/entry/946/x,80/1875019/image.jpg"
            alt=""
          />
          <div className="ml-2">
            <div className="font-semibold">Scandal</div>
            <div className="text-xs text-purple-600">
              The Cult of Presidency
            </div>
          </div>
        </div>
        <div className="ml-2">
          <div className="mt-3 space-x-2">
            <span className="bg-blue-100 text-gray-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              Gaming
            </span>
            <span className="bg-blue-100 text-gray-600 text-sm font-medium mr-2 px-2.5 py-0.5 rounded">
              NFTs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

Channel.getLayout = (page) => (
  <MainLayout addPadding={false}>{page}</MainLayout>
);

export default Channel;
