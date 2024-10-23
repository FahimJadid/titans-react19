import useCountry from "../hooks/useCountry";
import { Loader } from './../components/UI/Loader';

const About = () => {
  const { countries, loading } = useCountry();

  if (loading) {
    return <Loader/>
  }
  return (
    <section className="section-about container">
      <h2 className="container-title">
        Here are the interesting Facts.
        <br />
        We're proud of
      </h2>

      <div className="gradient-cards">
        {countries.map((country) => {
          const { cca3, name, capital, population, region, independent } = country;
          return (
            <div key={cca3} className="card">
              <div className="container-card bg-blue-box">
                <p className="card-title">
                  {name.common.length > 10
                    ? name.common.slice(0, 10) + "..."
                    : name.common}
                </p>
                <p>
                  <span className="card-description">Capital: {capital ? capital[0] : "N/A"}</span>
                </p>
                <p>
                  <span className="card-description">
                    Population: {population.toLocaleString()}
                  </span>
                </p>
                <p>
                  <span className="card-description">Region: {region}</span>
                </p>
                <p>
                  <span className="card-description">Independence: {independent ? "Ind" : "Dep"}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default About;