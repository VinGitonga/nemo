export default function Sidebar() {
  return (
    <div className="bg-white rounded-lg px-5 w-64 py-5 shadow-md fixed">
      <p className="mb-6 text-md font-normal text-gray-500">
        Your Subscriptions
      </p>
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <SideItem key={i} />
        ))}
      </div>

      <p className="mt-8 mb-6 text-lg font-normal text-gray-500">
        We recommend
      </p>
      <div className="space-y-2">
        {[...Array(5)].map((_, i) => (
          <SideItem key={i} />
        ))}
      </div>
    </div>
  );
}

const SideItem = () => {
  return (
    <div className="flex items-center space-x-4">
      <img
        className="w-10 h-10 rounded-full"
        src="https://s3.r29static.com/bin/entry/946/x,80/1875019/image.jpg"
        alt=""
      />
      <div className="font-normal">
        <div>Scandal</div>
        <div className="text-xs text-purple-600">The Cult of Presidency</div>
      </div>
    </div>
  );
};
