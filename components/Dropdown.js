import { useState } from "react";

export default function Dropdown(props) {
  const [dropdown, setDropdown] = useState(false);
  return (
    <div className="text-right">
      <button
        class="text-white w-20 bg-primary-700 hover:bg-primry-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm py-1 text-center inline-flex justify-center items-center"
        type="button"
        onClick={() => setDropdown(!dropdown)}
      >
        {props.selected}
        <svg
          class="ml-2 w-4 h-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      {dropdown ? (
        <div
          id="dropdownDivider"
          class="z-10 w-20 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul
            class="py-1 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDividerButton"
          >
            {props.isChart ? (
              <li>
                <a
                  onClick={() => {
                    setDropdown(false);
                    props.setSelected("heure");
                  }}
                  class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  heure
                </a>
              </li>
            ) : null}

            <li>
              <a
                onClick={() => {
                  setDropdown(false);
                  props.setSelected("jour");
                }}
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                jour
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  setDropdown(false);
                  props.setSelected("mois");
                }}
                class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                mois
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}
