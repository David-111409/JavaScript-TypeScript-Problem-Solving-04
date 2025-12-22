const users = [
    { name: "Ali", active: true },
    { name: "Sara", active: false },
    { name: "John", active: true },
];

const getActiveUserNames = (users) =>
    users.reduce((acc, user) => {
        if (user.active) acc.push(user.name);
        return acc;
    }, []); // ['Ali', 'John']Names
console.log(getActiveUserNames(users));
