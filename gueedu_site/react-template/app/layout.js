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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&family=Shadows+Into+Light&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
