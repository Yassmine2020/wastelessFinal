import { useState } from "react";
import Router from "next/router";

export default function Forgot() {
  const [done, setDone] = useState(false);
  const [email, setEmail] = useState("");
  const handleSendMail = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/sgMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    });
    console.log(res.status);
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
          <div className="hidden text-6xl font-rage text-primary-900 mb-8">
            Wasteless
          </div>
          {!done ? (
            <>
              <div className="w-72 pb-8 text-sm">
                Veuillez entrer votre adresse e-mail pour vous envoyer votre mot
                de passe.
              </div>
              <form className="w-full" action="" onSubmit={handleSendMail}>
                <input
                  className="mb-4 w-full bg-white block focus:outline-none 
                  border-2 border-primary-400 focus:ring-1 focus:ring-transparent
                  focus:ring-offset-2 focus:ring-offset-primary-300 rounded py-1 px-3"
                  type="email"
                  placeholder="Adresse email"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="w-full mt-4 bg-primary-800 rounded-lg
                 text-white font-medium text-lg px-2 py-1 mb-0.5 hover:bg-primary-900"
                >
                  Envoyer
                </button>
              </form>
            </>
          ) : (
            <div>
              <div className="w-72 pb-8 text-sm">
                Si votre email correspond à un compte vous allez recevoir votre
                mot de passe dans votre boite mail
              </div>
              <button
                className="w-full mt-4 bg-primary-800 rounded-lg
         text-white font-medium text-lg px-2 py-1 mb-0.5 hover:bg-primary-900"
                onClick={() => Router.push("/")}
              >
                Retour
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
