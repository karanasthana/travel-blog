import React from 'react';
import CountriesSection from "../Views/CountriesSection";
import India from '../staticData/countryData/India.json';
import Singapore from '../staticData/countryData/Singapore.json';
import USA from '../staticData/countryData/USA.json';
import England from '../staticData/countryData/England.json';
import Canada from '../staticData/countryData/Canada.json';
import Quote from '../Views/Quote';
// import Slider from '../Views/Slider';

export default function HomePage() {
    return (
        <div>
            <Quote quote={'To wake up alone in a strange town is one of the most pleasant sensations in the world'}/>
            <CountriesSection json={India} />
            <Quote quote={'Live with no excuses and travel with no regrets'}/>
            <CountriesSection json={Singapore} />
            <Quote quote={'Climb the Mountain so YOU can see the WORLD, not so the WORLD can see YOU'}/>
            <CountriesSection json={USA} />
            <Quote quote={'The World is a book and those who do not travel read only a page'}/>
            <CountriesSection json={Canada} />
            <Quote quote={'The World is a book and those who do not travel read only a page'}/>
            <CountriesSection json={England} />
            {/* <Slider />     */}
        </div>
    )
}