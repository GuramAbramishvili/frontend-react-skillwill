import { useEffect, useState, useCallback } from "react"
import { ITodo } from "../interfaces/todo.interface"


const useFetch = (url:string) => {

    const [response, setResponse] = useState<ITodo[]>([])
    const [loading, setLoading] = useState(false)

    const onFetch = useCallback(() => {
      setLoading(true)
      fetch(url, {
          method: 'GET',
          headers: {
            "Content-Type" : "application/json",
            "Authorization" : `Bearer ${process.env.REACT_APP_API_KEY}`
          }
        })
        .then(res => {
          if(!res.ok) throw new Error("Response Failed")
          return res.json()
        })
        .then(data => data.items)
        .then((tasks:ITodo[]) => setResponse(tasks))


        return  () => {
          setLoading(false)
        }
    },[url])
      
    useEffect(() => {
        onFetch()
    },[onFetch])

    return {response, loading, resendRequest: onFetch}
}

export default useFetch