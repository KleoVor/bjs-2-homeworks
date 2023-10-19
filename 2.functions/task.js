function getArrayParams(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    sum += arr[i];
  }
  avg = +(sum / arr.length).toFixed(2);

  return {
    min: min,
    max: max,
    avg: avg
  };

}


function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  const sum = arr.reduce((acc, num) => acc + num, 0);
  return sum;
}


function differenceMaxMinWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let min = Infinity;
  let max = -Infinity;

  arr.forEach(num => {
    if (num < min) {
      min = num;
    }
    if (num > max) {
      max = num;
    }
  });

  const delta = max - min;
  return delta;
}


function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;
  let deltaSumEvenOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += +(arr[i])
    } else {
      sumOddElement += +(arr[i])
    }
  }
  deltaSumEvenOddElement = sumEvenElement - sumOddElement;
  return deltaSumEvenOddElement
}


function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let countEvenElement = 0;
  let result = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) {
      sumEvenElement += +(arr[i])
      countEvenElement += 1;

    }
    result = +(sumEvenElement / countEvenElement);
  };
  return result;
}


function makeWork(arrOfArr, func) {
  if (arrOfArr.length === 0) {
    return 0;
  }

  let maxWorkerResult = -Infinity; // Инициализация переменной максимального результата
  for (const arr of arrOfArr) {
    if (arr.length === 0) { // Проверка на пустой массив
      maxWorkerResult = 0;
    } else {
      const result = func(...arr); // Использование spread-оператора
      if (result > maxWorkerResult) {
        maxWorkerResult = result;
      }
    }
  }
  return maxWorkerResult;
}