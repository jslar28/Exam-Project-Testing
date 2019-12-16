import React from 'react';

const hoursError = "Invalid input (enter a value between 1-8)"
const quanityError = "Invalid input (enter a value between 1-6)"
const dateError = "Invalid input (enter a date after today, and 6 months ahead)"

const quantityDiscount = "Mover discount: 10%"
const dateDiscount = "Date discount: 10%"

const initialPrice = 250
const pricePerHour = 100

const dateLowerLimit = new Date()
const dateUpperLimit = new Date()
dateUpperLimit.setMonth(dateLowerLimit.getMonth() + 6)
const dateDiscountLimit = new Date()
dateDiscountLimit.setDate(dateDiscountLimit.getDate() + 7)
dateDiscountLimit.setHours(0, 0, 0, 0)

class MainPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hours: "",
            quantity: "",
            date: "",
            showHoursError: false,
            showQuanityError: false,
            showDateError: false,
            showQuanityDiscount: false,
            showDateDiscount: false,
            allowedSubmit: null
        }
    }

    componentDidMount() {
        this.setState(this.props.location.state, () => console.log(this.state))
    }

    onInputChange = (e) => {
        let attribute = e.target.id
        let value = e.target.value

        if (attribute === "date") {
            value = new Date(e.target.value)
        }

        this.setState({
            [attribute]: value
        }, () => {
            switch (attribute) {
                case "hours":
                    this.validateHours(value, (showError) => {
                        this.setState({
                            showHoursError: showError
                        })
                    })
                    break;
                case "quantity":
                    this.validateQuantity(value, (showError, showDiscount) => {
                        this.setState({
                            showQuanityError: showError,
                            showQuanityDiscount: showDiscount
                        })
                    })
                    break;
                case "date":
                    this.validateDate(value, (showError, showDiscount) => {
                        this.setState({
                            showDateError: showError,
                            showDateDiscount: showDiscount
                        })
                    })
                    break;
                default:
                    break;
            }
        })
    }

    onSubmit = () => {
        let showHoursError = false
        let showQuanityError = false
        let showDateError = false
        this.validateHours(this.state.hours, (showError) => {
            showHoursError = showError
            this.validateQuantity(this.state.quantity, (showError) => {
                showQuanityError = showError
                this.validateDate(this.state.date, (showError) => {
                    showDateError = showError
                    this.setState({
                        showHoursError,
                        showQuanityError,
                        showDateError
                    }, () => {
                        if (this.state.showHoursError || this.state.showQuanityError || this.state.showDateError) {
                            this.setState({
                                allowedSubmit: false
                            })
                        } else {
                            this.setState({
                                allowedSubmit: true
                            })
                        }
                    })
                })
            })
        })
    }

    validateHours(value, callback) {
        let showHoursError = true
        if (value && value.match(/^-{0,1}\d+$/) && parseInt(value) > 0 && parseInt(value) < 9) {
            showHoursError = false
        }
        return callback(showHoursError)
    }

    validateQuantity(value, callback) {
        let showQuanityError = true
        let showQuanityDiscount = false
        if (value && value.match(/^-{0,1}\d+$/) && parseInt(value) > 0 && parseInt(value) < 7) {
            let quantity = parseInt(value)
            showQuanityError = false
            if (quantity > 4) {
                showQuanityDiscount = true
            }
        }
        return callback(showQuanityError, showQuanityDiscount)
    }

    validateDate(date, callback) {
        let showDateError = true
        let showDateDiscount = false
        if (date && date.getTime() > dateLowerLimit.getTime() && date.getTime() < dateUpperLimit.getTime()) {
            showDateError = false
            if (date.getTime() > dateDiscountLimit.getTime()) {
                showDateDiscount = true
            }
        }
        return callback(showDateError, showDateDiscount)
    }

    prev = () => {
        this.props.history.push('/4')
    }

    render() {
        return (
            <div>
                <br/>
                <h1 className="header">Movers</h1>
                <form className="main-form">
                    <div className="form-group">
                        <label>Number of hours</label>
                        <input type="text" className="form-control" id="hours"
                            aria-describedby="How many hours?" placeholder="Enter hours" onChange={(e) => this.onInputChange(e)} />
                        <small id="hoursHelp" className="form-text text-muted">How many hours do you want the movers to be there?</small>
                        {
                            this.state.showHoursError ?
                                <p className="red">{hoursError}</p>
                                :
                                ""
                        }
                    </div>

                    <div className="form-group">
                        <label>Number of movers</label>
                        <input type="text" className="form-control" id="quantity"
                            aria-describedby="How many movers?" placeholder="Enter movers" onChange={(e) => this.onInputChange(e)} />
                        <small id="quantityHelp" className="form-text text-muted">How many movers do you want?</small>
                        {
                            this.state.showQuanityError ?
                                <p className="red">{quanityError}</p>
                                :
                                ""
                        }
                        {
                            this.state.showQuanityDiscount ?
                                <p className="green">{quantityDiscount}</p>
                                :
                                ""
                        }
                    </div>

                    <div className="form-group">
                        <label>Which day would you like the movers to come?</label>
                        <br />
                        <input type="date" id="date" name="trip-start" onChange={(e) => this.onInputChange(e)} />
                        {
                            this.state.showDateError ?
                                <p className="red">{dateError}</p>
                                :
                                ""
                        }
                        {
                            this.state.showDateDiscount ?
                                <p className="green">{dateDiscount}</p>
                                :
                                ""
                        }
                    </div>
                    <br />
                    <br />
                    <button type="button" className="btn btn-primary" onClick={() => this.onSubmit()}>Submit</button>
                </form>
                <br />
                <div>
                    {
                        this.state.showHoursError === false && this.state.showQuanityError === false && this.state.showDateError === false ?
                            <React.Fragment>
                                <p>Initial price: {initialPrice}</p>
                                <p>Price per hour: {pricePerHour}</p>
                                {
                                    this.state.showQuanityDiscount ?
                                        <p>Price for movers price with discount (10%): {this.state.hours} x {this.state.quantity} x {this.pricePerHour} / 10% = {this.state.quantity * this.state.hours * pricePerHour * 0.9}</p>
                                        :
                                        <p>Price for movers price: {this.state.hours} x {this.state.quantity} = {this.state.quantity * this.state.hours}</p>
                                }
                                {
                                    this.state.showDateDiscount ?
                                        <React.Fragment>
                                            <p>Total with early bird discount (10%{this.state.showQuanityDiscount ? " extra" : ""}): {
                                                initialPrice + (this.state.quantity * this.state.hours * pricePerHour)} / 10% = {
                                                    (initialPrice + (this.state.quantity * this.state.hours)) * 0.9}</p>
                                        </React.Fragment>
                                        :
                                        <p>Total: {initialPrice + (this.state.quantity * this.state.hours * pricePerHour)}</p>
                                }
                            </React.Fragment>
                            :
                            ""
                    }
                </div>
                {
                    this.state.allowedSubmit !== null ?
                        <div>
                            <br />
                            {
                                this.state.allowedSubmit === true ?
                                    <p className="green">Success</p>
                                    :
                                    <p className="red">Fail</p>
                            }
                        </div>
                        :
                        ""
                }
                <br/>
                {
                    this.state.allowedSubmit === true ?
                        <div>
                            <h1>Recap</h1>
                            <p>Name: {this.state.name}</p>
                            <p>Email: {this.state.email}</p>
                            <p>Phone: {this.state.phone}</p>
                            <p>--</p>
                            <p>From address:</p>
                            <p>Street name: {this.state.oldStreetName}</p>
                            <p>Street number: {this.state.oldStreetNumber}</p>
                            <p>Floor: {this.state.oldFloor}</p>
                            <p>City name: {this.state.oldCityName}</p>
                            <p>Zip code: {this.state.oldZipCode}</p>
                            <p>--</p>
                            <p>To address:</p>
                            <p>Street name: {this.state.streetName}</p>
                            <p>Street number: {this.state.streetNumber}</p>
                            <p>Floor: {this.state.floor}</p>
                            <p>City name: {this.state.cityName}</p>
                            <p>Zip code: {this.state.zipCode}</p>
                        </div>
                    :
                    ""
                }
                <br/>
                <button className="btn btn-primary" onClick={this.prev}>Back</button>
            </div>
            
        )
    }
}

export default MainPage;