# new Map medoth

##

### (UZ)

Map() konstruktori Map obyekt yaratadi.

### (EN)

The Map() constructor create Map object

### (RU)

Конструктор Map() создает объекты Map

```javascript
let map = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);
console.log(map);
```

#

### (UZ)

set() medoth ko'rsatilgan kalit va qiymatga ega Map ob'ektidagi yozuvni qo'shadi yoki yangilaydi.
get() medoth Map obyektidan belgilangan elementni qaytaradi. Agar taqdim etilgan kalit bilan bog'langan qiymat ob'ekt bo'lsa, siz ushbu ob'ektga havola olasiz va ushbu ob'ektga kiritilgan har qanday o'zgartirish uni Map ob'ektida samarali ravishda o'zgartiradi.

### (EN)

The set() method adds or updates an entry in a Map object with a specified key and a value.
The get() method returns a specified element from a Map object. If the value that is associated to the provided key is an object, then you will get a reference to that object and any change made to that object will effectively modify it inside the Map object.

### (RU)

Метод set() добавляет или обновляет запись в объекте Map с указанным ключом и значением.
Метод get() возвращает указанный элемент из объекта Map. Если значение, связанное с предоставленным ключом, является объектом, то вы получите ссылку на этот объект, и любое изменение, внесенное в этот объект, эффективно изменит его внутри объекта Map.

```javascript
let map = new Map();
map.set('name', 'Shahboz').set(14, 'yosh').set(true, "maktabda o'qiydi");

console.log(map.get('name'));
console.log(map.get(14));
console.log(map.get(true));
```

#

### (UZ)

has() medoth ko'rsatilgan kalitga ega element mavjudligi yoki yo'qligini ko'rsatadigan mantiqiy qiymatni qaytaradi.
delete() medoth ko'rsatilgan elementni Map ob'ektidan kalit bo'yicha olib tashlaydi.
'size' Map namunasining o'lchamiga kirish xususiyati ushbu Map element sonini qaytaradi.
clear() medoth Map ob'ektidan barcha elementlarni olib tashlaydi

### (EN)

The has() method returns a boolean indicating whether an element with the specified key exists or not.
The delete() method remodes the specified element from a Map boject by key.
The size accessor property of Map instance returns the number of element in this map.
The clear() medoth removes all element from a Map object

### (RU)

Метод has() возвращает логическое значение, указывающее, существует ли элемент с указанным ключом или нет.
Метод delete() удаляет указанный элемент из объекта Map по ключу.
Свойство доступа к размеру экземпляров Map возвращает количество элементов в этой Map.
Метод clear() удаляет все элементы из объекта Map.

```javascript
let map = new Map();
map.set('name', 'Shahboz');
console.log(map.has('name')); // true
console.log(map.has('age')); // false
// delete()
console.log(map.delete('name'));
console.log(map.has('name')); // false
// size
console.log(map.size); // 0
// clear()
map.clear();
```

#

# shaxzod shokirov

[![telegram](https://img.shields.io/badge/telegram-000?style=for-the-badge&logo=telegram)](https://web.telegram.org/k/#@Shaxzod1019)
[![instagram](https://img.shields.io/badge/instagram-000?style=for-the-badge&logo=instagram)](https://www.instagram.com/shaxzod__shokirov/)
[![youtube](https://img.shields.io/badge/youtube-000?style=for-the-badge&logo=youtube)](https://www.youtube.com/@FrontendUzra)
