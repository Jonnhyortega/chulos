import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FormGroup, Label } from "./ContactUsStyles";
import "./ContactUs.css";
import ModalForm from "./ModalForm/ModalForm";
const ContactUs = () => {
  const form = useRef();
  const [modalOpen, setIsModaOpen] = useState(false);
  const updateModalOpen = (newValue) => {
    setIsModaOpen(newValue);
  };
  const sendEmail = (e) => {
    e.preventDefault();
    setIsModaOpen(!modalOpen);
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
    <>
      <form ref={form} onSubmit={sendEmail}>
        <p>Contactate con nosotros</p>
        <FormGroup>
          <Label>Nombre</Label>
          <div>
            <input
              type="text"
              name="from_name"
              placeholder="Ingrese su nombre"
            />
            <span className="bottom"></span>
            <span className="right"></span>
            <span className="top"></span>
            <span className="left"></span>
          </div>
        </FormGroup>

        <FormGroup>
          <Label>Email</Label>
          <div>
            <input
              type="email"
              name="email_id"
              placeholder="Ingrese su correo"
            />
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
      {modalOpen && <ModalForm updateModalOpen={updateModalOpen} />}
    </>
  );
};

export default ContactUs;
