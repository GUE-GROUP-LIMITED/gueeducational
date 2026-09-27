import Link from "next/link";
const PageBanner = ({ titleHtml, titleText }) => {
  return (
    <section className="gue-page-hero">
      <div className="gue-page-hero__glow" />
      <div className="gue-page-hero__grid" />
      <div className="gue-page-hero__inner">
        <p className="gue-page-hero__kicker">GUE Engineering</p>
        <div className="gue-page-hero__content">
          <h1
            className="gue-page-hero__title"
            dangerouslySetInnerHTML={{ __html: titleHtml }}
          ></h1>
          <nav aria-label="breadcrumb">
            <ol className="gue-page-hero__breadcrumb">
              <li>
                <Link href="/">
                  Home
                </Link>
              </li>
              <li>{titleText}</li>
            </ol>
          </nav>
      </div>
      </div>
    </section>
  );
};
export default PageBanner;
