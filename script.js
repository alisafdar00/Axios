// Get Axios
function getUsers() {
    return axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            return res.data;
        })
        .catch(err => {
            console.error("Error fetching users:", err);
            throw err;
        });
}
                  
function getPosts() {
    return axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
            return res.data;
        }).catch(err => {
            console.error("Error fetching users:", err);
            throw err;
        });
}
//post Axios 

//Put Axios

// DELETE Axios