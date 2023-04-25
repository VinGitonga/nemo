import MainLayout from "@/layouts/MainLayout";
import { NextPageWithLayout } from "@/types/Layout";

const Explore: NextPageWithLayout = () => {
  return (
    <div>
      <h1 className="text-3xl font-semibold">Explore</h1>
      <div className="my-4 space-x-3">
        <button
          type="button"
          className="text-gray-900 bg-gray-100 border border-gray-300 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2 mr-2 mb-2 "
        >
          Categories
        </button>
        <button
          type="button"
          className="text-gray-900 bg-white focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
        >
          Channels
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
        {[...Array(8)].map((_, i) => (
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
    </div>
  );
};

const ChannelItem = () => {
  return (
    <div className="max-w-sm">
      <img
        src="https://assets1.ignimgs.com/2018/11/30/resident-evil-2-remake---button-fin-1543614996402.jpg"
        alt=""
        className="rounded-lg h-[280px]"
      />
      <div className="mt-2">
        <div className="font-semibold text-lg">Scandal</div>
        <div className="text-xs text-gray-400">567k viewers</div>
        <div className="mt-3 space-x-2">
          <span className="bg-blue-100 text-gray-600 text-xs mr-2 px-2.5 py-0.5 rounded font-normal">
            Gaming
          </span>
          <span className="bg-blue-100 text-gray-600 text-xs mr-2 px-2.5 py-0.5 rounded font-normal">
            NFTs
          </span>
        </div>
      </div>
    </div>
  );
};
Explore.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default Explore;
