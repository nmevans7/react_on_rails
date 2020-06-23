import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
class TodoForm extends Component {
  state = { title: '', complete: false }
  componentDidMount() {
    if (this.props.id) {
      const { title, complete } = this.props
      this.setState({ title, complete })
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.id) {
      this.props.updateTodo(this.props.id, this.state)
    } else {
      this.props.addTodo(this.state)
    }
    this.setState({ title: '' })
  }
  render() {
    const { title } = this.state
    return(
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name='title'
          value={title}
          onChange={this.handleChange}
          required
          label='todo'
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}
export default TodoForm;





