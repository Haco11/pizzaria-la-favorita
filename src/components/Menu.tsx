import React from "react";
import data, {
  MenuData,
  Pizza,
  Burger,
  Salad,
  SalladRoll,
  Pasta,
  Kebab,
} from "../data";

const Menu: React.FC = () => {
  return (
    <div>
      <h1>Menu</h1>

      {/* Pizzas */}
      <section>
        <h2>Pizzas</h2>
        {Object.keys(data)?.map((categoryKey) => {
          const category = data[categoryKey as keyof MenuData];
          if (category.pizzas) {
            return (
              <div key={categoryKey}>
                <h3>{category.title}</h3>
                <ul>
                  {category.pizzas?.map((pizza: Pizza, index: number) => (
                    <li key={index}>
                      {pizza.title} - {pizza.ingredients.join(", ")}
                    </li>
                  ))}
                </ul>
              </div>
            );
          }
          return null;
        })}
      </section>

      {/* Hamburgers */}
      <section>
        <h2>Hamburgers</h2>
        {data.hamburgare && (
          <ul>
            {data.hamburgare.hamburgare?.map(
              (burger: Burger, index: number) => (
                <li key={index}>
                  {burger.title} - Menu: {burger.price.menu} kr, No Menu:{" "}
                  {burger.price.noMenu} kr
                </li>
              )
            )}
          </ul>
        )}
      </section>

      {/* Salads */}
      <section>
        <h2>Salads</h2>
        {data.sallad && (
          <ul>
            {data.sallad.sallader?.map((salad: Salad, index: number) => (
              <li key={index}>
                {salad.title} - {salad.ingredients.join(", ")}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Sallad Rolls */}
      <section>
        <h2>Sallad Rolls</h2>
        {data.salladrull && (
          <ul>
            {data.salladrull.salladrullar?.map(
              (salladRull: SalladRoll, index: number) => (
                <li key={index}>
                  {salladRull.title} - {salladRull.ingredients.join(", ")}
                </li>
              )
            )}
          </ul>
        )}
      </section>

      {/* Pasta */}
      <section>
        <h2>Pasta</h2>
        {data.pasta && (
          <ul>
            {data.pasta.pastas?.map((pasta: Pasta, index: number) => (
              <li key={index}>
                {pasta.title} - {pasta.ingredients.join(", ")}
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Kebabs */}
      <section>
        <h2>Kebabs</h2>
        {data.kebab && (
          <ul>
            {data.kebab.kebabs?.map((kebab: Kebab, index: number) => (
              <li key={index}>
                {kebab.title} - {kebab.ingredients.join(", ")} - {kebab.price}{" "}
                kr
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Menu;
