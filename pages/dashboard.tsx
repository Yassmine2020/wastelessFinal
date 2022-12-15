import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import Section from "../components/Section";
import Dropdown from "../components/Dropdown";
import Loader from "../components/Loader";
import Counter from "../components/Counter";
import LineChart from "../components/LineChart";

export default function Dashboard() {
  const my_kWh = 200;
  const { data: session, status } = useSession();
  // const user = session?.user;
  const user = {
    id: 1,
    name: "user.Name",
    email: "user.Email",
  };
  const [isAlert, setIsAlert] = useState(false);
  const [filterChart, setFilterChart] = useState("jour");
  const [filterAvg, setFilterAvg] = useState("jour");
  const labels = ["lun", "mar", "mer", "jeu", "vend", "sam", "dim"];
  const predections = [45, 49, 55, 57];
  const real = [20, 34, 40, 45];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: real,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
      {
        label: "Dataset 2",
        data: [, , ,] + predections,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  // Tranche
  function Tranche(kWh: number) {
    var tranche = "";
    var price = 0;
    var PU = 0;
    const PU1 = 0.901;
    if (0 <= kWh && kWh <= 100) {
      PU = 0.901;
      tranche = "1ère";
    }
    if (101 <= kWh && kWh <= 150) {
      PU = 1.0732;
      tranche = "2éme";
      price = 100 * PU1 + PU * (kWh - 100);
    }
    if (151 <= kWh && kWh <= 200) {
      PU = 1.0732;
      tranche = "3éme";
      price = kWh * PU;
    }
    if (201 <= kWh && kWh <= 300) {
      PU = 1.1676;
      tranche = "4éme";
      price = kWh * PU;
    }
    if (301 <= kWh && kWh <= 500) {
      PU = 1.3817;
      tranche = "5ème";
      price = kWh * PU;
    }
    if (500 < kWh) {
      PU = 1.5958;
      tranche = "6ème";
      price = kWh * PU;
    }
    return { price: price, tranche: tranche };
  }
  // Tranche

  // Alert
  function Alert() {
    var score = 0;
    const threshold = 5;
    if (Tranche(my_kWh).tranche != "1ère") {
      score += 1;
    }
    if (Tranche(my_kWh).tranche != "2éme") {
      score += 2;
    }
    if (Tranche(my_kWh).tranche != "3éme") {
      score += 4;
    }
    const mean_predected = 2;
    const mean_true = 4;
    if (mean_predected > mean_true) {
      score += 3;
    }
    if (score > threshold) {
      setIsAlert(true);
    }
  }
  // Alert

  // useEffect(() => {
  //   if (status === "unauthenticated") {
  //     Router.replace("/auth/signin");
  //   }
  // });
  // if (status === "authenticated") {
  if (true) {
    // ! TO DO
    // fetch data by userID : fetch_dashboard_data_by_ID(id)
    // proprocessing data : processed_data(raw_data)
    // run model : model(processed_data)
    // visualize : charts(models)
    // ! TO DO
    return (
      <div className="bg-slate-50 min-h-screen flex flex-col">
        {/* NAVBAR */}
        <div className="bg-primary-400 w-full px-20 pt-3 pb-2  flex justify-between text-white">
          <div className="text-6xl font-rage">Wasteless</div>
          <div className="flex items-center">
            <div className="font-bold flex items-center space-x-4 text-primary-900 bg-primary-50 rounded-full py-2 px-6 shadow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-5.5-2.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM10 12a5.99 5.99 0 00-4.793 2.39A6.483 6.483 0 0010 16.5a6.483 6.483 0 004.793-2.11A5.99 5.99 0 0010 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{user?.name}</span>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="font-bold border-b border-transparent hover:border-white"
              onClick={() => signOut()}
            >
              Se déconnecter
            </button>
          </div>
        </div>
        {/* NAVBAR */}
        {/* DASH BODY */}
        <div className="flex-1 grid grid-rows-3 grid-cols-12 gap-5 py-8 px-10">
          <div className="col-span-7 row-span-2">
            <Section title="Consumation énergitique" className="relative">
              <div className="absolute top-3 right-5">
                <Dropdown
                  selected={filterChart}
                  setSelected={setFilterChart}
                  isChart={true}
                />
              </div>
              <LineChart data={data} />
            </Section>
          </div>
          <div className="col-span-3 row-span-2">
            <Section>
              <div className="h-full flex flex-col justify-between">
                <div className="flex w-full">
                  <div className="text-primary-600 text-xl font-semibold">
                    Astuces
                  </div>
                  <div className="w-full flex justify-end">
                    <img className="h-52" src="/lamp.svg" alt="lamp" />
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-rage text-primary-800 text-4xl">
                    Save light, Save life
                  </div>
                  <div className="mb-5">
                    Consulter des conseils techniques pour optimiser votre
                    consommation énergitique
                  </div>
                  <button
                    className="float-right bg-primary-500 hover:bg-primary-700 rounded-full text-white p-1"
                    // ! TO DO
                    // add link to cunsumption weather link (search for relevant existing external link !)
                    // onClick={}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </Section>
          </div>
          <div className="col-span-2">
            {isAlert ? (
              <div className="h-full px-5 py-3 shadow rounded-xl flex flex-col justify-center items-center bg-red-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-red-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                  />
                </svg>
                <div className="text-red-800 font-semibold text-md">
                  Exès de consommation
                </div>
              </div>
            ) : (
              <div className="h-full px-5 py-3 shadow rounded-xl flex flex-col justify-center items-center bg-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-16 h-16 text-green-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <div className="text-green-800 font-semibold text-md">
                  Consommation normal
                </div>
              </div>
            )}
          </div>
          <div className="col-span-2">
            <div className="h-full bg-[url('../public/weather.jpg')] bg-cover bg-opacity-50 rounded-xl shadow">
              <div className="h-full flex flex-col justify-center items-center bg-white bg-opacity-50 rounded-xl">
                <div className="text-2xl font-bold text-primary-500">Météo</div>
                <div className="bg-white rounded-xl p-4 shadow-inner">
                  <span className="text-4xl font-semibold text-primary-900">
                    30°C
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* TRANCHE */}
          <div className="col-span-4">
            <Section title="Niveau tranche">
              <Counter num={Tranche(my_kWh).tranche} unit="tranche" />
            </Section>
          </div>
          {/* TRANCHE */}
          {/* PRIX */}
          <div className="col-span-4">
            <Section title="Prix de la consommation">
              <Counter num={Tranche(my_kWh).price} unit="DHS" />
            </Section>
          </div>
          {/* PRIX */}
          {/* CONSOMATION MOYENNE */}
          <div className="col-span-4">
            <Section title="Consommation moy..." className="relative">
              <div className="absolute top-3 right-5">
                <Dropdown selected={filterAvg} setSelected={setFilterAvg} />
              </div>
              <Counter num={152} unit="kWh" />
            </Section>
          </div>
          {/* CONSOMATION MOYENNE */}
        </div>
        {/* DASH BODY */}
      </div>
    );
  }
  if (status === "loading") {
    return <Loader />;
  }
}
