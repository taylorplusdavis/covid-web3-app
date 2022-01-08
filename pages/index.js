import Head from "next/head";
import Banner from "../components/Banner";
import Content from "../components/Content";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col scrollbar-thin scrollbar-thumb-black relative h-screen">
      <Head>
        <title>Covid App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Banner />
      <Content />
    </div>
  );
}
