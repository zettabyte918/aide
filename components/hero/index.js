/* This Hero requires Tailwind CSS v2.0+ */
import { Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Hero() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  });
  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div
        className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full"
        aria-hidden="true"
      >
        <div className="relative h-full max-w-7xl mx-auto">
          <svg
            className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x={0}
                  y={0}
                  width={4}
                  height={4}
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width={404}
              height={784}
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
        </div>
      </div>

      <div className="relative pt-20 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <Transition
              appear={true}
              show={ready}
              as={Fragment}
              enter="transform ease-out duration-500 transition"
              enterFrom="-translate-x-4 opacity-0"
              enterTo="-translate-x-0 opacity-100"
            >
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">
                  Donnez ou ramassez des articles
                </span>{" "}
                <span className="block text-pink-600 xl:inline">gratuits </span>
                <span className="block xl:inline">pr??s de chez vous</span>
              </h1>
            </Transition>
            <Transition
              appear={true}
              show={ready}
              as={Fragment}
              enter="transform ease-out duration-500 transition"
              enterFrom="-translate-y-4 opacity-0"
              enterTo="-translate-y-0 opacity-100"
            >
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Faire un m??nage de printemps ? Trier vos affaires ? En
                mouvement? Faites don des objets que vous n&apos;utilisez plus
                et donnez-leur une seconde vie. Publiez un don sur Aider en
                quelques secondes, afin que quelqu&apos;un pr??s de chez vous
                puisse le r??cup??rer gratuitement.
              </p>
            </Transition>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Transition
                appear={true}
                show={ready}
                as={Fragment}
                enter="transform ease-out delay-300 duration-500 transition"
                enterFrom="translate-y-4 opacity-0"
                enterTo="translate-y-0 opacity-100"
              >
                <div className="rounded-md shadow">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10"
                  >
                    Commencer
                  </a>
                </div>
              </Transition>
              <Transition
                appear={true}
                show={ready}
                as={Fragment}
                enter="transform ease-out delay-400 duration-500 transition"
                enterFrom="translate-y-4 opacity-0"
                enterTo="translate-y-0 opacity-100"
              >
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <a
                    href="#"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-pink-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    d??mo en direct
                  </a>
                </div>
              </Transition>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
