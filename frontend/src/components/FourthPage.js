import React from 'react';

class FourthPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            floorValid: false
        }
    }

    componentDidMount() {
        this.setState(this.props.location.state, () => console.log(this.state))
    }

    onInputChange = (e) => {
        let attribute = e.target.id
        let value = e.target.value

        if (attribute === "floor") {
            let floorValid = false
            if (value && value.match(/^-{0,1}\d+$/)) {
                floorValid = true
            }
            this.setState({
                [attribute]: value,
                floorValid
            })
        } else {
            this.setState({
                [attribute]: value
            })
        }
    }

    next = () => {
        this.props.history.push({
            pathname: '/main',
            state: this.state
        })
    }

    prev = () => {
        this.props.history.push('/3')
    }

    render() {
        return (
            <div>
                <br />
                <h1 className="header">Where are you moving to?</h1>
                <p>Hello {this.state.name !== "" ? this.state.name : "Unknown"}! Please insert the address of where you're moving from.</p>
                <form className="main-form">
                    <div className="form-group">
                        <label>Street name</label>
                        <input type="text" className="form-control" id="streetName"
                            placeholder="Enter street name" onChange={(e) => this.onInputChange(e)} />
                        <small id="streetNameHelp" className="form-text text-muted">Example: Lygten</small>
                    </div>
                    <div className="form-group">
                        <label>Street number</label>
                        <input type="text" className="form-control" id="streetNumber"
                            placeholder="Enter street number" onChange={(e) => this.onInputChange(e)} />
                        <small id="streetNumberHelp" className="form-text text-muted">Example: 37</small>
                    </div>
                    <div className="form-group">
                        <p>Floor</p>
                        <input type="number" className="form-control" id="floor"
                            placeholder="Enter floor" onChange={(e) => this.onInputChange(e)} />
                        <small id="floorHelp" className="form-text text-muted">Example: 1</small>
                    </div>
                    <div className="form-group">
                        <label>City name</label>
                        <input type="text" className="form-control" id="cityName"
                            placeholder="Enter city name" onChange={(e) => this.onInputChange(e)} />
                        <small id="cityName" className="form-text text-muted">Example: København</small>
                    </div>
                    <div className="form-group">
                        <label>ZIP Code</label>
                        <input type="text" className="form-control" id="zipCode"
                            placeholder="Enter ZIP code" onChange={(e) => this.onInputChange(e)} />
                        <small id="zipCodeHelp" className="form-text text-muted">Example: 2400</small>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={this.prev}>Back</button>
                {
                    this.state.floorValid ?
                        <button className="btn btn-primary" onClick={this.next}>Next</button>
                        :
                        <button className="btn btn-primary" disabled onClick={this.next}>Next</button>
                }
            </div>
        )
    }
}

export default FourthPage;