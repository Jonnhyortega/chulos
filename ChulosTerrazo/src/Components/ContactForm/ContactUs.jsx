import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FormGroup, Label } from "./ContactUsStyles";
import "./ContactUs.css";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3fmshao",
        "template_saxokl9",
        form.current,
        "UShoZK6u2XqjK0Lgf"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <p>Contactate con nosotros</p>
      <FormGroup>
        <Label>Nombre</Label>
        <div>
          <input type="text" name="from_name" placeholder="Ingrese su nombre" />
          <span className="bottom"></span>
          <span className="right"></span>
          <span className="top"></span>
          <span className="left"></span>
        </div>
      </FormGroup>

      <FormGroup>
        <Label>Email</Label>
        <div>
          <input type="email" name="email_id" placeholder="Ingrese su correo" />
          <span className="bottom"></span>
          <span className="right"></span>
          <span className="top"></span>
          <span className="left"></span>
        </div>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="mensaje">Mensaje</Label>
        <textarea placeholder="Escriba su mensaje" name="mensaje" />
      </FormGroup>

      <input type="submit" value="Enviar" placeholder="Enviar" />
    </form>
  );
};

export default ContactUs;
