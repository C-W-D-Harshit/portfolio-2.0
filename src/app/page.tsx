/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import "@/styles/home/home.css";
import ScrollTop from "@/components/home/ScrollToTop";
import Balancer from "react-wrap-balancer";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Tool from "@/components/home/Tool";
import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";
import "@/styles/projects/projects.css";
import "@/styles/contact/contact.css";

export default function Home() {
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

  interface Proj {
    name: string;
    image: string;
    link: string;
    source: string;
    stack: string;
  }

  const projects: Proj[] = [
    {
      name: "Urbanbliss",
      image: "/urbanbliss.png",
      link: "https://urbanbliss.cleverdevloper.in/",
      source: "https://github.com/C-W-D-Harshit/urbanbliss",
      stack: "NEXTjs Custom Server, MongoDB, Redux",
    },
    {
      name: "Munch-Express",
      image: "/munch-express.png",
      link: "https://munch-express.cleverdevloper.in/",
      source: "https://github.com/C-W-D-Harshit/munch-express",
      stack: "NEXTjs Custom Server, MongoDB, Redux, Websockets",
    },
  ];
  let nh = 14;
  return (
    <main>
      <ScrollTop />
      <section className="home">
        <div>
          <h1 className="tit">HI, I'M HARSHIT</h1>
          <h1 className="tit" style={{ color: "var(--secondary)" }}>
            Fullstack Devloper
          </h1>
          <div className="img" style={{ margin: "2rem 0" }}>
            <div>
              <Image
                alt="img"
                src="/pop.jpg"
                width={900}
                height={900}
                quality={100}
                priority
              />
            </div>
          </div>
          <h3 className="tag" style={{ margin: "1rem 0" }}>
            Hello there! I'm Harshit, a Full Stack Developer on a mission to
            create digital magic.
          </h3>
          <h5 className="pag" style={{ margin: "1rem 0" }}>
            Harshit Sharma
          </h5>
        </div>
      </section>
      <section className="margin about">
        <div>
          <div>
            <h1>ABOUT ME</h1>
          </div>
          <h3>
            <Balancer>
              As a full stack developer, I am passionate about creating powerful
              and engaging web applications. With expertise in both front-end
              and back-end technologies, I strive to deliver seamless user
              experiences and robust functionality. I excel in crafting
              responsive interfaces, implementing efficient databases, and
              optimizing performance to ensure optimal results. By leveraging my
              skills in various programming languages and frameworks, I have the
              ability to bring ideas to life and solve complex problems. I am
              dedicated to staying updated with the latest industry trends and
              technologies, allowing me to deliver innovative solutions that
              drive business growth. With a strong commitment to quality,
              efficiency, and collaboration, I am ready to contribute my skills
              to help businesses thrive in the digital landscape.
            </Balancer>
          </h3>
        </div>
      </section>
      <section className="margin about">
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
      <div className="margin projects">
        <p className="tit">Projects</p>
        <div className="holder">
          {projects?.map((project, i) => {
            nh -= 1;
            console.log(nh);
            return (
              <div
                className="project"
                key={i}
                style={{ animationDelay: `${nh}s` }}
              >
                <div className="img">
                  <Image
                    src={project.image}
                    width={800}
                    height={800}
                    alt={project.name}
                  />
                </div>
                <div className="info">
                  <p>{project.name}</p>
                  <p>
                    <b>Stack:</b> {project.stack}
                  </p>
                  <div>
                    <Link href={project.source} target="_blank">
                      <button>
                        Source <FiGithub />
                      </button>
                    </Link>
                    <Link href={project.link} target="_blank">
                      <button>
                        Live <GoLinkExternal />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="margin projects">
        <p className="tit">Contact</p>
        <div className="form">
          <form action="" className="form_">
            <input type="text" name="name" placeholder="Name" />
            <input type="email" name="email" placeholder="Email" />
            <textarea
              name="message"
              id="message"
              rows={5}
              placeholder="Message"
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  );
}
