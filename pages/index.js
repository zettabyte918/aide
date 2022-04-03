import Hero from "@components/hero";
import Features from "@components/feature";
import Cta from "@components/cta";
import Stats from "@components/stats";
import NewsLatter from "@components/newslatter";
import Formulaire from "@components/formulaire";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Formulaire />
      <Features />
      <Stats />
      <Cta />
      <NewsLatter />
    </>
  );
};

export default Homepage;
