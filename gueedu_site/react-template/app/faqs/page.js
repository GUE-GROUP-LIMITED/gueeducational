import Link from "next/link";
import Layout from "@/layout/Layout";
import PageBanner from "@/layout/PageBanner";

export const metadata = {
  title: "FAQs",
  description:
    "Read common questions and answers about GUE Engineering services, project onboarding, modernization support, post-launch support, and training.",
  alternates: {
    canonical: "/faqs",
  },
  openGraph: {
    title: "FAQs | GUE Engineering Limited",
    description:
      "Straight answers about services, delivery process, support, and training from GUE Engineering.",
    url: "/faqs",
    images: ["/brand/og-cover.svg"],
  },
};

const questions = [
  {
    title: "What services does GUE Engineering provide?",
    answer:
      "We provide software development, AI-powered automation, SaaS and open-source solution delivery, DevOps and cloud engineering, technical consulting, and hands-on IT training.",
  },
  {
    title: "How do projects start?",
    answer:
      "Most engagements start with a discovery conversation where we clarify the problem, existing systems, target outcomes, and delivery constraints before proposing an implementation path.",
  },
  {
    title: "Do you work on existing systems?",
    answer:
      "Yes. We support modernization, architecture review, delivery recovery, automation improvements, and cloud migration for systems that already exist.",
  },
  {
    title: "Do you offer support after launch?",
    answer:
      "Yes. Post-launch support can include monitoring, reliability improvements, release support, documentation updates, and ongoing technical guidance.",
  },
  {
    title: "Can you train internal teams?",
    answer:
      "Yes. We provide practical training for developers and technical teams across software engineering, tooling, DevOps practices, and cloud workflows.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions.map((item) => ({
    "@type": "Question",
    name: item.title,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const FaqPage = () => {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageBanner titleHtml={`Freque<span>ntly Asked</span>`} titleText="FAQs" />

      <section className="gue-page-section">
        <div className="gue-page-section__header">
          <p className="gue-page-section__kicker">Common Questions</p>
          <h2 className="gue-page-section__title">Straight answers about how we work</h2>
          <p className="gue-page-section__copy">
            These are the questions that come up most often before a discovery call or
            proposal review.
          </p>
        </div>

        <div className="gue-page-grid">
          {questions.map((item) => (
            <article key={item.title} className="gue-page-card">
              <h3>{item.title}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="gue-page-section gue-page-section--alt">
        <div className="gue-page-cta">
          <p className="gue-page-section__kicker">Need More Detail</p>
          <h2>If your question is specific to a project, contact us directly</h2>
          <p>
            The fastest path is to send your use case, current stack, and delivery goal.
            We can respond with a more concrete answer than a generic FAQ ever could.
          </p>
          <div className="gue-page-actions" style={{ justifyContent: "center" }}>
            <Link href="/contact" className="gue-page-button">
              Contact GUE Engineering
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default FaqPage;
