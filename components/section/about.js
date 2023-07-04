import Image from "next/image";
import sAge from "s-age";
import { useState, useEffect } from "react";
import Waypoints from "../dust/waypoints";

export default function About() {
  let age = sAge("Mar 15 1997");
  let [gh, setGh] = useState("Fetching...");
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          "https://api.github.com/users/usamabinnadeem-10"
        );
        const data = await res.json();
        setGh(data);
      } catch {
        setGh({ public_repos: "several" });
      }
    })();
  }, []);

  return (
    <>
      {/* About Starts */}

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <div className="bg-[#e3f2fd] px-6">
        <Waypoints target={"toabout"}>
          <section id="about" className="text-black py-20">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center md:mb-0 mb-20 py-5">
                <Image
                  className="z-50"
                  src="/img/about.svg"
                  alt="about me"
                  width={200}
                  height={200}
                  data-aos="fade-up-right"
                />
                <Image
                  src="/img/blob/2.svg"
                  className="mt-5 md:mt-20 absolute"
                  alt="blob"
                  width={350}
                  height={350}
                  data-aos="fade-up-right"
                  data-aos-duration="1500"
                />
              </div>
              <div className="ml-10 mr-10 pt-10">
                <h1 className="text-3xl font-bold leading-9" data-aos="fade-up">
                  About Me
                </h1>
                <div
                  className="bg-[#6C63FF] w-[150px] h-[5px]"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                ></div>
                <p className="mt-2">
                  {`Hi I am Usama, a full-stack web engineer from Pakistan! I'm a passionate and
                  experienced full-stack developer with around 5 years of hands-on
                  experience in creating web applications. My expertise lies in
                  utilizing cutting-edge technologies to build efficient and
                  scalable solutions.`}
                </p>
                <p className="mt-2">
                  {`On the frontend, I excel in working with
                  React, TypeScript, and Next.js. I have a deep understanding of
                  these frameworks and leverage their power to develop engaging
                  and user-friendly interfaces. I enjoy crafting intuitive user
                  experiences, ensuring seamless navigation and responsiveness
                  across various devices. In the realm of backend development,
                  I'm skilled in Node.js and Python Django. With a strong
                  command of server-side technologies, I can design and
                  implement robust APIs, manage databases, and handle server
                  operations effectively.`}
                </p>
                <p className="mt-2">
                  {`Having worked in the industry for startups and enormous ventures,
                  I have learned through experience and have developed deep understanding of web development.
                  I prioritize clean code architecture,
                  performance optimization, and security best practices to
                  deliver high-quality backend solutions. My proficiency as a
                  full-stack developer allows me to seamlessly integrate
                  frontend and backend functionalities, creating cohesive and
                  feature-rich applications.`}
                </p>
                <p className="mt-2">
                  {`  I take pride in my ability to
                  translate complex business requirements into elegant,
                  maintainable, and scalable code. Throughout my career, I have
                  collaborated with diverse teams, bringing projects from
                  conception to completion. I thrive in agile environments,
                  valuing effective communication and teamwork. I'm always eager
                  to learn new technologies and stay updated with the latest
                  industry trends. Please explore my portfolio to see some of
                  the projects I've worked on. If you're interested in
                  collaborating or have any questions, feel free to reach out to
                  me. I'm excited to contribute my skills and expertise to the
                  success of your next project!`}
                </p>
                {/* <div class="tooltip tooltip-open tooltip-right mt-5" data-tip={`${gh.followers} Followers, ${gh.following} Following`}>
                <button class="btn"><FaGithub className="mr-2 w-5 h-5" /> Github</button>
              </div> */}
              </div>
            </div>
          </section>
        </Waypoints>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        fill="#e3f2fd"
      >
        <path
          fillOpacity={1}
          d="M0,160L40,138.7C80,117,160,75,240,64C320,53,400,75,480,106.7C560,139,640,181,720,197.3C800,213,880,203,960,170.7C1040,139,1120,85,1200,80C1280,75,1360,117,1400,138.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
        ></path>
      </svg>

      {/* About Ends */}
    </>
  );
}
