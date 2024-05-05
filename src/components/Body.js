import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

const Body = () => {
  // State Variable HOOKS
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [filteredListOfRestaurant, setFilteredListOfRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <button
          className="res-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
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
          value={searchText}
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button
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
          onClick={() => {
            setFilteredListOfRestaurant(listOfRestaurants);
            setSearchText("");
          }}
        >
          Reset
        </button>
      </div>
      <div className="res-container">
        {filteredListOfRestaurant.map((responseData) => (
          <RestaurantCard resData={responseData} key={responseData?.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
