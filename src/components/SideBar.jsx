import PropTypes from "prop-types";
import { useState } from "react";
import { Search, MapPin } from "lucide-react";

export default function SideBar({ jobs, filter }) {
  const [searchFilter, setSearchFilter] = useState({
    search: "",
    location: "all",
    experience: [],
  });

  const handleExperience = (value) => {
    if (searchFilter.experience.includes(value)) {
      setSearchFilter({ ...searchFilter, experience: searchFilter.experience.filter((exp) => exp !== value) });
    } else {
      setSearchFilter({ ...searchFilter, experience: [...searchFilter.experience, value] });
    }
  };

  return (
    <div className="flex flex-col gap-5 p-5 bg-slate-50 rounded-md min-w-[300px] max-h-[420px] shadow-lg">
      <h3 className="text-lg">Filter your search</h3>

      <div className="relative">
        <input
          onChange={(e) => setSearchFilter({ ...searchFilter, search: e.target.value })}
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
          onChange={(e) => setSearchFilter({ ...searchFilter, location: e.target.value })}
          name="location"
          className="w-full p-2 pl-10 font-light text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-transparent"
        >
          <option value="all">All locations</option>
          {jobs.map((job) => (
            <option key={job.id} value={job.location}>
              {job.location}
            </option>
          ))}
        </select>
        <MapPin className="absolute flex items-center inset-y-9 left-2 text-slate-500" />
      </div>

      <div>
        <h4 className="text-lg font-bold text-slate-500">Experience</h4>
        <div className="flex items-center gap-2">
          <input
            onChange={() => handleExperience(0)}
            type="checkbox"
            id="internship"
            name="internship"
            className="w-4 h-4 text-slate-500"
          />
          <label htmlFor="internship" className="text-lg font-light text-slate-500">
            0-1 years
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            onChange={() => handleExperience(1)}
            type="checkbox"
            id="junior"
            name="junior"
            className="w-4 h-4 text-slate-500"
          />
          <label htmlFor="junior" className="text-lg font-light text-slate-500">
            1-2 years
          </label>
        </div>
        <div className="flex items-center gap-2">
          <input
            onChange={() => handleExperience(2)}
            type="checkbox"
            id="mid"
            name="mid"
            className="w-4 h-4 text-slate-500"
          />
          <label htmlFor="mid" className="text-lg font-light text-slate-500">
            2+ years
          </label>
        </div>
      </div>
      <div>
        <button onClick={() => filter(searchFilter)} className="btn text-white bg-[#0A7EA4] w-full">
          Search
        </button>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  jobs: PropTypes.array.isRequired,
  filter: PropTypes.func.isRequired,
};
