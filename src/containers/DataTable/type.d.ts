type DataTableProps = {
    columns: string[]
    onFilter(option: string): void
    onSort(option: string): void
}