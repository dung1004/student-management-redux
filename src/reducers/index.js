import { combineReducers } from 'redux';

import students from './students';
import editStudent from './editStudent';
import keyWord from './keyWord';

const myReducers = combineReducers({
    students,
    editStudent,
    keyWord
});
export default myReducers;