import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1042&q=80"
        title="Your Journey Your Story"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />

      <Destination />
    </>
  );
}

export default Home;
