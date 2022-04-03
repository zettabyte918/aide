/* This example requires Tailwind CSS v2.0+ */
export default function Stats() {
  return (
    <div className="bg-pink-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Easy, fast and free!
          </h2>
          <p className="mt-3 text-xl text-pink-200 sm:mt-4">
            Donnez ou ramassez des articles gratuits près de chez vous.
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-pink-200">
              objets réutilisés
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">14m+</dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-pink-200">
              éléments sauvegardés de la corbeille
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              570k+
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-pink-200">
              utilisateurs
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              3.4m+
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
