import Head from "next/head";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col scrollbar-thin scrollbar-thumb-black relative h-screen">
      <Head>
        <title>Covax+</title>
        <link rel="icon" href="/favicon.ico" />
        <script src="//d3js.org/d3.v3.min.js"></script>
      </Head>
      <Navbar />
      <Banner />
      <Content />
    </div>
  );
}
