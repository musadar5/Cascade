import SessionWrapper from "./components/SessionWrapper";
import "@/app/globals.css";




export const metadata = {
  title: "Cascade",
  description: "Customize your own E-commerce store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        <SessionWrapper>
          {children}
        </SessionWrapper>





      </body>

    </html>
  );
}
