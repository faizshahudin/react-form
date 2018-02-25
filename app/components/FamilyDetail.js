const React = require('react');

class FamilyDetail extends React.Component {
    render() {
        return (
            <form
                className="familyFormStyle"
                onSubmit={this.handleSubmit}
            >
                <div className="name">
                    <label className="labelStyle">
                        Name
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
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
                <div className="ic">
                    <label className="labelStyle">
                        IC/Passport Number
                    </label>
                    <input
                        className="inputStyle"
                        placeholder=" Type something here"
                        type="text"
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
                    <text>*same as mailing address</text>
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
                        Currently working?
                    </label>
                    <select className="inputStyle">
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
                        onChange={this.handleChange}
                    />
                </div>
            </form>
        );
    }
}

module.exports = FamilyDetail;