import React, { Component } from "react";
import { Editor } from "@tinymce/tinymce-react";

class MceEditor extends Component {
  handleEditorChange = e => {
    // console.log("Content was updated:", e.target.getContent());
  };
  render() {
    return (
      <div>
        <Editor
          init={{
            branding: false,
            menubar: false,
            elementpath: false,
            plugins: "lists,anchor,link,image,code,visualchars",
            toolbar:
              " bold | italic | underline | bullist | alignleft | link | undo | redo | visualchars | image | code"
          }}
          onChange={this.handleEditorChange}
        />
      </div>
    );
  }
}

export default MceEditor;
