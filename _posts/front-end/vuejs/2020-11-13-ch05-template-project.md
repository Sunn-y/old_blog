---
title: "Do It - Vue.js (5) - template & project"
categories: [front-end, vuejs]
tags: [doit]
comment: true
---

<h1>#Vue template</h1>
<hr>
<ul>
	<li>뷰 인스턴스에서 정의한 데이터와 로직들을 연결하여 사용자가 볼 수 있도록 html로 변환해 주는 속성</li>
	<li>render() 함수로도 구현가능</li>
	<li>템플릿에서 사용하는 뷰의 속성과 문법</li>
	<ul>
		<li>데이터 바인딩: { { } }, v-once, v-bind, v-model</li>
		<li>자바스크립트 표현식: { { } } 안에 간단한 메소드나 삼항연산자 사용 가능</li>
		<li>뷰 디렉티브: v-접두사를 가진 모든 속성(v-if, v-for, v-show, v-bind, v-on, v-model)</li>
		<li>이벤트 처리: function(event) 받아올 수 있음</li>
		<li>고급 템플릿 기법</li>
		<ul>
			<li>computed, methods(호출할 때만 처리됨)</li>
			<li>watch: 데이터가 변할 때마다 동작</li>
		</ul>
	</ul>
</ul>
<br>
<h1>#Vue project</h1>
<hr>
<ul>
	<li>Single File Components</li>
	<ul>
		<li>template: html 태그</li>
		<li>script: export default{}, 뷰 컴포넌트의 내용 정의</li>
		<li>style: CSS 정의</li>
	</ul>
	<li>Vue CLI</li>
	<ul>
		<li>npm install vue-cli -global</li>
		<li>vue init</li>
		<ul>
			<li>vue init webpack</li>
			<li>vue init webpack-simple</li>
			<li>vue init browserify</li>
			<li>vue init browerify-simple</li>
			<li>vue init simple</li>
			<li>vue init pwa(Progressive Web App)</li>
		</ul>
		<li>vue create _프로젝트명_</li>
		<li>package.json: 프로젝트 정보를 담고 있는 설정파일</li>
		<li>npm run serve</li>
		<li>npm run build</li>
	</ul>
</ul>
<br>
<hr>
출처 : 책 [Do it! Vue.js 입문]
