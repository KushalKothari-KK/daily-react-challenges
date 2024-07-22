import { useEffect, useState } from "react"
import "./infinite.css"
import ImageCard from "./ImageCard";

const InfiniteScroll = () => {
    const [data, setData] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    useEffect(() => {
        fetch(`https://picsum.photos/v2/list?page=${pageNumber}&limit=3`).then((res) => {
            return res.json();
        }).then((arr) => setData((oldData)=>[...oldData, ...arr]))
    }, [pageNumber])
    return (
        <ImageCard data={data} setPageNumber={setPageNumber}/>
    )
}

export default InfiniteScroll