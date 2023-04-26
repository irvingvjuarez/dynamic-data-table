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
}

export default Commerces