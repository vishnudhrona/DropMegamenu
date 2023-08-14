
const Searchbar = () => {
  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="flex items-center rounded-md p-1">
      <input
        type="text"
        placeholder="Search..."
        className="px-2 py-1 outline-none w-full sm:w-48 md:w-64 lg:w-96"
      />
      <button className="bg-blue-500 text-white rounded-md px-2 py-1 ml-1">
        Search
      </button>
    </div>
    </div>
  )
}

export default Searchbar
