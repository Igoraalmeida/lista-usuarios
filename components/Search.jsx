import { FaSearch } from "react-icons/fa";

function Search({ search, setSearch }) {
  return (
    <div className="search-bar">
      <FaSearch className="search-icon" />
      <input
        type="text"
        placeholder="Search users..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={() => setSearch('')}>Clean</button>
    </div>
  );
}

export default Search;