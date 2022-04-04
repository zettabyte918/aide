import Select from "./select";

export default function Form() {
  return (
    <form
      action="#"
      method="POST"
      className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
    >
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Titre de votre annonce
        </label>
        <div className="mt-1">
          <input
            id="titre"
            name="titre"
            type="text"
            autoComplete="email"
            className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <div className="flex justify-between">
          <label
            htmlFor="how-can-we-help"
            className="block text-sm font-medium text-gray-700"
          >
            Description
          </label>
          <span
            id="how-can-we-help-description"
            className="text-sm text-gray-500"
          >
            Max. 500 caractères
          </span>
        </div>
        <div className="mt-1">
          <textarea
            id="des"
            name="des"
            rows={4}
            className="block w-full shadow-sm sm:text-sm focus:ring-pink-500 focus:border-pink-500 border border-gray-300 rounded-md"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <Select />
      </div>
      <div className="sm:col-span-2">
        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded-md font-medium text-pink-600 hover:text-pink-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-pink-500"
              >
                <span>Télécharger un fichier</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">ou glisser-déposer</p>
            </div>
            <p className="text-xs text-gray-500">
              PNG, JPG, GIF jusqu&apos;à 10 Mo
            </p>
          </div>
        </div>
      </div>
      <div className="text-right sm:col-span-2">
        <button
          type="submit"
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
        >
          Ajouter cette annonce
        </button>
      </div>
    </form>
  );
}
