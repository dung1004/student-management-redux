import * as types from './../constants/index';

export const addUser = (infoStudent) => {
    return {
        type: types.ADD_STUDENT,
        infoStudent
    }
}

export const listStudents = () => {
    return {
        type: types.LIST_STUDENTS
    }
}

export const deleteStudent = (id) => {
    return {
        type: types.DELETE_STUDENT,
        id
    }
}

export const editStudent = (student) => {
    return {
        type: types.EDIT_STUDENT,
        student
    }
}

export const updateStudent = (student) => {
    return {
        type: types.UPDATE_STUDENT,
        student
    }
}

export const openFormReset = () => {
    return {
        type: types.OPEN_FORM_RESET
    }
}

export const onSearch = (keyWord) => {
    return {
        type: types.ON_SEARCH,
        keyWord
    }
}