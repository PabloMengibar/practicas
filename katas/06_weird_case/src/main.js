export const toWeirdCase = (text) => {
let words = text.split('')
let wordsRandom = words.map(word => random(word))
   return wordsRandom.join('')
}

function random(word){
   let letters = Array.from(word)
   let lettersRandom = letters.map((letter, index)=>{
      if(index%2===0) return letter.toUpperCase()
      return letter
   })
   return lettersWeird.join('')
}