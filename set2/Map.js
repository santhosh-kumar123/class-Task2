const myMap = new Map();
const myFunc = () => "greeting";
myMap.set(myFunc, "Hello world!");
myMap.get("greeting");
myMap.get(myFunc);
myMap.get(() => "greeting");