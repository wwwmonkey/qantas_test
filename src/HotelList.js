// Hotel list component
import React, { useState, useEffect } from 'react';
import Data from './data';
import Hotel from './Hotel'

function HotelList() {
    const [hotelData, setHotelData] = useState([])
    const [sortDirection, setSortDirection] = useState('desc')

    useEffect(() => {

        // flip sort based on selected 'Sort by'
        const sortArray = type => {
            const sorted = [...Data.results].sort((a, b) =>
            // This should be refactored to handle multiple sorting object and/or become more readable
            type === 'desc' ? b.offer.displayPrice.amount - a.offer.displayPrice.amount
            :
            a.offer.displayPrice.amount - b.offer.displayPrice.amount)
            setHotelData(sorted);
        };

        sortArray(sortDirection);
      }, [sortDirection]);

    // Internal rendering for pre-sorting
    // TODO: pass only required data as props (optimisation)
    // TODO: Show/hide loading animation
    function HotelList() {
        const listItems = hotelData.map((hotel, index) =>
          <Hotel key={index} data={hotel} />
        );
        return (
          <ul>
            {listItems}
          </ul>
        );
      }

    return (
    <>
        <header className="flex justify-between my-3">
            <div>
                {Data.results.length} <i>hotels in</i> <strong>Sydney</strong>.
            </div>
            <div>
            <strong>Sort by</strong>
                <select onChange={(e) => setSortDirection(e.target.value)}>
                    <option value="desc">Price high-low</option>
                    <option value="asc">Price low-high</option>
                </select>
            </div>
        </header>
        <main>
        <HotelList />
        </main>
    </>
    );
}

export default HotelList;
