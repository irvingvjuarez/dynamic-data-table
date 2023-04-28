import "./styles.css"

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onCleanSearch }) => {
    // TODO: useSearchBar custom hook
    // To avoid blending logic and UI code

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        const target = evt.target as HTMLFormElement
        const currentValue = (target.firstChild as HTMLInputElement).value

        if (currentValue) {
            onSearch(currentValue)
        } else {
            onCleanSearch()
        }

    }

    const handleClearingQuery = (evt: React.FormEvent<HTMLInputElement>) => {
        const value = (evt.target as HTMLInputElement).value

        if (!value) {
            onCleanSearch()
        }
    }

    return (
        <form className="search-bar-wrapper" onSubmit={handleSubmit}>
            <input
                onInput={handleClearingQuery}
                type="search"
                placeholder="Search by ID, CUIT or Name"
            />
            <button>
                Search
            </button>
        </form>
    )
}

export default SearchBar