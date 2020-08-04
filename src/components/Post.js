import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './PDF/PDF';

class Post extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    }

    render(){
        return(
            <PDFViewer>
                <PDF />
            </PDFViewer>
        );
    }
}

export default Post;