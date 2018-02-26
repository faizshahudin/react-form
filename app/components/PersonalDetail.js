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
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <form
                className="personalFormStyle"
            >
                <div className="name">
                    <label className="labelStyle">
                        Full Name (As per IC)
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
                <div className="ic">
                    <label className="labelStyle">
                        IC Number
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" i.e: XXXXXX-XX-XXXX"
                        type="text"
                        name="ic"
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
                        name="nat"
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
                        name="dob"
                        value={this.state.dob}
                        onChange={this.handleChange}
                    />
                </div>
                <div className="gender">
                    <label className="labelStyle">
                        Gender
                    </label>
                    <select 
                        className="inputStyle"
                        name="gender"
                        onChange={this.handleChange}
                    >
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
                        <option value="Labuan">Labuan</option>
                        <option value="Putrajaya">Putrajaya</option>
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
                        Are you currently working?
                    </label>
                    <select className="inputStyle" name="work" onChange={this.handleChange}>
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