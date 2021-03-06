import React, { Component } from 'react';

import PostHeader from "./PostHeader"
import PostComments from "./PostComments"

class PostItem extends Component { 
  
  render() {
    return (
      <div className="post-content">
        <PostHeader 
          date={this.props.post.date} 
          author={this.props.post.author} 
        />
        <p className="content">{this.props.post.content}</p>
        <PostComments comments={this.props.post.comments}/>
      </div>
    );
  };
};

export default PostItem;
