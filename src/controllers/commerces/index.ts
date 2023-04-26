class Commerces {
  private _props: string[]
  private _apiRoot: string;
  private _query: { [key: string]: object | string | boolean } = {}
  private _sorting: { [key: string]: object } = {}

  constructor(...props: string[]) {
    this._apiRoot = "https://api.koibanx.com/stores"
    this._props = [
      "ID", "Comercio", "CUIT",
      ...props,
      "Balance actual", "Activo", "Ultima venta"
    ]
  }

  public sortBy(field: "Comercios" | "CUIT", order: "asc" | "desc" = "asc") {
    const orderValue = order === "asc" ? 1 : -1;

    this._sorting = {
      "$orderby": { [field]: orderValue }
    }

    return this._sorting
  }

  public clearSorting() {
    this._sorting = {}
    
    return this._sorting
  }

  public allProps() {
    return this._props
  }

  public filterBy(key: string, value: string | boolean) {
    if (key === "search") { // Or statement
      const searchOptions = ["ID", "CUIT", "Comercio"]
      const searchOptionsQueries = searchOptions.map(option => ({
        [option]: { "$regex": value }
      }))

      this._query = { ...this._query, "$or": searchOptionsQueries }
    } else { // Simple statement
      this._query = { ...this._query, [key]: value }
    }

    return this._query
  }

  public clearQuery() {
    this._query = {}
  }
}

export default Commerces