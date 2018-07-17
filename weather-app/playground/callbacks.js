var getUser = (id, callback) => {
    const user = {
        id,
        name: 'mike'
    };
    
    setTimeout(() => {
        callback(user);
    }, 3000);
};

getUser(1221, (user) => {
    console.log(user);
});