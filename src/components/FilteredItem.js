import React from 'react'
import moment from 'moment'

export default function FilteredItem(props) {
    return (
        <tbody>
            {
                Object.keys(props.almanax).map((item, index) => {
                    return (

                            <tr className="filtered-item__tr" key={index}>
                                <td key={`date${index}`}>{moment(props.almanax[item].date).format('MMM, Do')}</td>
                                <td className="is-optional" key={`name${index}`}><a className="filtered-item__link" href={props.almanax[item].item.ankama_url}>{props.almanax[item].item.name}</a></td>
                                <td className="is-optional" key={`quantity${index}`}>{props.almanax[item].item_quantity}</td>
                                <td key={`type${index}`}>{props.almanax[item].bonus.bonus}</td>
                                <td key={`descr${index}`}>{props.almanax[item].bonus.description}</td>
                            </tr>
                    )
                })
            }
        </tbody>
    )
}
