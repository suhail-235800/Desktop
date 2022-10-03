const arr1 = new Array("a","b",1,3);
console.log(arr1);



const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits);
fruits.sort();
console.log(fruits);
fruits.reverse();
console.log(fruits);
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
console.log(points);
const pointss = [40, 100, 21, 15, 24, 10];



for (let i = points.length -1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i+1));
  console.log(j);
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}
