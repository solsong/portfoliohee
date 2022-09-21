# (https://solsong.github.io/portfoliohee/)

## 제작기간 3일

## 사용언어 : HTML CSS Jacascript jQuery

## 사용기술 

### 1. 사용 폰트 마루부리
```css
@font-face {
    font-family: MaruBuri-Regular;
    src: url(../font/MaruBuri-Regular.ttf);
    src: url(../font/MaruBuri-Regular.otf);
}

```
### 2. 주조컬러
```section1 #000 ~ #fff
section2 rgb(21, 82, 9) ~ #fff
section3 #705328 ~ #fff
text color #fff 통일
```
```css
#section0{
	background-image: linear-gradient(128deg,#000,#fff);
}

#section1{
	background-image: linear-gradient(128deg,rgb(21, 82, 9),#fff);
}

#section2{
	background-image: linear-gradient(128deg,#705328,#fff);
}
```
### 3. full fage (https://github.com/alvarotrigo/fullPage.js)

### 4. 이미지 효과

```js
function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2));
}

function floatingObject(selector, delay, size){
    gsap.to(selector, random(0.5, 2.5), {
    y : size,
    repeat : -1,
    yoyo : true,
    ease : Power1.easeInOut,
    delay : random(0, delay)
    });

```



