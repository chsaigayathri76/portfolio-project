import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const [form, setForm] = useState({
    name: "Ch. Sai Gayathri",
    email: "chsaigayathre2006@gmail.com",
    message: "I'm available!",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("https://portfolio-project-2-olq8.onrender.com/contact", form)
      .then(() => alert("Message sent"))
      .catch(() => alert("Error"));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Contact</h2>

      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />

      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />

      <textarea
        placeholder="Message"
        onChange={(e) => setForm({ ...form, message: e.target.value })}
      />

      <button type="submit">Send</button>
    </form>
  );
}