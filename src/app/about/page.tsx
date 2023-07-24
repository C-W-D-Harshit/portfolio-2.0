import React from "react";
import Balancer from "react-wrap-balancer";
import "@/styles/home/home.css";

const page = () => {
  return (
    <section className="margin about h">
      <div>
        <div>
          <h1>ABOUT ME</h1>
        </div>
        <h3>
          <Balancer>
            As a full stack developer, I am passionate about creating powerful
            and engaging web applications. With expertise in both front-end and
            back-end technologies, I strive to deliver seamless user experiences
            and robust functionality. I excel in crafting responsive interfaces,
            implementing efficient databases, and optimizing performance to
            ensure optimal results. By leveraging my skills in various
            programming languages and frameworks, I have the ability to bring
            ideas to life and solve complex problems. I am dedicated to staying
            updated with the latest industry trends and technologies, allowing
            me to deliver innovative solutions that drive business growth. With
            a strong commitment to quality, efficiency, and collaboration, I am
            ready to contribute my skills to help businesses thrive in the
            digital landscape.
          </Balancer>
        </h3>
      </div>
    </section>
  );
};

export default page;
