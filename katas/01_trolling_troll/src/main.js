//Cambiar todas las vocales por una i
//g=global
export const spam = (str) => {
    str = str.replace(/a|e|o|u/g, 'i') 
    str = str.replace(/A|E|O|U/g, 'I')
    return str;
}