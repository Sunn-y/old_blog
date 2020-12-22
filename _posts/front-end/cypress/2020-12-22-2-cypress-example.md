---
title: "Cypress example"
categories: [front-end, cypress]
tags: [test, cypress]
comment: true
---

# # cypress 예제

---

<pre>
cy.<em>&lt;command&gt;</em>
</pre>

#### # cy.커멘드 입력하면 사용가능

#### # cypress는 <b>chaining API</b>(subject is passed through the chain)

<br>

### ex) 예시1

<pre>
cy.get('button') <b>→ 버튼</b>
  .click() <b>→ 클릭</b>
  .should('have.class', 'active') <b>→ 그 버튼이 active라는 가지고 있어야 함</b>
</pre>

### ex) 예시2

<pre>
cy.request('user/1') <b>→ user/1 요청</b>
  .its('body') <b>→ 그것의 바디에 있는 내용이</b>
  .should('deep.eql', { name : 'Amir'}) <b>→ { }의 내용과 같아야 함</b>
</pre>

### ex) 예시3

<pre>
it('send email with contact form', () => { <b>→ 테스트 내용</b>
  cy.get('#name-input').type('Amir') <b>→ 아이디가 name-input인 subject에 'Amir' 타이핑</b>
  cy.get('#email-input').type('amir@cypress.io') <b>→ 아이디가 email-input인 subject에 '...'를 타이핑</b>
  cy.get('#success-message').should('be.visible') <b>→ 아이디가 success-message인 subject가 보임</b>
})
</pre>

### ex) 예시4

<pre>
cy.visit('http://localhost:8080/login') <b>→ url로 이동</b>
cy.get('#email').type('test@test.com') <b>→ 이메일 타이핑</b>
cy.get('#password').type('1234') <b>→ 비밀번호 타이핑</b>
cy.get('#signin-button').click() <b>→ 버튼 클릭</b>
cy.location('pathname').should('eq','/main') <b>→ main page로 이동</b>
</pre>

<br>

---

출처 : [docs.cypress.io](https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell)
