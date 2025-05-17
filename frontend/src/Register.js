import React, { useState } from "react";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registro bem-sucedido!");
      localStorage.setItem("token", data.token);
    } else {
      alert(data.message || "Erro ao registrar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Registro</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Senha" required />
      <button type="submit">Registrar</button>
    </form>
  );
}

export default Register;