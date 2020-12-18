---
title: "Do It - Vue.js (3)"
categories: [front-end, vuejs]
tags: [doit]
comment: true
---

<h1>#Vue Instance</h1>
<hr>
<ul>
	<li>Vue로 개발하기 위해 꼭 만들어야 하는 기본단위</li>
	<li>속성(el, template, created, methods 등)</li>
	<li>vue 인스턴스가 화면에 적용되는 과정</li>
	<ol>
		<li>뷰 파일 로딩</li>
		<li>인스턴스 객체 생성</li>
		<li>특정 화면 요소에 인스턴스 붙임</li>
		<li>인스턴스 내용이 화면 요소로 변환</li>
		<li>변환된 화면 요소를 사용자가 봄</li>
	</ol>
	<li>Vue 인스턴스 Life Cycle</li>
	<ol>
		beforeCreate -> created -> beforeMount -> mounted -> <br>beforeUpdate -> updated -> beforeDestroy -> destroyed
		<li>인스턴스 생성</li>
		<ul>
			<li>이벤트 및 lifecycle 초기화</li>
			<li>화면에 반응성 주입</li>
			<li>el, template 속성 확인</li>
			<li>template 속성 내용을 render()로 변환</li>
			<li>el 속성 값 대입</li>
		</ul>
		<li>인스턴스를 화면에 부착</li>
		<ul>
			<li>인스턴스 데이터 변경</li>
			<li>화면 재 rendering 및 데이터 갱신</li>
		</ul>
		<li>인스턴스 내용 갱신</li>
		<ul>
			<li>인스턴스 접근 가능</li>
			<li>컴포넌트, 인스턴스, 디렉티브 등 모두 해제</li>
		</ul>
		<li>인스턴스 소멸</li>
	</ol>
	<img src="https://kr.vuejs.org/images/lifecycle.png" alt="vuelifecycle.jpg" width="200">
</ul>
<br>
<h1>#Vue Component</h1>
<hr>
<ul>
	<li>조합하여 화면을 구성할 수 있는 block</li>
	<li>전역 컴포넌트: Vue.component{'이름',{template:'내용'}}</li>
	<ol>
		<li>뷰 라이브러리 파일 로딩</li>
		<li>뷰 생성자로 컴포넌트 등록</li>
		<li>인스턴스 객체 생성</li>
		<li>특정 화면 요소에 인스턴스 부착</li>
		<li>인스턴스 내용 변환(html요소로)</li>
		<li>변환된 화면 요소를 사용자가 봄</li>
	</ol>
	<li>지역 컴포넌트: vue 인스턴스 안에 생성 </li>
</ul>
<br>
<h1>#Vue Component 통신</h1>
<hr>
<ul>
	<li>컴포넌트는 유효범위(scope)를 가지고 있음</li>
	<li>상위 컴포넌트는 하위 컴포넌트에게 props로 속성을 전달</li>
	<li>하위 컴포넌트는 상위 컴포넌트에게 event만 전달 가능</li>
	<ul>
		<li>하위컴포넌트 내 이벤트 발생</li>
		<li>this.$emit('이벤트명') at 하위컴포넌트</li>
		<li>v-on:하위이벤트명='상위컴포넌트 메소드명' at 상위컴포넌트</li>
	</ul>
	<li>eventBus: 데이터 통신을 바로 할 수 있는 방법 => Vuex</li>
	<ul>
		<li>새로운 vue 인스턴스 생성</li>
		<li>eventBus.$emit('이벤트명', 데이터) at 이벤트를 보내는 컴포넌트</li>
		<li>eventBus.$on('이벤트명', function(데이터){...}) at 이벤트를 받는 컴포넌 </li>
	</ul>

</ul>
<br>
<hr>
출처 : 책 [Do it! Vue.js 입문]
