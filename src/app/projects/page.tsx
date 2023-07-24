import Image from "next/image";
import Link from "next/link";
import "@/styles/projects/projects.css";
import { FiGithub } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

const page = () => {
  const projects = [
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
  return (
    <div className="margin projects">
      <p className="tit">Projects</p>
      <div className="holder">
        {projects?.map((project, i) => (
          <div className="project" key={i}>
            <div className="image">
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
        ))}
      </div>
    </div>
  );
};

export default page;
