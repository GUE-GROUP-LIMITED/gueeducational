import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://gue.edu.ng"),
  title: "GUE Educational Limited — TVET & ICT Training",
  description:
    "GUE Educational Limited (RC 9451933) supports technical and vocational education in Wannune, Tarka LGA, Benue State.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
