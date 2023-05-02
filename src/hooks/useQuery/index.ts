import Commerces from "@app/controllers/commerces"
import { useRef, useState } from "react"

const useQuery = (...props: string[]) => {
    const commercesRef = useRef(new Commerces(...props))
    const commerces = commercesRef.current
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
        if (option != "both") {
            commerces.filterBy("active", option === "yes" ? true : false)
        } else {
            commerces.clearActiveFilter()
        }

        updateCurrentQuery()
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