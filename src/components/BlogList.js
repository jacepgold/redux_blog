import React from 'react';
import { connect } from 'react-redux';
import Blog from './Blog';

const filtered = (blogs, activeFilter) => {
  switch (activeFilter) {
    case 'Active':
      return( blogs.filter(t => !t.complete) )
    case 'Completed':
      return ( blogs.filter(t => t.complete) )
    default:
      return ( blogs )
  }
}

const BlogList = ({ blogs, filter}) => {
  return(
    <div>
      <ul>
        
        { filtered(blogs, filter).map(t => <Blog key={t.id} {...t} />) }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => {
  return { blogs: state.blogs, filter: state.filter }
}

export default connect(mapStateToProps)(BlogList);