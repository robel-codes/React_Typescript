import { Component } from 'react';

type CounterProps = {
    message: string
}

type CounterState = {
    count: number
}

export class Counter extends Component<CounterProps, CounterState> {
    state = {
        count: 0,
    }

    handleClieck = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }))
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClieck}>Count - {this.state.count}</button>
                {this.props.message} {this.state.count}
            </div>
        )
    }
}