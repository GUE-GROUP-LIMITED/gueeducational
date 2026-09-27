import GueEducationalLanding from "@/components/home/GueEducationalLanding";

export const metadata = {
  title: "GUE Educational Limited — TVET & ICT Training | Wannune, Benue State",
  description:
    "GUE Educational Limited (RC 9451933) supports technical and vocational education from our centre in Wannune, Tarka LGA, Benue State. A subsidiary of Gue Group Limited.",
  keywords: [
    "TVET training Benue State",
    "ICT training Tarka",
    "NBTE accreditation",
    "vocational training Wannune",
    "GUE Educational Limited",
  ],
  openGraph: {
    title: "GUE Educational Limited — TVET & ICT Training Wannune",
    description:
      "Technical and vocational education from GUE Educational Limited in Wannune, Tarka LGA, Benue State.",
    url: "https://gue.edu.ng",
    siteName: "GUE Educational Limited",
    locale: "en_NG",
    type: "website",
  },
};

export default function Home() {
  return <GueEducationalLanding />;
}
