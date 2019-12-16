import React from 'react';

class SecondPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.setState(this.props.location.state, () => console.log(this.state))
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
            pathname: '/3',
            state: this.state
        })
    }

    prev = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <br/>
                <h1 className="header">Contact information</h1>
                <p>Hello {this.state.name !== "" ? this.state.name : "Unknown"}! Please insert your contact information.</p>
                <form className="main-form">
                    <div className="form-group">
                        <label>Email</label>
                        <input type="text" className="form-control" id="email"
                            placeholder="Enter email" onChange={(e) => this.onInputChange(e)} />
                        <small id="emailHelp" className="form-text text-muted">Example: me@example.dk</small>
                    </div>
                    <div className="form-group">
                        <label>Phone number</label>
                        <input type="text" className="form-control" id="phone"
                            placeholder="Enter phone number" onChange={(e) => this.onInputChange(e)} />
                        <small id="phoneHelp" className="form-text text-muted">Example: 37</small>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={this.prev}>Back</button>
                <button className="btn btn-primary" onClick={this.next}>Next</button>
            </div>            
        )
    }
}

export default SecondPage;