import React from "react";
import Balancer from "react-wrap-balancer";
import "@/styles/home/home.css";
import Tool from "@/components/home/Tool";

const page = () => {
  const skills = [
    {
      name: "Next Js",
      path: "/nextjs.svg",
    },
    {
      name: "Typescript",
      path: "/typescript.svg",
    },
    {
      name: "javascript",
      path: "/javascript.svg",
    },
    {
      name: "deno",
      path: "/deno.svg",
    },
    {
      name: "css",
      path: "/css.svg",
    },
    {
      name: "ejs",
      path: "/ejs.svg",
    },
    {
      name: "express",
      path: "/express.png",
    },
    {
      name: "git",
      path: "/git.png",
    },
    {
      name: "html",
      path: "/html.svg",
    },
    {
      name: "mongodb",
      path: "/mongodb.svg",
    },
    {
      name: "nodejs",
      path: "/nodejs.png",
    },
    {
      name: "react",
      path: "/react.svg",
    },
    {
      name: "sass",
      path: "/sass.svg",
    },
    {
      name: "tailwind",
      path: "/tailwind.svg",
    },
    {
      name: "nginx",
      path: "/nginx.png",
    },
  ];
  return (
    <section className="margin about h">
      <div>
        <div>
          <h1>Skills</h1>
        </div>
        <div className="holder">
          {skills?.map((skill, i) => (
            <Tool key={i} name={skill.name} path={skill.path} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
