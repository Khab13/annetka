import { Header } from "./components/header/header";
import { ServiceMenu } from "./components/service-menu/service-menu";
import { Masters } from "./components/masters/masters";
import { Feedbacks } from "./components/feedbacks/feedbacks";
import { OurWorks } from "./components/our-works/our-works";
import { Product } from "./components/product/product";
import { Contacts } from "./components/contacts/contacts";
import { Footer } from "./widgets/footer/footer";
import { ToastContainer } from "react-toastify";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Layout() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      disable: () => window.innerWidth < 1400,
    });

    const handleResize = () => AOS.refresh();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <main>
        <ServiceMenu />
        <Masters />
        <Feedbacks />
        <OurWorks />
        <Product />
        <Contacts />
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default Layout;
