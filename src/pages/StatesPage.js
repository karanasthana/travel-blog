import React from 'react';
import Quote from '../Views/Quote';
import StatePicture from '../Views/StatePicture';
import StatePlace from '../Views/StatePlace';
import Masonry from 'react-masonry-css';
import '../css/StatePlace.css';

export default function StatesPage(props) {
    console.log("The page is --> " + props.location.id);
    let json = require(`../staticData/statesData/${props.match.params.id.substr(1)}.json`)
    const places = json.places.map((item, key) => 
        <StatePlace picture={`${item.picture}`} place={`${item.place}`} key={key} />
    );
    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
    };
    return (
        <div style={{backgroundColor: 'black'}}>
            <StatePicture image={json.picture} stateName={json.name} />
            <Quote quote={json.text}/>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {places}
            </Masonry>
        </div>
    )
}

