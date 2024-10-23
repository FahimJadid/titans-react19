import useCountry from "../../hooks/useCountry";
import { NavLink, useParams } from "react-router-dom";
import { Loader } from "./../UI/Loader";
import { useEffect } from "react";

const CountryDetails = () => {
  const params = useParams();
  const countryName = decodeURIComponent(params.id);

  const { country, loading, fetchCountryByName } = useCountry();

  useEffect(() => {
    fetchCountryByName(countryName);
  }, [countryName]);

  if (loading) {
    return <Loader />;
  }

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    timezones,
    currencies,
    languages,
  } = country;
  return (
    <section className="card country-details-card container">
      <div className="container-card bg-white-box">
        {country && (
          <div className="country-image grid grid-two-cols">
            {flags && flags.svg && (
              <img
                src={flags.svg}
                alt={flags.alt || name.common}
                className="flag"
              />
            )}
            <div className="country-content">
              {name && name.official && (
                <p className="card-title">{name.official}</p>
              )}

              <div className="infoContainer">
                {name && name.nativeName && (
                  <p>
                    <span className="card-description"> Native Names: </span>
                    {Object.values(name.nativeName)
                      .map((native) => native.common)
                      .join(", ")}
                  </p>
                )}
                <p>
                  <span className="card-description"> Population: </span>
                  {population && population.toLocaleString("en-US")}
                </p>
                <p>
                  <span className="card-description"> Region: </span>
                  {region}
                </p>
                <p>
                  <span className="card-description"> Sub Region: </span>
                  {subregion}
                </p>
                <p>
                  <span className="card-description"> Capital: </span>
                  {capital && capital.length > 0
                    ? capital[0].length > 10
                      ? capital[0].slice(0, 10) + "..."
                      : capital[0]
                    : "N/A"}
                </p>

                <p>
                  <span className="card-description">Timezones: </span>
                  {timezones && timezones.length > 0 ? timezones[0] : "N/A"}
                </p>
                <p>
                  <span className="card-description"> Currencies: </span>
                  {currencies
                    ? Object.keys(currencies)
                        .map((currency) => currencies[currency].name)
                        .join(", ")
                    : "N/A"}
                </p>
                <p>
                  <span className="card-description"> Languages: </span>
                  {languages
                    ? Object.keys(languages)
                        .map((lang) => languages[lang])
                        .join(", ")
                    : "N/A"}
                </p>
              </div>
            </div>
          </div>
        )}
        <div className="country-card-backBtn">
          <NavLink to="/country" className="backBtn">
            <button>Go Back</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default CountryDetails;
