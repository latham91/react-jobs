import { Link } from "react-router-dom";

export default function BrandLogo() {
  return (
    <div>
      <Link to="/" className="flex items-center gap-2 text-3xl font-extrabold">
        <svg
          width="100%"
          height="100%"
          viewBox="-10.5 -9.45 21 18.9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="flex w-10 h-10 text-sm transition-all ease-in-out origin-center me-0 text-link dark:text-link-dark"
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
  );
}
