import { EDIT_STUDENT, OPEN_FORM_RESET } from './../constants';

let initialState = {
    id: '',
    fullName: '',
    emailStudent: '',
    phoneStudent: '',
    genderStudent: 0,
    classRoomStudent: ''
}

const editing = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_STUDENT: 
            return action.student
        case OPEN_FORM_RESET:
            state = {
                id: '',
                fullName: '',
                emailStudent: '',
                phoneStudent: '',
                genderStudent: 0,
                classRoomStudent: ''
            }
            return state;
            
        default:
            return state;
            
    }
}

export default editing;