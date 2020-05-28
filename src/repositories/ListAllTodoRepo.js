import BaseRepo from './BaseRepo';

export default class ListAllTodoRepo extends BaseRepo {
    getAllTodos(userId) {
        return this.db.listWorks(userId)
    }
}