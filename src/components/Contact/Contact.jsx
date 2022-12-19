import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import boy from "../../img/contact-img.jpg";
import { themeContext } from "../../Context";
const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mu5xtl",
        "template_m5udu2c",
        form.current,
        "VLwg1ltOWvnCYAiK_"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
   
    <div className="text-center" style={{marginTop:"50px"}}>
        <span style={{ color: darkMode ? 'white' : '' }} className="c-title">Get in Touch</span>
      <p className="c-details mb-5">I am available for freelance work. Connect with me via</p>
          <span className="c-tag"> phone: +2348162977243, +2347060419595</span> or 
          <span className="c-tag"> Email: owolabitoba31@gmail.com</span>
    </div>
    <div className="contact-form m-t-20" id="contact">
      {/* left side copy and paste from work section */}
      
      <div className="w-left">
        
        <div className="awesome">
          {/* darkMode */}
            <img className="my-c-img" src={boy} alt="" />
        
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>

        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span>{done && "Thanks for Contacting me"}</span>
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
