import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategories from "./RestaurantMenuCategories";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(0);

  if (resInfo === null) <Shimmer />;

  const updatedMenuList =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const itemCategories = updatedMenuList?.filter((menuCategoryList) => {
    return (
      menuCategoryList.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  return (
    <div className="max-w-lg mx-auto">
      {itemCategories?.map((itemDetails, index) => {
        return (
          <RestaurantMenuCategories
            menuCategories={itemDetails}
            index={index}
            key={index}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
