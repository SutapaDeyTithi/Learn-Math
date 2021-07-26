// html editor
import React, {Component} from 'react';
import { render } from 'react-dom';
import {EditorState} from "draft-js";
import {Editor} from "react-draft-wysiwyg";
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs'; 
import {convertFromRaw, convertToRaw} from 'draft-js';   
//import Meteor from 'meteor'; 
// import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
// import "../../node_modules/draft-js-image-plugin/lib/plugin.css"

class htmlEditor extends Component{
    constructor(props){
      super(props);
      this.state = {
        editorState: EditorState.createEmpty(),
        uploadedImages: []
    };
    this._uploadImageCallBack = this._uploadImageCallBack.bind(this);
    // this.onEditorStateChange = this.onEditorStateChange.bind(this);
}
  
onEditorStateChange = editorState => {
      console.log(editorState.getCurrentContent().getPlainText());
      const rawContentState = draftToHtml(convertToRaw(editorState.getCurrentContent()));  
      //convertToRaw(editorState.getCurrentContent());
      console.log('as HTML:', rawContentState);
      this.setState({
        editorState,
      });
    //  this.props.setHTML(rawContentState);
    this.props.setHTML(editorState.getCurrentContent().getPlainText());
    };

    _uploadImageCallBack(file) {
        // long story short, every time we upload an image, we
        // need to save it to the state so we can get it's data
        // later when we decide what to do with it.
    
        // Make sure you have a uploadImages: [] as your default state
        let uploadedImages = this.state.uploadedImages;
    
        const imageObject = {
          file: file,
          localSrc: URL.createObjectURL(file),
        }
    
        uploadedImages.push(imageObject);
    
        this.setState({ uploadedImages: uploadedImages })
    
        // We need to return a promise with the image src
        // the img src we will use here will be what's needed
        // to preview it in the browser. This will be different than what
        // we will see in the index.md file we generate.
        return new Promise(
          (resolve, reject) => {
            resolve({ data: { link: imageObject.localSrc } });
          }
        );
      }


  
    render(){
      const { editorState } = this.state;
      return <div className='editor'>
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}    
          toolbar={{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: { uploadCallback: this._uploadImageCallBack },
            inputAccept: 'application/pdf,text/plain,application/vnd.openxmlformatsofficedocument.wordprocessingml.document,application/msword,application/vnd.ms-excel'
          }}
        />
      </div>
    }
  }

  export default htmlEditor;

  // https://github.com/jpuri/react-draft-wysiwyg/issues/545

  // https://stackoverflow.com/questions/57492751/how-do-i-submit-values-from-the-text-box-as-an-html-string 