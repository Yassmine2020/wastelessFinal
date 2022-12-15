import { useState } from "react";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function Landing() {
  const Router = useRouter();

  return (
    <div className="relative h-screen w-screen">
      {/* background */}
      <img
        src="/upper.svg"
        alt=""
        className="absolute w-1/2 top-0 right-0 z-0"
      />
      <img
        src="/lower.svg"
        alt=""
        className="absolute w-1/5 bottom-0 left-0 z-0"
      />
      {/* background */}

      {/* landing page */}
      <div className="absolute z-10">
        <div className="w-full px-20 pt-10 flex justify-between">
          <div className="text-6xl font-rage text-primary-900">Wasteless</div>
          <div className="inline space-x-6 text-white font-bold	">
            <button className="hover:border-b" onClick={() => signIn()}>
              Se connecter
            </button>
            <button
              className="hover:border-b"
              onClick={() => Router.push("/auth/signup")}
            >
              S'inscrire
            </button>
          </div>
        </div>

        <div className="h-700 flex justify-center space-x-10 pt-10">
          <div className="w-1/3 pr-24 flex items-center">
            <div>
              <div className="text-4xl mb-6">
                <div>Electric Consumption</div>
                <div>Track Your Daily</div>
              </div>
              <div className="text-lg">
                Lorem ipsum dolor sit amet consectetur adipis icing elit. Maxime
                mollitia, molestiae quas vel sint commodi repudiandae
                consequuntur volu
              </div>
            </div>
          </div>
          <img src="/img.svg" className="w-1/3" />
        </div>
      </div>
      {/* landing page */}
    </div>
  );
}
