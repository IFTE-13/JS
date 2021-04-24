class Stack{
    constructor(){
        this.stack = [];
    }
    add(item){
        this.stack.push(item);
    }
    remove(){
        if(this.stack.length){
            return this.stack.pop();
        }
    }
}

const products = new Stack();
products.add("Phone");
products.add("Laptop");
products.add("Camera");

console.log(products.stack);

const py = products.remove();
console.log(py);

console.log(products.stack);