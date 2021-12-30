let myAge = 24;
if (myAge > 20) {
  console.log("Hello World!");
}

function sayHello(name) {
  console.log("Hello " + name + "!");
}

sayHello("Hein Htet Ko");

let obj1 = {
  name: "Hein Htet Ko",
  age: 24,
};

let obj2 = {
  //   name: "override",
  hairColor: "balck",
};

let obj3 = { ...obj1, ...obj2 };
console.log(obj3);
