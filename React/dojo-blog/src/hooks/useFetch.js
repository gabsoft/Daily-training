import { useEffect, useState } from "react"

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    useEffect( () => { // run in every render, if u put [] at second argument the useEffect run only once and if u put any other state in brackets useEffect only runs when this state change
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fetch the data for that resource')
                }
                return res.json()
            })
            .then(json => {
                setIsPending(false)
                setError(null)
                setData(json)
            })
            .catch( err => {
                setError(err.message)
            })
    },[])

    return { data, isPending, error }
}

export default useFetch