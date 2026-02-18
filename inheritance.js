class Car{
    constructor(name){
        this.brand=name;
    }
    status(){
        return 'I have a '+this.brand;
    }
}

class Model extends Car{
    constructor(name,mod){
        super(name);
        this.model=mod;
    }
    show(){
        return this.status()+', it is a '+this.model;
    }
}

let mycar=new Model('BMW','X5');
console.log(mycar.show());
