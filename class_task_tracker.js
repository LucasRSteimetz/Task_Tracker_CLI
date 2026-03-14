class Task {
    constructor(taskDescription, status, id, createdAt, updatedAt) {
        this.taskDescription = taskDescription;
        this.status = status;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

module.exports = { Task }