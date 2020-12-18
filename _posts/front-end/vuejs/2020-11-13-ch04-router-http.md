---
title: "Do It - Vue.js (4)"
categories: [front-end, vuejs]
tags: [doit]
comment: true
---

<h1>#Vue Router</h1>
<hr>
<ul>
	<li>Routing: 웹페이지 간의 이동방법</li>
	<li>SPA(Single Page Application): 페이지들을 미리 받아놓고 라우팅을 이용하여 화면을 갱신하는 애플리케이션</li>
	<li>이용 시 화면 깜빡임X, 빠르게 화면조작 가능</li>
	<li>사용법</li>
	<ul>
		<li>&lt;rounter-link to='url'&gt; like 앵커태그(router :to로도 사용가능)</li>
		<li>&lt;router-view&gt; => 컴포넌트를 뿌려주는 영역</li>
		<li>var routes = [{ path: '/', component: Home }]</li>
		<li>var router = new VueRouter({routes});</li>
		<li>+ $mount => el 속성과 동일하게 인스턴스를 화면에 붙이는 역할</li>
		<li>router에 # 없애려면 VueRouter 생성 시 mode: 'history' 추가</li>
	</ul>
	<li>Nested Router: children 속성 이용</li>
	<li>Named View: 특정 페이지에서 여러개의 컴포넌트를 동시에 표시</li>
	<ul>
		<li>routes > components 속성, router-view태그의 name 속성 이용</li>
	</ul>
</ul>
<br>
<h1>#Vue HTTP통신</h1>
<hr>
<ul>
	<li>axios: promise 기반의 API 지원(javascript는 단일 thread, 데이터를 요청하고 받아올때까지 기다렸다가 화면에 나타내는 로직을 실행할 때 사용)</li>
	<li>axios.get('url'). then().catch()</li>
	<li>axios.post('url'). then().catch()</li>
	<li>옵션 속성 정의 => axios({method: 'get', url:'url'})</li>
</ul>
<br>
<hr>
출처 : 책 [Do it! Vue.js 입문]
