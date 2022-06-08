class Bird{
    constructor() {
        console.log("I'M a bird.");
    }
}
class Flamingo extends Bird{
    constructor() {
        console.log("I'm Pink.");
        super();
    }
}
const pet = new Flamingo();