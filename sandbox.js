const namesArray = ['ryu', 'chun-li', 'ryu', 'alex'];
console.log(namesArray);

const namesSet1 = new Set(['ryu', 'chun-li', 'ryu', 'alex']);
const namesSet2 = new Set(namesArray);
console.log(namesSet1, namesSet2);

const uniqueNamesArray1 = [...namesSet1];
console.log(uniqueNamesArray1);

const uniqueNamesArray2 = [...new Set(namesArray)];
console.log(uniqueNamesArray2);

const ages = new Set();
ages.add(20);
ages.add(25).add(30);
ages.delete(25);
console.log(ages, ages.size, ages.has(30));
ages.clear();
console.log(ages);

const ninjas = new Set([
    {name: 'alex', age: 30},
    {name: 'mario', age: 40},
    {name: 'luigi', age: 35}
]);

ninjas.forEach(ninja => console.log(ninja.name, ninja.age));