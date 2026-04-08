import "../styles/Contact.css";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

function Contact() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    emailjs.sendForm(
      "service_lydi5np",
      "template_iqlnmwi",
      form.current,
      "48njBWpi_XGWgUCu6"
    )
    .then(() => {
      setStatus("success");
      setLoading(false);
      form.current.reset();
    })
    .catch(() => {
      setStatus("error");
      setLoading(false);
    });
  };

  return (
    <section className="contact">
      <h1>Contact Me</h1>

      <p className="subtitle">
        Let’s work together — send me a message 🚀
      </p>

      <div className="contact-container">

        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p><strong>Email:</strong> sp13sandeep@gmail.com</p>
          <p><strong>Phone:</strong> +91 9028513769</p>
          <p><strong>Location:</strong> Maharashtra, India</p>

          <div className="social-links">
            <a href="https://github.com/sandeepsp1300" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/sandeep-paswan-aa7349222/" target="_blank">LinkedIn</a>
          </div>
        </div>

        {/* FORM */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">

          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
          </button>

          {/* STATUS MESSAGE */}
          {status === "success" && (
            <p className="success">✅ Message sent successfully!</p>
          )}

          {status === "error" && (
            <p className="error">❌ Failed to send. Try again.</p>
          )}

        </form>

      </div>
    </section>
  );
}

export default Contact;