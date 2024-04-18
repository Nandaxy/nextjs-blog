import { useRouter } from "next/navigation";
import { useRef } from "react";

const InputSearch = ({ type }) => {
  const searchRefDesk = useRef();
  const searchRefMobi = useRef();
  const router = useRouter();

  const handleSearchMobiDesk = (event) => {
    const keyword = searchRefDesk.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  const handleSearchMobi = (event) => {
    const keyword = searchRefMobi.current.value;

    if (!keyword || keyword.trim() == "") return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
      document.getElementById("closeSearchModal").click();
    }
  };

  if (type === "desktop") {
    return (
      <div className="hidden md:block">
        <label className="flex items-center gap-2 border rounded-lg dark:border-gray-700 bg-white dark:bg-bgDark">
          <input
            type="text"
            className="grow px-4 py-2 focus:outline-none bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200"
            placeholder="Search"
            ref={searchRefDesk}
            onKeyDown={handleSearchMobiDesk}
          />
          <span className="pr-2 cursor-pointer" onClick={handleSearchMobiDesk}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="w-6 h-6 opacity-70 fill-black dark:fill-white"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </label>
      </div>
    );
  }

  if (type === "mobile") {
    return (
      <div className="block md:hidden mr-1">
        <span
          className="flex justify-center items-center"
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="w-6 h-6 opacity-70 m-auto"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        <dialog id="my_modal_2" className="modal  modal-top">
          <div className="modal-box bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200">
            <h3 className="font-bold text-lg">Cari di Blog!</h3>
            <label className="input input-bordered flex items-center gap-2 mt-8 bg-white dark:bg-bgDark text-gray-600 dark:text-gray-200">
              <input
                type="text"
                className="grow"
                placeholder="Search"
                ref={searchRefMobi}
                onKeyDown={handleSearchMobi}
              />
              <svg
                onClick={handleSearchMobi}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button id="closeSearchModal">close</button>
          </form>
        </dialog>
      </div>
    );
  }
};

export default InputSearch;
