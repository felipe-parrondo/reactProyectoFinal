import React, { Component } from 'react'
import { Button } from '@material-ui/core';

export default class Contador extends Component {

    constructor() {
        super();

        this.state = {
            num: 0,
            stock: 10,
            min: 0,
        }
    }

    unoMas = () => {
        if(this.state.num < this.state.stock) {
            this.setState({num: this.state.num + 1})
        } else {
            alert("no hay mas productos disponibles")
        }
    }

    unoMenos = () => {
        if(this.state.num > this.state.min) {
            this.setState({num: this.state.num - 1}
        )} else {
            alert("no podes llevar menos de 0!")
        }
    }

    render() {
        return (
            <div className="Contador__wrapper">
                <div>
                    <p> Stock: 10 </p>
                </div>

                <Button color="primary" size="small" variant="contained" onClick={this.unoMenos} > - </Button>

                <span id="contador" > {this.state.num} </span>

                <Button color="primary" size="small" variant="contained" onClick={this.unoMas}> + </Button>
            </div>
        )
    }
}
