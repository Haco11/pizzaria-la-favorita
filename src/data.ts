export interface Pizza {
  title: string;
  ingredients: string[];
}

export interface Burger {
  title: string;
  price: {
    menu: number;
    noMenu: number;
  };
}

export interface Salad {
  title: string;
  ingredients: string[];
}

export interface SalladRoll {
  title: string;
  ingredients: string[];
}

export interface Pasta {
  title: string;
  ingredients: string[];
}

export interface Kebab {
  title: string;
  ingredients: string[];
  price: number;
}

export interface MenuData {
  [key: string]: {
    title: string;
    pizzas?: Pizza[];
    hamburgare?: Burger[];
    sallader?: Salad[];
    salladrullar?: SalladRoll[];
    pastas?: Pasta[];
    kebabs?: Kebab[];
  };
}
const data: MenuData = {
  pizzaclass1: {
    title: "Prisklass 1 - 114:-  M 208:- L 302:-",
    pizzas: [
      {
        title: "Vesuvio",
        ingredients: ["Skinka"],
      },
      {
        title: "Margherita",
        ingredients: ["Ost"],
      },
      {
        title: "Al Fungi",
        ingredients: ["Champinjoner"],
      },
    ],
  },
  pizzaclass2: {
    title: "Prisklass 2 - 127:- M 234:- L 317:-",
    pizzas: [
      {
        title: "Räkpizza",
        ingredients: ["Räkor"],
      },
      {
        title: "Marinara",
        ingredients: ["Musslor", "Räkor"],
      },
      {
        title: "Opera",
        ingredients: ["Skinka", "Tonfisk"],
      },
      {
        title: "Capricciosa",
        ingredients: ["Skinka", "Champinjoner"],
      },
      {
        title: "La Bussola",
        ingredients: ["Skinka", "Räkor"],
      },
      {
        title: "Calzone",
        ingredients: ["Skinka(inbakad)"],
      },
      {
        title: "Toscana",
        ingredients: ["Räkor", "Kronärtskocka"],
      },
      {
        title: "Napolitano",
        ingredients: ["Sardeller", "Vitlök", "Oliver"],
      },
      {
        title: "Hawaii",
        ingredients: ["Skinka", "Ananas"],
      },
      {
        title: "Bolognese",
        ingredients: ["Köttfärs", "Lök"],
      },
      {
        title: "Al Tono",
        ingredients: ["Tonfisk", "Lök"],
      },
      {
        title: "Banana",
        ingredients: ["Skinka", "Banan", "Curry"],
      },
      {
        title: "Caciatore",
        ingredients: ["Salami", "Lök"],
      },
      {
        title: "Tropicana",
        ingredients: ["Banan", "Curry", "Ananas"],
      },
      {
        title: "Pepperoni pizza",
        ingredients: ["Pepperonikorv"],
      },
    ],
  },
  pizzaclass3: {
    title: "Prisklass 3 - 137:- M 254:- L 371:-",
    pizzas: [
      {
        title: "Primavera",
        ingredients: ["Bacon", "Salami", "Ägg", "Lök"],
      },
      {
        title: "La Mira",
        ingredients: ["Skinka", "Räkor", "Banan", "curry"],
      },
      {
        title: "Vegetariana",
        ingredients: [
          "Champinjoner",
          "Lök",
          "Paprika",
          "Oliver",
          "kronärtskocka",
          "Ananas",
        ],
      },
      {
        title: "Al Capone",
        ingredients: ["Skinka", "Salami", "Lök"],
      },
      {
        title: "Italia",
        ingredients: ["Skinka", "Gorgonzolaost", "Färska tomater"],
      },
      {
        title: "Bäck Special",
        ingredients: ["Skinka", "Räkor", "Champinjoner"],
      },
      {
        title: "Quattro Stagioni",
        ingredients: [
          "Skinka",
          "Räkor",
          "Champinjoner",
          "kronärtskocka",
          "Oliver",
          "Musslor",
        ],
      },
      {
        title: "Pepperoni Special",
        ingredients: ["Pepperonikorv", "Lök", "Paprika", "Tomater"],
      },
      {
        title: "Amore",
        ingredients: ["Skinka", "Jordnötter", "Banan", "Curry", "Ananas"],
      },
      {
        title: "Romana",
        ingredients: [
          "Champinjoner",
          "Bacon",
          "Lök",
          "Feferoni",
          "Stark krydda",
        ],
      },
      {
        title: "Zolti",
        ingredients: ["Salami", "Bacon", "Champinjoner", "Lök", "Paprika"],
      },
      {
        title: "La Favorita",
        ingredients: ["Köttfärssås", "Salami", "Specialkrydda (Stark)", "Lök"],
      },
      {
        title: "Fårostpizza",
        ingredients: ["Fårost", "Salami", "Ägg", "Färska tomater", "Oliver"],
      },
      {
        title: "Åsen",
        ingredients: [
          "Köttfärssås",
          "Salami",
          "Vitlök",
          "Feferoni",
          "Kryddmix",
          "Gräddfil",
        ],
      },
      {
        title: "Calzone Special",
        ingredients: ["(inbakad) Skinka", "Räkor", "Champinjoner"],
      },
      {
        title: "Kyckling pizza",
        ingredients: ["Kyckling", "Banan", "Ananas", "Curry"],
      },
      {
        title: "Torpedo",
        ingredients: ["Pepperonikorv", "Ägg", "Champinjoner"],
      },
      {
        title: "Positana",
        ingredients: [
          "Skinka",
          "Räkor",
          "Champinjoner",
          "Lök",
          "Sparris",
          "Kronärtskocka",
        ],
      },
    ],
  },
  pizzaclass4: {
    title: "Prisklass 4 - 147:- M 274:- L 391:-",
    pizzas: [
      {
        title: "Le Chef",
        ingredients: [
          "Mozzarella",
          "Lufttorkad skinka",
          "Tomater",
          "Champinjoner",
          "Oliver",
          "Svartpeppar",
        ],
      },
      {
        title: "Parma",
        ingredients: [
          "Mozzarella",
          "Lufttorkad skinka",
          "Salami",
          "Ruccola",
          "Fårost",
        ],
      },
      {
        title: "Ruccola",
        ingredients: [
          "Mozzarella",
          "Lufttorkade skinka",
          "Salami",
          "Ruccola",
          "Riven ost",
        ],
      },
      {
        title: "Tefat",
        ingredients: ["(inbakad, dubbeldeg) Skinka", "Räkor", "Champinjoner"],
      },
      {
        title: "Italiano",
        ingredients: [
          "Mozzarella",
          "Lufttorkad skinka",
          "Ruccola",
          "Soltorkade tomater",
          "Riven ost",
          "Purjolök",
        ],
      },
      {
        title: "Trädgårdsmästarens",
        ingredients: [
          "Aubergine",
          "Zucchini",
          "Champinjoner",
          "Paprika",
          "Soltorkade tomater",
          "Basilika",
        ],
      },
      {
        title: "Bagarens Special",
        ingredients: [
          "Mozzerella",
          "Tomater",
          "Lök",
          "Feferoni",
          "Oliver",
          "Salami",
          "Ruccola",
        ],
      },
      {
        title: "Picasso",
        ingredients: [
          "Mozzarella",
          "Ruccola",
          "Soltorkade tomater",
          "Paprika",
          "Purjolök",
          "Fårost",
        ],
      },
      {
        title: "Mezzaluna",
        ingredients: [
          "(halvinbakad) öppen del:",
          "Mozzarella",
          "Lufttorkad skinka",
          "Basilika",
          "Inbakade delen: Skinka",
        ],
      },
      {
        title: "Santa Maria",
        ingredients: [
          "Fläskfilé",
          "Mozzarella",
          "Gorgonzola",
          "Tomater",
          "Bearnaisesås",
        ],
      },
      {
        title: "Mama Mia",
        ingredients: [
          "Oxfilé",
          "Chaminjoner",
          "Tomater",
          "Paprika",
          "Lök",
          "Bearnaisesås",
        ],
      },
      {
        title: "Husets Special",
        ingredients: ["Oxfile", "Champinjoner", "Sparris", "Bearnaisesås"],
      },
      {
        title: "Oxfile",
        ingredients: ["Oxfile", "Tomater", "Feferoni", "Bearnaisesås", "Lök"],
      },
      {
        title: "Mozzarella",
        ingredients: [
          "Skinka",
          "Mozzarella",
          "Tomater",
          "Champinjoner",
          "Salami",
        ],
      },
      {
        title: "Belladona",
        ingredients: [
          "Fläskfilé",
          "Tomater",
          "Champinjoner",
          "Lök",
          "Vitlök",
          "Bearnaisesås",
        ],
      },
      {
        title: "Quattro Formaggi",
        ingredients: ["Mozzarella", "Fårost", "Gorgonzola", "Basilika"],
      },
      {
        title: "Ubåt Special",
        ingredients: [
          "Champinjoner",
          "Oxfile",
          "Gorgonzola",
          "Bearnaisesås (halvinbakad)",
        ],
      },
      {
        title: "Havets Pärlor",
        ingredients: [
          "Räkor",
          "Gröna * musslor",
          "Vitlök",
          "Scampi",
          "Basilika",
        ],
      },
      {
        title: "Avokado pizza",
        ingredients: [
          "Avokado",
          "Champinjoner",
          "Paprika",
          "Vitlök",
          "Tomater",
          "Basilika",
          "Sparris",
        ],
      },
    ],
  },
  pizzaMexikan: {
    title: "Mexikansk pizza - 147:-",
    pizzas: [
      {
        title: "Acapulco",
        ingredients: [
          "Oxfilé",
          "Champinjoner",
          "Taco kryddmix",
          "Vitlök",
          "Tacosås",
          "Jalapeno",
          "Lök",
          "Bearnaisesås",
        ],
      },
      {
        title: "Den onde",
        ingredients: [
          "Fläskfilé",
          "Jalapeno",
          "Lök",
          "Tacosås",
          "Taco kryddmix",
          "Paprika",
          "Tomater",
          "Bearnaisesås",
        ],
      },
      {
        title: "Den gode",
        ingredients: [
          "Kyckling",
          "Jalapeno",
          "Curry",
          "Tacosås",
          "Taco kryddmix",
          "Paprika",
          "Bearnaisesås",
        ],
      },
      {
        title: "Mexicana",
        ingredients: [
          "Köttfärssås",
          "Jalapeno",
          "Tacosås",
          "Taco kryddmix",
          "Lök",
          "Vitlök",
        ],
      },
      {
        title: "Azteka",
        ingredients: [
          "Skinka",
          "Taco kryddmix",
          "Tacosås",
          "Jalapeno",
          "Gräddfil",
        ],
      },
    ],
  },
  pizzaamerika: {
    title: "Amerikanska pan pizzor - 147:- M 274:- L 391:-",
    pizzas: [
      {
        title: "Honululu",
        ingredients: ["Oxfile", "Champinjoner", "Lök", "Tomater, Bearnaisesås"],
      },
      {
        title: "Miami",
        ingredients: ["Kyckling", "Banan", "Curry", "Ananas"],
      },
      {
        title: "Kansas",
        ingredients: ["Skinka", "Bacon", "Salami", "Tomater", "Lök", "Paprika"],
      },
      {
        title: "Los Angeles",
        ingredients: ["Pepperonikorv", "Lök", "Paprika", "Oliver", "Tomat"],
      },
    ],
  },

  sallad: {
    title: "Sallader - 137:-",
    sallader: [
      {
        title: "Västkustsallad",
        ingredients: ["Ost", "Räkor", "Tonfisk", "Musslor", "Majs", "Citron"],
      },
      {
        title: "Tonfisksallad",
        ingredients: ["Tonfisk", "Ost", "Lök", "Majs", "Citron"],
      },
      {
        title: "Ost & Skinskallad",
        ingredients: ["Ost", "Skinka", "Majs", "Ananas"],
      },
      {
        title: "Räksallad",
        ingredients: ["Räkor", "Ost", "Ägg", "Majs", "Citron"],
      },
      {
        title: "Kycklingsallad",
        ingredients: ["Kyckling", "Ost", "Majs", "Ananas"],
      },
      {
        title: "Vegetarisk sallad",
        ingredients: [
          "Lök",
          "Majs",
          "Oliver",
          "Champinjoner",
          "Paprika",
          "Kronärtskocka",
        ],
      },
      {
        title: "Grekisk sallad",
        ingredients: ["Fårost", "Oliver", "Lök", "Feferoni", "Paprika"],
      },
      {
        title: "Ceasarsallad",
        ingredients: [
          "Kyckling",
          "Oliver",
          "Paprika",
          "Solttorkade tomater",
          "Rödlök",
          "Krutonger",
          "feferoni",
        ],
      },
      {
        title: "Parmasallad",
        ingredients: [
          "Parma",
          "Mozzerella",
          "Oliver",
          "Paprika",
          "Solttorkade tomater",
          "Rödlök",
          "Ruccola",
          "feferoni",
        ],
      },
      {
        title: "Avokadosallad",
        ingredients: ["Avokado", "Ost", "Majs", "Räkor", "Ägg", "Skinka"],
      },
      {
        title: "Kebabsallad",
        ingredients: [
          "Kebabkött",
          "Ost",
          "Feferoni",
          "Lök",
          "Vitlökssås & rödsås",
        ],
      },
      {
        title: "Falafelsallad",
        ingredients: [
          "Falafel",
          "Ost",
          "Feferoni",
          "Vitlökssås & rödsås",
          "Lök",
        ],
      },
    ],
  },
  salladrull: {
    title: "Salladrullar - 137:-",

    salladrullar: [
      {
        title: "Avokadorulle",
        ingredients: ["Avokado", "Ost", "Majs", "Räkor", "Ägg", "Skinka"],
      },
      {
        title: "Ost & Skinkrulle",
        ingredients: ["Skinka", "Ost", "Majs", "Ananas", "Ägg"],
      },
      {
        title: "Kycklingrulle",
        ingredients: ["Kyckling", "Ost", "Majs", "Ananas"],
      },
      {
        title: "Räkrulle",
        ingredients: ["Räkor", "Ost", "Ägg", "Majs", "Ananas"],
      },
    ],
  },
  pasta: {
    title: "Pasta - 137:-",

    pastas: [
      {
        title: "Lasagne al Forno",
        ingredients: ["Med riven ost (Valfri)"],
      },
      {
        title: "Pasta Bolognese",
        ingredients: ["Pasta", "Köttfärssås"],
      },
      {
        title: "Pasta Carbonara",
        ingredients: ["Bacon", "Lök", "Äggula", "Parmesan", "Grädde"],
      },
      {
        title: "Kycklingpasta",
        ingredients: [
          "Kyckling",
          "Broccoli",
          "Pesto",
          "Champinjoner",
          "Grädde",
        ],
      },
      {
        title: "Oxfilépasta",
        ingredients: [
          "Oxfilé",
          "Champinjoner",
          "Purjolök",
          "Paprika",
          "Grädde",
        ],
      },
    ],
  },
  kebab: {
    title: "Kebabrätter alt.Kycklingkebab",

    kebabs: [
      {
        title: "Kebab Pizza",
        ingredients: ["Kebabkött", "Lök", "Feferoni", "Tomater"],
        price: 137,
      },
      {
        title: "Kebab eller Falafel med bröd",
        ingredients: [""],
        price: 99,
      },
      {
        title: "Kebab eller Falafelrulle",
        ingredients: [""],
        price: 127,
      },
      {
        title: "Kebab eller Falafeltallrik",
        ingredients: ["Med ris eller pommes"],
        price: 137,
      },
      {
        title: "Kebab Alexander",
        ingredients: [""],
        price: 137,
      },
      {
        title: "Viking kebab",
        ingredients: [
          "(inbakad) Kebabkött",
          "Rödlök",
          "Tomater",
          "Isbergssallad",
          "Feferoni",
          "Vitlöksås & rödsås",
          "(grönsaker tillsätts efter gräddning)",
        ],
        price: 147,
      },
      {
        title: "Del Solo",
        ingredients: [
          "Kebabkött",
          "Rödlök",
          "Tomater",
          "Isbergssallad",
          "Gurka",
          "Feferoni",
          "Vitlöksås & rödsås",
          "(grönsaker tillsätts efter gräddning)",
        ],
        price: 147,
      },
      {
        title: "Kebab pizza special",
        ingredients: [
          "Kebabkött",
          "Pommes frites",
          "Rödlök",
          "Tomater",
          "Isbergssallad",
          "Gurka",
          "Feferoni",
          "Vitlöksås & rödsås",
          "(grönsaker tillsätts efter gräddning)",
        ],
        price: 159,
      },
    ],
  },
};
export default data;
