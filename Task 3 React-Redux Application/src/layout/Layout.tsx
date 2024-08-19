import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header >
        <Header />
      </header>
      <main className="flex-grow p-4">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default Layout