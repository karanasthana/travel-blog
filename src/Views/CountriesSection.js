import React from 'react';
import './../css/CountriesSection.css';
import { Link } from 'react-router-dom';
import * as _ from 'lodash';

export default class CountriesSection extends React.Component {

    render() {
      const items = this.props.json.places.map((item, key) =>
        _.isEmpty(item.id) ? 
        <div className="card-sm" style={{backgroundImage: `url(${item.picture})`}}>
          {
            item.place ? 
            <p className="card__text-sm">{`${item.place}`}</p> : 
            null
          }
          <h1 className="card__text-lg">{`${item.name}`}</h1>
        </div> :
        <Link to={{pathname: `/states/:${item.id}`, id:`${item.id}`, name: `${item.name}` }} id={item.id} className="card-sm" style={{backgroundImage: `url(${item.picture})`}}>
        {
          item.place ? 
          <div style={{display: 'flex'}}>
            <p className="card__text-sm">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="8" height="8" style={{ backgroundColor: 'white' }}><path fill="none" d="M0 0h24v24H0z"/><path d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"/></svg>
              {`${item.place}`}
            </p>
          </div> : 
          null
        }
        <h1 className="card__text-lg">{`${item.name}`}</h1>
      </Link>
      );
        return (
            <div className="main main-div" style={{backgroundImage: `url(${this.props.json.picture})` }}>
              <section className="card-lg__container">
                <p className="card__text-sm">{`${this.props.json.countryText}`}</p>
                <h1 className="card__text-lg">{`${this.props.json.countryName}`}</h1>
              {/* <p className="card__text-md">something something</p> */}
              </section>
              <section className="card-sm__container">
                {items}
              </section>
            </div>
        )
    }
}