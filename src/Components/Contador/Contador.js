import React, { Component } from 'react'
import Button from '@material-ui/core/Button';

export default class Contador extends Component {

    constructor() {
        super()

        this.state = {
            num: 0,
        }
    }



    unoMas = () => {
        this.setState({num: this.state.num + 1})
    }

    unoMenos = () => {
        this.setState({num: this.state.num - 1})
    }

    render() {
        return (
            <div>
                
            </div>
        )
    }
}
