import { useState, FormEvent, ChangeEvent } from 'react'

interface TodoFormProps {
  onAdd: (text: string) => void
}

function TodoForm({ onAdd }: TodoFormProps) {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim()) {
      onAdd(inputValue.trim())
      setInputValue('')
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Введите новую задачу..."
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-add">
        Добавить
      </button>
    </form>
  )
}

export default TodoForm
