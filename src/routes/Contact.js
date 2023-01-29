import ContactForm from "../components/ContactForm";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../images/img10.jpg";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
    </>
  );
}

export default Contact;
