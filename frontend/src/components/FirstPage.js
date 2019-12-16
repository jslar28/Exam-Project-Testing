import React from 'react';

class FirstPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    componentDidMount() {
        this.setState(this.props.location.state)
    }

    onInputChange = (e) => {
        let attribute = e.target.id
        let value = e.target.value
        this.setState({
            [attribute]: value
        })
    }

    next = () => {
        this.props.history.push({
            pathname: '/2',
            state: this.state
        })
    }

    render() {
        return (
            <div>
                <br/>
                <h1 className="header">Welcome</h1>
                <form className="main-form">
                    <div className="form-group">
                        <label>Please enter you name:</label>
                        <input type="text" className="form-control" id="name"
                            placeholder="Enter name" onChange={(e) => this.onInputChange(e)} />
                        <small id="hoursHelp" className="form-text text-muted">What is your name?</small>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={this.next}>Next</button>
            </div>
        )
    }
}

export default FirstPage;