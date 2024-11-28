import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";

const validationSchema = Yup.object({
  studentName: Yup.string()
    .min(3, "Name must be at least 3 characters long")
    .required("Student's name is required"),
  studentStandard: Yup.string()
    .required("Please select a standard"),
  email: Yup.string().email("Invalid email address"),
  mobileNumber: Yup.string()
    .matches(/^[0-9]{10}$/, "Please provide a valid 10-digit mobile number.")
    .required("Mobile number is required"),
  subject: Yup.string()
    .min(3, "Subject must be at least 3 characters long")
    .required("Subject is required"),
  message: Yup.string()
    .max(500, "Message cannot exceed 500 characters"),
});

const ContactForm = () => {
  const onSubmit = async (values, { resetForm, setSubmitting }) => {
    const formData = new FormData();
    Object.keys(values).forEach((key) => formData.append(key, values[key]));
    formData.append("access_key", "8b1b8d98-b9ab-4031-ad0c-05a23978adf8");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "Thanks for contacting us. You will receive a response within two hours. If you do not receive a response from us, please call 6382174912. An immediate response will be provided.",
          icon: "success",
        });
        resetForm();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: error.message || "Network error. Please try again.",
        icon: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="d-flex justify-content-center">
      <Formik
        initialValues={{
          studentName: "",
          studentStandard: "",
          email: "",
          mobileNumber: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-100">
            <p className="title fs-4 fw-bold mb-1">GET IN TOUCH</p>
            <p className="fw-semibold fs-6 mb-3 text-secondary">
              Feel free to share your experience, queries, concerns, doubts, or anything else using the form below.
            </p>

            <div className="input-box mb-4">
              <label className="label-color fw-bold" htmlFor="studentName">
                Student's Name
              </label>
              <Field
                type="text"
                id="studentName"
                name="studentName"
                className="field mt-2 rounded border border-1 ps-3"
                placeholder="Enter Student's Name*"
              />
              <ErrorMessage name="studentName" component="div" className="text-danger mt-1" />
            </div>

            <div className="input-box mb-4">
              <label className="mb-2 label-color fw-bold" htmlFor="studentStandard">
                Standard
              </label>
              <Field
                as="select"
                id="studentStandard"
                name="studentStandard"
                className="form-select standard-select"
              >
                <option value="">Select Student Standard</option>
                <option value="Pre Kg">Pre Kg</option>
                <option value="LKG">LKG</option>
                <option value="UKG">UKG</option>
                <option value="I STD">I STD</option>
                <option value="II STD">II STD</option>
                <option value="III STD">III STD</option>
                <option value="IV STD">IV STD</option>
                <option value="V STD">V STD</option>
                <option value="VI STD">VI STD</option>
                <option value="VII STD">VII STD</option>
                <option value="VIII STD">VIII STD</option>
                <option value="IX STD">IX STD</option>
                <option value="X STD">X STD</option>
                <option value="XI STD">XI STD</option>
                <option value="XII STD">XII STD</option>
              </Field>
              <ErrorMessage name="studentStandard" component="div" className="text-danger mt-1" />
            </div>

            <div className="input-box mb-4">
              <label className="label-color fw-bold" htmlFor="email">
                Email Address (Optional)
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="field mt-2 rounded border border-1 ps-3"
                placeholder="Enter Your Email Id"
              />
              <ErrorMessage name="email" component="div" className="text-danger mt-1" />
            </div>

            <div className="input-box mb-4">
              <label className="label-color fw-bold" htmlFor="mobileNumber">
                Mobile Number
              </label>
              <Field
                type="text"
                id="mobileNumber"
                name="mobileNumber"
                className="field mt-2 rounded border border-1 ps-3"
                placeholder="Enter Your Mobile Number*"
              />
              <ErrorMessage name="mobileNumber" component="div" className="text-danger mt-1" />
            </div>

            <div className="input-box mb-4">
              <label className="label-color fw-bold" htmlFor="subject">
                Subject
              </label>
              <Field
                type="text"
                id="subject"
                name="subject"
                className="field mt-2 rounded border border-1 ps-3"
                placeholder="Enter the Subject*"
              />
              <ErrorMessage name="subject" component="div" className="text-danger mt-1" />
            </div>

            <div className="input-box mb-4">
              <label className="label-color fw-bold" htmlFor="message">
                Your Message (Optional)
              </label>
              <Field
                as="textarea"
                id="message"
                name="message"
                className="field mess mt-2 rounded border border-1 ps-3 pt-3"
                placeholder="Your Message"
              />
              <ErrorMessage name="message" component="div" className="text-danger mt-1" />
            </div>

            <button
              type="submit"
              className="btn-common border-0 px-5 py-2 fw-bold rounded-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "SENDING..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm;
