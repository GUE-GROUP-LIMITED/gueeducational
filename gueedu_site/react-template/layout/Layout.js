import { Fragment } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ScrollTop from "./ScrollTop";

const Layout = ({ children, header, className, footer, noHeader }) => {
  return (
    <Fragment>
      <div className="gue-shell">
        {!noHeader && <Header header={header} />}
        {children}
        <Footer footer={footer} />
        <ScrollTop />
      </div>
    </Fragment>
  );
};
export default Layout;
