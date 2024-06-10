import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Mission1 from "../data/Lottie/Mission1.json";
import Mission2 from "../data/Lottie/Mission2.json";
import Mission3 from "../data/Lottie/Mission3.json";

const Mission = () => {
  return (
    <div className=" mx-auto py-12" style={{ width: "95vw", height: "100%" }}>
      <div className="box-container w-full h-full bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg border border-gray-200 rounded-lg p-8 shadow-lg">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
          className="d-flex justify-content-center pt-20 text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px]"
        >
          <h1 className="texthead leading-relaxed font-[600]">
            Our{" "}
            <span className="bg-opacity rounded-md text-[#fff] bg-orange-400 px-1 py-1">
              Mission
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="w-3/4 mb-8">
            <Card
              className="glassmorphism-card shadow-lg rounded-lg"
              shadow="sm"
            >
              <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center">
                  <div className="relative col-span-6 md:col-span-4">
                    <Player
                      src={Mission1}
                      className="player"
                      loop
                      autoplay
                      style={{
                        height: "300px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-8">
                    <h1 className="text-[#000] text-[24px] font-[600] font-Roboto">
                      Our Mission #1
                    </h1>
                    <h3>
                      Voluptate excepteur duis aliqua officia ut culpa Lorem eu
                      duis aute ad ut et eiusmod. Proident anim ut labore nulla
                      eiusmod culpa tempor aliquip. Sunt est veniam adipisicing
                      cillum occaecat ut non id.
                    </h3>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="w-3/4 self-end mb-8">
            <Card
              className="glassmorphism-card shadow-lg rounded-lg"
              shadow="sm"
            >
              <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center">
                  <div className="relative col-span-6 md:col-span-4">
                    <Player
                      src={Mission2}
                      className="player"
                      loop
                      autoplay
                      style={{
                        height: "300px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-8">
                    <h1 className="text-[#000] text-[24px] font-[600] font-Roboto">
                      Our Mission #2
                    </h1>
                    <h3>
                      Voluptate excepteur duis aliqua officia ut culpa Lorem eu
                      duis aute ad ut et eiusmod. Proident anim ut labore nulla
                      eiusmod culpa tempor aliquip. Sunt est veniam adipisicing
                      cillum occaecat ut non id.
                    </h3>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="w-3/4">
            <Card
              className="glassmorphism-card shadow-lg rounded-lg"
              shadow="sm"
            >
              <CardBody>
                <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center">
                  <div className="relative col-span-6 md:col-span-4">
                    <Player
                      src={Mission3}
                      className="player"
                      loop
                      autoplay
                      style={{
                        height: "300px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      }}
                    />
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-8">
                    <h1 className="text-[#000] text-[24px] font-[600] font-Roboto">
                      Our Mission #3
                    </h1>
                    <h3>
                      Voluptate excepteur duis aliqua officia ut culpa Lorem eu
                      duis aute ad ut et eiusmod. Proident anim ut labore nulla
                      eiusmod culpa tempor aliquip. Sunt est veniam adipisicing
                      cillum occaecat ut non id.Anim occaecat minim est nisi
                      ipsum enim ex est ea deserunt velit anim tempor.
                    </h3>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
