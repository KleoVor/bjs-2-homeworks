function compareArrays(arr1, arr2) {

    if (arr1.length != arr2.length) {
        return false;
    }
    return arr1.every((element, index) => element === arr2[index]);

}


function getUsersNamesInAgeRange(users, gender) {

    //Используйте метод filter для получения нужных пользователей.
    let arrGender = users.filter(users => users.gender === gender);

    //если нет выбранного пола в массиве 
    if (arrGender.length === 0) {
        return 0;
    }

    //считаем сумму всех возвратов из массива по гендеру
    const totalAge = arrGender.reduce((acc, user) => user.age + acc, 0);

    //считаем средний возвраст
    const averageAge = totalAge / arrGender.length;
    return averageAge;
}