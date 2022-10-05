import { useState } from "react";
import "./App.css";
import emailjs from "@emailjs/browser";

export const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function sendEmail(e) {
    e.preventDefault();
    if (name === "" || email === "" || mensagem === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
    };

    emailjs
      .send(
        "service_oyiiooi",
        "template_0e2ymjj",
        templateParams,
        "ctUdRJ7lWwDu6KMwW"
      )
      .then((response) => {
        console.log("EMAIL ENVIADO", response.status, response.text);
      });
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="container">
      <h1>Contato</h1>
      <form onSubmit={sendEmail}>
        <input
          type="name"
          placeholder="Digite seu nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          name="mensagem"
          id="mensagem"
          cols="30"
          rows="10"
          placeholder="Digite sua mensagem..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};
