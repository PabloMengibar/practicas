//numeros y digitos
export function countLettersAndDigits(input) {
    let t = 0;
    for (let a=0; a<input.length; a++){
        if (letras(input.charAt(a))) t ++;
        if (digitos(input.charAt(a))) t ++;
    }
   return t
}
//saber si es una letra
function letras(char){
    let code = char.charCodeAt(0);
    return (code>=65 && code <=90) || (code>=97 && code <=122);
}
//saber si es un numero
function digitos(char){
    let code = char.charCodeAt(0);
    return (code>=48 && code <=57) 
}
