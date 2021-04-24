class Dictionary {
    constructor(){
        this.dictionary = {};
    }
    add(key, value){
        this.dictionary[key] = value;
    }
    get(key){
        return this.dictionary[key];
    }
}

const phoneBook = new Dictionary();

phoneBook.add('IFTE', '01717030303');
phoneBook.add('JITU', '01717050505');
phoneBook.add('FARDIN', '01717070707');

console.log(phoneBook.dictionary);

const IFTE = phoneBook.get("IFTE")
console.log(IFTE);