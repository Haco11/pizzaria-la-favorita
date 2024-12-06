import React, { useState } from "react";
import data, {
  MenuData,
  Pizza,
  Burger,
  Salad,
  SalladRoll,
  Pasta,
  Kebab,
} from "../../data";
import "./Menu.scss";

const Menu: React.FC = () => {
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setCurrentCategory(category === currentCategory ? null : category);
  };

  return (
    <div className="menu">
      {/* Category buttons */}
      <div className="menu-filter">
        <button
          className={currentCategory === "pizza" ? "active" : ""}
          onClick={() => handleCategoryChange("pizza")}>
          Pizzas
        </button>
        <button
          className={currentCategory === "hamburgare" ? "active" : ""}
          onClick={() => handleCategoryChange("hamburgare")}>
          Hamburgare
        </button>
        <button
          className={currentCategory === "sallad" ? "active" : ""}
          onClick={() => handleCategoryChange("sallad")}>
          Sallad
        </button>
        <button
          className={currentCategory === "salladrull" ? "active" : ""}
          onClick={() => handleCategoryChange("salladrull")}>
          Salladrullar
        </button>
        <button
          className={currentCategory === "pasta" ? "active" : ""}
          onClick={() => handleCategoryChange("pasta")}>
          Pasta
        </button>
        <button
          className={currentCategory === "kebab" ? "active" : ""}
          onClick={() => handleCategoryChange("kebab")}>
          Kebab
        </button>
        <button onClick={() => handleCategoryChange("")}>Menu</button>
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
              {category.sallader && category.sallader.length > 0 && (
                <ul className="item-list">
                  {category.sallader?.map((salad: Salad, index: number) => (
                    <li key={index}>
                      <div className="item-title">{salad.title}</div>
                      <div className="item-ingredients">
                        {salad.ingredients.join(", ")}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {category.salladrullar && category.salladrullar.length > 0 && (
                <ul className="item-list">
                  {category.salladrullar?.map(
                    (salladRull: SalladRoll, index: number) => (
                      <li key={index}>
                        <div className="item-title">{salladRull.title}</div>
                        <div className="item-ingredients">
                          {salladRull.ingredients.join(", ")}
                        </div>
                      </li>
                    )
                  )}
                </ul>
              )}
              {category.pastas && category.pastas.length > 0 && (
                <ul className="item-list">
                  {category.pastas?.map((pasta: Pasta, index: number) => (
                    <li key={index}>
                      <div className="item-title">{pasta.title}</div>
                      <div className="item-ingredients">
                        {pasta.ingredients.join(", ")}
                      </div>
                    </li>
                  ))}
                </ul>
              )}
              {category.kebabs && category.kebabs.length > 0 && (
                <ul className="item-list">
                  {category.kebabs?.map((kebab: Kebab, index: number) => (
                    <li key={index}>
                      <div className="item-title">{kebab.title}</div>
                      <div className="item-ingredients">
                        {kebab.ingredients.join(", ")} {kebab.price}:-
                      </div>
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
