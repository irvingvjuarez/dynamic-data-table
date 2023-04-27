const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    return (
        <form>
            <input type="search" placeholder="Search by ID, CUIT or Name" />
            <button type="button">
                Search
            </button>
        </form>
    )
}

export default SearchBar