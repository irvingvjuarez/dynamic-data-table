import SearchBar from './components/SearchBar'
import useQuery from './hooks/useQuery'
import QueryDisplayer from './components/QueryDisplayer'
import DataTable from './containers/DataTable'
import './App.css'

// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

function App() {
  const { query, createQuery, dataProps, clearFilters, activeFilter, sortBy } = useQuery("Concepto 1", "Concepto 2")

  return (
    <>
      <SearchBar onSearch={createQuery} onCleanSearch={clearFilters} />

      <DataTable
        columns={dataProps}
        onFilter={activeFilter}
        onSort={sortBy}
      />

      <QueryDisplayer content={query} />
    </>
  )
}

export default App
