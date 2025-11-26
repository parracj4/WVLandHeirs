import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import LogoSection from "@/components/LogoSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LogoSection />
      <Header />
      <main className="relative z-10">
        <Hero />
        <HowItWorks />
        <Services />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
