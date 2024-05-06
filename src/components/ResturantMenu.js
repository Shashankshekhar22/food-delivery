import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) <Shimmer />;

  const resName = resInfo?.cards[0].card.card.text;
  const resMenu =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  return (
    <div className="menu">
      <h1>{resName}</h1>
      <h2>Menu</h2>
      <h3>{resMenu?.title}</h3>
      {resMenu?.itemCards.map((menuList) => {
        return (
          <li key={menuList?.card?.info?.id}>
            {menuList?.card?.info?.name} -{" "}
            {menuList?.card?.info?.price / 100 || "Cost Not Available"};
          </li>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
