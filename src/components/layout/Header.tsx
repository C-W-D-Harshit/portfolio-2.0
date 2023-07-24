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
        <Link href="/">
          <AiFillGithub />
        </Link>
        <Link href="/">
          <AiFillInstagram />
        </Link>
        <Link href="/">
          <AiFillTwitterCircle />
        </Link>
        <Link href="/">
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
