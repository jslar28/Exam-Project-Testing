import React from 'react';

class ThirdPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            oldFloorValid: false
        }
    }

    componentDidMount() {
        this.setState(this.props.location.state, () => console.log(this.state))
    }

    onInputChange = (e) => {
        let attribute = e.target.id
        let value = e.target.value

        if (attribute === "oldFloor") {
            let oldFloorValid = false
            if (value && value.match(/^-{0,1}\d+$/)) {
                oldFloorValid = true
            }
            this.setState({
                [attribute]: value,
                oldFloorValid
            })
        } else {
            this.setState({
                [attribute]: value
            })
        }
    }

    next = () => {
        this.props.history.push({
            pathname: '/4',
            state: this.state
        })
    }

    prev = () => {
        this.props.history.push('/2')
    }

    render() {
        return (
            <div>
                <br />
                <h1 className="header">Where are you moving from?</h1>
                <p>Hello {this.state.name !== "" ? this.state.name : "Unknown"}! Please insert the address of where you're moving from.</p>
                <form className="main-form">
                    <div className="form-group">
                        <label>Street name</label>
                        <input type="text" className="form-control" id="oldStreetName"
                            placeholder="Enter street name" onChange={(e) => this.onInputChange(e)} />
                        <small id="streetNameHelp" className="form-text text-muted">Example: Lygten</small>
                    </div>
                    <div className="form-group">
                        <label>Street number</label>
                        <input type="text" className="form-control" id="oldStreetNumber"
                            placeholder="Enter street number" onChange={(e) => this.onInputChange(e)} />
                        <small id="streetNumberHelp" className="form-text text-muted">Example: 37</small>
                    </div>
                    <div className="form-group">
                        <p>Floor</p>
                        <input type="text" className="form-control" id="oldFloor"
                            placeholder="Enter floor" onChange={(e) => this.onInputChange(e)} />
                        <small id="floorHelp" className="form-text text-muted">Example: 1</small>
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input type="text" className="form-control" id="oldCityName"
                            placeholder="Enter city name" onChange={(e) => this.onInputChange(e)} />
                        <small id="cityNameHelp" className="form-text text-muted">Example: København</small>
                    </div>
                    <div className="form-group">
                        <label>ZIP Code</label>
                        <input type="text" className="form-control" id="oldZipCode"
                            placeholder="Enter ZIP code" onChange={(e) => this.onInputChange(e)} />
                        <small id="zipCodeHelp" className="form-text text-muted">Example: 2400</small>
                    </div>
                </form>
                <button className="btn btn-primary" onClick={this.prev}>Back</button>
                {
                    this.state.oldFloorValid ? 
                    <button className="btn btn-primary" onClick={this.next}>Next</button>
                    :
                    <button className="btn btn-primary" disabled onClick={this.next}>Next</button>
                }
            </div>
        )
    }
}

export default ThirdPage;