import "./contact.css";
import { BsLinkedin } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
function Contact() {
  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <h5>
        Get In Touch.If you love reading as much I do.If you love reading as
        much I do? Let's talk about coding & some books!. My Email:
        rimtycse@email.com
      </h5>
      <div className="container contact-container">
        <form className="form" action="">
          <label>
            <span>Your Email:</span>
            <input
              type="text"
              name="name"
              placeholder="Your first name"
              required
            />
          </label>

          <label>
            <span>Your Email:</span>
            <input
              type="email"
              name="email"
              placeholder="Your email address"
              required
            />
          </label>

          <label>
            <span>Your Massage:</span>
            <textarea
              id="message"
              type="message"
              name="message"
              placeholder="Your message"
              required
              rows="5"
              cols="6"
            ></textarea>
          </label>

          <button className="contactBtn" type="submit">
            Send
          </button>
        </form>

        <div className="social-contact">
          <a
            href="https://www.linkedin.com/in/lamia-jabin-rimty-0020a2219/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a href="https://github.com/LamiaRimty" target="_blank">
            <BsGithub />
          </a>{" "}
          <a
            href="https://api.whatsapp.com/send?phone=0626344867"
            target="_blank"
          >
            <IoLogoWhatsapp />
          </a>
          <a href="mailto:ljrimty@outlook.com" target="_blank">
            <AiOutlineMail />
          </a>
        </div>
      </div>
    </section>
  );
}
export default Contact;
