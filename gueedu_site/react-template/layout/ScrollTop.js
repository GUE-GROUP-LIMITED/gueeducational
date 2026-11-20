"use client";

import { FiChevronUp } from "react-icons/fi";

const ScrollTop = () => {
  return (
    <button
      type="button"
      className="gue-scroll-top"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FiChevronUp size={20} />
    </button>
  );
};
export default ScrollTop;
