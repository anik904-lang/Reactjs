class Car{
    constructor(name){
        this.brand=name;
    }
    present(){
        return 'I have no '+this.brand;
    }
}

let mycar=new Car("BMW");
console.log(mycar.present());
