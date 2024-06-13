<script>
    let todos = [];
    let newTodo = '';
    let newDescription = '';

    function addTodo() {
        todos = [...todos, { id: Date.now(), title: newTodo, description: newDescription, done: false }];
        newTodo = '';
        newDescription = '';
    }

    function deleteTodo(id) {
        todos = todos.filter(todo => todo.id !== id);
    }

    function editTodo(id, newTitle, newDescription) {
        todos = todos.map(todo => todo.id === id ? { ...todo, title: newTitle, description: newDescription } : todo);
    }

    function handleBlur(todo) {
        editTodo(todo.id, todo.title, todo.description);
    }
</script>

<section>
    <h1>Todo App</h1>

    <div class="input-wrapper">
        <input bind:value={newTodo} placeholder="New todo">
        <input bind:value={newDescription} placeholder="Description">
        <button on:click={addTodo} disabled={!newTodo}>+</button>
    </div>

    <ul>
        {#each todos as todo (todo.id)}
            <li class={todo.done ? 'done' : ''}>
                <label>
                    <input type="checkbox" bind:checked={todo.done} style="display: none;">
                    <span class="custom-checkbox"></span>
                </label>
                <input class="edit" type="text" bind:value={todo.title} on:blur={() => handleBlur(todo)}>
                <input class="edit" type="text" bind:value={todo.description} on:blur={() => handleBlur(todo)}>
                <button class="delete" on:click={() => deleteTodo(todo.id)}>✕</button>
            </li>
        {/each}
    </ul>
</section>

<style>
    section {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    margin: auto;
    padding: 2rem;
    background: #F3E5AB; 
    border-radius: 10px; 
    box-shadow: 0 8px 16px rgba(0,0,0,0.15); 
}

h1 {
    color: #222; 
    margin-bottom: 1rem; 
    font-weight: 300; 
}

.input-wrapper {
    display: flex;
    width: 100%;
    margin-bottom: 1rem;
}

input, button {
    padding: 1rem;
    border-radius: 5px; 
    margin-right: 1rem;
    font-size: 1rem;
    transition: all 0.3s ease; 
}

input {
    flex: 1;
    border: 1px solid #ccc; 
    background-color: #f7f7f7; 
}

button {
    border: none;
    background-color: #007bff; 
    color: white;
    cursor: pointer;
}

button:disabled {
    background-color: #6c757d; 
}

ul {
    list-style: none;
    padding: 0;
}

li {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.edit {
    flex: 1;
    margin: 0 1rem;
}

.custom-checkbox {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: white;
    border-radius: 50%;
    border: 2px solid #007bff; 
    position: relative;
}

.custom-checkbox::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12px;
    height: 12px;
    background: #007bff; 
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    transition: transform 0.2s ease;
}

input[type="checkbox"]:checked + .custom-checkbox::after {
    transform: translate(-50%, -50%) scale(1);
}

.delete {
    background-color: #dc3545; 
}

.done {
    text-decoration: line-through;
    color: #6c757d; 
}
</style>