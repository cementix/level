import Lottie from "lottie-react";
import { Gauge } from "lucide-react";
import heroParticle from "../../assets/animations/hero_particle.json";

const Home = () => {
  return (
    <div className="flex justify-center items-center mx-24 h-[70%]">
      <div className="flex flex-col gap-8">
        <h1 className="font-aeonik-regular text-[66px]">
          Forge your path with AI-driven stats, ranks, and mastery.
        </h1>
        <button className="bg-[#434359] hover:bg-[#050a44] hover:drop-shadow-2xl hover:border rounded-full w-72 h-16 font-aeonik text-4xl text-white transition">
          <span className="flex justify-center items-center gap-3">
            START <Gauge size={34} />
          </span>
        </button>
      </div>
      <Lottie animationData={heroParticle} />
    </div>
  );
};

export default Home;
