import { useEffect, useRef, useState } from "react"

const STATUS = {
    LOADING: "LOADING",
    ERROR: "ERROR",
    SUCCESS: "SUCCESS",
}

const TypeAhead = () => {
    const [query,setQuery] = useState("");
    const [result,setResult] = useState({
        data:[],
        status:STATUS.LOADING
    })
    const cache = useRef({})

    useEffect(()=>{
        // Abort controller
        const abortController = new AbortController();
        const {signal} = abortController;
        const fetchData = async ()=>{
            try {
                setResult({...result, status:STATUS.LOADING})
                if(cache.current[query]){
                    setResult({data:cache.current[query], status:STATUS.SUCCESS})
                    return
                }
                const data = await fetch(`https://dummyjson.com/products/search?q=${query}&limit=10`,{signal})
                const json = await data.json();
                cache.current[query] = json?.products ?? [];
                setResult({data:json?.products, status:STATUS.SUCCESS})
            } catch (error){
                console.log(error.name)
                if(error.name !== "AbortError"){
                    setResult({...result, status:STATUS.ERROR}) 
                }
            }
        }
        // debouncing
        const timerId = setTimeout(fetchData,1000);
        return () =>{
            clearTimeout(timerId)
            abortController.abort()
        }
    },[query])
    
  return (
    <div>
        <input type="text" value={query} onChange={(e)=>setQuery(e.target.value)} />
        <div>
            {result.status === STATUS.LOADING ? <div>Loading...</div>:null}
            {result.status === STATUS.ERROR ? <div>Error Occurred</div>:null}
            {result.status === STATUS.SUCCESS ? (
                <div>
                    <ul>
                        {result.data?.map((product)=>{
                            return <li key={product.id}>{product.title}</li>
                        })}
                    </ul>
                </div>
            ):null}
        </div>
    </div>
  )
}

export default TypeAhead