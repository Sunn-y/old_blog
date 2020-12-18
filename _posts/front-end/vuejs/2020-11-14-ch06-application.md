---
title: "Do It - Vue.js (6)"
categories: [front-end, vuejs]
tags: [doit]
comment: true
---

<h1>#To Do List Application 개요</h1>
<hr>
<ul>
	<li>local strorage에 데이터 저장(f12 > application)</li>
	<li>구조: header, input, list, footer</li>
</ul>
<br>
<h1>#프로젝트 생성 및 구조확인</h1>
<hr>
<ol>
	<li>vue-todo 폴더 생성</li>
	<li>터미널에서 폴더로 위치이동</li>
	<li>vue init webpack-simple</li>
	<li>index.html에 &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; 추가</li>
	<li>CSS: Awesome CDN 추가</li>
	<li>Font 변경</li>
	<li>favicon 변경(웹사트 제목의 왼쪽 로고)</li>
</ol>
<br>
<h1>#컴포넌트 생성 및 등록</h1>
<hr>
<ul>
	<li>src/components에 TodoHeader.vue, TodoInput.vue, TodoList.vue, TodoFooter.vue 생성</li>
	<li>vue 파일에 기본태그(template, script-export default) 넣기</li>
	<li>App.vue에 components import</li>
	<li>ES5 는 var TodoHeader = {}, ES6는 import</li>
</ul>
<br>
<h1>#컴포넌트 내용 구현</h1>
<hr>
<li>Todoheader에 앱 이름</li>
<li>TodoInput에 input-text</li>
<li>리스트 추가를 위한 이벤트버튼</li>
<li>method에 localStorage.setItem(key, value)</li>
<li>유효성 검사(null check, trim)</li>
<li>입력한 후 input 박스 초기화를 위해 메소드 추가</li>
<li>*** 단일 책임 원칙(Single Responsibility Principle): 메소드 당 하나의 기능만 구현</li>
<li>data에 배열 선언, created에 localStorage값 배열에 push </li>
<li>각 리스트마다 삭제버튼 추가</li>
<li>v-for 사용 시 item과 index 이용, :key='item'</li>
<li>localStorage.removeItem(item)</li>
<li>*** this.item.splice(index, 1) =>인자로 받은 숫자만큼 인덱스 삭제</li>
<li>모두 삭제하는 버튼만들기</li>
<li>localStorage.clear()</li>
<br>
<h1>#기존 애플리케이션 문제해결</h1>
<hr>
<ul>
	<li>update 되는 내용이 바로 반영되지 않음</li>
	<li>v-on과 $emit 이용하기</li>
</ul>
<br>
<h1>#기능 추가</h1>
<hr>
<ul>
	<li>transition-group: 애니메이션 태그</li>
	<ul>
		<li>name = "list"</li>
		<li>tag = "ul"</li>
		<li>li 태그에 :key 추가(for문)</li>
		<li>style에 추가</li>
		<ul>
			<li>.list-move { transition: transform 2s; }</li>
			<li>.list-enter-active,list-leave-active { transition: all 1s; }</li>
			<li>.list-enter, list-leave-to { opacity: 0; transform: translateY(30px); }</li>
		</ul>
	</ul>
	<li>모달기능 추가</li>
</ul>
<br>
<hr>
출처 : 책 [Do it! Vue.js 입문]
