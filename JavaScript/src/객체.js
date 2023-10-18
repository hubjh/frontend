// 객체란? 자바스크립트에 원시타입을 제외한 모든 값이 객체
// 속성과 값의 쌍으로 구성
// 객체는 객체리터럴을 사용하여 만들며, 속성(property)과 값(value)의 쌍으로 구성
// 자바스크립트에서 객체를 만드는 방법은 객체리터럴을 사용하는 방법과 클래스를 사용하는 방법이 있음
// 객체 리터럴로 객체를 만드는 것이 간단하고 직관적임
const person = {
    title: "지구오락실",
    name: "안유진",
    age: 21,
    job: "아이돌",
};

console.log(person);

const person2 = {
    name: {
        firstName: "유진",
        lastName: "안"
    },
    age: 21,
    isAdult: true,
    info: function() {
        return `이름 : ${this.name.lastName}${this.name.firstName}, 
        나이 : ${this.age}`
    }
}
console.log(person2.info());
console.log(person2['name']);
console.log(person2['isAdult']);

// 객체 속성 변경하기
person2.name.firstName = "Toujin"
person2.name.firstName = "An"
console.log(person2.info())
// 객체 속성 동적으로 추가하기
const carInfo = {};
carInfo.name = "제네시스GV80쿠페";
carInfo.year = "2023/10/18";
carInfo.maxSpeed = "235km"

console.log(carInfo);
// 객체 리터럴 동적으로 삭제하기
delete carInfo.year;
console.log(carInfo);

// 객체 메소드 : 객체 내부에서 동작하는 함수, 즉, 프로퍼티에 저장된 값의 타입이 함수이면
const person3 = {
    name : 'John',
    age : 30,
    sayHello: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
person3.sayHello();
// 생성자로 객체 생성하기, 함수 이름이지만 객체를 생성하기 위해서 사용하기 때문에 첫자가 대문자
function Person(name, age, addr, job) {
    this.name = name;
    this.age = age;
    this.addr = addr;
    this.job = job;
}

const person11 = new Person("안유진", 21, "서울시 강남구 역삼동", "아이브");
const person22 = new Person("안유진", 21, "서울시 강남구 역삼동", "아이브");
console.log(person11);
console.log(person22);