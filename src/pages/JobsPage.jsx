import JobCard from "../components/JobCard";
import SideBar from "../components/SideBar";

export default function JobsPage() {
  return (
    <main className="bg-slate-200">
      <div className="bg-[#23272F] text-white h-[200px] flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl font-extrabold">Find your dream job</h1>
        <p className="text-lg">Your dream career is waiting for you.</p>
      </div>
      <section className="flex gap-5 px-5 py-10 mx-auto max-w-7xl">
        <SideBar />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </section>
    </main>
  );
}
