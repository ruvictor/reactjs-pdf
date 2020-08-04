import React, { Component } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import PDF from './PDF/PDF';

class Post extends Component {
    state = {
        title: '',
        content: '',
        postSubmitted: false
    }

    onChange = input => e => {
        this.setState({
            [input]: e.target.value
        });
    }

    sunmitPost = (e) => {
        
        if(!this.state.title || !this.state.content){
            alert('All fields are required!');
            e.preventDefault();
        }else{
            this.setState({
                postSubmitted: true
            });
        }
    }

    render(){
        return(
            <>
            {  !this.state.postSubmitted ? 
                (<div className="container">
                    <div class="jumbotron mt-3">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="well well-sm">
                                    <form className="form-horizontal" method="post">
                                        <fieldset>
                                            <legend className="text-center header">Add new Post</legend>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-user bigicon"></i></span>
                                                <input id="fname" onChange={this.onChange('title')} name="name" type="text" placeholder="Post Title" className="form-control" />
                                            </div>
                                            <div className="form-group">
                                                <span className="col-md-1 col-md-offset-2 text-center"><i className="fa fa-pencil-square-o bigicon"></i></span>
                                                <textarea onChange={this.onChange('content')} className="form-control" id="message" name="message" placeholder="Enter your text here" rows="7"></textarea>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" onClick={this.sunmitPost} className="btn btn-primary btn-lg">Submit</button>
                                            </div>
                                        </fieldset>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>) : (
                    <PDFViewer>
                        <PDF title={this.state.title} content={this.state.content} />
                    </PDFViewer>
                )
            }
            </>
        );
    }
}

export default Post;