// Hotel list item
import Rating from './Rating'

function Hotel(props) {
    console.log(props.data)
    return (
        <>
        <h1>{props.data.property.title} <sup>$</sup>{props.data.offer.displayPrice.amount}</h1>
        <Rating rating={props.data.property.rating} />
        </>
    )
}


export default Hotel;