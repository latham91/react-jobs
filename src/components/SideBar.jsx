import { Search, MapPin } from "lucide-react";

export default function SideBar() {
  return (
    <div className="flex flex-col gap-5 p-5 bg-slate-50 rounded-md min-w-[300px] max-h-[420px] shadow-lg">
      <h3 className="text-lg">Filter your search</h3>

      <div className="relative">
        <input
          type="search"
          id="search"
          name="search"
          placeholder="Title, keywords, etc..."
          className="w-full p-2 pl-10 font-light border border-gray-300 rounded-md text-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
        />
        <Search className="absolute flex items-center inset-y-2 left-2 text-slate-500" />
      </div>

      <div className="relative">
        <h4 className="text-lg font-bold text-slate-500">Location</h4>
        <select
          name="location"
          className="w-full p-2 pl-10 font-light text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
        >
          <option value="all">Choose a location</option>
          <option value="remote">Remote</option>
          <option value="hybrid">Hybrid</option>
          <option value="liverpool">Liverpool</option>
          <option value="london">London</option>
          <option value="manchester">Manchester</option>
        </select>
        <MapPin className="absolute flex items-center inset-y-9 left-2 text-slate-500" />
      </div>

      <div>
        <h4 className="text-lg font-bold text-slate-500">Experience</h4>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="internship" name="internship" className="w-4 h-4 text-slate-500" />
          <label htmlFor="internship" className="text-lg font-light text-slate-500">
            0-1 years
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="internship" name="internship" className="w-4 h-4 text-slate-500" />
          <label htmlFor="internship" className="text-lg font-light text-slate-500">
            1-2 years
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input type="checkbox" id="internship" name="internship" className="w-4 h-4 text-slate-500" />
          <label htmlFor="internship" className="text-lg font-light text-slate-500">
            2+ years
          </label>
        </div>
      </div>
      <div>
        <button className="btn text-white bg-[#0A7EA4] w-full">Search</button>
      </div>
    </div>
  );
}
