let txt = "helloabcdefgh";
let length = txt.length;
let part = txt.slice(1,5);
console.log(txt);
console.log(part);

let txt1 = txt.replace("abc","xyz");
console.log(txt1);

let txt2 = txt.replace(/e/g,"i");
console.log(txt2);

let text2 = "welcome";
let conc = txt.concat("",text2);
console.log(conc);

let c = txt.charAt(7);
console.log(c);


