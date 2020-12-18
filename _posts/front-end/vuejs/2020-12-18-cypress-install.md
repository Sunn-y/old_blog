---
title: "Cypress setup/installation"
categories: [front-end, vuejs]
tags: [e2e, cypress]
comment: true
---

# # Set up / Installation

<pre>
$ npm install -D cypress
</pre>

-D: directory(이려나?)<br>
-g: global

## Desktop App으로 실행하기

<pre>
$ npx cypress open
</pre>

## CLI로 실행하기

<pre>
$ npx cypress run
</pre>

---

<br>

# # cy 라이브러리 이용하기

cy.커멘드 입력하면 사용가능

<pre>
cy.<em>&lt;command&gt;</em>
</pre>
<br>    
### ex) 예시1 : 클릭한 버튼이 active라는 이름의 클래스를 가지고 있어야 함

<pre>
cy.get('button')
  .click()
  .should('have.class', 'active')
</pre>

### ex) 예시2 : user/1 api를 날리면 바디에 'Amir'라는 이름이 담겨야 함

<pre>
cy.request('user/1')
  .its('body')
  .should('deep.eql', { name : 'Amir'})
</pre>

#### # cypress는 <b>chaining API</b>(subject is passed through the chain)

### ex) 예시3 : 아래와 같이 이메일과 비밀번호를 입력하면 로그인이 성공적으로 되어 main페이지로 넘어갈 수 있는 지 확인할 수 있음

<pre>
cy.visit('http://localhost:8080/login')
cy.get('#email').type.('test@test.com')
cy.get('#password').type.('1234')
cy.get('#signin-button').click()
cy.location('pathname').should('eq','/main')
</pre>
<br>
 출처 : [docs.cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)