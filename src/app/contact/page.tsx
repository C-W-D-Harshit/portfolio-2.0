import React from "react";

const Page = () => {
  async function sendEmail(formData: FormData) {
    "use server";

    // mutate data
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    // revalidate cache
  }
  return (
    <div className="margin projects">
      <p className="tit">Contact</p>
      <div className="form">
        <form action={sendEmail} className="form_">
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

export default Page;
