import React from 'react';
import { connect } from 'react-redux';
import { toggleBlog } from '../actions/blogs';

const Blog = ({ id, name, complete, dispatch }) => (
  <span>
    <a
      onClick={ () => dispatch(toggleBlog(id)) }
      style={ complete ? { textDecoration: 'line-through' } : {}}
    >
      <h3>{name}</h3>
    </a>
    <button onClick={this.editBlog}>Edit</button>
    <button onClick={this.deleteBlog}>Delete</button>
  </span>
)

export default connect()(Blog);