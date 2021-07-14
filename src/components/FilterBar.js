import React from 'react'

export default function FilterBar(props) {
    return (
            <div className="filter-page__filter-bar">
                <form className="filter-form">
                <div className="filter-input">
                    <label htmlFor="filter">Filter:</label>
                    <select name="filter" id="filter">
                        {Object.keys(props.bonuses.sort((a, b) => a.name.localeCompare(b.name))).map((bonus, index) =>
                            <option key={index} value={props.bonuses[bonus].url_code}>{props.bonuses[bonus].name}</option>
                        )}
                    </select>
                </div>
                <div className="filter-input">
                    <label htmlFor="days-ahead">Days Ahead:</label>
                    <input type="number" name="days-ahead" id="days-ahead" defaultValue="14"/>
                </div>
                    <button onClick={props.handleSubmit}>Submit</button>
                </form>
            </div>
    )
}
