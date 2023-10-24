// 비상태, 불변성 만족
const person = { name: "jongmin", age: "26" };

function increaseAge(person) {
    return { ...person, age: person.age + 1 };
}

console.log(increaseAge(person));