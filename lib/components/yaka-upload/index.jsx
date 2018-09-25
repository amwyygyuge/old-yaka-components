import React, { Component } from 'react'
import { Upload, Button } from 'igroot'

export default class Index extends Component {

  handleChange = info => {
    let fileList = info.fileList;

    // 1. Limit the number of uploaded files
    // Only to show two recent uploaded files, and old ones will be replaced by the new
    // fileList = fileList.slice(-2);

    // 2. Read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.url = file.response.url;
      }
      return file;
    });

    // 3. Filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success';
      }
      return true;
    });
    this.props.onChange(fileList)
  }


  render() {
    return <Upload
      multiple
      {...this.props}
      fileList={this.props.value}
      onChange={this.handleChange}
    >
      <Button>
        {this.props.text ? this.props.text : "上传"}
      </Button>
    </Upload>

  }
}
