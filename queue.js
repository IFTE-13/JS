class Queue{
    constructor(){
        this.queue = [];
    }
    enqueue(item){
        this.queue.push(item);
    }
    dequeue(){
        if(this.queue.length){
            return this.queue.shift();
        }
    }
}

const products = new Queue();

products.enqueue("Laptop");
products.enqueue("Camera");
products.enqueue("Mobile");

console.log(products.queue);

const winner = products.dequeue();
console.log(winner);
console.log(products.queue);