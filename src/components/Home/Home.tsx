import React from "react";
import HomeSection from "../HomeSection/HomeSection";
import { Carousel } from "../Carousel/Carousel";
import { slides } from "../../data/carouselData.json";
import {
  exploreTopics,
  jobTopics,
  softwareTopics,
  gameTopics,
} from "../../data/topicsData";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <HomeSection
        id={"explore-articles"}
        header={"Explore collaborative articles"}
        subHeader={
          "We're unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI."
        }
      >
        <ul>
          {exploreTopics.map((topic, index) => (
            <li key={index}>
              <a
                className="btn-md btn-secondary btn-secondary"
                href="https://www.linkedin.com/pulse/topics/marketing-s2461/"
              >
                {topic}
              </a>
            </li>
          ))}
          <li>
            <a
              className="btn-md btn-secondary btn-secondary"
              href="https://www.linkedin.com/pulse/topics/marketing-s2461/"
              style={{
                color: "#0a66c2",
                boxShadow: "0 0 0 1px #0a66c2",
              }}
            >
              Show All
            </a>
          </li>
        </ul>
      </HomeSection>

      <HomeSection
        id={"job-search"}
        header={"Find the right job or internship for you"}
        subHeader={"Browse recommended jobs based on your interests"}
      >
        <ul>
          {jobTopics.map((topic, index) => (
            <li key={index}>
              <a
                className="btn-md btn-secondary btn-secondary"
                href="https://www.linkedin.com/pulse/topics/marketing-s2461/"
              >
                {topic}
              </a>
            </li>
          ))}
        </ul>
      </HomeSection>

      <HomeSection
        id={"software-tools"}
        header={"Discover the best software tools"}
        subHeader={
          "Connect with buyers who have first-hand experience to find the best products for you."
        }
      >
        <ul>
          {softwareTopics.map((topic, index) => (
            <li key={index}>
              <a
                className="btn-md btn-secondary btn-secondary"
                href="https://www.linkedin.com/pulse/topics/marketing-s2461/"
              >
                {topic}
              </a>
            </li>
          ))}
          <li>
            <a
              className="btn-md btn-secondary btn-secondary"
              href="https://www.linkedin.com/pulse/topics/marketing-s2461/"
              style={{
                color: "#0a66c2",
                boxShadow: "0 0 0 1px #0a66c2",
              }}
            >
              Show All
            </a>
          </li>
        </ul>
      </HomeSection>

      <HomeSection
        id={"games"}
        header={"Keep your mind sharp with games"}
        subHeader={
          "Take a break and reconnect with your network through quick daily games."
        }
      >
        <ul>
          {gameTopics.map((topic, index) => (
            <li key={index}>
              <a
                className="btn-md btn-secondary btn-secondary"
                href="https://www.linkedin.com/pulse/topics/marketing-s2461/"
              >
                {topic}
              </a>
            </li>
          ))}
        </ul>
      </HomeSection>

      <div
        id="carousel-container"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
          height: "450px",
          marginTop: "0",
        }}
      >
        <Carousel data={slides} />
      </div>
    </div>
  );
};

export default Home;
