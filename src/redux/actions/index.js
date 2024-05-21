import { ACT_ADD, ACT_DELETE, ACT_EDIT, ACT_SEARCH, ACT_UPDATE } from "../constant"


// thêm mới
export const action_add = (product) => {
    return {
        type: ACT_ADD,
        payload: product
    }
}
// cập nhật 
export const action_update = (product) => {
    return {
        type: ACT_UPDATE,
        payload: product
    }
}
// xóa
export const action_delete = (id) => {
    return {
        type: ACT_DELETE,
        payload: id
    }
}
export const action_edit = (id) => {
    return {
        type: ACT_EDIT,
        payload: id
    }
}

// tìm kiếm 
export const action_search = (keyword) => {
    return {
        type: ACT_SEARCH,
        payload: keyword
    }
}