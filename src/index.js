import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './fizzbuzz.scss';

class FizzBuzz extends React.Component {
    constructor(props) {
        super(props);
        const numbers = [];

        for (let i = 1; i < 101; i++) {
            numbers.push({iteration: i});
        }

        this.state = { numbers };

    }

    render() {
        const listNumbers = this.state.numbers.map((number, index) => {
            if (number.iteration % 15 === 0) {
                return <p className="fizz_buzz" key={index}>FizzBuzz</p>
            } else if (number.iteration % 5 === 0) {
                return <p className="buzz" key={index}>Buzz</p>
            } else if (number.iteration % 3 === 0) {
                return <p className="fizz" key={index}>Fizz</p>
            } else {
                return (<p className="" key={index}>{number.iteration}</p>);
            }

        })

        return (<div>
                {listNumbers}
            </div>
        );
    };

}

ReactDOM.render(<FizzBuzz />, document.getElementById('root'));