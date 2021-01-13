const submit = document.getElementById("submit");
const displayCode = document.getElementById("hex-code");

// ================================================
// 1st
// const getColorHex = () => {
//    // console.log(stringLen);
//    const mstring = '0123456789ABCDEF';
//    let colorCode = '#';
//    for (let i = 0; i < 6; i++) {

//       // Math.random() function returns a number between 0 to the length
//       // of the string of mstring variable(16). charAt() then uses that to
//       // return a random character from mstring string. colorCode concatenates
//       // that and keep doing untill a 6 digit hex code doesn't get built. this
//       // for loop runs 6 times in order to pick 6 character and build a 6 digit
//       // hex code.

//       colorCode += mstring.charAt(Math.floor(Math.random() * 16));
//    }
//    return colorCode;
// }
// submit.addEventListener('click', () => {
//    const colorCode = getColorHex();
//    document.body.style.backgroundColor = colorCode;
//    displayCode.textContent = colorCode;
// })


// ==================================================
// 2nd
const getColorHex = () => {
   
      // 16777216 is the decimal number of this (FFFFFF) hex code.
      // Math.random() function creates number between 0 to 16777216
      // and then .toString() converts that into hex code. 16 used
      // as a param for .toString() which prepares it to output HEX
      // code.
   
   return (Math.floor((Math.random() * 16777216)).toString(16));
}
submit.addEventListener('click', () => {
   const colorCode = getColorHex();
   document.body.style.backgroundColor = `#${colorCode}`;
   displayCode.textContent = `#${colorCode}`;
})
