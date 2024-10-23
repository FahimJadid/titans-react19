import { FaLongArrowAltRight } from "react-icons/fa";

const Hero = () => {
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero-content">
          <h1 className="heading-xl">
            Explore the World with interesting Facts!
          </h1>
          <p className="paragraph">
            Discover the most interesting facts about the world and learn
            something new every day.
          </p>

          <button className="btn btn-darken btn-inline bg-white-box">
            Start Exploring <FaLongArrowAltRight />
          </button>
        </div>
        <div className="hero-image">
          <img
            className="banner-image"
            src="/images/hero.png"
            alt="world image"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
