import React, {Component} from 'react'
import {getBonusList, getFilteredBonuses} from './Requests'
import FilterBar from './FilterBar'
import FilteredItem from './FilteredItem'

export default class FilterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            bonuses: [],
            almanax: [],
            errorMessage: ''
        }
    }
    componentDidMount() {
        getBonusList()
        .then((bonuses) => {
            this.setState({
                bonuses: bonuses.data
            })
        })
        
    }
    handleSubmit = (e) => {
        const period = document.getElementsByName('days-ahead')[0].value
        const bonus = document.getElementsByName('filter')[0].value
        e.preventDefault()
        getFilteredBonuses(period,bonus)
        .then((almanax) => {
            if(almanax.error) {
                console.log(almanax.error.text);
                this.setState((prevState) => {
                    return {almanax: [], errorMessage: almanax.error.text}
                })
            } else {
                    this.setState((prevState) => {
                        return { almanax: almanax.data, errorMessage: '' }
                    })
            }
        })
    }
    render() {
        return (
            <div className="container">
            <div className="wrapper">
                    <FilterBar 
                    bonuses={this.state.bonuses}
                    handleSubmit={this.handleSubmit}
                    />

                    <div className="filter-page__filtered-list">
                            <table className="filter-page__table">
                                <thead className="filter-page__table--head">
                                    <tr>
                                        <th className="small-table">Date</th>
                                        <th className="medium-table is-optional">Item</th>
                                        <th className="small-table is-optional">Amount</th>
                                        <th className="small-table">Type</th>
                                        <th className="big-table">Description</th>
                                    </tr>
                                </thead>
                                {this.state.errorMessage === '' && this.state.almanax.length === 0 && <tbody><tr><td className="filter-page__table--empty-format" colSpan="5">Nothing yet added! You can provide a bonus and a range in order to filter.</td></tr></tbody>}
                                {this.state.errorMessage != '' && <tbody><tr><td className="filter-page__table--empty-format" colSpan="5">{this.state.errorMessage}</td></tr></tbody>}
                                <FilteredItem almanax={this.state.almanax}/>
                            </table>
                    </div>
                </div>
        </div>
        )
    }
}
