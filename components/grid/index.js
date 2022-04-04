import { useState } from "react";

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const articles = [
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },
  {
    title: "Shaker Style Ladder Back",
    categorie: "Electroménager",
    time: "20 hr.",
    by: "@hossem",
    source:
      "https://cdn.shopify.com/s/files/1/2010/8767/products/RusticWoodChairTable_9_of_18_2984x.jpg?v=1570042199",
  },

  // More files...
];

export default function Grid() {
  const [annonces, setAnnonces] = useState(articles);
  return (
    <>
      <div className="py-12">
        <div className="lg:text-center">
          <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">
            Faire don d&apos;articles
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Donnez une seconde vie à vos affaires
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Aider est la première application de don d&apos;objets entre
            particuliers. Donnez ou ramassez des objets et de la nourriture
            inutilisés près de chez vous ! Aider est utile, gratuit et
            convivial.
          </p>
        </div>
        <ul
          role="list"
          className="py-6 px-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {annonces.map((annonce) => (
            <li key={annonce.source} className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-pink-500 overflow-hidden">
                <img
                  src={annonce.source}
                  alt=""
                  className="object-cover pointer-events-none group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View details for {annonce.title}
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-between">
                <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                  {annonce.title}
                </p>
                <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                  {annonce.time}
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="block text-sm font-medium text-gray-500 pointer-events-non*">
                  {annonce.categorie}
                </p>
                <p className="block text-sm font-medium text-pink-400 hover:bg-pink-700 hover:text-gray-50 rounded-md px-2 ">
                  {annonce.by}
                </p>
              </div>
              <button
                type="button"
                className="mt-2 w-full text-center items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Ouvrir
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
