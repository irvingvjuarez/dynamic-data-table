class Commerces {
  private _props: string[]
  private _apiRoot: string;

  constructor(...props: string[]) {
    this._apiRoot = "https://api.koibanx.com/stores"
    this._props = [
      "ID", "Comercio", "CUIT",
      ...props,
      "Balance actual", "Activo", "Ultima venta"
    ]
  }

  public allProps() {
    return this._props
  }

  public filterBy(key: string, value: string | boolean) {
    let query

    if (key === "search") { // Or statement
      const searchOptions = ["ID", "CUIT", "Comercio"]
      const searchOptionsQueries = searchOptions.map(option => ({
        [option]: { "$regex": value }
      }))

      query = { "$or": searchOptionsQueries }
    } else { // Simple statement
      query = { [key]: value }
    }

    return query
  }
}

export default Commerces