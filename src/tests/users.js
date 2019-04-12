export const getUsers = () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    return fetch(url)
        .then(data => data.json())
        .then(console.log)
        .catch(console.error);
};
