import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const restaurantMenu = useRestaurantMenu(resId);

  return (
    <div className="restaurant-menu">
      <h1>restaurant name</h1>
      <h3>
        {restaurantMenu.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} : Rs.{" "}
              {item.card.info.defaultPrice / 100 || item.card.info.price / 100}
            </li>
          );
        })}
      </h3>
    </div>
  );
};

export default RestaurantMenu;
