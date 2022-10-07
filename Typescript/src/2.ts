var global_num = 12          //global variable 
class Numbers1 { 
   num_val = 13;             //class variable 
   static sval = 10;         //static field 

} 
console.log("Global num: "+global_num)  
console.log(Numbers1.sval)   //static variable  
var obj = new Numbers1(); 
console.log("Global num: "+obj.num_val);