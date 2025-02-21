let obj = {
    a : 20, 
    n : "Abhishek"
}
console.log(obj)


// Class 
class Animal{
    constructor(name){
        this.name = name
        console.log("Object Created")
        console.log("Name = "+name)
    }
    eat(){
        console.log("Eating")
    }
    jump(){
        console.log("Jumping")
    }
}

class Lion extends Animal{
    // constructor(){
    //     console.log("Constructor Called....")
    // }
    L(){
        console.log("Sherrrrrr.....")
    }
}
let a = new Animal("Dog")
a.eat()
a.jump()

let b = new Lion("Lion")
b.L()