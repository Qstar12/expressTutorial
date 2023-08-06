const animals = {
    Monday: 300,
    Tuesday: 400,
    Wednesday: 500,
    Thursday: 600,
    Friday: 700,
    Saturday: 800,
    Sunday: 900 
};

Object.keys(animals).map(function (key, index) {
    console.log(key, animals[key]);
})


