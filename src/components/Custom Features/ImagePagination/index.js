import React, { useEffect, useState } from 'react'
import Pagination from './Pagination.js'
import "./style.css"
import axios from 'axios'

const ImagePagination = () => {
   const [data,setData] = useState([])
   const [pageNo,setPageNo] = useState(1);

   useEffect(()=>{
    axios.get(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`).then((res)=> setData(res.data))    
   },[pageNo])
  return (
    <div>
        <div className='container'>
            {
                data.map((data,index)=>{
                    return <img src={data.download_url} alt="Pics" />
                })
            }
        </div>
        <Pagination pageNo={pageNo} setPageNo={setPageNo}/>
    </div>
  )
}

export default ImagePagination