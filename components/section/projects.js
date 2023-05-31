import Image from "next/legacy/image";
import {
  FaHtml5,
  FaNodeJs,
  FaAngleRight,
  FaGithub,
  FaLaravel,
} from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Waypoints from "../dust/waypoints";
import Link from "next/link";

export default function Projects() {
  let [projects] = useState([
    {
      name: "Accounting & Inventory CRM",
      description:
        "A complete accounting and inventory solution with personalised solution made for a client\n\nLive Preview:\nusername:test\npassword:testpass123",
      isLeft: true,
      link: "https://easyaccounts.netlify.app",
      icon: {
        name: FaLaravel,
        fill: clsx("group-hover:fill-[#FF2D20]"),
      },
    },
    {
      name: "Complete E-commerce Website",
      description:
        "A complete e-commerce website with customised dashboard and Stripe integration",
      isLeft: false,
      link: "https://jewelicate.com",
      icon: {
        name: FaHtml5,
        fill: clsx("group-hover:fill-[#E96228]"),
      },
    },
    {
      name: "Hirecinch",
      description:
        "Worked on hirecinch as a fullstack developer and created Stripe integrations for the app",
      isLeft: true,
      link: "https://www.hirecinch.com/",
      icon: {
        name: FaHtml5,
        fill: clsx("group-hover:fill-[#E96228]"),
      },
    },
    {
      name: "Xenia",
      description:
        "Working on this app as a full stack engineer, developing core functionality and architecutre",
      isLeft: false,
      link: "https://app.xenia.team/",
      icon: {
        name: FaNodeJs,
        fill: clsx("group-hover:fill-[#689F63]"),
      },
    },
  ]);
  return (
    <>
      {/* Projects Starts */}

      <div className="px-6">
        <Waypoints target={"toprojects"}>
          <section id="projects" className="pt-28">
            <h1 className="text-2xl font-bold text-center" data-aos="fade-up">
              Some of My Projects
            </h1>
            <div className="flex justify-center">
              <span
                className="bg-[#6C63FF] w-[150px] h-[5px]"
                data-aos="fade-up"
                data-aos-delay="400"
              ></span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 mt-20 gap-4">
              {projects.map(
                ({ name, description, isLeft, link, icon, image }) => {
                  return (
                    <Fragment key={name}>
                      <div className="flex justify-center">
                        <Link
                          className={`group hover:scale-110 ${
                            isLeft ? "hover:rotate-6" : "hover:-rotate-6"
                          } transition delay-75`}
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div
                            className="card max-w-md bg-base-100 shadow-xl image-full"
                            data-aos="fade-up"
                          >
                            {/* <figure>
                              <Image {...image} />
                            </figure> */}
                            <div className="card-body bg-slate-900 rounded-md">
                              <h2 className="card-title">
                                <icon.name
                                  className={`${icon.fill} transition ease-in-out delay-150`}
                                />
                                {name}
                              </h2>
                              <p className="whitespace-break-spaces">
                                {description}
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      <div></div>
                      <div></div>
                    </Fragment>
                  );
                }
              )}
            </div>

            <div className="text-center mt-20">
              <a
                className="btn btn-wide"
                href="https://github.com/usamabinnadeem-10?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="mr-2 w-5 h-5" />
                View all my Projects. <FaAngleRight className="ml-2" />
              </a>
            </div>
          </section>
        </Waypoints>
      </div>

      {/* Projects Ends */}
    </>
  );
}
