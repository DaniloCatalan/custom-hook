import { useEffect, useState } from "react";
import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, onInputChange, onResetForm, username, email, password } = useForm({
    username: "",
    email: "",
    password: "",
  });
  // const { username, email, password } = formState;

  return (
    <>
      <div>Formulario con Custom Hook</div>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        value={username}
        name="username"
        onChange={onInputChange}
      />
      <input
        type="email"
        className="form-control mt-2"
        placeholder="test@gmail.com"
        value={email}
        name="email"
        onChange={onInputChange}
      />
      <input
        type="password"
        className="form-control mt-2"
        placeholder="Contraseña"
        value={password}
        name="password"
        onChange={onInputChange}
      />
      <button onClick={onResetForm} className="btn btn-primary mt-2">borrar</button>
    </>
  );
};
