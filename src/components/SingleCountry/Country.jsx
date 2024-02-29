import "./Country.css";
const Country = ({ output }) => {
  console.log(output);
  const { capital, name, flags } = output;
  return (
    <div className="clg">
      <h2>Name:{name.common}</h2>
      <h3>Capital:{capital}</h3>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
