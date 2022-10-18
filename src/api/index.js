export const getUser = async(user_id) => {
    const response = (await fetch(`https://jsonplaceholder.typicode.com/users/${user_id}`)).json();
    return response;
}