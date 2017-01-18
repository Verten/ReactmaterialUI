/**
 * Created by ebinhon on 1/5/2017.
 */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as Actions from '../actions/todos'
import Header from '../components/Header';
import MainSection from '../components/MainSection';

class ToDoApp extends React.Component {
  static propTypes = {
    todos: React.PropTypes.array.isRequired,
    actions: React.PropTypes.object.isRequired
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {

  }

  componentWillMount() {

  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    const { todos, actions } = this.props
    return (
      <div>
        <Header addTodo={actions.addTodo}/>
        <MainSection todos={todos} actions={actions}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatch)(ToDoApp)