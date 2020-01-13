import React, { Component } from "react";
import axiosInstance from "../../axios";

import "./NewPost.css";

class NewPost extends Component {
  state = {
    title: "",
    content: "",
    author: "Max"
  };

  componentDidMount() {
    //if unAuth then return to posts route.
    //console.log(this.props);
  }

  postDataHandler = () => {
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author
    };
    axiosInstance.post("/posts", post).then((response) => {
      console.log(response);
      this.props.history.replace("/posts");
    });
  };

  render() {
    return (
      <div className="NewPost">
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={(event) => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={(event) => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={(event) => this.setState({ author: event.target.value })}>
          <option value="Max">Max</option>
          <option value="Manu">Manu</option>
        </select>
        <button onClick={this.postDataHandler}>Add Post</button>
      </div>
    );
  }
}

export default NewPost;