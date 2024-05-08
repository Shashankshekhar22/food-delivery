import { useDispatch, useSelector } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartDetails = useSelector((dataInCart) => dataInCart.cart.items);
  let total = 0;
  const disPatch = useDispatch();

  const handleClearCart = () => {
    return disPatch(clearCart(cartDetails));
  };

  const removeItemFromCart = (menuItemId) => {
    const updatedItems = cartDetails.filter(
      (item) => item?.card?.info?.id !== menuItemId
    );
    disPatch(removeItem(updatedItems));
  };

  return (
    <div>
      <div className="float-right">
        <button
          className="p-2 m-2 align-middle text-center text-white bg-blue-500 cursor
                      hover:bg-blue-600 active:bg-blue-700 focus:outline-none 
                      focus:ring rounded-2xl text-md w-auto focus:ring-violet-300"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>
      <div id="accordion" className="accordion-content px-4 py-3 w-full ">
        {cartDetails?.map((menuList) => {
          return (
            <ul
              key={menuList?.card?.info?.id}
              className="flex flex-row m-2 justify-between shadow-lg mt-12"
            >
              <li>
                <img
                  src={CDN_URL + menuList.card.info.imageId}
                  className="w-12 h-12"
                />
              </li>
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
                  className="m-2 p-2 align-middle text-center text-white bg-blue-500
                      hover:bg-blue-600 active:bg-blue-700 focus:outline-none 
                      focus:ring rounded-2xl text-md w-auto focus:ring-violet-300"
                  onClick={() => {
                    removeItemFromCart(menuList?.card?.info?.id);
                  }}
                >
                  Remove
                </button>
              </li>
              <li className="hidden">
                {" "}
                {(total = total + menuList?.card?.info?.price / 100)}
              </li>
            </ul>
          );
        })}
        {cartDetails.length ? (
          <div className="p-2 shadow-lg w-full font-bold h-10  text-green-500">
            <span>Total </span>
            <span className="float-right mx-5">{"₹" + Math.round(total)}</span>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Cart;
