import "./styles.css"

const DataHandlers = () => {
    return (
        <article className="dropdowns-wrapper">
            <div className="single-dropdown">
                <label htmlFor="filterby">Filter by: Active</label>
                <select name="filterby" id="filterby">
                    <option value="both">Both</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
            </div>

            <div className="single-dropdown">
                <label htmlFor="sortby">Sort by</label>
                <select name="sortby" id="sortby">
                    <option value="none">None</option>
                    <option value="id">ID</option>
                    <option value="cuit">CUIT</option>
                </select>
            </div>
        </article>
    )
}

export default DataHandlers