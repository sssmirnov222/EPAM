# Практическая работа 6 - Методы для работы с массивами в JavaScript.

## Задание №1

Написать функцию-аналог метода slice(begin, end), которая копирует участок массива от begin до end, не включая end. Функция принимает аргументы (array, begin, end) и возвращает новый массив, исходный при этом не меняется. Функция дожна иметь все возможности оригинального slice:
-   если аргмент end не указан, то элементы копируются до конца массива
-   если не указан ни begin, ни end, то копируется весь массив
-   могут использоваться отрицательные begin и end, в этом случае отсчёт идет с конца массива

## Задание №2

Написать функцию-аналог метода some(callback), которая возвращает true, если вызов callback вернёт true для какого-нибудь любого элемента array. Функция принимает аргументы (array, callback). Callback принимает 3 аргумента (item, i, array).

## Задание №3

Написать функцию-аналог метода every(callback), которая возвращает true, если вызов callback вернёт true для каждого элемента array. Функция принимает аргументы (array, callback). Callback принимает 3 аргумента (item, i, array).

## Задание №4

Написать функцию-аналог метода filter(array, callback) для фильтрации массива. Функция возвращает новый массив, в который войдут только те элементы array, для которых вызов callback(item, i, array) возвратит true.

## Задание №5

Написать функцию-аналог метода map(array, callback) для трансформации массива. Функция возвращает новый массив, который будет состоять из результатов вызова callback(item, i, arr) для каждого элемента array.

## Задание №6 💪

Написать функцию-аналог метода reduce(array, callback, initialValue). Функция применяет функцию callback(previousValue, currentItem, i, array) по очереди к каждому элементу массива слева направо, сохраняя при этом промежуточный результат previousValue. Функция возвращает значение - итоговый результат свёртки массива. Если аргумент initialValue есть, то на первом вызове значение previousValue будет равно initialValue. Если аргумента initialValue нет, то previousValue равно первому элементу массива, а перебор начинается со второго.

#### Критерии оценки: 
- 0 - задания не выполнены
- 3 - выполнены 1-5 задания
- 4 - `+` пройдены тесты по 1-5 заданиям и линтеры
- 5 - `+` дополнительно выполнено 6-е задание, пройдены все тесты и линтеры, исправлены комментарии тренера, если имеются