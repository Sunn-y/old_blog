---
title: "React Native set up"
categories: [etc, mobile]
tags: [cross platform, react native]
comment: true
---

# # React native 설치하기

<hr>
## 준비사항: node.js, jdk
<pre>
$ choco install -y nodejs.install openjdk8
</pre>

### # Android Studio [다운로드](https://developer.android.com/studio/index.html)

※ 설치시 <b>Android Virtual Device</b> 체크!
%ANDROID_HOME%\bin
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
10. 환경설정 잘 됐나 확인(터미널에서)
<pre>
$ adb
</pre>

$ npx react-native init AwesomeProject
=> 혹시 <em>$ npm install -g react-native-cli</em> 이걸 했다면 에러남 <br>

<pre>
$ npm uninstall react-native-cli -g 
</pre>

<pre>
$ cd AwesomeProject
$ npx react-native run-android <b> or ios </b>
</pre>

<br>
<hr>
출처: [https://www.youtube.com/watch?v=hHpA99botqs&vl=ko](https://www.youtube.com/watch?v=hHpA99botqs&vl=ko)
