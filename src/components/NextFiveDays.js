import React from 'react'
import NextFiveDaysCard from './NextFiveDaysCard'

export default function NextFiveDays(props) {
            return (
            <div className="next-five-days">
                <h2 className="next-five-days__title">Next Five Days:</h2>
                <div className="next-five-days__items">
                    {Object.keys(props.data).map((keyName,keyIndex) => {
                        return <NextFiveDaysCard 
                            key={keyName}
                            date={props.data[keyName].date}
                            image_url={props.data[keyName].item && props.data[keyName].item.image_url_local}
                            itemName={props.data[keyName].item && props.data[keyName].item.name}
                            amount={props.data[keyName].item_quantity}
                            bonus={props.data[keyName].bonus && props.data[keyName].bonus.bonus}
                            bonusDescription={props.data[keyName].bonus && props.data[keyName].bonus.description}
                        />
                        })}
                </div>
            </div>
            )
        }
