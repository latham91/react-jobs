import CTA from "../components/CTA";
import Hero from "../components/Hero";
import LatestJobs from "../components/LatestJobs";

import PropTypes from "prop-types";

export default function HomePage({ latestJobs }) {
  return (
    <main>
      <Hero />
      <CTA />
      <LatestJobs latestJobs={latestJobs} />
    </main>
  );
}

HomePage.propTypes = {
  latestJobs: PropTypes.array.isRequired,
};
