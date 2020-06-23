import React from 'react';
import Todo from './Todo';

const TodoList = ({todos, updateTodo, deleteTodo}) => (
<>
{ todos.map( t=>
  <Todo
  key={t.id}
  {...t}
  updateTodo={updateTodo}
  deleteTodo={deleteTodo}
  />
  )
  }
</>
)

export default TodoList;