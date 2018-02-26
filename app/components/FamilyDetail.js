const React = require('react');

class FamilyDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '', relation: '', ic: '', nat: '',
            address: '', postcode: '', state: '', 
            phone: '', email: '', work: '',
            tax: '', epf: '', gross: '', net: '',
            depend: '', occupation: ''
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form
                className="familyFormStyle"
            >
                <div className="name">
                    <label className="labelStyle">
                        Name
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="relation">
                    <label className="labelStyle">
                        Relationship with Applicant
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="relation"
                        value={this.state.relation}
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
                        name="nat"
                        value={this.state.nat}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="ic">
                    <label className="labelStyle">
                        IC/Passport Number
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="ic"
                        value={this.state.ic}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="address">
                    <label className="labelStyle">
                        Permanent Address
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="address"
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
                        name="postcode"
                        value={this.state.postcode}
                        onChange={this.handleChange}
                    />
                    <text>*same as mailing address</text>
                </div>
                <div className="state">
                    <label className="labelStyle">
                        State
                    </label>
                    <select className="inputStyle" name="state" onChange={this.handleChange}>
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
                        <option value="Kuala Lumpur">Kuala Lumpur</option>
                        <option value="Putrajaya">Putrajaya</option>
                        <option value="Labuan">Labuan</option>
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
                        name="phone"
                        value={this.state.phone}
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
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="work">
                    <label className="labelStyle">
                        Currently working?
                    </label>
                    <select className="inputStyle" name="work" onChange={this.handleChange}>
                        <option value="" selected disabled hidden>Choose here</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <div className="tax">
                    <label className="labelStyle">
                        Income Tax Number
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="tax"
                        value={this.state.tax}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="epf">
                    <label className="labelStyle">
                        EPF Number
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="epf"
                        value={this.state.epf}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="occupation">
                    <label className="labelStyle">
                        Occupation
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="occupation"
                        value={this.state.occupation}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="gross">
                    <label className="labelStyle">
                        Gross Salary
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="gross"
                        value={this.state.gross}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="net">
                    <label className="labelStyle">
                        Net Salary
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
                        name="net"
                        value={this.state.net}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="depend">
                    <label className="labelStyle">
                        Number of family dependants
                    </label>
                    <input
                        className="inputStyle"
                        type="number"
                        name="depend"
                        value={this.state.depend}
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}

module.exports = FamilyDetail;