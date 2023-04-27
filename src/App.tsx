import './App.css'

// import viteLogo from '/vite.svg'
// import reactLogo from './assets/react.svg'

function App() {
  const { query, createQuery } = useQuery()

  return (
    <>
      <SearchBar onSearch={createQuery} />
      <DataTable />
      <QueryDisplayer content={query} />

      {/* SearchBar component 👇 */}
      {/* <form>
        <input type="search" placeholder="Search by ID, CUIT or Name" />
        <button type="button">
          Search
        </button>
      </form> */}
    </>
  )
}

export default App
