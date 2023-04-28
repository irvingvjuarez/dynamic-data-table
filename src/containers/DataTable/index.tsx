import DataHandlers from "../DataHandlers"
import "./styles.css"

const DataTable: React.FC<DataTableProps> = ({ columns, onFilter, onSort }) => {
    return (
        <>
            {/* TODO: Create a Table context to avoid prop drilling */}
            <DataHandlers
                onFilter={onFilter}
                onSort={onSort}
            />

            <table className="datatable">
                <thead>
                    <tr>
                        {columns.map(column => (
                            <th key={column  + "-th"} className="datatable-header">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        {columns.map(column => (
                            <td key={column + "-td"} className="datatable-data">

                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default DataTable