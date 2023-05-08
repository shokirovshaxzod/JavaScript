let map = new Map();
map.set('name', 'Shahboz');
map.set('age', '12');

console.log(map.has('name')); // true
console.log(map.has('age')); // false
console.log(map.delete('name'));
console.log(map.has('name')); // false
console.log(map.size);
