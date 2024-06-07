import React, { useState, useEffect, useRef } from "react";
import data from "../data/data.json"; // Import your JSON data
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const geoUrl =
  "https://raw.githubusercontent.com/shuklaneerajdev/IndiaStateTopojsonFiles/master/Chhattisgarh.topojson";
const Map = () => {
  return (
    <div>
      <ComposableMap>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "#EEE",
                  },
                  hover: {
                    fill: "#F53",
                  },
                  pressed: {
                    fill: "#E42",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default Map;
