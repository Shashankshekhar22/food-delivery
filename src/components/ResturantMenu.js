import { useEffect, useState } from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resMenu, setResMenu] = useState(null);
  const [resName, setResName] = useState("");
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const dataJson = await data.json();

    setResName(dataJson.data.cards[0].card.card.text);
    setResMenu(
      dataJson?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
        ?.card?.card
    );
  };
  if (resMenu === null) <Shimmer />;
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
