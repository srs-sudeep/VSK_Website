import React, { useState, useRef } from 'react';
import { Box, Divider, Typography } from "@mui/material";
import { ComposableMap, Geographies, Geography, ZoomableGroup } from "react-simple-maps";
import india from "../data/District_geo.json";
import '../index.css'; // Ensure you have Tailwind CSS imported

const Map = () => {
  const [position, setPosition] = useState({ coordinates: [82, 19], zoom: 1 });
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [tooltipContent, setTooltipContent] = useState("");
  const boxRef = useRef(null);

  const handleMouseMove = (event) => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      const relX = event.pageX - rect.left - window.scrollX;
      const relY = event.pageY - rect.top - window.scrollY;
      setTooltipPosition({ x: relX, y: relY });
    }
  };

  const getStateColor = (val) => {
    let state = "Chhattisgarh";
    let highlightColor = "#66b3ff";
    let defaultColor = "#1362BC";
    return val === state ? highlightColor : defaultColor;
  };

  return (
    <Box
    id ="map"
      sx={{ display: "flex", margin: 0, paddingBottom: "30px" }}
      className="flex flex-col lg:flex-row "
    >
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          padding: 0,
        }}
        className="justify-start md:justify-center items-start md:items-center mx-2 md:mx-[288px]"
      >
        <h1 className="texthead text-[60px] md:text-[80px] leading-relaxed font-[600] text-orange-400">
            Vidya Samagra{" "}
          </h1>
          <h1 className="texthead text-[60px] md:text-[100px] leading-relaxed font-[600]">
            Kendra
            </h1>
            <h3 className="texthead text-[28px] md:text-[50px] leading-relaxed font-[600]">
            Smart Education for all
            </h3>
            
      </Box>
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            position: "relative",
            width: "600px",
            height: "480px",
            margin: 0,
            padding: 0,
          }}
          onMouseMove={handleMouseMove}
        >
          <ComposableMap
            data-tip=""
            projection="geoMercator"
            width={490}
            height={600}
            projectionConfig={{
              rotate: [-6, -2, 3],
              center: [84.8661, 2.687],
              scale: 2800,
            }}
          >
            <ZoomableGroup
              maxZoom={1}
              ref={boxRef}
              center={position.coordinates}
              zoom={position.zoom}
            >
              <Geographies geography={india}>
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const { ST_NM } = geo.properties;
                    const fillClr = getStateColor(ST_NM);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        onMouseEnter={() => {
                          const { ST_NM } = geo.properties;
                          setTooltipContent(`${ST_NM}`);
                        }}
                        strokeWidth={0.75}
                        stroke="#fff"
                        style={{
                          default: {
                            fill: fillClr,
                            outline: "none",
                          },
                          hover: {
                            fill: "#66b3ff",
                            outline: "none",
                          },
                          pressed: {
                            fill: "#2E8B57",
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
            </ZoomableGroup>
          </ComposableMap>
          {tooltipContent && (
            <div
              style={{
                position: "absolute",
                left:
                  tooltipContent === "Chhattisgarh"
                    ? tooltipPosition.x - 10 + window.scrollX
                    : tooltipPosition.x + 60 + window.scrollX,
                top:
                  tooltipContent === "Chhattisgarh"
                    ? tooltipPosition.y - 270 + window.scrollY
                    : tooltipPosition.y - 60 + window.scrollY,
                margin: 0,
                padding: 0,
              }}
            >
            </div>
          )}
        </div>
      </Box>
    </Box>
  );
};

export default Map;
