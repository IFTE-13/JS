/*First question - Calculate the quantity of bricks in a building where from 1st to 10th floor is 10feet per floor, 11th to 20th floor 12 feet per flor and from 21th to nth floor 15 feet per floor. Each feet need 1000 bricks; */
var total = 0;
function brickCalculator(brick){

    if(brick <= 10)
    {
        total = brick*1000*10;
        return total;
    }
    else if(brick >10 && brick<=20)
    {
        total = 10*10*1000 + (brick-10)*12*1000;
        return total;
    }
    else
    {
        total = 10*10*1000 + 10*12*1000 + (brick-20)*15*1000;
        return total;
    }
}
var totalBricks = brickCalculator(50);
console.log('Total bricks needed : ', totalBricks);


/* Convert Feet into Mile */
var mile = 0;

function feetToMile(feet){
    mile = feet/5280;
    return mile;
}

var result = feetToMile(100); 
console.log('The result is :', result);


/* Wood calculaor to calculate the quantity of wood for building chair, table and bed; Where a chair need 1cm^3, table need 3cm^3 and bed need 5cm^3 of wood. */
var totalWood = 0;
function woodCalculator(chair, table, bed)
{
    totalWood = chair*1 + table*3 + bed*5;
    return totalWood;
}

var needWood = woodCalculator(1,3,5);
console.log("Wood need : ", needWood, 'cubicmeter') 

/* Find the smallest word in an array */
