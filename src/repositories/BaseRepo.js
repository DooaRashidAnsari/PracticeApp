import Database from '../Database';
import Session from '../Session'


export default class BaseRepo {
    db = new Database();
    session = new Session()

    
}