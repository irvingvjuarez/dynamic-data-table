import { useRef } from "react"

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const inputValue = useRef<null | HTMLInputElement>(null)

    const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault()
        onSearch((inputValue.current as HTMLInputElement).value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                ref={inputValue}
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