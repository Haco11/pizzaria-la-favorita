import React, { useState } from "react";
import data, {
  MenuData,
  Pizza,
  Burger,
  Salad,
  SalladRoll,
  Pasta,
  Kebab,
} from "../data";
import "./Menu.scss";

const Menu: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category === currentCategory ? null : category);
  };

  return (
    <div className="menu">
      {/* Category buttons */}
      <div>
        <button onClick={() => handleCategoryChange("pizza")}>Pizzas</button>
        <button onClick={() => handleCategoryChange("hamburgare")}>
          Hamburgers
        </button>
        <button onClick={() => handleCategoryChange("sallad")}>Salads</button>
        <button onClick={() => handleCategoryChange("salladrull")}>
          Sallad Rolls
        </button>
        <button onClick={() => handleCategoryChange("pasta")}>Pasta</button>
        <button onClick={() => handleCategoryChange("kebab")}>Kebabs</button>
        <button onClick={() => handleCategoryChange("")}>Show All</button>
      </div>

      {/* Menu items */}
      {Object.keys(data)?.map((categoryKey) => {
        const category = data[categoryKey as keyof MenuData];
        if (
          !currentCategory ||
          (currentCategory === "pizza" && category.pizzas) ||
          currentCategory === categoryKey
        ) {
          return (
            <section key={categoryKey}>
              <div className="menu-title">
                <h4>{category.title}</h4>
              </div>
              {category.pizzas && category.pizzas.length > 0 && (
                <div key={categoryKey}>
                  <ul className="item-list">
                    {category.pizzas?.map((pizza: Pizza, index: number) => (
                      <li key={index}>
                        <div className="item-title">{pizza.title}</div>
                        <div className="item-ingredients">
                          {pizza.ingredients.join(", ")}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {category.hamburgare && category.hamburgare.length > 0 && (
                <ul>
                  {category.hamburgare?.map((burger: Burger, index: number) => (
                    <li key={index}>
                      {burger.title} - Menu: {burger.price.menu} kr, No Menu:{" "}
                      {burger.price.noMenu} kr
                    </li>
                  ))}
                </ul>
              )}
              {category.sallader && category.sallader.length > 0 && (
                <ul>
                  {category.sallader?.map((salad: Salad, index: number) => (
                    <li key={index}>
                      {salad.title} - {salad.ingredients.join(", ")}
                    </li>
                  ))}
                </ul>
              )}
              {category.salladrullar && category.salladrullar.length > 0 && (
                <ul>
                  {category.salladrullar?.map(
                    (salladRull: SalladRoll, index: number) => (
                      <li key={index}>
                        {salladRull.title} - {salladRull.ingredients.join(", ")}
                      </li>
                    )
                  )}
                </ul>
              )}
              {category.pastas && category.pastas.length > 0 && (
                <ul>
                  {category.pastas?.map((pasta: Pasta, index: number) => (
                    <li key={index}>
                      {pasta.title} - {pasta.ingredients.join(", ")}
                    </li>
                  ))}
                </ul>
              )}
              {category.kebabs && category.kebabs.length > 0 && (
                <ul>
                  {category.kebabs?.map((kebab: Kebab, index: number) => (
                    <li key={index}>
                      {kebab.title} - {kebab.ingredients.join(", ")} -{" "}
                      {kebab.price} kr
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Menu;
