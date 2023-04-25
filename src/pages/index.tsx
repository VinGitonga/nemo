import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";
import Head from "next/head";

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>NeMO | Home</title>
      </Head>
      <h1 className="text-3xl font-semibold">Hi Olivia!</h1>
      <p className="my-7 text-xl">Active channels you might like.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
        {[...Array(9)].map((_, i) => (
          <ChannelItem key={i} />
        ))}
      </div>
      <div className="flex justify-center items-center my-8">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          Show More
        </button>
      </div>
      <div className="mt-8">
        <p className="my-7 text-xl">Continue watching?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {[...Array(9)].map((_, i) => (
            <ChannelItem key={i} />
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center my-8">
        <button
          type="button"
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          Show More
        </button>
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
Home.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Home;
