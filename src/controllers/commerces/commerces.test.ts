import { describe, test, expect } from "vitest"

describe("Commerces controller tests", () => {
  test("Pulling default properties", async () => {
    const commerces = new Commerces()
    await expect(commerces.allProps()).toEqual(["ID", "Comercio", "CUIT", "Balance actual", "Activo", "Ultima venta"])
  })
})