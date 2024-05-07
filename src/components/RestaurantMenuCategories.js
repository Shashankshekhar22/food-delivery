import { useState } from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantMenuCategories = ({
  menuCategories,
  showItems,
  setShowIndex,
  index,
}) => {
  const IMAGE_URL = CDN_URL;
  const toggleSection = () => {
    setShowIndex();
  };
  const itemDetails = menuCategories;
  return (
    <div className="border border-gray-300 rounded m-4">
      <div className="border-b border-gray-300">
        <button
          className="w-full text-left px-4 py-3 text-sm font-semibold focus:outline-none"
          onClick={() => toggleSection(index)}
        >
          {itemDetails.card.card.title}
          <span className="float-right">{showItems ? "-" : "+"}</span>
        </button>
        {showItems && (
          <div id="accordion" className="accordion-content px-4 py-3 w-full">
            {itemDetails.card.card?.itemCards?.map((menuList) => {
              return (
                <ul
                  key={menuList?.card?.info?.id}
                  className="flex flex-row m-2 shadow-lg justify-between"
                >
                  <img
                    src={IMAGE_URL + menuList.card.info.imageId}
                    className="w-12 h-12"
                  />
                  <li className="list-none text-xs p-2 w-52">
                    {menuList?.card?.info?.name}
                  </li>
                  <li>
                    <span className="text-xs p-2 justify-end">
                      {menuList?.card?.info?.price
                        ? "₹" + menuList?.card?.info?.price / 100
                        : ""}
                    </span>
                  </li>
                  <li>
                    <button
                      className="m-2 align-middle text-center text-white bg-blue-500
                      hover:bg-blue-600 active:bg-blue-700 focus:outline-none 
                      focus:ring rounded-2xl text-md w-12 focus:ring-violet-300"
                    >
                      Add
                    </button>
                  </li>
                </ul>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenuCategories;
