"use client";

import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";
import "@/styles/home/tool.css";

let z = 20;

const Tool = ({ name, path }: tooltip) => {
  name = name.charAt(0).toUpperCase() + name.slice(1);
  const randomNumber: number = Math.floor(Math.random() * 6) + 15;
  console.log(randomNumber);

  z -= 1;

  return (
    <div className="tool" style={{ animationDelay: `${z}s` }}>
      <Tooltip id={name} />
      <div>
        <Image
          data-tooltip-id={name}
          data-tooltip-content={name}
          alt={name}
          width={100}
          height={100}
          src={path}
        />
      </div>
    </div>
  );
};

export default Tool;
