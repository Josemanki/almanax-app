import React, { Component } from 'react'
import CurrentDay from '../components/CurrentDay'
import NextFiveDays from './NextFiveDays'
import { getFiveDays } from './Requests'

export default class HomePage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            current: {
                bonus: '',
                item: ''
            },
            future: {
                bonus: '',
                item: ''
            }
        }
    }
    componentDidMount() {
        getFiveDays().then((data) => {
            this.setState({
                current: data.data[0],
                future: data.data.splice(1,5)
            })
        })
    }
    render() {
        return (
                <div className="container">
                    <div className="wrapper">
                        <CurrentDay data={this.state}/>
                        <NextFiveDays data={this.state.future}/>
                    </div>
                </div>
        )
    }
}
