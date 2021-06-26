import Head from "next/head";
import Capabilities from "../components/Capabilities";
import Intro from "../components/Intro";
import NewProjects from "../components/NewProjects";
import Project from "../components/Project";

export default function Home() {
  return (
    <div>
      <Head>
        <title>NorDev</title>
        <meta
          name="NorDev Agency"
          content=" Nor Agency is a UI/UX design and branding agency in Benin, Nigeria.
          We're a digital product and UX agency, Strategy, design, and
          development across all platforms."
        />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Intro />
      <Project />
      <NewProjects />
      <Capabilities />
    </div>
  );
}

// Bg
// background: #E5E5E5;

