import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1IjoidGhvbWFzZmVkYiIsImEiOiJjamVzd3lyYTQwcHRsMnh1bTNkN3Y4OGhvIn0.s_xC_xBko47d7sbvgjotPA"
});

const dat = [{loc: [0, 0], show: true}, {loc: [1, 0], show: true}]

class App extends Component {
  render() {
    return (
      <div>
        <Map
          style="mapbox://styles/mapbox/streets-v9"
          containerStyle={{height: "100vh", width: "100vw"}}
          zoom={[4]} center={[0, 0]}>
          <Layer
            type="symbol"
            layout={{"text-field": "{title}", "text-allow-overlap": true,}}>
            {dat.map((el, i) => {
              if (el.show) {
                return (
                  <Feature key={i} coordinates={el.loc} properties={{title: el.loc.toString()}}/>
                )
              }
            })}
          </Layer>
      </Map>
      </div>
    );
  }
}

export default App;
