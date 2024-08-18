
// token
export const saveToken = (token) => {
    localStorage.setItem('authToken', token);
};

export const getToken = () => {
    return localStorage.getItem('authToken');
};

export const clearToken = () => {
    localStorage.removeItem('authToken');
};

// User
export const saveUser = (user) => {
    if(user){
        localStorage.setItem('user', JSON.stringify(user));
    }
}

export const clearUser = () => {
    localStorage.removeItem('user');
}

export const getUser = () =>{
    const storedData = localStorage.getItem('user');

    const parsedData = storedData ? JSON.parse(storedData) : null;

    return parsedData;
}
