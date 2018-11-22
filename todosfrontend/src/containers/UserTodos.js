import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions/userTodos';
import TodoItem from '../TodoItem';

class UserTodos extends Component {
  componentDidMount() {
    const { currentUser } = this.props;
    this.props.fetchTodos(currentUser);
  }
  render() {
    const { userTodo } = this.props;
    let userTodoList = userTodo.map(t => (
      <TodoItem key={t._id} completed={t.completed} name={t.name} />
    ));
    return <ul>{userTodoList}</ul>;
  }
}

function mapStateToProps(state) {
  return {
    userTodo: state.userTodo,
    currentUser: state.currentUser,
  };
}
export default connect(
  mapStateToProps,
  { fetchTodos }
)(UserTodos);
