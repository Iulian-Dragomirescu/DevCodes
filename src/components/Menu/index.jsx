import React from "react";

function Drawer() {
  return (
    <div
      id="drawer-navigation"
      className="fixed z-40 h-screen p-4 overflow-y-auto bg-[#222429] w-80 dark:bg-[#222429] dark"
      tabindex="-1"
      aria-labelledby="drawer-navigation-label"
      aria-hidden="true"
      backdrop={false}
      backdropClases="backdrop"
    >
      <h5
        id="drawer-navigation-label"
        className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
      >
        Menu
      </h5>
      <button
        type="button"
        data-drawer-dismiss="drawer-navigation"
        aria-controls="drawer-navigation"
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
      >
        <svg
          aria-hidden="true"
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span className="sr-only">Close menu</span>
      </button>
      <div className="py-4 overflow-y-auto">
        <ul
          className="space-y-2"
          data-drawer-dismiss="drawer-navigation"
          aria-controls="drawer-navigation"
        >
          <li>
            <a
              href="/#home"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                width={19}
                height={19}
                fill="none"
                stroke="#9ca3af"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M3.75 9.938V21a.75.75 0 0 0 .75.75H9v-6.375a1.125 1.125 0 0 1 1.125-1.125h3.75A1.125 1.125 0 0 1 15 15.375v6.375h4.5a.75.75 0 0 0 .75-.75V9.937" />
                <path d="m22.5 12-9.99-9.563c-.234-.248-.782-.25-1.02 0L1.5 11.999" />
                <path d="M18.75 8.39V3H16.5v3.234" />
              </svg>
              <span className="ml-3">Acasă</span>
            </a>
          </li>
          <li>
            <a
              href="#serviciile-noastre"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                width={19}
                height={19}
                fill="none"
                stroke="#9ca3af"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m20.381 6.452-7-3.192c-.76-.347-2.002-.347-2.76 0L3.623 6.452c-.825.375-.825.989 0 1.364l6.937 3.164c.792.36 2.095.36 2.887 0l6.937-3.164c.821-.375.821-.99-.004-1.364Z" />
                <path d="m7.5 14.462-3.876 1.74c-.825.375-.825.989 0 1.364l6.937 3.164c.792.36 2.095.36 2.887 0l6.937-3.164c.825-.375.825-.99 0-1.364l-3.747-1.804" />
                <path d="m7.5 9.586-3.881 1.742c-.825.375-.825.989 0 1.364l6.937 3.163c.792.361 2.095.361 2.887 0l6.937-3.163c.83-.375.83-.99.005-1.364L16.5 9.586" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Serviciile noastre
              </span>
            </a>
          </li>
          <li>
            <a
              href="/#cum-te-putem-ajuta-noi"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                width={19}
                height={19}
                fill="none"
                stroke="#9ca3af"
                strokeLinecap="round"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.5 7.688s.067-1.547 1.572-2.787c.894-.737 1.967-.95 2.928-.963.878-.01 1.663.138 2.132.367.802.392 2.368 1.349 2.368 3.383 0 2.14-1.368 3.111-2.923 4.18-1.554 1.07-1.952 2.118-1.952 3.32" />
                <path
                  fill="#9ca3af"
                  stroke="none"
                  d="M11.625 20.25a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Cum te putem ajuta noi?
              </span>
            </a>
          </li>
          <li>
            <a
              href="/#de-ce-sa-ne-alegi-pe-noi"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                width={19}
                height={19}
                fill="none"
                stroke="#9ca3af"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z" />
                <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                De ce sa ne alegi pe noi?
              </span>
            </a>
          </li>
          <li>
            <a
              href="/#cum-lucram-noi"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                width={19}
                height={19}
                fill="none"
                stroke="#9ca3af"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20.25 6H3.75A2.25 2.25 0 0 0 1.5 8.25v10.5A2.25 2.25 0 0 0 3.75 21h16.5a2.25 2.25 0 0 0 2.25-2.25V8.25A2.25 2.25 0 0 0 20.25 6Z" />
                <path d="M6.75 6V4.5A1.5 1.5 0 0 1 8.25 3h7.5a1.5 1.5 0 0 1 1.5 1.5V6" />
                <path d="M22.5 11.25h-21" />
                <path d="M15 11.25v1.125a.375.375 0 0 1-.375.375h-5.25A.375.375 0 0 1 9 12.375V11.25" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">
                Cum lucram noi?
              </span>
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                width={19}
                height={19}
                fill="none"
                stroke="#9ca3af"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.14 17.53c-.744-.75-2.546-1.844-3.421-2.285-1.139-.574-1.233-.62-2.128.045-.597.444-.994.84-1.693.691-.7-.149-2.218-.99-3.548-2.315-1.33-1.326-2.219-2.889-2.368-3.585-.15-.697.253-1.09.693-1.688.62-.843.573-.984.043-2.123-.413-.886-1.54-2.672-2.292-3.413-.805-.795-.805-.654-1.324-.439a7.508 7.508 0 0 0-1.211.646c-.75.498-1.166.912-1.457 1.534-.292.622-.422 2.08 1.081 4.811s2.558 4.127 4.74 6.304c2.184 2.177 3.862 3.348 6.316 4.724 3.036 1.7 4.2 1.369 4.824 1.078.624-.29 1.04-.703 1.54-1.453a7.43 7.43 0 0 0 .646-1.21c.216-.516.357-.516-.44-1.321Z" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Drawer;
