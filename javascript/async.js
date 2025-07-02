// setInterval - allows u to execute a block of code repeatedly at a specified time intervals, 1000 is 1 sec

const myInterval = setInterval(() => {
    console.log('Hello World')
}, 1000)


// to prevent it from running indefinately we use clearInterval 

clearInterval(myInterval)



// setTimeout - it allows u to execute a block of code after a specific delay it runs only once unless setup to repeat 

const myTimeout = setTimeout(() => console.log('Hello, World'), 1000)



// clearTimeout - can be used to cancel timeout by it executes

clearTimeout(myTimeout)


// synchronous vs asynchronous js 
// synchronous - is executed line by line with each task completing instantly there is no delay 

const functionOne = () => {
    console.log('Function One');

    functionTwo();

    console.log('Function One, Part 2');
}

const functionTwo = () => {
    console.log('Function Two');
}

functionOne();

// Output:
// Function One
// Function Two
// Function One, Part 2


// asynchronous js 
const functionOne1 = () => {
    console.log('Function One'); // 1

    functionTwo1();

    console.log('Function One, Part 2'); // 2
}

const functionTwo1 = () => {
    setTimeout(() => console.log('Function Two'), 2000); // 3
}

functionOne1();

// Output:
// Function One
// Function One, Part 2
// (after a two-second delay)
// Function Two


// in function two we sent timeout which simulates fetching data from the server after the 2 second delay it is logged 

// js is non blocking so it dosent wait for time consuming tasks since it might lead the application to be unresponsive 

// this non blocking behaviour allows js to execute code while waiting for other async tasks to complete


/*
Synchronous JavaScript: Executes code line by line, waiting for each task to complete before moving on.

Asynchronous JavaScript: Allows tasks to run in the background, enabling the engine to continue executing other code. This is essential for handling tasks like network requests without freezing the application
*/

// simulating fetching a user from a dbase
const fetchUser = (username) => {
     setTimeout(() => {
        return { user: username };
    }, 2000); // Simulating a delay of 2000ms
}

const user = fetchUser('test');

console.log(user); // undefined

// However, console.log(user) outputs undefined because the function doesn't return the data immediately. The return statement inside setTimeout doesn't affect the outer function's return value.


// to handle async we use callback functions - a function passed into another function as an argument, which is then invoked inside the outer function to complelte some kind of action

const fetchUser2 = (username, callback) => {
    setTimeout(() => {
        console.log('Now we have the user');
        callback({ user: username });
    }, 2000);
}


// calling the function with the callback function passed to it
fetchUser2('test', (user) => {
    console.log(user);
});

// Asynchronous Operations: These operations, like data fetching, do not complete immediately and require handling mechanisms to manage their completion.

// Callback Functions: These are a fundamental way to handle asynchronous operations in JavaScript. They allow you to specify what should happen once an asynchronous task is complete .

// complex callback 

const fetchUser3 = (username, callback) => {
    setTimeout(() => {
        console.log('Now we have the user');
        callback(username);
    }, 2000);
}

const fetchUserPhotos = (username, callback) => {
    setTimeout(() => {
        console.log('Now we have the photos');
        callback(['photo1', 'photo2']);
    }, 2000); // Simulating a delay
}

const user3 = fetchUser3('test', (username) => {
    console.log(username);

    fetchUserPhotos(username, (userPhotos) => {
        console.log(userPhotos);
    });
});

// this is already getting messy and we have to call a callback for every single async func this is called callback hell
const user9 = fetchUser('test', (username) => {
    fetchUserPhotos(username, (userPhotos) => {
        fetchPhotoDetails(userPhotos[0], (details) => {
            fetchPhotoDetails(userPhotos[0], (details) => {
                fetchPhotoDetails(userPhotos[0], (details) => {
                    fetchPhotoDetails(userPhotos[0], (details) => {
                        console.log(details);
                    });
                });
            });
        });
    });
});

// promises - a better way of managing async to avoid callback hell - They are objects that represent the eventual completion (or failure) of an asynchronous operation and its resulting value. Promises can either return the successfully fetched data or an error.

// so the promise is wrapped around the async func 
// if successful call resolve else call reject

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got the use');
        resolve({user:'Adrian'})
    }, 2000)
}); 

// getting the data from the promise
promise.then((user) => {
    console.log(user)
})

// we use .then to hande the resolved value of the promise

// handling errors with promise 
// Creating the promise
const promises = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Got the user');
        // resolve({ user: 'Adrian' });
        reject('Error');
    }, 2000);
});

// Getting the data from the promise
// .then gives us the result of the resolve and .catch gives us the result of the reject
promises.then((user) => {
    console.log(user);
}).catch((error) => {
    console.log(error);
});



console.log(1);

const fetchUser5 = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the user');
            resolve(username);
        }, 2000);
    });
}

const fetchUserPhotos5 = (username) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the photos');
            resolve(['photo1', 'photo2']);
        }, 2000);
    });
}

const fetchPhotoDetails = (photo) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Now we have the photo details');
            resolve('details...');
        }, 2000);
    });
}

// Calling the functions with promises
fetchUser('Adrian')
    .then((user) => fetchUserPhotos(user))
    .then((photos) => fetchPhotoDetails(photos[0]))
    .then((detail) => console.log(detail))
    .catch((error) => console.log(error));

console.log(2);

// Promises provide a more readable and manageable way to handle asynchronous operations.
// They allow you to chain operations and handle errors gracefully.
// Promises help avoid callback hell, making your code easier to maintain.


// async await is a syntactic sugar built on top of promises it allows u to write async code that looks and behaves like synchronous code which makes it easier to read and maintain

// Readability: Asynchronous functions using async/await resemble synchronous functions, making them easier to understand.

// Error Handling: You can use try/catch blocks to handle errors, similar to synchronous code.

const fetchNumber = async () => {
    return 25;
}

fetchNumber().then(result => {
    console.log(result); // should log 25
});

// the fetchNumber is  declared with the async keyword which means it returns a promise 
// the return 25 is equivalent to return Promise.resolve(25)
// then .then is used to handle the resolved value of the promise

// await is used to pause the execution of an async until the promise is fulfilled. it can only be used in an async func

const displayData = async () => {
    try {
        const user = await fetchUser('Adrian');
        const photos = await fetchUserPhotos(user);
        const detail = await fetchPhotoDetails(photos[0]);

        console.log(detail);
    } catch (error) {
        console.error(error);
    }
}

// JavaScript Engine: This is the core component that executes JavaScript code. A well-known example is Google's V8 Engine, which powers both Google Chrome and Node.js.
// Web APIs: These are provided by the browser and include features like setTimeout, DOM manipulation, and fetch. They allow JavaScript to interact with the browser environment.
// Job/Callback Queue: This is where asynchronous callbacks are queued up to be executed once the call stack is clear.


// in javascript when null is used with comparism operators null is treated as 0

// null <= 0

// Nan - means its not a number it is a result of an operation that does not provide a well defined value it is not equal to any value including itself 

NaN === NaN //false

// in js we can add strings but not subtract them


// Math.max, Math.min - find the max and min in array