import Link from "next/link";
import React from "react";
import { BsBugFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiOutlineMenu,
} from "react-icons/ai";
import "@/styles/layout/header.css";

const Header = () => {
  return (
    <div className="margin header">
      <Link href="/" className="tag">
        <p>cwd.harshit</p>
      </Link>
      <div className="menu">
        <div>
          <Link href="/about">
            <p>About</p>
          </Link>
          <Link href="/projects">
            <p>Projects</p>
          </Link>
        </div>
        <Link href="/">
          <div className="logo">
            <div>
              <BsBugFill />
            </div>
          </div>
        </Link>
        <div>
          <Link href="/skills">
            <p>Skills</p>
          </Link>
          <Link href="/contact">
            <p>Contact</p>
          </Link>
        </div>
      </div>
      <div className="socials">
        <Link href="https://github.com/C-W-D-Harshit" target="_black">
          <AiFillGithub />
        </Link>
        <Link href="https://www.instagram.com/cwd.harshit" target="_black">
          <AiFillInstagram />
        </Link>
        <Link href="https://twitter.com/cwd_harshit" target="_black">
          <AiFillTwitterCircle />
        </Link>
        <Link href="https://www.linkedin.com/in/cwd-harshit/" target="_black">
          <AiFillLinkedin />
        </Link>
      </div>
      <button className="mob">
        <AiOutlineMenu />
      </button>
    </div>
  );
};

export default Header;
