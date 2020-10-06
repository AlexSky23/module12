// элементы в DOM можно получить при помощи функции querySelector
const fruitsList = document.querySelector('.fruits__list'); // список карточек
const shuffleButton = document.querySelector('.shuffle__btn'); // кнопка перемешивания
const filterButton = document.querySelector('.filter__btn'); // кнопка фильтрации
const sortKindLabel = document.querySelector('.sort__kind'); // поле с названием сортировки
const sortTimeLabel = document.querySelector('.sort__time'); // поле с временем сортировки
const sortChangeButton = document.querySelector('.sort__change__btn'); // кнопка смены сортировки
const sortActionButton = document.querySelector('.sort__action__btn'); // кнопка сортировки
const kindInput = document.querySelector('.kind__input'); // поле с названием вида
const colorInput = document.querySelector('.color__input'); // поле с названием цвета
const weightInput = document.querySelector('.weight__input'); // поле с весом
const addActionButton = document.querySelector('.add__action__btn'); // кнопка добавления

// список фруктов в JSON формате
var fruitsJSON = `[
  {"kind": "Мангустин", "color": "фиолетовый", "weight": 13},
  {"kind": "Дуриан", "color": "зеленый", "weight": 35},
  {"kind": "Личи", "color": "розово-красный", "weight": 17},
  {"kind": "Карамбола", "color": "желтый", "weight": 28},
  {"kind": "Тамаринд", "color": "светло-коричневый", "weight": 22}
]`;

// преобразование JSON в объект JavaScript
var fruits = JSON.parse(fruitsJSON);

/*** ОТОБРАЖЕНИЕ ***/

// отрисовка карточек
var color1 = ['fruit_violet', 'fruit_green', 'fruit_carmazin', 'fruit_yellow', 'fruit_lightbrown'];
var colorBord = () =>{
a1 = Math.floor(Math.random() * 5);
return color1[a1];
};

const display = () => {
  // TODO: очищаем fruitsList от вложенных элементов,
   fruitsList.innerHTML = "";
  // чтобы заполнить актуальными данными из fruits

  for (let i = 0; i < fruits.length; i++) {
    // TODO: формируем новый элемент <li> при помощи document.createElement,

   var newElem = document.createElement('li');

newElem.setAttribute('class', `fruit__item ${colorBord()}`);

   newElem.insertAdjacentHTML ("beforeend",
    `<div class="fruit__info"><div>index: ${i}</div>
    <div>kind: ${fruits[i].kind}</div><div>color: ${fruits[i].color}</div>
    <div>weight (кг): ${fruits[i].weight}</div></div>`);
    // и добавляем в конец списка fruitsList при помощи document.appendChild
    
    fruitsList.appendChild(newElem);
  }
};

// первая отрисовка карточек
display();

/*** ПЕРЕМЕШИВАНИЕ ***/

// генерация случайного числа в заданном диапазоне
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// перемешивание массива
const shuffleFruits = () => {
  let result = [];
let temp1 = fruits;
  // ATTENTION: сейчас при клике вы запустите бесконечный цикл и браузер зависнет
  while (fruits.length > 0) {
    // TODO: допишите функцию перемешивания массива
    // Подсказка: находим случайный элемент из fruits, используя getRandomInt
    // вырезаем его из fruits и вставляем в result.
    // ex.: [1, 2, 3], [] => [1, 3], [2] => [3], [2, 1] => [], [2, 1, 3]
    // (массив fruits будет уменьшатся, а result заполняться)
    let nomb = getRandomInt(0, fruits.length-1);
    result.splice(0, 0, fruits[nomb]);
    fruits.splice(nomb, 1);
}
  fruits = result;
  if(fruits === temp1) {alert("Перемешивание не выполнено, нажмите ещё раз!")};
  //console.log(fruits);
};
        ///////////// -OK!-
shuffleButton.addEventListener('click', () => {
  shuffleFruits();
  display();
});

/*** ФИЛЬТРАЦИЯ ***/

// фильтрация массива
const filterFruits = () => {
  fruits.filter((item) => {
let min1 = document.querySelector('.minweight__input').value;
let max1 = document.querySelector('.maxweight__input').value;
    // TODO: допишите функцию

console.log(min1);
console.log(max1);
    i=0;
    let tempFruits = [];
    while (i < fruits.length) {
      console.log(fruits[i].weight);
      if (fruits[i].weight <= max1 && fruits[i].weight >= min1) {
        tempFruits.splice(0, 0, fruits[i]);
        
      }
      console.log(tempFruits);
      i++
      console.log(i);
    };
    console.log(tempFruits);
    fruits = tempFruits;
    //return fruits;
    item = fruits;
  });
};

filterButton.addEventListener('click', () => {
  filterFruits();
  display();
});

/*** СОРТИРОВКА ***/

let sortKind = 'bubbleSort';  //инициализация состояния вида сортировки
let sortTime = '-'; // инициализация состояния времени сортировки

const comparationColor = (a, b) => {
  // TODO: допишите функцию сравнения двух элементов по цвету

      return a.color >= b.color ? true : false;

}

const sortAPI = {
  bubbleSort(arr, comparation) {
    // TODO: допишите функцию сортировки пузырьком
       const n = arr.length;
       // внешняя итерация по элементам
       for (let i = 0; i < n-1; i++) { 
           // внутренняя итерация для перестановки элемента в конец массива
           for (let j = 0; j < n-1-i; j++) { 
               // сравниваем элементы
               if (comparation(arr[j], arr[j+1])) { 
                   // делаем обмен элементов
                   let temp = arr[j+1]; 
                   arr[j+1] = arr[j]; 
                   arr[j] = temp; 
               }
           }
       }                   
  },

  quickSort(arr, comparation) {
    // TODO: допишите функцию быстрой сортировки
items = arr;
//console.log(a);
quickSort1(items);


// функция обмена элементов
function swap(items, firstIndex, secondIndex){
  const temp = items[firstIndex];
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp;
}

// функция разделитель
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)],
      i = left,
      j = right;
  while (i <= j) {
      while (items[i] < pivot) {
          i++;
      }
      while (items[j] > pivot) {
          j--;
      }
      if (i <= j) {
          swap(items, i, j);
          i++;
          j--;
      }
  }
  return i;
}

// алгоритм быстрой сортировки
function quickSort1(items, left, right) {
  var index;
  if (items.length > 1) {
      left = typeof left != "number" ? 0 : left;
      right = typeof right != "number" ? items.length - 1 : right;
      index = partition(items, left, right);
      if (left < index - 1) {
          quickSort1(items, left, index - 1);
      }
      if (index < right) {
          quickSort1(items, index, right);
      }
  }
  return items;
}

  },

  // выполняет сортировку и производит замер времени
  startSort(sort, arr, comparation) {
    const start = new Date().getTime();
    sort(arr, comparation);
    const end = new Date().getTime();
    sortTime = `${end - start} ms`;
    //console.log(start);
    //console.log(end);
    sortTimeLabel.innerHTML = sortTime;

  },
};

// инициализация полей
sortKindLabel.textContent = sortKind;
sortTimeLabel.textContent = sortTime;

sortChangeButton.addEventListener('click', () => {
  // TODO: переключать значение sortKind между 'bubbleSort' / 'quickSort'
  if(sortKind === "bubbleSort") {
    sortKindLabel.innerHTML = "quickSort"
    sortKind = 'quickSort'}
  else {
    sortKindLabel.innerHTML = "bubbleSort"
    sortKind = 'bubbleSort'};
//console.log(sortKind);

});

sortActionButton.addEventListener('click', () => {
  // TODO: вывести в sortTimeLabel значение 'sorting...'
  const sort = sortAPI[sortKind];
  sortAPI.startSort(sort, fruits, comparationColor);
  display();
  // TODO: вывести в sortTimeLabel значение sortTime
});

/*** ДОБАВИТЬ ФРУКТ ***/ //// ----OK!

addActionButton.addEventListener('click', () => {
  // TODO: создание и добавление нового фрукта в массив fruits
  // необходимые значения берем из kindInput, colorInput, weightInput
if(kindInput.value === "" || colorInput.value === "" || weightInput.value == isNaN('')) {
  alert("Для добавления фрукта, нужно заполнить все поля!");
}
  else {
var fruitsJSON1 = {kind: `${kindInput.value}`, color: `${colorInput.value}`, 
weight: parseInt(`${weightInput.value}`)};
fruits[fruits.length] = fruitsJSON1;
  display();
  };
});
