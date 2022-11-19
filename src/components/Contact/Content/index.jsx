import React from "react";

import Header from "../../MainPage/Header";
import Input from "../Input";

function Content() {
  return (
    <div>
      <Header />
      <div className="bg-[#222429] w-full h-[20rem] flex justify-center items-center">
        <h1 className="text-6xl text-white uppercase tracking-wider pt-28">
          Contact
        </h1>
      </div>

      <div className="px-[6%] lg:px-[17rem] py-[5rem] flex flex-col relative gap-16">
        <form name="offers" method="post">
          <input type="hidden" name="offers" value="offers" />
          <div class="grid gap-6 mb-6 grid-cols-3 md:grid-cols-3">
            <div className="col-span-1 lg:col-span-1">
              <Input
                type="text"
                name="Nume"
                id="name"
                placeholder="Ionut Daniel"
              />
            </div>
            <div className="col-span-2 lg:col-span-1">
              <Input
                type="email"
                name="Email"
                id="email"
                placeholder="office@exemple.com"
              />
            </div>
            <div className="col-span-3 lg:col-span-1">
              <Input
                type="text"
                name="Numar de telefon"
                id="phone"
                placeholder="076 123 xx xx"
              />
            </div>
            <div className="col-span-3">
              <label
                for="message"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Scrie mesaj
              </label>
              <textarea
                id="message"
                rows="4"
                name="Message"
                class="text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:yellow-blue-500 block w-full p-2.5 dark:bg-[#222429] dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder="Mesajul tău..."
              ></textarea>
            </div>
            <div class="flex items-start mb-6 col-span-3">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  name="Checkbox"
                  class="w-4 h-4 text-yellow-400 bg-gray-100 rounded border-gray-300 focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  required
                />
              </div>
              <label
                for="remember"
                class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-yellow-400 hover:underline dark:text-4ellow-500"
                >
                  terms and conditions
                </a>
                .
              </label>
            </div>
            <input type="hidden" name="form-name" value="contact"></input>
            <button
              type="submit"
              class="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-500"
            >
              Trimite mesajul
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Content;
