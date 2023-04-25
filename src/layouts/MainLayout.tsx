import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { ReactNode } from "react";

type MainLayoutProps = {
  children: ReactNode;
  addPadding?: boolean;
};

export default function MainLayout({
  children,
  addPadding = true,
}: MainLayoutProps) {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <main className="grid grid-cols-10 pl-4 pr-6 py-8 border-r mt-16 gap-4">
        <div className="hidden md:block md:col-span-2">
          <Sidebar />
        </div>
        <div
          className={`col-span-10 md:col-span-8 bg-white rounded-lg shadow-sm ${
            addPadding && "px-5 py-5"
          }`}
        >
          {children}
        </div>
      </main>
    </div>
  );
}
