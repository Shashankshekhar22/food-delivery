import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const data = props?.resData?.info;
  return (
    <div className="w-52 h-96 m-3 p-3 shadow-sm hover:shadow-2xl rounded-3xl hover:bg-slate-100 ">
      <img
        className="w-52 h-52 rounded-lg"
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
