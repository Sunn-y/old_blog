---
title: "(4) React - Components"
categories: [front-end, reactjs]
tags: [react, front]
comment: true
---

## 컴포넌트
---
- Header
- Side Navigation(left or right)
- Main Content
- Footer

---
## 컴포넌트 안의 코드
- JavaScript : Component Code
- App.js : App Component
 
---
## 컴포넌트 타입
- Stateless functional component
    - javascript functions
```
function welcome(props){
    return <h1>Hello, {props.name}</h1>;
}
```
- stateful class component
    - class extending component class
    - render method returning HTML 
```
class welcome extends React.Component {
    render(){
        return <h1>Hello, {this.props.name}</h1>;
    }
}
```
---
## 컴포넌트란
- UI의 부분을 묘사하는 애
- 다른 컴포넌트 안에서 중첩되서 재사용될 수 있는 애들
- 타입
    - stateless functional components
    - stateful class components


    

---

출처 : [https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw](https://www.youtube.com/channel/UC80PWRj_ZU8Zu0HSMNVwKWw)
