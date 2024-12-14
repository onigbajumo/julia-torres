"use client"
import { socials } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const style = {
  backgroundImage: `url(/images/footer-bg.png)`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
};

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    message: Yup.string().required("Message is required"),
  });

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        resetForm();
      } else {
        alert("Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div style={style} className="rounded-tl-2xl rounded-tr-2xl">
      <div className="container py-10 flex justify-center">
        <div className="w-full md:w-[90%] flex flex-col md:flex-row">
          <div className="flex-1 bg-black bg-opacity-50 px-7 py-10 rounded-tl-2xl md:rounded-bl-2xl rounded-tr-2xl md:rounded-tr-none flex flex-col justify-center">
            <h2 className="text-white font-normal">Get in touch</h2>

            <div className="space-y-2 my-10">
              <p className="text-white">
                <Link href="mailto:julia@juliaetorres.net">
                  Email: julia@juliaetorres.net
                </Link>
              </p>

              <p className="text-white w-full md:w-4/5">
                Do you have a burning question or think we’d work well together?
                Send me a message here.
              </p>
            </div>

            <div className="flex items-center gap-7">
              {socials.map((social, index) => (
                <Link target="blank" href={social.link} key={index}>
                  <span className="text-white text-3xl">{social.icon}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-br-2xl rounded-tr-none md:rounded-tr-2xl rounded-bl-2xl md:rounded-bl-none px-7 py-10">
            <h3 className="text-black font-semibold mb-10 text-center">Send an Email</h3>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-4">
                  <div>
                    <Field
                      type="text"
                      name="name"
                      id="name"
                      className="w-full"
                      placeholder="Your Name"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <Field
                      type="email"
                      name="email"
                      id="email"
                      className="w-full"
                      placeholder="Your Email"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div>
                    <Field
                      as="textarea"
                      name="message"
                      id="message"
                      rows="5"
                      className="w-full resize-none"
                      placeholder="Your Message"
                    />
                    <ErrorMessage
                      name="message"
                      component="div"
                      className="text-red-500 text-sm"
                    />
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-secondary hover:bg-primary rounded-full pl-4 pr-14 text-white py-2 bg-[url('/images/arrow.svg')] bg-contain bg-right bg-no-repeat"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;


