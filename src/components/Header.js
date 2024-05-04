import image from "../../assets/images/food-delivery.jpg";
const Header = () => {
  return (
    <div className="header">
      <div>
        <img src={image} alt="food-delivery" className="logo"></img>
      </div>
      <div className="nav-items">
        <ul className="list-item">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
