import React from "react";
import { Cards, Chart, CountryPicker } from "./component";
import styles from "./app.module.css";
import { fetchData } from "./api";
import img from "./images/covid19.png";

class App extends React.Component {
  state = {
    data: {},
    country: "",
  };
  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

    //set the this.state
  };


  render() {
    const { data, country } = this.state;

    return (
        
      <div className={styles.container}>
        <nav class="navbar navbar-expand-sm bg-info navbar-dark primary-color justify-content-between fixed-top">
          <a class="navbar-logo" href="#"> <img src={img} alt="logo" style={{width: "40px", margin:"2px"}}/></a>
          <a class="navbar-brand" href="../public/index.html" style={{margin:"3px"}}>
            COVID-19 Tracker
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
              <li class="nav-item">
                 <a
                  class="nav-link"
                  href="../Map/mapindex.html"
                >
                  Map
                </a> 
              </li>
              <li class="nav-item">
                  <a
                  class="nav-link"
                  href="../public/index.html"
                >
                  Tracker
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="https://github.com/ying-coco">
                  GitHub
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  href="https://github.com/mathdroid/covid-19-api"
                >
                  Powered By Mathdroid API
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        
        <br></br>
      </div>

    );
  }
}

export default App;
