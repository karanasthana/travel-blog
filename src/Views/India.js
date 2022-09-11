import React from 'react';
import Karan1 from '../Assets/slickSlider/karan1.jpg';
import './../css/India.css';

export default class India extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div>
                <img src={Karan1} alt={'India'} className={'india-image'}></img>
            </div>
        )
    }
}