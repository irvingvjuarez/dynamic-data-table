import { describe, test, expect } from "vitest"
import Commerces from "."

describe("Commerces controller tests", () => {
  test("Pulling default properties", async () => {
    const commerces = new Commerces()
    await expect(commerces.allProps()).toEqual(["ID", "Comercio", "CUIT", "Balance actual", "Activo", "Ultima venta"])
  })

  test("Adding more properties", async () => {
    const commerces = new Commerces("Concepto 1", "Concepto 2", "Concepto 3")
    await expect(commerces.allProps()).toEqual(["ID", "Comercio", "CUIT", "Concepto 1", "Concepto 2", "Concepto 3", "Balance actual", "Activo", "Ultima venta"])
  })

  test("Simple Filter by", async () => {
    const commerces = new Commerces()
    await expect(commerces.filterBy("active", true)).toEqual({"active": true})
    commerces.clearQuery()

    await expect(commerces.filterBy("active", false)).toEqual({"active": false})
    commerces.clearQuery()

    await expect(commerces.filterBy("search", "34")).toEqual({"$or": [{"ID": {"$regex": "34"}}, {"CUIT": {"$regex": "34"}}, {"Comercio": {"$regex": "34"}}]})
  })
})