export function createTodos(numOfTodos) {
    return Array.from(Array(numOfTodos))
        .map((_, index) => {
            return createTodo(index)
        })
}

function createTodo(id) {
    return {
        id,
        completed: false
    }
}