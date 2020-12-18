---
title: "Do It - Vue.js (7) - advanced developer"
categories: [front-end, vuejs]
tags: [doit]
comment: true
---

<h1>#뷰 중고급으로 올라가기 위한 지식</h1>
<hr>
<ul>
	<li>Vuex: 상태관리 라이브러리</li>
	<ul>
		<li>State</li>
		<li>Getters</li>
		<li>Mutations</li>
		<li>Actions</li>
	</ul>
	<li>Vue Reactivity: 뷰가 데이터 변화를 감지하고 자동으로 화면을 갱신하는 특성</li>
	<ul>
		<li>getter</li>
		<li>setter</li>
		<li>watcher</li>
	</ul>
	<li>Server Side Rendering</li>
	<ul>
		<li>Nuxt.js</li>
		<li>Client side Rendering: 다 그려져 있지 않은 HTML페이지를 브라우저에서 받고 FE에서 프레임워크나 자바스크립트를 이용하여 나머지 부분을 그리는 것</li>
		<li>server side rendering: 완벽하게 그려진 HTML을 브라우저에서 받는 것</li>
		<li>검색 엔진 최적화(SEO, Search Engine Optimization)</li>
	</ul>
</ul>
<br>
<h1>#뷰 개발을 위한 웹팩</h1>
<hr>
<ul>
	<li>Module Bundler</li>
	<li>서로 연관이 있는 모듈 간의 관계를 해석하여 정적인 자원으로 변환해 주는 변환도구</li>
	<li>파일 간읜 연관 관계를 파악하여 하나의 자바스크립트 파일로 변환해 주는 변환도구</li>
	<li>애플리케이션 동작과 관련된 여러개의 파일(html,css,img)을 1개의 자바스크립트 파일 안에 다 넣고 웹 앱을 구동하는 취지 => 파일이 많으면 그 때마다 http 요청이 생겨서 로딩시간이 길어지기 때문</li>
	<li>웹팩의 주요속성</li>
	<ul>
		<li>entry: 빌드할 대상 파일을 지정하는 속성. 애플리케이션 로직 + 필요 라이브러리를 로딩하는 로직</li>
		<li>output: 웹팩으로 빌드한 결과물의 위치와 파일 이름 등 세부 옵션을 설정</li>
		<li>loader: 웹팩으로 빌드할 때 html, css, img 등을 자바스크립트로 변환하기 위해 필요한 설정을 정의하는 속성</li>
		<li>plugin: 웹팩으로 빌드하고 나온 결과물에 대해 추가 기능을 제공하는 속성</li>
		<li>resolve: 웹팩으로 빌드할 때 해당 파일이 어떻게 해석되는 지 정의하는 속성</li>
	</ul>
	<li>웹팩 데브 서버</li>
	<ul>
		<li>웹팩 설정 파일의 변화를 감지하여 빠르게 웹팩을 빌드할 수 있도록 지원하는 유틸리티/node.js 서버</li>
		<li>웹팩 설정 파일 내용이 변경되면 브라우저 화면을 자동으로 새로고침</li>
		<li>npm run dev</li>
		<li>in memory 기반. 메모리 상에 빌드 결과물이 저장되서 빠르게 읽음</li>
		<li>webpack.config.js</li>
	</ul>
</ul>
<br>
<h1>#뷰 개발을 위한 ES6 </h1>
<hr>
<ul>
	<li>ES6(ECMAScript 2015): 최신 자바스크립트 문법/스펙</li>
	<li>var보다는 let(block scope)</li>
	<li>변하지 않는 값은 const</li>
	<li>Arrow function ( x, y ) => {}</li>
	<li>Import</li>
	<li>export</li>
</ul>
<br>
<h1>#뷰 CLI에서 사용하는 NPM</h1>
<hr>
<li>NPM(Node Package Manager): 전세계 자바스크립트 라이브러리가 존재하는 공개 저장소</li>
<li>--save 명령어: package.json > dependencies에 추가</li>
<li>--save-dev 명령어: package.json > devDependencies에 추가</li>
<br>
<hr>
출처 : 책 [Do it! Vue.js 입문]
