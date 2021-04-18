// Hotel list item
import Rating from './Rating'

function Hotel(props) {
    // console.log(props.data)
    return (
        <li className="w-full">
            <div className="flex flex-col space-y-16">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
                    <div className="relative">
                        {/* TODO: move to function to extend functionality and make easier to maintain*/}
                        { props.data.offer.promotion.title &&
                            <span className="absolute text-xs font-bold text-red-500 bg-white p-2 top-4">{props.data.offer.promotion.title}</span>
                        }
                        <img src={props.data.property.previewImage.url} className="object-cover w-full h-40 col-span-1 bg-center my-2" alt={props.data.property.previewImage.caption} loading="lazy" />
                    </div>
                    <div className="col-span-1 md:col-span-3 md:border-t md:border-grey-300 pr-3">
                        <div className="flex pt-2">
                            <h4 className="mb-2 mr-2 text-xl font-bold leading-snug text-gray-800 truncate max-w-xs">
                                {props.data.property.title}
                            </h4>
                            <Rating rating={props.data.property.rating} />
                        </div>
                        <p className="mb-4 mt-1 text-xs font-normal text-gray-500">{props.data.property.address[0]}, {props.data.property.address[1]}</p>

                        <div className="flex flex-row justify-between">
                            <div className="flex flex-col">
                                <p className="text-sm font-normal text-red-500 underline">
                                    {props.data.offer.name}
                                </p>
                            </div>

                            <div className="flex pt-2 self-end flex flex-col text-right">
                                <p className="text-xs font-normal text-gray-500">
                                    <strong>1</strong>night total (AUD)
                                </p>
                                <p>
                                    <sup>$</sup><span className="text-lg text-bold font-bold">{props.data.offer.displayPrice.amount}</span>
                                </p>
                                {/* TODO: move to function to extend functionality and make easier to maintain*/}
                                { props.data.offer.savings && props.data.offer.savings.amount &&
                                    <p className="text-xs font-bold text-red-500">Save ${props.data.offer.savings.amount}~</p>
                                }
                            </div>
                        </div>

                        {/* TODO: move to function to extend functionality and make easier to maintain */}
                        { props.data.offer.cancellationOption.cancellationType === 'FREE_CANCELLATION'  &&
                            <p className="mt-auto mb-1 text-green-500">Free cancellation</p>
                        }
                    </div>
                </div>
            </div>
        </li>
    )
}

export default Hotel;