import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";
import ContactForm from "@/components/contact/ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Contact GUE Engineering Limited for software development, AI automation, DevOps and cloud engineering, technical consulting, or training engagements.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact | GUE Engineering Limited",
    description:
      "Share your project goals and constraints to start a software, automation, or cloud engineering engagement.",
    url: "/contact",
    images: ["/brand/og-cover.svg"],
  },
};

const contactDetails = [
  {
    label: "Email",
    value: "hello@gueengineering.com",
    href: "mailto:hello@gueengineering.com",
  },
  {
    label: "Projects",
    value: "projects@gueengineering.com",
    href: "mailto:projects@gueengineering.com",
  },
  {
    label: "Phone",
    value: "+234 904 115 7068",
    href: "tel:+2349041157068",
  },
  {
    label: "Location",
    value: "Abuja, Federal Capital Territory, Nigeria",
  },
];

const ContactPage = () => {
  return (
    <Layout>
      <PageBanner titleHtml={`Conta<span>ct</span>`} titleText="Contact" />

      <section className="gue-page-section">
        <div className="gue-page-two-col">
          <div>
            <div className="gue-page-section__header">
              <p className="gue-page-section__kicker">Get Started</p>
              <h2 className="gue-page-section__title">Tell us what you need to build or fix</h2>
              <p className="gue-page-section__copy">
                Share the business problem, delivery target, timeline, and anything already
                in place. We can respond with a realistic starting point.
              </p>
            </div>

            <ContactForm />
          </div>

          <div className="gue-page-detail-list">
            {contactDetails.map((item) => (
              <article key={item.label} className="gue-page-detail">
                <div className="gue-page-detail__icon">•</div>
                <div>
                  <p className="gue-page-detail__label">{item.label}</p>
                  <p className="gue-page-detail__value">
                    {item.href ? <a href={item.href}>{item.value}</a> : item.value}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
