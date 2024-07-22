import { useEffect } from "react"

const ImageCard = ({ data,setPageNumber }) => {
    useEffect(()=>{
        const observer = new IntersectionObserver((param)=>{
            if(param[0].isIntersecting){
                observer.unobserve(lastImage)
                setPageNumber((pageNumber)=>pageNumber+1)
            }
        },{threshold:0.5})
        const lastImage = document.querySelector(".image-post:last-child");
        if(!lastImage){
            return;
        };
        observer.observe(lastImage)
        return ()=>{
            if(lastImage){
                observer.unobserve(lastImage)
            }
            observer.disconnect()
        }
    },[data,setPageNumber])
    return (
        <div className="container">
            {data?.map((obj) => <img className="image-post" key={obj?.id} src={obj?.download_url} alt={obj?.author} />)}
        </div>
    )
}

export default ImageCard