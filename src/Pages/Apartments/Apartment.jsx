import { useEffect, useState } from "react";
import UseApartment from "../../Hook/useApartment";
import Apartments from "./Apartments";
import UseAxiosPublic from "../../Hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Apartment = () => {
  // const [apartments] = UseApartment();
  const axiosPublic = UseAxiosPublic();
  const [rentRange, setRentRange] = useState("");
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [apartments, setApartments] = useState([]);
  const handleSearch = () => {
    setSearch(searchText);
  };
  console.log("all data", apartments);
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
          },
        });
        setApartments(res.data); 
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };
    getData();
  }, [rentRange, search]);

  // const { data: apartments = [], refetch } = useQuery({
  //   queryKey: ["apartments", rentRange],
  //   queryFn: async () => {
  //     const [min_rent, max_rent] = rentRange
  //       ? rentRange.split("-").map(Number)
  //       : [0, Infinity];

  //     const res = await axiosPublic.get("/apartments", {
  //       params: {
  //         min_rent: min_rent || "",
  //         max_rent: max_rent || "",
  //       },
  //     });
  //     console.log(res.data);
  //     return [res.data, refetch];
  //   },
  // });

  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1>Apartments:{apartments.length}</h1>
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
                    placeholder="Enter the Location"
                  />
                </div>
              </div>
              <div className="indicator">
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
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {apartments.map((apartment) => (
          <Apartments key={apartment._id} apartment={apartment} />
        ))}
      </div>
    </div>
  );
};

export default Apartment;
