---
title: "React Native set up"
categories: [etc, mobile]
tags: [cross platform, react native]
comment: true
---

# # React native 설치하기

---

- expo : javascript, emulator 설치 안 해도 됨
- CLI: android 스튜디오 설치해야 함

---

## 준비사항: node.js, jdk

<pre>
$ choco install -y nodejs.install openjdk8
</pre>

### # Android Studio [다운로드](https://developer.android.com/studio/index.html)

※ 설치시 <b>Android Virtual Device</b> 체크!
<br>
<br>

### # Android SDK 환경변수 설정(window)

1. 단축키 윈도우 + pause
2. 왼쪽 내비게이션에 고급 시스템 설정 클릭
3. 아래에 환경변수 클릭
4. 시스템 변수 - 새로 만들기 클릭
5. 변수이름 : ANDROID_HOME
6. 변수 값 : sdk 파일위치(보통은 여기 -> C:\Users\<b>사용자이름</b>\AppData\Local\Android\Sdk)
7. 시스템 변수 목록에서 path변수 찾아 클릭
8. 새로 만들기
9. %ANDROID_HOME%\platform-tools 입력
   <br>
   <br>

# # 프로젝트 만들기

---

<pre>
$ npx react-native init AwesomeProject
</pre>

이전에 <em>$ npm install -g react-native-cli</em>를 한적이 있다면 uninstall!

<pre>
$ npm uninstall react-native-cli -g 
</pre>
<br>

### # 새로 생성한 프로젝트가 있는 곳으로 이동 후 서버가동!

<pre>
$ cd AwesomeProject
$ npx react-native start
</pre>

- 예쁜 리액트 로고가 나오면 성공!
- (8081포트가 열려 있어 에러 났었음)
  <br>

### # 서버 열어놓은 상태에서 다른 터미널 열고 아래 실행

<pre>
$ npx react-native run-android <b>or ios </b>
</pre>

끝!!!
<br>

---

## # 먄악 npx react-native run-android 가 안된다면??????

<pre>
99% EXECUTING.....
:app:installDebug
</pre>

- 정확히는 기억 안 나지만 이런 느낌으로 99%에서 30분 째 아무런 작동도 하지 않음
- stackoverflow에 가서 여러가지 내용들을 따라해봤지만 다 안 됨
- 삽질 열심히 하다가 정신이 혼미해져서 내일 하기로 하고 잠
- 아침에 일어나서 컴퓨터도사인 라마에게 도움 요청
- 한시간도 안되서 해결

### <em>\*\*\* 해결방안: cmd 관리자 모드에서 run-android 실행</em>

<br>
<hr>
출처: [https://www.youtube.com/watch?v=hHpA99botqs&vl=ko](https://www.youtube.com/watch?v=hHpA99botqs&vl=ko)
