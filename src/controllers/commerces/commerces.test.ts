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
    commerces.clearFilters()

    await expect(commerces.filterBy("active", false)).toEqual({"active": false})
    commerces.clearFilters()

    await expect(commerces.filterBy("search", "34")).toEqual({"$or": [{"ID": {"$regex": "34"}}, {"CUIT": {"$regex": "34"}}, {"Comercio": {"$regex": "34"}}]})
  })

  test("Nested Filter by", async () => {
    const commerces = new Commerces()
    await expect(commerces.filterBy("active", true)).toEqual({"active": true})
    await expect(commerces.filterBy("active", false)).toEqual({"active": false})

    await expect(commerces.filterBy("search", "blockchain")).toEqual({"active": false, "$or": [{"ID": {"$regex": "blockchain"}}, {"CUIT": {"$regex": "blockchain"}}, {"Comercio": {"$regex": "blockchain"}}]})
    commerces.clearFilters()

    await expect(commerces.filterBy("search", "34")).toEqual({"$or": [{"ID": {"$regex": "34"}}, {"CUIT": {"$regex": "34"}}, {"Comercio": {"$regex": "34"}}]})
    await expect(commerces.filterBy("active", false)).toEqual({"$or": [{"ID": {"$regex": "34"}}, {"CUIT": {"$regex": "34"}}, {"Comercio": {"$regex": "34"}}], "active": false})

    commerces.clearFilters()
    await expect(commerces.filterBy("active", true)).toEqual({"active": true})
    await expect(commerces.filterBy("search", "34")).toEqual({"active": true, "$or": [{"ID": {"$regex": "34"}}, {"CUIT": {"$regex": "34"}}, {"Comercio": {"$regex": "34"}}]})
    await expect(commerces.filterBy("active", false)).toEqual({"$or": [{"ID": {"$regex": "34"}}, {"CUIT": {"$regex": "34"}}, {"Comercio": {"$regex": "34"}}], "active": false})
  })

  test("Cleaning Filter by", async () => {
    const commerces = new Commerces()

    await expect(commerces.filterBy("search", "blockchain")).toEqual({"$or": [{"ID": {"$regex": "blockchain"}}, {"CUIT": {"$regex": "blockchain"}}, {"Comercio": {"$regex": "blockchain"}}]})
    commerces.clearFilters()

    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores")
  })

  test("Sorted by", async () => {
    const commerces = new Commerces()
    await expect(commerces.sortBy("Comercios")).toEqual({"$orderby": {"Comercios": 1}})

    // Optional order format, default as ascending
    await expect(commerces.sortBy("Comercios", "asc")).toEqual({"$orderby": {"Comercios": 1}})
    await expect(commerces.sortBy("Comercios", "desc")).toEqual({"$orderby": {"Comercios": -1}})

    await expect(commerces.clearSorting()).toEqual({})

    await expect(commerces.sortBy("CUIT", "asc")).toEqual({"$orderby": {"CUIT": 1}})
    await expect(commerces.sortBy("CUIT", "desc")).toEqual({"$orderby": {"CUIT": -1}})
  })

  test("Query building", async () => {
    const commerces = new Commerces()
    commerces.filterBy("active", true)
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?q={'active':true}")

    commerces.sortBy("Comercios")
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?q={'active':true}&h={'$orderby':{'Comercios':1}}")

    commerces.clearQuery()
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores")

    commerces.sortBy("CUIT")
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?h={'$orderby':{'CUIT':1}}")

    commerces.filterBy("active", false)
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?h={'$orderby':{'CUIT':1}}&q={'active':false}")

    commerces.clearQuery()
    commerces.clearFilters()
    commerces.clearSorting()

    commerces.filterBy("search", "34")
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?q={'$or':[{'ID':{'$regex':'34'}},{'CUIT':{'$regex':'34'}},{'Comercio':{'$regex':'34'}}]}")

    commerces.sortBy("CUIT")
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?q={'$or':[{'ID':{'$regex':'34'}},{'CUIT':{'$regex':'34'}},{'Comercio':{'$regex':'34'}}]}&h={'$orderby':{'CUIT':1}}")
  })

  test("Clear Filter by Active", async () => {
    const commerces = new Commerces()
    commerces.filterBy("active", true)
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?q={'active':true}")

    commerces.clearActiveFilter()
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?q={}")
  })

  test.only("Real life example", async () => {
    const commerces = new Commerces()
    commerces.filterBy("search", "godzilla")
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?q={'$or':[{'ID':{'$regex':'godzilla'}},{'CUIT':{'$regex':'godzilla'}},{'Comercio':{'$regex':'godzilla'}}]}")

    commerces.sortBy("CUIT")
    await expect(commerces.createQuery()).toBe("https://api.koibanx.com/stores?q={'$or':[{'ID':{'$regex':'godzilla'}},{'CUIT':{'$regex':'godzilla'}},{'Comercio':{'$regex':'godzilla'}}]}&h={'$orderby':{'CUIT':1}}")
  })
})