import React from "react";

function Input({ name, id, placeholder }) {
  return (
    <div>
      <label
        for={id}
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {name}
      </label>
      <input
        type="text"
        id={id}
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:yellow-blue-500 block w-full p-2.5 dark:bg-[#222429] dark:border-neutral-700 dark:placeholder-neutral-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
}

export default Input;
