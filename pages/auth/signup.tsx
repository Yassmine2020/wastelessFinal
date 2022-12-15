import { signIn } from "next-auth/react";
import { useState } from "react";
import Router from "next/router";

export default function () {
  const [signUpInput, setSignUpInput] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const handleCreateData = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        Name: signUpInput.Name,
        Email: signUpInput.Email,
        Password: signUpInput.Password,
      }),
    }).then(() => Router.push("/auth/signin"));
  };
  return (
    <div className="relative h-screen w-screen">
      {/* background */}
      <img
        src="/upper.svg"
        alt=""
        className="absolute w-1/3 top-0 right-0 z-0"
      />
      <img
        src="/lower.svg"
        alt=""
        className="absolute w-1/4 bottom-0 left-0 z-0"
      />
      {/* background */}
      <div className="z-10 h-screen w-screen flex justify-center items-center">
        <div className="bg-primary-50 shadow-primary-50 px-14 py-16 grid row-auto rounded">
          <div className="text-6xl font-rage text-primary-900 mb-8">
            Wasteless
          </div>
          <form action="" onSubmit={handleCreateData}>
            <input
              className="mb-4 bg-white block focus:outline-none 
                  border-2 border-primary-400 focus:ring-1 focus:ring-transparent
                  focus:ring-offset-2 focus:ring-offset-primary-300 rounded py-1 px-3"
              type="text"
              placeholder="Nom complet"
              required
              onChange={(event) => {
                setSignUpInput({ ...signUpInput, Name: event.target.value });
              }}
            />

            <input
              className="mb-4 bg-white block focus:outline-none 
                  border-2 border-primary-400 focus:ring-1 focus:ring-transparent
                  focus:ring-offset-2 focus:ring-offset-primary-300 rounded py-1 px-3"
              type="email"
              placeholder="Adresse email"
              required
              onChange={(event) => {
                setSignUpInput({ ...signUpInput, Email: event.target.value });
              }}
            />
            <input
              className="mb-4 bg-white block focus:outline-none 
                border-2 border-primary-400 focus:ring-1 focus:ring-transparent
                 focus:ring-offset-2 focus:ring-offset-primary-300 rounded py-1 px-3"
              type="password"
              placeholder="Mot de passe"
              required
              onChange={(event) => {
                setSignUpInput({
                  ...signUpInput,
                  Password: event.target.value,
                });
              }}
            />

            <button
              type="submit"
              className="w-full mt-4 bg-primary-800 rounded-lg
                 text-white font-medium text-lg px-2 py-1 mb-0.5 hover:bg-primary-900"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
