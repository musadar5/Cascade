import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


export default function SellerLayout({ children }) {

  return (
    <html lang="en">
      <body>
        <div className="bg-black">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>




  );
}
