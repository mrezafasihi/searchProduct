import { useState } from "react";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { fetchSearch } from "./Mouser";
import { ClipLoader } from "react-spinners";
import CustomeModal from "./Modal";

function App() {
  const [valueInputSearcch, setValueInputSearch] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const sendRequestSearch = (e) => {
    e.preventDefault();
    refetch();
  };
  const {
    data: response,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["search"],
    queryFn: () => fetchSearch({ valueInputSearcch }),
    refetchOnWindowFocus: false,
    enabled: false,
  });

  const handleSelect = (selected) => {
    setIsModalOpen(true);
    setSelectedProduct(selected);
  };
  if (isError) return <p>{error.toString()}</p>;
  console.log(response);
  return (
    <div className=" ">
      <h1 className="leading-[0] text-3xl md:text-5xl mt-4 font-bold cursor-pointer text-center lg:leading-3 hover:leading-10 hover:tracking-wide text-blue-600 lg:text-7xl transition-all ease-in-out duration-500 hover:text-blue-800 md:pt-[4%]">
        Mouser Products
      </h1>
      <form onSubmit={sendRequestSearch} className="w-[60%]  mx-auto mt-[5%] ">
        <label
          htmlFor="search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute  inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="enter the Products you want"
            required
            onChange={(e) => setValueInputSearch(e.target.value)}
          />
          <button
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {isLoading ? (
        <ClipLoader className="flex justify-center" color="#36d7b7" />
      ) : (
        <div className="px-6 flex  flex-wrap  justify-center items-center ">
          {response?.SearchResults?.Parts.map((item, index) => {
            return (
              <div
                key={index}
                className="flex bg-white flex-col justify-between py-3 px-3 w-[280px] h-[350px] text-center my-3 mx-4 items-center  cursor-pointer rounded-lg transition-all ease-in-out duration-200 hover:translate-x-1 hover:translate-y-1 shadow-[rgba(6,_24,_44,_0.4)_0px_0px_0px_2px,_rgba(6,_24,_44,_0.65)_0px_4px_6px_-1px,_rgba(255,_255,_255,_0.08)_0px_1px_0px_inset]"
                onClick={() => handleSelect(item)}
              >
                <img
                  className="w-[120px] h-[120px]"
                  src={item.ImagePath ? item.ImagePath : "/no-Image.png"}
                  alt="productImage"
                />
                <p className="font-bold text-pretty">{item.Description}</p>
                <p>
                  <span>quantity : </span>
                  {item.AvailabilityInStock}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {isModalOpen && (
        <CustomeModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          selectedProduct={selectedProduct}
        />
      )}
    </div>
  );
}

export default App;
