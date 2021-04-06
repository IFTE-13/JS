const normalPerson = {
    firstName: 'Ifte',
    lastName: 'Khar',
    salary: 15000,
    getFullName: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary-amount-tips-tax;
        return this.salary;
    }
}
const heroPerson = {
    firstName: 'hero',
    lastName: 'Khar',
    salary: 25000,
}
// normalPerson.chargeBill(2000);
// console.log(normalPerson.salary);

// const heroCharge = normalPerson.chargeBill.bind(heroPerson);
// heroCharge(2000);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(heroPerson, 900, 10, 0);
// console.log(heroPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [900, 10, 0]);
console.log(heroPerson.salary);