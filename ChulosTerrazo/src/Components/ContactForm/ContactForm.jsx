import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Container,
  FormGroup,
  Label,
  StyledField,
  StyledTextArea,
  ErrorText,
  SubmitButton,
} from "./ContactFormStyles";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "El nombre debe tener al menos 3 caracteres")
    .required("Nombre es requerido"),
  location: Yup.string().required("Localidad es requerida"),
  email: Yup.string()
    .email("Formato de email inválido")
    .required("Email es requerido"),
  message: Yup.string()
    .min(10, "El mensaje debe tener al menos 10 caracteres")
    .required("El mensaje es requerido"),
});

const ContactForm = () => {
  return (
    <Container>
      <p>Formulario de Contacto</p>
      <Formik
        initialValues={{ name: "", location: "", email: "", message: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log("Formulario enviado con los siguientes valores:", values);
          setSubmitting(false);
          resetForm();
          alert("Formulario enviado con éxito!");
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <FormGroup>
              <Label htmlFor="name">Nombre: </Label>
              <div>
                <StyledField
                  type="text"
                  name="name"
                  placeholder="Ingresa tu nombre"
                />
                <span className="bottom"></span>
                <span className="right"></span>
                <span className="top"></span>
                <span className="left"></span>
              </div>
              <ErrorMessage name="name" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="location">Localidad: </Label>
              <div>
                <StyledField
                  type="text"
                  name="location"
                  placeholder="Ingresa tu localidad"
                />
                <span className="bottom"></span>
                <span className="right"></span>
                <span className="top"></span>
                <span className="left"></span>
              </div>
              <ErrorMessage name="location" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email: </Label>
              <div>
                <StyledField
                  type="email"
                  name="email"
                  placeholder="Ingresa tu email"
                />
                <span className="bottom"></span>
                <span className="right"></span>
                <span className="top"></span>
                <span className="left"></span>
              </div>
              <ErrorMessage name="email" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Mensaje: </Label>
              <StyledTextArea
                name="message"
                placeholder="Escribe tu mensaje..."
              />
              <span className="bottom"></span>
              <span className="right"></span>
              <span className="top"></span>
              <span className="left"></span>
              <ErrorMessage name="message" component={ErrorText} />
            </FormGroup>

            <FormGroup>
              <SubmitButton type="submit" disabled={isSubmitting}>
                Enviar
              </SubmitButton>
            </FormGroup>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default ContactForm;
