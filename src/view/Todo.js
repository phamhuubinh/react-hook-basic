const Todo = (props) => {
    const {
        todos,
        title,
        deleteDataTodo
    } = props;

    const handleDelete = (id) => {
        deleteDataTodo(id)
    }

    return (
        <div className='todos-container'>
            <div className="title">
                {title}
            </div>
            {todos.map(todo => {
                return (
                    <div key={todo.id} style={{ width: '400px' }}>
                        <li
                            className='todo-child'
                            style={{
                                textAlign: 'left',
                                margin: '10px 0'
                            }}
                        >
                            {todo.title}
                            &nbsp; &nbsp; <span onClick={() => handleDelete(todo.id)}>x</span>
                        </li>
                    </div>
                )
            })}
            <hr />
        </div >
    )
}

export default Todo;