// A hotel list item

function Hotel(props) {
    console.log(props.data)
    return (
        <h1>{props.data.property.title} <sup>$</sup>{props.data.offer.displayPrice.amount}</h1>
    )
}


export default Hotel;