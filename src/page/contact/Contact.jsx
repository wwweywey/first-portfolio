import "./contact.scss";

const Contact = () => {
  return (
    <section id="contact-page">
      <form className="contact-form">
        {/* <!-- <h2>CONTACT</h2> --> */}
        <input type="text" placeholder="Your name" />
        <input type="text" placeholder="Your Email" />
        <textarea
          id="text-form"
          placeholder="What you wanna say"
          wrap="soft"
        ></textarea>
        <button className="form-submit">SUBMIT</button>
      </form>
    </section>
  );
};

export default Contact;
