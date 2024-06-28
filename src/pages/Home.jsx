import { useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import ResortCard from "../components/ResortCard";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const resorts = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto mt-8">
      <Helmet>
        <title>Your Gateway to Relaxation and Adventure</title>
      </Helmet>
      <Navbar></Navbar>
      <div className="mt-12 lg:mt-48 p-4 lg:p-0">
        <Slider></Slider>
      </div>

      <div className="mt-6 md:mt-28 ">
        <h1 className=" mb-12 text-center font-bold text-2xl text-[#00A36C] animate__animated  animate__bounce animate__delay-2s">
          Estate
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4 md:p-0">
          {resorts?.map((resort) => (
            <ResortCard key={resort.id} resort={resort}></ResortCard>
          ))}
        </div>
      </div>

      <div className="mt-24">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Home;
