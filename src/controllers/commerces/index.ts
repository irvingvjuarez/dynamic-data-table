class Commerces {
  private _props: string[]

  constructor(...props) {
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