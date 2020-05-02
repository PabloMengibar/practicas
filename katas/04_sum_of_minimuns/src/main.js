//devolver los mas pequenos
function compare(a,b){
    return a-b
}
export const sumOfMinimums = (arr) => {
   let arrayMapp = arr.map(value => value.sort(compare)[0] )
   let total = arrayMapp.reduce(
       (acummulated, current) =>{
           return acummulated + current
       });
return total
}