import Commerces from "@app/controllers/commerces"
import { useState } from "react"

const useQuery = (...props: string[]) => {
    const commerces = new Commerces(...props)
    const dataProps = commerces.allProps()
    const [currentQuery, useCurrentQuery] = useState(commerces.createQuery())

    const updateCurrentQuery = () => {
        useCurrentQuery(commerces.createQuery())
    }

    const clearFilters = () => {
        commerces.clearFilters()
        updateCurrentQuery()
    }
    
    const createQuery = (input: string) => {
        commerces.filterBy("search", input)
        updateCurrentQuery()
    }

    const activeFilter = (option: "yes" | "no" | "both") => {

    }

    const sortBy = (option: "Comercios" | "none" | "CUIT") => {
        if (option != "none") {
            commerces.sortBy(option)
        } else {
            commerces.clearSorting()
        }

        updateCurrentQuery()
    }

    return {
        createQuery,
        dataProps,
        query: currentQuery,
        clearFilters,
        activeFilter,
        sortBy
    }
}

export default useQuery