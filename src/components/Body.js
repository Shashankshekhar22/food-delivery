import RestaurantCard, { vegRestaurantCard } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State Variable HOOKS
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const RestaurantCardVeg = vegRestaurantCard(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const convertedData = await data.json();
    const resConvertedData =
      convertedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setFilteredListOfRestaurant(resConvertedData);
    setListOfRestaurant(resConvertedData);
    console.log(filteredListOfRestaurant);
  };
  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) {
    return <h1>You are offline</h1>;
  }
  return listOfRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-slate-100">
      <div className="m-4 p-4">
        <button
          className="m-2 w-72 h-10 align-middle text-center text-white rounded-3xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => {
            const filteredList = listOfRestaurants?.filter(
              (restaurantData) => restaurantData.info.avgRating > 4
            );
            setFilteredListOfRestaurant(filteredList);

            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
        <input
          type="text"
          placeholder="Search"
          className="m-4 bg-white border border-slate-300 p-1 rounded-md shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button
          className="m-2 w-32 h-10 align-middle text-center text-white rounded-3xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => {
            const filteredRestaurant = listOfRestaurants.filter((resData) => {
              return resData.info.name
                .toLowerCase()
                .includes(searchText.toLocaleLowerCase());
            });
            setFilteredListOfRestaurant(filteredRestaurant);
          }}
        >
          Search
        </button>
        <button
          className="m-2 w-32 h-10 align-middle text-center text-white rounded-3xl bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:outline-none focus:ring focus:ring-violet-300"
          onClick={() => {
            setFilteredListOfRestaurant(listOfRestaurants);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredListOfRestaurant.map((responseData) => (
          <Link
            to={"/restaurants/" + responseData?.info.id}
            key={responseData?.info.id}
          >
            {console.log("VEGGGGG", responseData?.info?.veg)}
            {/* <RestaurantCard resData={responseData} /> */}

            {responseData.info.veg ? (
              <RestaurantCardVeg resData={responseData} />
            ) : (
              <RestaurantCard resData={responseData} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
