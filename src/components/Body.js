import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockdata";
import { useState } from "react";

const Body = () => {
  // State Variable HOOKS
  const [listOfRestaurants, setListOfRestaurant] = useState([...resData]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="res-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (restaurantData) => restaurantData.info.avgRating > 4
            );
            setListOfRestaurant(filteredList);

            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((responseData) => (
          <RestaurantCard resData={responseData} key={responseData?.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
