import React from 'react';
import { connect } from 'react-redux';
import { addBlog } from '../actions/blogs';
import { incId } from '../actions/nextId';

class BlogForm extends React.Component {
  state = { name: '', complete: false }

  componentDidMount() {
    if(this.props.completed)
    this.setState({complete: this.props.complete})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, complete } = this.state;
    const { id, dispatch } = this.props;
    const blog = { id, name, complete };
    dispatch(addBlog(blog))
    dispatch(incId())
    this.setState({ name: '' })
  }

  handleChange = (e) => this.setState({ name: e.target.value })

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          required
          value={this.state.name}
          onChange={this.handleChange}
          placeholder="Create New"
        />
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return { id: state.nextId }
}

export default connect(mapStateToProps)(BlogForm);