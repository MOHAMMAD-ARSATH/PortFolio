import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (fieldValues = formData) => {
    let temp = { ...errors };

    if ("name" in fieldValues) {
      const value = fieldValues.name.trim();
      if (!value) {
        temp.name = "Name is required.";
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        temp.name = "Name should contain only letters and spaces.";
      } else if (value.length < 3) {
        temp.name = "Name must be at least 3 characters.";
      } else {
        temp.name = "";
      }
    }

    if ("email" in fieldValues) {
      const value = fieldValues.email.trim();
      if (!value) {
        temp.email = "Email is required.";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
        temp.email = "Invalid email address.";
      } else {
        temp.email = "";
      }
    }

    if ("message" in fieldValues) {
      const value = fieldValues.message.trim();
      if (!value) {
        temp.message = "Message is required.";
      } else if (value.length < 10) {
        temp.message = "Message must be at least 10 characters.";
      } else if (value.length > 500) {
        temp.message = "Message cannot exceed 500 characters.";
      } else {
        temp.message = "";
      }
    }

    setErrors({ ...temp });

    return Object.values(temp).every((x) => x === "");
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    validate({ [name]: value });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (touched[name]) validate({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    if (validate()) {
      setSubmitted(true);

      setTimeout(() => {
        setFormData({ name: "", email: "", message: "" });
        setErrors({});
        setTouched({});
        setSubmitted(false);
      }, 1000);
      e.target.submit();
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 pt-16 text-white">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            action={process.env.REACT_APP_FORMSPREE_URL}
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your name"
              className={`p-2 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.name && touched.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && touched.name && (
              <span className="text-red-500 text-sm mt-1">{errors.name}</span>
            )}

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email"
              className={`p-2 mt-4 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.email && touched.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && touched.email && (
              <span className="text-red-500 text-sm mt-1">{errors.email}</span>
            )}

            <textarea
              name="message"
              rows="10"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your message"
              className={`p-2 mt-4 bg-transparent border-2 rounded-md text-white focus:outline-none ${
                errors.message && touched.message ? "border-red-500" : ""
              }`}
            />
            {errors.message && touched.message && (
              <span className="text-red-500 text-sm mt-1">
                {errors.message}
              </span>
            )}

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Submit
            </button>

            {submitted && (
              <p className="text-green-400 text-center">
                Form validated. Submitting...
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;