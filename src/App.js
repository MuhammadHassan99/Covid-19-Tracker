import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Charts/Chart";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./API";
import React from "react";
import coronaImage from "./images/image.png";
import { useState } from "react";
import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    const fetchingData = async () => {
      const fetchedData = await fetchData();
      setData(fetchedData);
    };
    fetchingData();
  }, []);
  const handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    setData(fetchedData);
    setCountry(country);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={coronaImage} alt='COVID-19' />
      <Cards data={data} />
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Chart data={data} country={country} />
    </div>
  );
};

// class App extends React.Component {
//   state = {
//     data: {},
//     country: "",
//   };
//   async componentDidMount() {
//     const fetchedData = await fetchData();
//     this.setState({ data: fetchedData });
//   }

//   handleCountryChange = async (country) => {
//     const fetchedData = await fetchData(country);
//     this.setState({ data: fetchedData, country: country });
//   };

//   render() {
//     const { data, country } = this.state;
//     return (
//       <div className={styles.container}>
//         <img className={styles.image} src={coronaImage} alt='COVID-19' />
//         <Cards data={data} />
//         <CountryPicker handleCountryChange={this.handleCountryChange} />
//         <Chart data={data} country={country} />
//       </div>
//     );
//   }
// }

export default App;
