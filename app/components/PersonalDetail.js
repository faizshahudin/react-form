const React = require('react');

class PersonalDetail extends React.Component {
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
                        onChange={this.handleChange}
                    />
                </div>
                <div className="gender">
                    <label className="labelStyle">
                        Gender
                    </label>
                    <select className="inputStyle">
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
                        onChange={this.handleChange}
                    />
                </div>
                <div className="state">
                    <label className="labelStyle">
                        State
                    </label>
                    <select className="inputStyle">
                        <option value="" selected disabled hidden>Choose here</option>
                        <option>Selangor</option>
                        <option>Sarawak</option>
                        <option>Johor</option>
                        <option>Penang</option>
                        <option>Sabah</option>
                        <option>Perak</option>
                        <option>Pahang</option>
                        <option>Negeri Sembilan</option>
                        <option>Kelantan</option>
                        <option>Kedah</option>
                        <option>Melaka</option>
                        <option>Terengganu</option>
                        <option>Perlis</option>
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