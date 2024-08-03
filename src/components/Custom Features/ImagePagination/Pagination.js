const Pagination = ({pageNo,setPageNo}) => {
    const prevThreeNo = Array.from({length:3},(_,index)=> pageNo-1-index).filter((value)=>value>0).reverse();
    const nextFourNo = Array.from({length:4},(_,index)=> pageNo+index);
    const paginationArr = [...prevThreeNo,...nextFourNo]
    const handleNext = ()=>{
        setPageNo(pageNo+1)
    }
    const handlePrevious = ()=>{
        setPageNo(pageNo-1)
    }
    const handleOnClick = (value) =>{
        setPageNo(value)
    }
  return (
    <div className="page-container">
        {pageNo > 1 ? <div onClick={handlePrevious} className="page-btn">{"<"}</div> : null}
        {paginationArr.map((value,index)=>{
            return <div key={index} className={`page-btn ${pageNo === value ? 'active-btn' : ''}`}
            onClick={()=>handleOnClick(value)}>{value}</div>
        })}
        <div onClick={handleNext} className="page-btn">{">"}</div>
    </div>
  )
}

export default Pagination