import { Calendar, MapPinned, Building2, HandCoins, CalendarClock } from "lucide-react";

export default function SingleJobPage() {
  return (
    <main>
      <div className="bg-[#23272F] text-white h-[200px] flex flex-col gap-4 items-center justify-center">
        <h1 className="text-5xl font-extrabold">Junior React Developer</h1>
        <p className="text-lg">
          <span>Microsoft Corporation</span> - <span>Preston, UK</span>
        </p>
      </div>
      <section className="flex gap-5 px-5 py-10 mx-auto max-w-7xl justify-evenly">
        <div className="p-5 h-fit space-y-6 bg-white border-2 border-dashed rounded-md shadow-md w-[420px] border-slate-800/20 flex-1">
          <h3 className="text-2xl font-bold text-slate-600">
            Job Description - <span className="text-lg font-light">1st May 2024</span>
          </h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim beatae repellendus eaque deserunt
            asperiores! Magnam nulla nostrum, rerum ipsum voluptatum eius numquam, eaque explicabo nesciunt cum, in
            officiis unde.
          </div>
          <div>
            <h5 className="text-xl font-bold text-slate-600">Essential Skills</h5>
            <ul className="list-disc list-inside">
              <li>React</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold text-slate-600">Desired Skills</h5>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold text-slate-600">Experience</h5>
            <p>1-2 years</p>
          </div>
          <div>
            <h5 className="text-xl font-bold text-slate-600">Job Type</h5>
            <p>Full-time</p>
          </div>
        </div>
        <div className="p-5 space-y-6 bg-white border-2 border-dashed rounded-md shadow-md w-[420px] border-slate-800/20 flex-2">
          <h3 className="text-2xl font-bold text-slate-600">Overview</h3>
          <div className="flex items-start gap-3 mt-3 text-slate-600">
            <Calendar size={32} className="" />
            <div>
              <h5 className="text-lg font-bold">Date posted</h5>
              <p className="opacity-70">1st May 2024</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-3 text-slate-600">
            <Building2 size={32} className="" />
            <div>
              <h5 className="text-lg font-bold">Company Name</h5>
              <p className="opacity-70">Microsoft Corporation</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-3 text-slate-600">
            <MapPinned size={32} className="" />
            <div>
              <h5 className="text-lg font-bold">Location</h5>
              <p className="opacity-70">Preston, UK</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-3 text-slate-600">
            <HandCoins size={32} className="" />
            <div>
              <h5 className="text-lg font-bold">Salary Offered</h5>
              <p className="opacity-70">$25,000 - $33,000 / Yearly</p>
            </div>
          </div>
          <div className="flex items-start gap-3 mt-3 text-slate-600">
            <CalendarClock size={32} className="" />
            <div>
              <h5 className="text-lg font-bold">End Date</h5>
              <p className="opacity-70">30th May 2024</p>
            </div>
          </div>
          <div>
            <button className="w-full px-5 py-4 font-bold text-white rounded-md bg-slate-800">Apply Now</button>
          </div>
          <h5 className="text-xl font-bold text-slate-600">Map</h5>
          <div className="overflow-hidden border-2 rounded-md border-slate-600">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d37729.24713331111!2d-2.738350946066369!3d53.77029971673136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b0ccb0b7b3c4d%3A0xd68703fb79b28721!2sPreston!5e0!3m2!1sen!2suk!4v1714596340532!5m2!1sen!2suk"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-64"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
