// Hotel rating component
// Inspired heavily from CSS Tricks, which encapsulated the idea of how I wanted to build it but the research is already done
// https://css-tricks.com/five-methods-for-five-star-ratings/#method-5-using-unicode-symbols

const ratingTypeClass = ratingType => `hotellist--rating-${ ratingType === 'star' ? 'star' : 'circle' }`
const ratingLabel = rating => `Rating of this hotel is ${rating} out of 5.`

function Rating(props) {
    return (
        <div className={ratingTypeClass(props.rating.ratingType)} style={{ '--rating' : `${props.rating.ratingValue}` }} aria-label={ratingLabel(props.rating.ratingValue)}></div>
    )
}

export default Rating;