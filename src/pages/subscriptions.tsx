import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import Head from "next/head";

const Subscriptions: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>NeMO | My Subscriptions</title>
      </Head>
      <h1 className="text-3xl font-semibold">Subscriptions</h1>
      <div className="my-4 space-x-3">
        <button
          type="button"
          className="text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 "
        >
          All
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Live
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Finished Lives
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Channels
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mt-8">
        {[...Array(9)].map((_, i) => (
          <ChannelItem key={i} />
        ))}
      </div>
    </div>
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

Subscriptions.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Subscriptions;
