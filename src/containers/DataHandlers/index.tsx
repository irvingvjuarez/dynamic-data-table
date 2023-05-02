import "./styles.css"

const DataHandlers: React.FC<DataHandlersProps> = ({ onFilter, onSort }) => {
    const handleFilter = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        onFilter(evt.target.value)
    }
    const handleSort = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        onSort(evt.target.value)
    }

    return (
        <article className="dropdowns-wrapper">
            <div className="single-dropdown">
                <label htmlFor="filterby">Filter by: Active</label>
                <select name="filterby" id="filterby" onChange={handleFilter}>
                    <option value="both">Both</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="single-dropdown">
                <label htmlFor="sortby">Sort by</label>
                <select name="sortby" id="sortby" onChange={handleSort}>
                    <option value="none">None</option>
                    <option value="Comercios">Comercios</option>
                    <option value="CUIT">CUIT</option>
                </select>
            </div>
        </article>
    )
}

export default DataHandlers