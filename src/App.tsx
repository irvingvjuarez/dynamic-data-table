import SearchBar from './components/SearchBar'
import useQuery from './hooks/useQuery'
import QueryDisplayer from './components/QueryDisplayer'
import DataTable from './containers/DataTable'
import './App.css'

// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

function App() {
  const { query, createQuery, dataProps } = useQuery("Concepto 1", "Concepto 2")

  return (
    <>
      <SearchBar onSearch={createQuery} />
      <DataTable columns={dataProps} />
      <QueryDisplayer content={query} />
    </>
  )
}

export default App
