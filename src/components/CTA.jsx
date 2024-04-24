import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="bg-[#1B1D24] text-white py-10">
      <div className="flex max-md:flex-col w-full justify-center p-5 gap-10  max-w-7xl mx-auto">
        <div className="flex flex-col gap-5 items-start bg-[#364151] p-5 w-full rounded-md shadow-lg border-dashed border-2 border-white/10">
          <h3 className="text-3xl font-bold">For Developers</h3>
          <p>Browse React jobs and start your career today.</p>
          <Link to="/jobs" className="bg-[#0A7EA4] py-3 px-5 rounded-md hover:bg-[#0a7da4cc]">
            Browse
          </Link>
        </div>

        <div className="flex flex-col gap-5 items-start bg-[#364151] p-5 w-full rounded-md shadow-lg border-dashed border-2 border-white/10">
          <h3 className="text-3xl font-bold">For Employers</h3>
          <p>Advertise available roles and find your perfect developer.</p>
          <Link to="/add" className="bg-[#0A7EA4] py-3 px-5 rounded-md hover:bg-[#0a7da4cc]">
            Add Job
          </Link>
        </div>
      </div>
    </section>
  );
}
