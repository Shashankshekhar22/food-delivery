import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const data = props?.resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="restaurant-logo"
        src={`${CDN_URL}${props?.resData?.info?.cloudinaryImageId}`}
      ></img>
      <h4>{data?.name}</h4>
      <h4>{data?.cuisines.join(", ")}</h4>
      <h4>{data?.avgRating}</h4>
      <h4>{data?.costForTwo}</h4>
      <h4>{data?.locality}</h4>
    </div>
  );
};

export default RestaurantCard;
