import React from 'react';
import { Header, Button, Icon } from 'semantic-ui-react';
const Todo = ({ id, title, complete, updateTodo, deleteTodo }) => (
  <>
    <div style={ complete ? {} : styles.complete }>
      <Header as='h3'>{title}</Header>
      {/* <TodoForm updateTodo={updateTodo} id={id} title={title} complete={complete}/>  */}
    </div>
    <Button
      icon
      color='red'
      onClick={() => deleteTodo(id)}
      >
        <Icon name='trash' />
    </Button>
  </>
)
const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'grey',
  },
}
export default Todo;




