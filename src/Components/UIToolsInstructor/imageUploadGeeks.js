import axios from 'axios';

import React,{Component} from 'react';
import Button from 'react-bootstrap/Button';


class Image extends Component {

	state = {
        // Initially, no file is selected
        selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
        // Update the state
        this.setState({ selectedFile: event.target.files[0] });
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
		if(this.state.selectedFile != null) {
			// Create an object of formData
			const formData = new FormData();
			// Update the formData object
			formData.append(
				"figure",
				this.state.selectedFile,
				this.state.selectedFile.name
			);
			
			// Details of the uploaded file
			console.log(this.state.selectedFile);
			console.log("Adding the image to the Ques..")
			this.props.setFigure(formData);
		}
	
	
        // Request made to the backend api
        // Send formData object
        // axios.post("api/uploadfile", formData);
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {  
		return (
		<div>
			{/* <p>File Details:</p>
			
            <p>File Name: {this.state.selectedFile.name}</p>       
            <p>File Type: {this.state.selectedFile.type}</p>                
            <p>
			Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p> */}
		</div>
		);
	} 
    else {
		return (
		<div>
			<br />
			
		</div>
		);
	}
	};
	
	render() {	
	return (
		<div>
			<div>
                <br></br>
				<input type="file" onChange={this.onFileChange} style={{ marginLeft: 20, marginTop: 10, maxWidth: '15em', maxHeight: '3em' }}
                />
                <br></br>
				<Button variant="primary" size="sm" style={{ marginLeft: 20, marginTop: 10, maxWidth: '5em', maxHeight: '3em' }}
                 onClick={this.onFileUpload}>
				Upload
				</Button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default Image;


// https://www.positronx.io/react-file-upload-tutorial-with-node-express-and-multer/