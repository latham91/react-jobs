import SideBar from "../components/SideBar";

export default function JobsPage() {
  return (
    <main className="bg-slate-200">
      <div className="bg-[#23272F] text-white h-[200px] flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl font-extrabold">Find your dream job</h1>
        <p className="text-lg">Your dream career is waiting for you.</p>
      </div>
      <section className="p-5 mx-auto max-w-7xl">
        <SideBar />
      </section>
    </main>
  );
}