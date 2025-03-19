import { useState } from "react";
import "./App.css";
import HomeSection from "./components/HomeSection/HomeSection";
import { Carousel } from "./components/Carousel/Carousel";
import { slides } from "./data/carouselData.json";

function App() {
  const [optionalTopics, setOptionalTopics] = useState(false);

  return (
    <>
      <HomeSection
        id={"explore-articles"}
        header={"Explore collaborative articles"}
        subHeader={
          "We’re unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI."
        }
      >
        <ul>
          {[
            "Marketing",
            "Public Administration",
            "Healthcare",
            "Engineering",
            "IT Services",
            "Sustainability",
            "Business Administration",
            "Telecommunications",
            "HR Management",
          ].map((topic) => (
            <li>
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
              style={{ color: "#0a66c2", boxShadow: "0 0 0 1px #0a66c2" }}
            >
              Show All
            </a>
          </li>
        </ul>
      </HomeSection>

      <HomeSection
        id={"explore-articles"}
        header={"Find the right job or internship for you"}
      >
        <ul>
          {[
            "Engineering",
            "Business Development",
            "Finance",
            "Administrative Assistant",
            "Retail Associate",
            "Customer Service",
            "Operations",
            "Information Technology",
            "Marketing",
            "Human Resources",
          ].map((topic) => (
            <li>
              <a
                className="btn-md btn-secondary btn-secondary"
                href="https://www.linkedin.com/pulse/topics/marketing-s2461/"
              >
                {topic}
              </a>
            </li>
          ))}

          {optionalTopics &&
            [
              "Engineering",
              "Business Development",
              "Finance",
              "Administrative Assistant",
              "Retail Associate",
              "Customer Service",
              "Operations",
              "Information Technology",
              "Marketing",
              "Human Resources",
            ].map((topic) => (
              <li>
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
              onClick={() => setOptionalTopics(!optionalTopics)}
            >
              {optionalTopics ? (
                <>
                  Show less
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    preserveAspectRatio="xMinYMin meet"
                    focusable="false"
                    class="lazy-loaded"
                    aria-busy="false"
                    style={{ marginLeft: "5px" }}
                  >
                    <path
                      d="M8 7l-5.9 4L1 9.5l6.2-4.2c.5-.3 1.2-.3 1.7 0L15 9.5 13.9 11 8 7z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </>
              ) : (
                <>
                  Show more
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    preserveAspectRatio="xMinYMin meet"
                    focusable="false"
                    class="lazy-loaded"
                    aria-busy="false"
                    style={{ marginLeft: "5px" }}
                  >
                    <path
                      d="M8 9l5.93-4L15 6.54l-6.15 4.2a1.5 1.5 0 01-1.69 0L1 6.54 2.07 5z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </>
              )}
            </a>
          </li>
        </ul>
      </HomeSection>

      <HomeSection
        header={"Discover the best software tools"}
        subHeader={
          "Connect with buyers who have first-hand experience to find the best products for you."
        }
      >
        <ul>
          {[
            "E-Commerce Platforms",
            "CRM Software",
            "Human Resources Management Systems",
            "Recruiting Software",
            "Sales Intelligence Software",
            "Project Management Software",
            "Help Desk Software",
            "Social Networking Software",
            "Desktop Publishing Software",
          ].map((topic) => (
            <li>
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
              style={{ color: "#0a66c2", boxShadow: "0 0 0 1px #0a66c2" }}
            >
              Show All
            </a>
          </li>
        </ul>
      </HomeSection>

      <HomeSection
        header={"Keep your mind sharp with games"}
        subHeader={
          "Take a break and reconnect with your network through quick daily games."
        }
      >
        <ul>
          {["Pinpoint", "Queens", "Crossclimb", "Tango"].map((topic) => (
            <li>
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

      <Carousel data={slides} />
    </>
  );
}

export default App;
