export default function SearchBar() {
    return (
        <div>
            <form className="mx-auto">
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative">
                    <input
                        type="search"
                        id="default-search"
                        className="block w-full p-3 text-sm text-gray-900 border border-gray-300 rounded-full ps-10 bg-gray-50 dark:bg-white dark:border-gray-600 dark:placehldr-gray-400 dark:text-black "
                        placeholder="Search for a movie, tv show, person ...."
                        required
                    />
                    <button
                        type="submit"
                        className="absolute top-0 bottom-0 right-0 px-8 text-sm font-medium text-white rounded-full bg-gradient-to-r from-green-300 to-blue-400 hover:from-green-500 hover:to-blue-600 "
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
    );
}