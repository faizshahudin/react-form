const React = require('react');

class PersonalDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            ic: '',
            nat: '',
            dob: '',
            gender: '',
            address: '',
            postcode: '',
            state: '',
            phone: '',
            email: '',
            work: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    render() {
        return (
            <form
                className="personalFormStyle"
                onSubmit={this.handleSubmit}
            >
                <div className="name">
                    <label className="labelStyle">
                        Full Name (As per IC)
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="ic">
                    <label className="labelStyle">
                        IC Number
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" i.e: XXXXXX-XX-XXXX"
                        type="text"
                        value={this.state.ic}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="nat">
                    <label className="labelStyle">
                        Nationality
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        value={this.state.nat}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="dob">
                    <label className="labelStyle">
                        Date of Birth
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" DD/MM/YYYY"
                        type="text"
                        value={this.state.dob}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="gender">
                    <label className="labelStyle">
                        Gender
                    </label>
                    <select className="inputStyle" onChange={this.handleChange}>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
                <div className="address">
                    <label className="labelStyle">
                        Permanent Address
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        value={this.state.address}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="postcode">
                    <label className="labelStyle">
                        Postcode
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        value={this.state.postcode}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="state">
                    <label className="labelStyle">
                        State
                    </label>
                    <select className="inputStyle" onChange={this.handleChange}>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="Selangor">Selangor</option>
                        <option value="Sarawak">Sarawak</option>
                        <option value="Johor">Johor</option>
                        <option value="Penang">Penang</option>
                        <option value="Sabah">Sabah</option>
                        <option value="Perak">Perak</option>
                        <option value="Pahang">Pahang</option>
                        <option value="Negeri Sembilan">Negeri Sembilan</option>
                        <option value="Kelantan">Kelantan</option>
                        <option value="Kedah">Kedah</option>
                        <option value="Melaka">Melaka</option>
                        <option value="Terengganu">Terengganu</option>
                        <option value="Perlis">Perlis</option>
                    </select>
                </div>
                <div className="phone">
                    <label className="labelStyle">
                        Phone Number
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="tel"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="email">
                    <label className="labelStyle">
                        Email Address
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        onChange={this.handleChange}
                    />
                </div>
                <div className="work">
                    <label className="labelStyle">
                        Are you currently working?
                    </label>
                    <select className="inputStyle">
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </form>
        );
    }
}

module.exports = PersonalDetail;