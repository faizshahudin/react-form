import React, { Component } from 'react';
import FileDragAndDrop from 'react-file-drag-and-drop';

class Upload extends Component {

    constructor(props) {
        super(props);
        this.handleICDrop = this.handleICDrop.bind(this);
        this.handlePayDrop = this.handlePayDrop.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state ={
            icFile:null,
            payFile: null,
        }
    }
    
    handleICDrop(dataTransfer) {
        this.state.icFile = dataTransfer.files;
        console.log(this.state.icFile,"successs");
    }

    handlePayDrop(dataTransfer) {
        this.state.payFile = dataTransfer.files;
        console.log(this.state.payFile,"successs");
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
            className="uploadFormStyle"
        >
            <div className="upload-file">
                <label className="labelStyle">
                    Upload your IC Copy
                </label>
                <input
                    className="inputFileStyle"
                    placeholder=" Drag and drop files here"
                    type="file"
                    name="icFile"
                    value={this.state.icFile}>

                    <FileDragAndDrop onDrop={this.handleICDrop}>
                            Drag and drop files here
                         <input type="file" onChange={this.handleChange} />
                    </FileDragAndDrop>
                </input>
            </div>
            <div className="upload-file">
                <label className="labelStyle">
                    Upload your Pay Slip
                </label>
                <input
                    className="inputFileStyle"
                    placeholder=" Drag and drop files here "
                    type="file"
                    name="payFile"
                    value={this.state.payFile}>

                    <FileDragAndDrop onDrop={this.handlePayDrop}>
                            Drag and drop files here
                         <input type="file" onChange={this.handleChange} />
                    </FileDragAndDrop>

                </input>
            </div>
    
        </form>

        //     <div className="App-body">
        //     <div className="App-content">
        //         <form className="Form">

        //             <div className="Upload-row">
        //                     <label className="Upload-label">1. Upload your IC Copy</label>
        //                     <div className="Drag-drop">
        //                         <FileDragAndDrop className="File-drag-drop" onDrop={this.handleDrop}>
        //                             Drag and drop files here
        //                             <input type="file" className="File-select" onChange={this.onChange} />
        //                         </FileDragAndDrop>
                                
        //                     </div>
        //             </div>

        //             <div className="Form-row">
        //                 <label className="Form-label">2. Upload your Pay Slip</label>
        //                 <div className="Drag-drop">
        //                     <FileDragAndDrop onDrop={this.handleDrop}>
        //                         Drop files here...
        //                     </FileDragAndDrop>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        //     <div className="App-progress-bar">
        //         <div className="Section">
        //             <h5 className="Section-title">
        //             Personal Information
        //             </h5>
        //             <p className="Section-description">
        //             Tell us your basic information to help us proceed your application.
        //             </p>
        //         </div>

        //         <div className="Section">
        //             <h5 className="Section-title">
        //             Next of Kin Information
        //             </h5>
        //             <p className="Section-description">
        //             If you are a working applicant, you can skip this.
        //             </p>
        //         </div>

        //         <div className="Section">
        //             <h5 className="Section-title">
        //             Documents Upload
        //             </h5>
        //             <p className="Section-description">
        //             Please provide us with the required documents to process your application.
        //             </p>
        //         </div>

        //     </div>
        //     </div>
        );
    }
}

export default Upload;