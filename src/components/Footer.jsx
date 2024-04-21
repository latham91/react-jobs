import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import BrandLogo from "./BrandLogo";

export default function Footer() {
  return (
    <footer className="bg-[#23272F] text-slate-200">
      <div className="grid justify-between grid-cols-3 p-5 py-12 mx-auto max-w-7xl">
        <div className="flex flex-col gap-5">
          <h6 className="text-2xl font-extrabold">React Jobs</h6>
          <ul className="space-y-1 text-lg">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:underline">
                Jobs
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <h6 className="text-2xl font-extrabold">Policies</h6>
          <ul className="space-y-1 text-lg">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>FAQ</li>
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <Link to="mailto:contact@react-jobs.com" className="font-bold hover:underline">
                contact@react-jobs.com
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5">
          <BrandLogo />
          <p>Find your dream job or the perfect candidate for your company today.</p>
          <Link to="https://www.react-jobs.com" className="font-bold tracking-wider hover:underline">
            www.react-jobs.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
