import { http } from "./http";

export const getTodos = async () => {
    try {
        const response = await http({ url: "todos" });
        if (response) {
            return response;
        }
        throw new Error("Failed to get todos");
    } catch (error) {
        return error;
    }
}

export const createTodo = async ({ title, description, status, dueDate, priority }) => {
    try {
        const response = await http({ method: "POST", url: "todos", body: { title, description, status, dueDate, priority } });
        if (response) {
            return response;
        }
        throw new Error("Failed to create todo");
    } catch (error) {
        return error;
    }
}

export const updateTodo = async ({ id, title, description, status, dueDate, priority }) => {
    try {
        const response = await http({ method: "PUT", url: `todos/${id}`, body: { title, description, status, dueDate, priority } });
        if (response) {
            return response;
        }
        throw new Error("Failed to update todo");
    } catch (error) {
        return error;
    }
}

export const deleteTodo = async (id) => {
    try {
        const response = await http({ method: "DELETE", url: `todos/${id}` });
        if (response) {
            return response;
        }
        throw new Error("Failed to delete todo");
    } catch (error) {
        return error;
    }
}

export const getTodo = async (id) => {
    try {
        const response = await http({ url: `todos/${id}` });
        if (response) {
            return response;
        }
        throw new Error("Failed to get todo");
    } catch (error) {
        return error;
    }
}

