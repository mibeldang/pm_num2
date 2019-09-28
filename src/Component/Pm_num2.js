import React, { Component } from 'react';

class Pm_num2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num1:0,
            num2:0,
            result: 0
        }

    }

    inputNum1HAndler(event){
        this.setState({num1: event.target.value})
    }

    inputNum2HAndler(event){
        this.setState({num2: event.target.value})
    }

    addHandler() {
        this.setState({ result: parseInt(this.state.num1) + parseInt(this.state.num2) })
    }
    subtractHandler() {
        this.setState({ result: Math.abs(this.state.num1 - this.state.num2) })
    }
    multiplyHandler() {
        this.setState({ result: this.state.num1 * this.state.num2 })
    }
    divideHandler() {
        this.setState({ result: this.state.num1 / this.state.num2 })
    }
    exponentHandler() {
        this.setState({ result: this.state.num1 ** this.state.num2 })
    }


    render() {
        return (
           <center>
                <div>
                <div>
                    <input type="number" placeholder=" Num1" onChange={(event) => this.inputNum1HAndler(event)}></input>
                    <input type="number" placeholder=" Num2" onChange={(event) => this.inputNum2HAndler(event)}></input>
                </div>
                <div>
                    <button onClick={(e) => this.addHandler(e)}> +</button>
                    <button onClick={(e) => this.subtractHandler(e)}> -</button>
                    <button onClick={(e) => this.multiplyHandler(e)}> *</button>
                    <button onClick={(e) => this.divideHandler(e)}> /</button>
                    <button onClick={(e) => this.exponentHandler(e)}> ^</button>
                </div>
                <div>
                    {this.state.result}
                </div>
            </div>
           </center>

        );
    }
}
export default Pm_num2;