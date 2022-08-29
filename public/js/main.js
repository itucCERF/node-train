users = [{
    name: 'Yazeed',
    age: 25
}, {
    name: 'Sam',
    age: 30
}, {
    name: 'Bill',
    age: 20
}];

// Map function
getName = (user) => user.name;
usernames = users.map(getName);
console.log(usernames);

// Filter function
startsWithB = (string) => string
    .toLowerCase()
    .startsWith('b');
namesStartingWithB = users
    .filter((user) => startsWithB(user.name));
console.log(namesStartingWithB);

// Reduce function
totalAge = users.reduce((total, user) => user.age + total, 0);
console.log(totalAge);