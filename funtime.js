const addToZero = (arr) =>{
    for(i=0; i<arr.length; i++){
        for(k=0; k<arr.length; k++){
            if(arr[i] + arr[k] === 0){
                return true
            }
        }
    } return false
}
// O(n^2)

console.log(addToZero([1,-3,3,4]))







function onlyUniqueChars(str){
    for(i = 0; i < str.length - 1; i++){
        if(str.includes(str[i], i + 1)) {return false}
        }
    return true
}
// O(n)

console.log(onlyUniqueChars("alec"))







function isPangram(s) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let regex = /\s/g;
    let lowercase = s.toLowerCase().replace(regex, "");
   
    for(let i = 0; i < alphabet.length; i++){
     if(lowercase.indexOf(alphabet[i]) === -1){
       return false;
     }
    }
   
   return true;
 } 
// O(n)

 console.log(isPangram("The quick brown fox jumps over the lazy dog!"))








 const findLongestWord = (arr) =>{
    let longest = ''
   for(i=0; i<arr.length; i++){
       if(arr[i].length > longest.length){
           longest = arr[i]
       }
   }console.log(longest.length)
}
// O(n)

 findLongestWord(["hi", "hello", "peepee"])

