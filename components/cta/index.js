import Link from "next/link";

export default function Cta() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-pink-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
          <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
            <div className="lg:self-center">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                <span className="block">Prêt à plonger ?</span>
                <span className="block">
                  Commencez votre voyage avec nous aujourd&apos;hui.
                </span>
              </h2>
              <p className="mt-4 text-lg leading-6 text-pink-200">
                Trouvez votre bonheur, donnez de la nourriture ou une seconde
                vie à des objets.
              </p>
              <Link href="/register">
                <a className="mt-8 bg-white border border-transparent rounded-md shadow px-5 py-3 inline-flex items-center text-base font-medium text-pink-600 hover:bg-pink-50">
                  Inscription gratuite
                </a>
              </Link>
            </div>
          </div>
          <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
            <img
              className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
              src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
              alt="App screenshot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
