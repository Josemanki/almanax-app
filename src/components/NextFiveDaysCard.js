import React from 'react'
import moment from 'moment'

export default function NextFiveDaysCard(props) {
    return (
        <div className="next-five-days__content">
            <div className="next-five-days__card-title-wrapper">
                <h3 className="next-five-days__date">{moment(props.date).format('MMM Do')}</h3>
            </div>
            <img className="next-five-days__image" src={props.image_url} width="120" height="120" />
            <p className="next-five-days__item-name">{`${props.amount}x ${props.itemName}`}</p>
            <hr className="divider"/>
            <p className="next-five-days__bonus-name">{props.bonus}</p>
            <p className="next-five-bonus-description">{props.bonusDescription}</p>
        </div>
    )
}
