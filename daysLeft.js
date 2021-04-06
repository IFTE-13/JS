const today = new Date();

const left = new Date(today.getFullYear(), 11, 25);
if(today.getMonth() == 11 && today.getDate() > 25){
    left.setFullYear(left.getFullYear()+1);
}

const left_day = 1000*60*60*24;

console.log(Math.ceil((left.getTime()-today.getTime()))/left_day + " days left until Christmas")
