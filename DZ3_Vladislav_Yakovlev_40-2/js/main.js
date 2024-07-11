// 1

const number = prompt('Напишите число от 2-х до 10');
for (let i = 1; i <= 10; i++)

  console.log(number + " * " + i + " = " + number * i);

console.log('---------------------------------------------')

// 2 
const array = [40, 55, 22, 89, 14, 78, 56, 47, 59]

for (let i = 0; i < array.length; i++) {
  const element = array[i];
  if (element < 20) {
    console.log(`${element} это 1 балл`)
  }
  else if (element < 40) {
    console.log(`${element} это 2 балла`)
  }
  else if ( element < 60) {
    console.log(`${element} это 3 балла`)
  }
  else if (element < 80) {
    console.log(`${element} это 4 балла`)
  }
  else if (element < 100) {
    console.log(`${element} это 5 баллов`)
  }
}



