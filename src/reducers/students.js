import { ADD_STUDENT, LIST_STUDENTS, DELETE_STUDENT, UPDATE_STUDENT } from "../constants";

let data = JSON.parse(localStorage.getItem('students'));

let initialState = data ? data : [];

const students = (state = initialState, action) => {
    switch (action.type) {
        case LIST_STUDENTS:
            return state;

        case ADD_STUDENT: 
            const student = action.infoStudent;
            state.push(student);

            localStorage.setItem('students', JSON.stringify(state));
            return [...state];

        case DELETE_STUDENT: 
            const newStudent = state.filter(student => student.id !== action.id)
            state = newStudent;
            localStorage.setItem('students', JSON.stringify(state));
            return state;

        case UPDATE_STUDENT: 
           const newState = state.map(item => {
                if(item.id === action.student.id) {
                    return {
                        ...item,
                        fullName: action.student.fullName,
                        emailStudent: action.student.emailStudent,
                        phoneStudent: action.student.phoneStudent,
                        genderStudent: action.student.genderStudent,
                        classRoomStudent: action.student.classRoomStudent
                    }
                }else {
                    return item
                }
            })
            localStorage.setItem('students', JSON.stringify(newState));
            
            return newState;
            
        default:
            return state;
            
    }
}

export default students;