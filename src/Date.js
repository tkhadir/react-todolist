import React, { Component } from 'react'
import Moment from 'moment'

export default class Date extends Component {
    render() {
        return (
            <div>
                <h1 className="date">{Moment().format('dddd')}</h1>
                <p className="date2">{Moment().format('LL')}</p>
                <h2 className="heure">{Moment().format('HH : mm')}</h2>
                
                
            </div>
        )
    }
}


