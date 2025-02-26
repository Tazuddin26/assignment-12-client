import { useEffect, useState } from "react";
import Apartments from "./Apartments";
import UseAxiosPublic from "../../Hook/useAxiosPublic";
import UseAuth from "../../Hook/useAuth";
import { BiSolidBuildingHouse } from "react-icons/bi";

const Apartment = () => {
  const { loading, setLoading } = UseAuth();
  const axiosPublic = UseAxiosPublic();
  const [rentRange, setRentRange] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const handleSearch = () => {
    setSearch(searchText);
  };
  // console.log("all data", apartments);
  useEffect(() => {
    const getData = async () => {
      const [min_rent, max_rent] = rentRange
        ? rentRange.split("-").map(Number)
        : [0, 1000000];
      try {
        const res = await axiosPublic.get("/apartments", {
          params: {
            min_rent,
            max_rent,
            search: search || "",
            limit: 8,
            page: currentPage,
          },
        });
        // console.log(res.data);
        setApartments(Array.isArray(res.data.result) ? res.data.result : []);
        setTotalPage(res.data.totalPage || 0);
        // console.log(res.data.totalPage);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };
    getData();
    console.log("Current Page:", currentPage);
  }, [rentRange, search, currentPage]);

  return (
    <div className="max-w-7xl mx-auto my-10 mt-32">
      <h1 className="font-tauri text-4xl text-center ">
        Apartments ShowCase
      </h1>
      <div className="divider divider-accent lg:mx-36 mx-4 my-10 ">
        <BiSolidBuildingHouse size={68} className="text-indigo-600 w-28 " />
      </div>
      <div>
        <div className="flex flex-col lg:flex-row my-6 items-center gap-6 justify-center">
          <div>
            <select
              onChange={(e) => setRentRange(e.target.value)}
              defaultValue="default"
              name="rentRange"
              id="category"
              className="border p-3 input input-bordered input-success rounded-md"
            >
              <option value="default" disabled>
                Filter By Price
              </option>
              <option value="1000-2000">$0 - $2,000</option>
              <option value="1000-2000">$1,000 - $2,000</option>
              <option value="2000-2500">$2,000 - $2,500</option>
              <option value="2500-3000">$2,500 - $3,000</option>
              <option value="3000-4500">$3,000 - $4,500</option>
            </select>
          </div>
          <div className=" ">
            <div className="join">
              <div>
                <div>
                  <input
                    className="input input-bordered input-success join-item"
                    type="text"
                    onChange={(e) => setSearchText(e.target.value)}
                    value={searchText}
                    name="search"
                    placeholder="Apartment size"
                  />
                </div>
              </div>
              <div className="indicator ">
                <button
                  onClick={() => handleSearch()}
                  className="btn join-item btn-success"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4">
        {apartments
          ? apartments.map((apartment) => (
              <Apartments key={apartment._id} apartment={apartment} />
            ))
          : null}
      </div>

      <div className="flex justify-center items-center space-x-1">
        <div className="flex items-center space-x-3 px-4 py-2 mx-1 text-gray-500 rounded-md  bg-s-300  dark:text-gray-600">
          {totalPage > 0 &&
            Array.from({ length: totalPage }, (_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentPage(index + 1);
                }}
                className={
                  currentPage === index + 1
                    ? "btn items-center hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md sm:flex dark:bg-gray-800 dark:text-gray-200 hover:bg-green-600 dark:hover:bg-green-500 hover:text-white dark:hover:text-gray-200"
                    : "btn"
                }
                title="previous"
                type="button"
              >
                {index + 1}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Apartment;
