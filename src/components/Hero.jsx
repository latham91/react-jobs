import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center w-full p-5 gap-3 text-white bg-[#23272F] h-[400px] justify-center">
      <h1 className="text-7xl font-extrabold">React Jobs</h1>
      <p className="text-2xl">Find the perfect react job for you.</p>
      <Link to="/jobs" className="px-5 py-2 text-lg font-semibold bg-[#0A7EA4] hover:bg-[#0a7da4cc] rounded-md mt-5">
        Browse Jobs
      </Link>
    </section>
  );
}
