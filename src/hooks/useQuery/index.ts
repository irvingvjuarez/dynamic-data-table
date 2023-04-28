import Commerces from "@app/controllers/commerces"
import { useState } from "react"

const useQuery = (...props: string[]) => {
    const commerces = new Commerces(...props)
    const dataProps = commerces.allProps()
    const [currentQuery, useCurrentQuery] = useState(commerces.createQuery())

    const clearFilters = () => {
        commerces.clearFilters()
        useCurrentQuery(commerces.createQuery())
    }
    
    const createQuery = (input: string) => {
        commerces.filterBy("search", input)
        useCurrentQuery(commerces.createQuery())
    }

    return {
        createQuery,
        dataProps,
        query: currentQuery,
        clearFilters
    }
}

export default useQuery