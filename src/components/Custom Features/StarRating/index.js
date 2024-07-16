import StarIcon from "./StarIcon"
import './starRating.css'
const StarRating = () => {
  return (
    <div className="container">
        <StarIcon starCount={5}/>
    </div>
  )
}

export default StarRating