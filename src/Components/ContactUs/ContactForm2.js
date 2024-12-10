import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const ContactForm2 = () => {
  const initialValues = {
    fullName: '',
    standard: '',
    email: '',
    mobileNumber: '',
    message: '',
  };

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    standard: Yup.string().required('Please select a standard'),
    email: Yup.string().email('Invalid email address'),
    mobileNumber: Yup.string()
      .matches(/^\d{10}$/, 'Mobile number must be 10 digits')
      .required('Mobile Number is required'),
    message: Yup.string(),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);

    const formData = new FormData();
    formData.append("access_key", "8b1b8d98-b9ab-4031-ad0c-05a23978adf8");
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (data.success) {
        Swal.fire({
          title: "Message Sent!",
          text: "We will get back to you as soon as possible",
          icon: "success",
        });
        resetForm();
      } else {
        Swal.fire({
          title: "Error",
          text: data.message || "Something went wrong",
          icon: "error",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "Network error, please try again",
        icon: "error",
      });
    }

    setSubmitting(false);
  };

  return (
    <section className="d-flex justify-content-center">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="w-100">
            <p className="title fs-4 fw-bold mb-1">GET IN TOUCH</p>
            <p className="fw-semibold fs-6 mb-3 text-secondary">
              Feel free to use the below form to share your experience, questions, concerns, or Admission Enquiry.
            </p>
            <div className="input-box mb-4">
              <label className="label-color fw-bold">Full Name</label>
              <Field
                type="text"
                name="fullName"
                className="field mt-2 rounded border border-1 ps-3 form-control"
                placeholder="Your Name *"
              />
              <ErrorMessage name="fullName" component="div" className="text-danger mt-1" />
            </div>
            <div className="input-box mb-4">
              <label className="mb-2 label-color fw-bold">Standard</label>
              <Field
                as="select"
                name="standard"
                className="form-select"
                style={{ height: "50px" }}
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
              <ErrorMessage name="standard" component="div" className="text-danger mt-1" />
            </div>
            <div className="input-box mb-4">
              <label className="label-color fw-bold">Email Address (Optional)</label>
              <Field
                type="email"
                name="email"
                className="field mt-2 rounded border border-1 ps-3 form-control"
                placeholder="Your Email"
              />
              <ErrorMessage name="email" component="div" className="text-danger mt-1" />
            </div>
            <div className="input-box mb-4">
              <label className="label-color fw-bold">Mobile Number</label>
              <Field
                type="text"
                name="mobileNumber"
                className="field mt-2 rounded border border-1 ps-3 form-control"
                placeholder="Your Mobile Number *"
              />
              <ErrorMessage name="mobileNumber" component="div" className="text-danger mt-1" />
            </div>
            <div className="input-box mb-4">
              <label className="label-color fw-bold">Message (Optional)</label>
              <Field
                as="textarea"
                name="message"
                className="field mess mt-2 rounded border border-1 ps-3 pt-3 form-control"
                placeholder="Your Message "
              />
              <ErrorMessage name="message" component="div" className="text-danger mt-1" />
            </div>
            <button
              type="submit"
              className="btn-common border-0 px-5 py-2 fw-bold rounded-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "SEND"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default ContactForm2;

