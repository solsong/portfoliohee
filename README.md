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
### 2. full fage (https://github.com/alvarotrigo/fullPage.js)

### 3. 이미지 효과

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



