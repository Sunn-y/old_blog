---
title: "Sync VS Async"
categories: [back-end, nodejs]
tags: [node.js, server]
comment: true
---

# ex)

```jsx
//sample.txt => 'B'

//동기 => A, B, C
console.log('A');
var result = fs.readFileSync('sample.txt', 'utf8');
console.log(result);
console.log('C');

//비동기 => A, C, B
console.log('A');
var result = fs.readFile('sample.txt', 'utf8', (err, result) => {
	console.log(result);
});
console.log('C');
```

---

# #Callback function

```jsx
var a = function(){
	console.log('A');
}

function slowfunc(callback){
	callback();
}

slowfunc(a);
```

```jsx
let numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
console.log(numbers.sort());
// => 1, 10, 2, 20, 3, 4, 5, 6, 7, 8, 9

//콜백함수
const sortfunc = (a, b) => {
	return a - b; // a가 b보다 크면 양수 // a가 b보다 작으면 음수 // 같으면 0 => 정렬기준
}
console.log(numbers.sort(sortfunc));
// => 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20
```

- numbers : 배열객체
- sort() : 객체에 속해있기 때문에 함수가 아니라 메소드/ 내장객체, 내장메소드, 빌트인객체, 빌트인메소드
- 우리가 만드는 건: 사용자 객체, 사용자 메소드
- 자바스크립트의 함수가 값이기 때문에 가능

---

# #Ajax

```jsx
$.get('url', function(result){ console.log(result); }, 'json');
```

---

- 출처: ([https://opentutorials.org/course/3332/21132](https://opentutorials.org/course/3332/21132))[[https://opentutorials.org/course/3332/21132](https://opentutorials.org/course/3332/21132)]
- 참고: ([https://www.youtube.com/watch?v=m0icCqHY39U](https://www.youtube.com/watch?v=m0icCqHY39U))[[https://www.youtube.com/watch?v=m0icCqHY39U](https://www.youtube.com/watch?v=m0icCqHY39U)]