export default function SideBar() {
  return (
    <div className="flex flex-col w-2/6 gap-5 p-5 bg-white rounded-md">
      <h3 className="text-lg">Filter your search</h3>

      <div className="relative">
        <input
          type="text"
          id="location"
          name="location"
          placeholder="Location"
          className="w-full p-2 border border-gray-300 rounded-md"
        />
      </div>
    </div>
  );
}
