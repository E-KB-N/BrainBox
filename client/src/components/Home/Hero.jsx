import hero1 from "../../assets/hero.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="py-20">
      <div className="max-w-[1444px] my-0 mx-auto py-20 md:px-10 px-7">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="mb-16 text-center lg:text-left">
            <h1 className="text-primary text-5xl font-bold mb-2">
              Transforming Education:
            </h1>
            <p className="text-primary text-4xl font-bold mb-2">
              Empowering Students For
            </p>
            <p className="text-primary text-xl font-semibold md:w-2/3 w-full mb-8 mx-auto lg:mx-0">
              Bright Futures.
            </p>
            <Link
              to="select-career"
              className="btn bg-primary text-white font-semibold px-6 py-3 mt-[3rem] rounded-2xl duration-500 md:static"
            >
                Explore Courses
            </Link>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="w-[350px] md:w-[400px] mt-[-3rem]">
              <img src={hero1} alt="hero-pic1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
