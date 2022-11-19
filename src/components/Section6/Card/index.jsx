import React from "react";

function Card({
  content,
  content_small,
  title,
  price,
  popular = false,
  small = false,
}) {
  return (
    <div
      class={`p-4 w-full max-w-sm bg-white rounded-lg border shadow-md sm:p-8 dark:bg-[#1c1e22] dark:border-[#222429] relative ${
        small && "scale-90"
      }`}
    >
      {popular && (
        <div className="absolute -right-10 -top-2.5">
          <span class="bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900 shadow-lg">
            Popular
          </span>
        </div>
      )}
      <h5 class="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
        {title}
      </h5>
      <div class="flex items-baseline text-gray-900 dark:text-white">
        <span class="text-3xl font-semibold">€</span>
        <span class="text-5xl font-extrabold tracking-tight">{price}</span>
      </div>

      <ul role="list" class="my-7 space-y-5">
        {content.map((e, index) => (
          <li class="flex space-x-3" key={index}>
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{e}</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
              {e}
            </span>
          </li>
        ))}
        {content_small?.map((e, index) => (
          <li
            class="flex space-x-3 line-through decoration-gray-500"
            key={index}
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{e}</title>
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="text-base font-normal leading-tight text-gray-500">
              {e}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Card;
