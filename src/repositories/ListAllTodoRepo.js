import BaseRepo from './BaseRepo';

export default class ListAllTodoRepo extends BaseRepo {
    getAllTodos(userId) {
        this.db.listWorks(userId)
    }
}