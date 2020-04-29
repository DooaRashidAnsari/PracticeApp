import BaseRepo from './BaseRepo';


export default class TodoRepo extends BaseRepo {

    markCheckToDone = (key) => {
        return this.db.updateWorkDone(key)
    }

    getListTodos = (userId) => {
        return this.db.listWorksToday(userId)
    }

    deleteItem = (id) => {
        return this.db.deleteWork(id)
    }

    updateWork = (id,work,desc) => {
        return this.db.updateWork(id,work,desc)
    }

    insertWork = (userId,work,desc) => {
        return this.db.insertWork(userId,work,desc)
    }
}