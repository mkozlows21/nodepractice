var asyncAdd = (a,b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Invalid input. Input must be number.');
            }
        }, 1500);
    });
};

asyncAdd(1,1).then((data) => {
    //console.log(data);
    return asyncAdd(data, 10);
}).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});

console.log('hello there');