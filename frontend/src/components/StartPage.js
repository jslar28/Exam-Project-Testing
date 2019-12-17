import React from 'react';

class StartPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    exerciseOne = () => {
        this.props.history.push('/main')
    }

    exerciseNine = () => {
        this.props.history.push('/1')
    }

    render() {
        return (
            <div>
                <br/>
                <button className="btn btn-primary" onClick={this.exerciseOne}>Exercise 1 (Test Design)</button>
                <button className="btn btn-primary" onClick={this.exerciseNine}>Exercise 9 (Selenium)</button>
            </div>
        )
    }
}

export default StartPage;