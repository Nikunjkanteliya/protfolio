import React from "react";
import style from "./style/contact.module.css";
import { IoLocationSharp } from "react-icons/io5";
import { AiFillMail } from "react-icons/ai";
import { IoCall } from "react-icons/io5";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  let submithandler = (event) => {
    event.preventDefault();
  };
  const [state, handleSubmit] = useForm("xdovlepp");
  if (state.succeeded) {
    return  alert("Thanks for joining!");
  }
  return (
    <div>
      <span className={style.animate} id={"open4"}> Contact</span>

      <div className={style.formmain}>
        <form className={style.form} onSubmit={handleSubmit}>
          <input placeholder="Name" id="name" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <input placeholder="Email" id="email" type="email" name="email" />

          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <input
            type="text"
            placeholder="Your message"
            className={style.ym}
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            className={style.sm}
            disabled={state.submitting}
            type={"submit"}
          >
            Send Message
          </button>
        </form>

        <div className={style.info}>
          <span>
            {" "}
            <IoLocationSharp />{" "}
            <span className={style.mydata}> Pune,Maharashtra</span>
          </span>

          <span>
            {" "}
            <AiFillMail />{" "}
            <span className={style.mydata}> kanteliyaNikunj422@gmail.com</span>
          </span>
          <span>
            <IoCall /> <span className={style.mydata}> +919322953022</span>
          </span>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/1200px-QR_code_for_mobile_English_Wikipedia.svg.png"
            alt=""
            width={"200px"}
            height={"200px"}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
