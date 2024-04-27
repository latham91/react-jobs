import { Search } from "lucide-react";

export default function SideBar() {
  return (
    <div className="flex flex-col w-2/6 gap-5 p-5 bg-white rounded-md">
      <h3 className="text-lg">Filter your search</h3>

      <div className="relative">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Title, keywords, etc..."
          className="w-full p-2 pl-10 font-light border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
        />
        <Search className="absolute flex items-center inset-y-2 left-2 text-slate-500" />
      </div>
    </div>
  );
}
