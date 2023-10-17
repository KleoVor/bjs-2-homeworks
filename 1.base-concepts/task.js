"use strict"

function solveEquation(a, b, c) {
  const arr = [];
  const d = (b * b - 4 * a * c);
  if (d > 0) {
    const x1 = (-b + Math.sqrt(d)) / (2 * a);
    const x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  } else if (d === 0) {
    const x = -b / (2 * a);
    arr.push(x);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  // %% ставка в месяц = проценты / 100 / 12
  const percentMonth = percent / 100 / 12;

  // тело кредита после первоначального взноса
  const body = (amount - contribution);

  //ежемесячный взнос по формуле S * (P + (P / (((1 + P)^n) - 1)))
  const contributionMonth = (body * (percentMonth + (percentMonth / (((Math.pow((1 + percentMonth), countMonths)) - 1)))));

  // считаем сумму, которую внесет клиент по кредиту (не учитывая первоначальный взнос!!!!) - на погашение тела крелита + проценты, 
  //округляем до 2 знаков и приводим к числовому значению
  return +((contributionMonth * countMonths)).toFixed(2);

}