console.log("this is a mod");
function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum+=element;
    });
    return sum/arr.length;
}
module.exports={
    avg:average,
    name:"SOURIK",
    repo:"cdh"
}