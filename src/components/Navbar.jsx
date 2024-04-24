import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="bg-[#364151] p-5 text-white border-b border-white/20">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div>
          <Link to="/" className="text-3xl font-extrabold flex gap-2 items-center">
            <svg
              width="100%"
              height="100%"
              viewBox="-10.5 -9.45 21 18.9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-sm me-0 w-10 h-10 text-link dark:text-link-dark flex origin-center transition-all ease-in-out"
            >
              <circle cx="0" cy="0" r="2" fill="currentColor"></circle>
              <g stroke="currentColor" strokeWidth="1" fill="none">
                <ellipse rx="10" ry="4.5"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
                <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
              </g>
            </svg>
            React Jobs
          </Link>
        </div>
        <div>
          <ul className="flex items-center gap-2">
            <li>
              <Link to="/" className={`${pathname === "/" ? "bg-[#0A7EA4]" : "bg-transparent"} py-3 px-5 rounded-md`}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/jobs"
                className={`${pathname === "/jobs" ? "bg-[#0A7EA4]" : "bg-transparent"} py-3 px-5 rounded-md`}
              >
                Jobs
              </Link>
            </li>
            <li>
              <Link
                to="/add"
                className={`${pathname === "/add" ? "bg-[#0A7EA4]" : "bg-transparent"} py-3 px-5 rounded-md`}
              >
                Add Job
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
