class Commerces {
  private _props: string[]
  private _apiRoot: string;
  private _filters: { [key: string]: object | string | boolean } = {}
  private _sorting: { [key: string]: object } = {}
  private _query: { [key: string]: object } = {}

  constructor(...props: string[]) {
    this._apiRoot = "https://api.koibanx.com/stores"
    this._props = [
      "ID", "Comercio", "CUIT",
      ...props,
      "Balance actual", "Activo", "Ultima venta"
    ]
  }

  public clearQuery() {
    this._query = {}
  }

  public createQuery() {
    let query = this._apiRoot
    const queryKeys = Object.keys(this._query)

    queryKeys.forEach((key, index) => {
      // Separator Clause for api purposes
      // ? is the starting point after api root
      // & is the following point
      // Clause example: https://api.pokemon?max=10&sort=name
      const separatorClause = index === 0 ? "?" : "&"
      query += separatorClause + key + "=" + JSON.stringify(this._query[key])
    })

    return query.replaceAll('"', "'")
  }

  protected removeFromQuery(prop: QueryAction) {
    let property

    if (prop === "filters") {
      property = "q"
    } else {
      property = "h"
    }

    delete this._query["q"]
  }

  protected addToQuery(prop: QueryAction) {
    let statement = {}

    if (prop === "filters") {
      statement = { "q": {...this._filters} }
    } else {
      statement = { "h": {...this._sorting} }
    }

    this._query = {
      ...this._query,
      ...statement
    }
  }

  public sortBy(field: "Comercios" | "CUIT", order: "asc" | "desc" = "asc") {
    const orderValue = order === "asc" ? 1 : -1;

    this._sorting = {
      "$orderby": { [field]: orderValue }
    }

    this.addToQuery("sorting")
    return this._sorting
  }

  public clearSorting() {
    this._sorting = {}
    this.removeFromQuery("sorting")

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

      this._filters = { ...this._filters, "$or": searchOptionsQueries }
    } else { // Simple statement
      this._filters = { ...this._filters, [key]: value }
    }

    this.addToQuery("filters")
    return this._filters
  }

  public clearFilters() {
    this._filters = {}
    this.removeFromQuery("filters")
  }
}

export default Commerces