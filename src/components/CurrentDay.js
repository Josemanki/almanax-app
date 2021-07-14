import React from 'react'
import {getCurrentAlmanax} from './Requests'
import moment from 'moment';

export default function CurrentDay(props) {
    const currentDay = props.data.current
    const now = moment(currentDay.date).format('MMM Do, YYYY')
    return (
        <div className="current-day">
            <h2 className="current-day__section-title">Current Day Offering</h2>
            <div className="current-day__card">
                <div className="current-day__title-wrapper">
                    <h3 className="current-day__title">{now}</h3>
                </div>
                <img className="current-day__image" src={currentDay.item.image_url_local} width="120" height="120"/>
                <p className="current-day__bonus">{currentDay.bonus.bonus}</p>
                <p className="current-day__bonus-description">{currentDay.bonus.description}</p>
                <hr />
                <p className="current-day__instructions">Take {currentDay.item_quantity} {currentDay.item.name} to Antiklyme Ax</p>
                <p className="current-day__description">{currentDay.item.description}</p>
            </div>
        </div>
    )
}

