import React from "react";
import { Card, CardBody } from "@nextui-org/react";
import { Player } from "@lottiefiles/react-lottie-player";
import Mission1 from "../data/Lottie/Mission1.json";
import Mission2 from "../data/Lottie/Mission2.json";
import Mission3 from "../data/Lottie/Mission3.json";

const styles = {
  container: {
    padding: "4px",
    maxWidth: "400rem",
    // margin: "4rem 1rem 1rem",
    // background:"linear-gradient(89deg, rgb(253, 220, 155) 26.2%, rgb(255, 215, 165) 48.5%)",
    background: "linear-gradient(to bottom right, #FFF,rgb(253, 215, 165) )", // Gradient from orange to white
    color: "#333", // Font color
    borderRadius: "10px", // Rounded corners
    padding: "20px", // Add padding
  },
  title: {
    fontSize: "4em",
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  content: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "row-reverse", // Reverse the order of elements
  },
  imageContainer: {
    flex: "0 0 auto",
    marginLeft: "10rem", // Adjust margin for spacing
    marginBottom: "8rem",
  },
  image: {
    width: "100%",
    maxWidth: "40rem",
    height: "auto",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Add shadow for a floating effect
  },
  textContainer: {
    flex: "1",
    flexDirection: "column",
    marginLeft: "10rem",
    marginRight: "20rem",
  },
  paragraph: {
    marginBottom: "10px", // Adjust the gap between paragraphs
    color: "#333",
  },
};
const Mission = () => {
  return (
    <div id="our-mission" className="mx-auto py-12" style={styles.container}>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
          className="d-flex justify-content-center pt-20 text-[27px] text-center md:text-start font-[600] font-Roboto pb-[20px] animate__animated animate__fadeInRight"
        >
          <h1 className="texthead leading-relaxed font-[600]">
            Our{" "}
            <span className="bg-opacity rounded-md text-[#fff] bg-orange-400 px-1 py-1">
              Mission
            </span>
          </h1>
        </div>

        <div className="flex flex-col items-center">
          <div className="md:w-3/4 mb-8">
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
                      }}
                    />
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-8 animate__animated animate__fadeInRight">
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

          <div className="md:w-3/4 self-end mb-8">
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
                        width:"300px"
                      }}
                    />
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-8 animate__animated animate__fadeInLeft">
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

          <div className="md:w-3/4">
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
                      }}
                    />
                  </div>
                  <div className="flex flex-col col-span-6 md:col-span-8 animate__animated animate__fadeInRight">
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
