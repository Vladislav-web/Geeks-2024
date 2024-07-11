// 1
const light = prompt('Напишите цвет из светофора')

if (light === 'красный' || light === 'Красный') {
  console.log('Стой убьет!!!')
} 

if (light === 'желтый' || light === 'Желтый' || light === 'Жёлтый') {
  console.log('Внимание, приготовься')
} 

if (light === 'зеленый'|| light === 'Зеленый' || light === 'Зелёный') {
  console.log('Иди с богом!')
}

// 2
const planets = prompt('Напишите цифру по порядке удаленности от Солнца планету')

switch (planets) {
  case '1': 
    console.log('Меркурий')
    break;
  case '2': 
    console.log('Венера')
    break;
  case '3': 
    console.log('Земля')
    break;
  case '4': 
    console.log('Марс')
    break;
  case '5': 
    console.log('Юпитер')
    break;
  case '6': 
    console.log('Сатурн')
    break;
  case '7': 
    console.log('Уран')
    break;
  case '8': 
    console.log('Нептун')
    break;
  case '9': 
    console.log('Плутон')
    break;
}

