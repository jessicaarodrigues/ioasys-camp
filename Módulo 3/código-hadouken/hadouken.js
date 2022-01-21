const utils = require("./utils.js");

const user = {
    name: "Jessica",
    email: "jessicarodrigues@gmail.com",
    age: 31,
    password: "Jessica@123",
    confirmPassword: "Jessica@123"
}

const myUser = new Map();

myUser.set("name", user.name);
myUser.set("email", user.email);
myUser.set("age", user.age);
myUser.set("password", user.password);
myUser.set("confirmPassword", user.confirmPassword);

const formValid = () => {
    try {
        myUser.forEach(utils.formValid);
    
        if (user.password !== user.confirmPassword) {
          throw "password does not match";
        }
        console.log("user valid");
      } catch (e) {
        console.error(e);
      }
};

formValid();

