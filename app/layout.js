import "./globals.css";

export const metadata = {
  title: "نيوروميديكا | مؤتمرات وتدريب ومنح طبية",
  description:
    "نيوروميديكا شركة متخصصة في تنظيم المؤتمرات الطبية والتدريب، وتقدم منحًا في التحاليل الطبية والإسعافات الأولية.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="facebook-domain-verification" content="jubzbhj8fqqf10px8ipxfcvs3dayem" />
      </head>
      <body>{children}</body>
    </html>
  );
}
