const input = "Let's practice some Loops ";
const vowels = ["a","i","u","e","o"];
let resultArray = [];
// for(let i = 0; i < input.length;i++){
//   for(let j = 0; j < vowels.length;j++){
//     console.log(j)};
//     if(input[i]===vowels[j]){
//       resultArray.push(vowels[j]);
//     }
//     if(input[i]==="e"){
//       resultArray.push(vowels[j])
//     }
//      if(input[i]==="u"){
//       resultArray.push(vowels[j])
//     }
//   }
// }
// resultArray = resultArray.join("").toUpperCase();
// console.log(resultArray);
for(let inputIndex = 0; inputIndex < input.length;inputIndex++){
  for(let vowel = 0; vowel < vowels.length ; vowel++){
    // console.log(vowel) 
    if(input[inputIndex]===vowels[vowel]){
      if(input[inputIndex]==="e"){
      resultArray.push("ee")
    } else if (input[inputIndex]==="u"){
      resultArray.push("uu") }
      else {
        resultArray.push(input[inputIndex])
      }
  };
  }
   }
resultArray = resultArray.join("").toUpperCase()
console.log(resultArray);