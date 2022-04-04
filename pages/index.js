import Hero from "@components/hero";
import Features from "@components/feature";
import Cta from "@components/cta";
import Stats from "@components/stats";
import NewsLatter from "@components/newslatter";
import Formulaire from "@components/formulaire";
import Grid from "@components/grid";

const Homepage = () => {
  return (
    <>
      <Hero />
      <Formulaire />
      <Grid />
      <Features />
      <Stats />
      <Cta />
      <NewsLatter />
    </>
  );
};

export default Homepage;
