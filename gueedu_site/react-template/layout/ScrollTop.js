"use client";

const ScrollTop = () => {
  return (
    <button
      type="button"
      className="gue-scroll-top"
      aria-label="Scroll to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ↑
    </button>
  );
};
export default ScrollTop;
