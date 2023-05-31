import { FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";
import { useState, Fragment } from "react";
import { clsx } from "clsx";
import Link from "next/link";

export default function Social({ type }) {
  let [social] = useState([
    {
      href: "https://www.github.com/usamabinnadeem-10",
      icon: {
        icon: FaGithub,
        fill: clsx("hover:fill-black"),
      },
    },
    {
      href: "https://www.facebook.com/usamanadeem4",
      icon: {
        icon: FaFacebook,
        fill: clsx("hover:fill-brand-fb"),
      },
    },
    {
      href: "https://www.instagram.com/usaaamaaay",
      icon: {
        icon: FaInstagram,
        fill: clsx("hover:fill-[url(#instagram-gradient)]"),
      },
    },
  ]);

  return (
    <>
      <div
        className={`flex text-2xl text-gray-500 ${
          type === "footer"
            ? "space-x-4 ml-2 md:space-x-6"
            : "space-x-7 mt-2 text-center md:text-left"
        }`}
      >
        {social.map(({ href, icon }) => {
          return (
            <Fragment key={href}>
              <Link href={href} target="_blank" rel="noopener noreferrer">
                <icon.icon className={`${icon.fill} transition delay-150`} />
              </Link>
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
