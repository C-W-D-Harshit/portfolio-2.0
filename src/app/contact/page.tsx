import React from "react";

const page = () => {
  return (
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
  );
};

export default page;
