export const EDIT_USER = 'edit_user';

export const editUser = (user) => {
    return {
        type: EDIT_USER,
        user
    }
}