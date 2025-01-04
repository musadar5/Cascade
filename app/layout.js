import SessionWrapper from "./components/SessionWrapper";
import "@/app/globals.css";
import Script from "next/script";




export const metadata = {
  title: "Cascade",
  description: "Customize your own E-commerce store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://cdn.lordicon.com/lordicon.js"></Script>

      <body >
        <SessionWrapper>
          {children}
        </SessionWrapper>





      </body>

    </html>
  );
}
