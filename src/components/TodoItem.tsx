import { ChangeEvent } from 'react'
import { Todo } from '../App'

interface TodoItemProps {
  todo: Todo
  onToggle: (id: string) => void
  onDelete: (id: string) => void
}

function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  const handleToggle = (e: ChangeEvent<HTMLInputElement>) => {
    onToggle(todo.id)
  }

  const handleDelete = () => {
    onDelete(todo.id)
  }

  return (
    <li className="todo-item">
      <input
        type="checkbox"
        className="todo-checkbox"
        checked={todo.completed}
        onChange={handleToggle}
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button className="btn btn-delete" onClick={handleDelete}>
        Удалить
      </button>
    </li>
  )
}

export default TodoItem
