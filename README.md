## Naver Map 예제

#### 개요
* naver map 사용 예제
* naver cloud flatform 사용
* jquery
--- 
#### 실행방법
1. config.js 파일 생성
```shell
cp /config.t.js /config.js
copy /config.t.js /config.js
```
```js 
// ./config.js
window.ncpClientId='ncpClientId';
```
---
#### gulp 설정
|name|description|
|--|--|
|default|bundle by script.js|
|config|bundle by config.js|
---
#### radar marker API
* **/dist/script-min.js** script 파일 프로젝트에 로딩
* ```position = {latitude, longtitude}```

|function|parameter|return|description|
|---|---|--|--|
|generateRadarMarker|map, position|Maker|radar marker 생성 후 marker 객체를 반환|
|addDangerSectorRange|num|unfined|0~11 구역의 번호를 입력하여 해당 구역에 색 변경|
|removeDangerSectorRange|num|unfined|0~11 구역의 번호를 입력하여 해당 구역에 색 변경|
|setZoomAndCenter|map, position, zoom(default: 14)|unfined|원하는 위치로 이동 및 줌인|

#### 미리보기
![naver_map](https://user-images.githubusercontent.com/57004921/144730758-daedd6ed-6355-4904-989d-ae32ce4dd4b9.gif)
