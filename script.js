let body = document.querySelector('body')
body.classList.add('container')
let wrap = document.createElement('div')

wrap.onmouseenter = () => {
    wrap.classList.remove('col')
    wrap.classList.add('wrapper')
}

wrap.onmouseleave = () => {
    wrap.classList.remove('wrapper')
    wrap.classList.add('col')
}

let box = document.createElement('div')
let column = document.createElement('div')
let h3 = document.createElement('h3')
let h2 = document.createElement('h2')
let price = document.createElement('div')
let span = document.createElement('span')
let p = document.createElement('p')
let button = document.createElement('button')

let aside = document.createElement('div')
let inner = document.createElement('div')
let holder = document.createElement('div')

let thumb = document.createElement('div')
let lead = document.createElement('div')

let excerpt_1 = document.createElement('div')
let img_i1 = document.createElement('img')
let p_i1 = document.createElement('span')

let excerpt_2 = document.createElement('div')
let img_i2 = document.createElement('img')
let p_i2 = document.createElement('span')

let excerpt_3 = document.createElement('div')
let img_i3 = document.createElement('img')
let p_i3 = document.createElement('span')

let excerpt_4 = document.createElement('div')
let img_i4 = document.createElement('img')
let p_i4 = document.createElement('span')


let arr = [
    'Смартфоны',
    '3 960 000 сум',
    'Сматрфон Realme GT Master',
    'Edition 5G 6/128GB Daybreak...',
    'Купить',
    'от 792 000 сум/месяц',
    'Добавить в сравнение'
]

let mnogo = [
    'Скопировать ссылку',
    'Facebool',
    'Instagram',
    'Telegram'
]

wrap.classList.add('wrap')
box.classList.add('box')
aside.classList.add('aside')

aside.onmouseenter = () => {
    aside.classList.remove('aside')
    aside.classList.add('grid')
    lead.classList.remove('slogan')
    lead.classList.add('lead')
}

aside.onmouseleave = () => {
    aside.classList.add('aside')
    aside.classList.remove('grid')
    lead.classList.add('slogan')
    lead.classList.remove('lead')
}

inner.classList.add('inner')
column.classList.add('column')
holder.classList.add('holder')


h3.innerHTML = arr[0]
h3.classList.add('h3')

h3.onmouseenter = () => {
    h3.classList.remove('h3_post_two')
    h3.classList.add('h3_post')
}

h3.onmouseleave = () => {
    h3.classList.add('h3_post_two')
    h3.classList.remove('h3_post')
}

h2.innerHTML = arr[1]
h2.classList.add('h2')

span.innerHTML = arr[2]
span.classList.add('span')

p.innerHTML = arr[3]
p.classList.add('p')

button.innerHTML = arr[4]
button.classList.add('button')

price.innerHTML = arr[5]
price.classList.add('price')

thumb.classList.add('thumbnail')
thumb.innerHTML = arr[6]

holder.onmouseenter = () => {
    thumb.classList.remove('thumbnail')
    thumb.classList.add('thumb')
}

holder.onmouseleave = () => {
    thumb.classList.add('thumbnail')
    thumb.classList.remove('thumb')
}

lead.classList.add('slogan')

lead.onmouseenter = () => {
    lead.classList.remove('slogan')
    lead.classList.add('lead')
}

lead.onmouseleave = () => {
    lead.classList.add('slogan')
    lead.classList.remove('lead')
}

excerpt_1.classList.add('excerpt_1')
img_i1.classList.add('userpic')
img_i1.src = './link.svg'
p_i1.classList.add('p_i')

p_i1.onmouseenter = () => {
    p_i1.classList.add('pic')
}

p_i1.onmouseleave = () => {
    p_i1.classList.remove('pic')
}

p_i1.innerHTML = mnogo[0]

excerpt_2.classList.add('excerpt_2')
img_i2.classList.add('userpic')
img_i2.src = './facebook.svg'
p_i2.classList.add('p_i')

p_i2.onmouseenter = () => {
    p_i2.classList.add('pic')
}

p_i2.onmouseleave = () => {
    p_i2.classList.remove('pic')
}

p_i2.innerHTML = mnogo[1]

excerpt_3.classList.add('excerpt_3')
img_i3.classList.add('userpic')
img_i3.src = './instagram.svg'
p_i3.classList.add('p_i')

p_i3.onmouseenter = () => {
    p_i3.classList.add('pic')
}

p_i3.onmouseleave = () => {
    p_i3.classList.remove('pic')
}

p_i3.innerHTML = mnogo[2]

excerpt_4.classList.add('excerpt_4')
img_i4.classList.add('userpic')
img_i4.src = './telegram.svg'
p_i4.classList.add('p_i')

p_i4.onmouseenter = () => {
    p_i4.classList.add('pic')
}

p_i4.onmouseleave = () => {
    p_i4.classList.remove('pic')
}

p_i4.innerHTML = mnogo[3]

body.append(wrap, thumb, lead)
wrap.append(box, column)
box.append(aside, inner)
column.append(h3, h2, price, price, span, p, button, holder)
lead.append(excerpt_1, excerpt_2, excerpt_3, excerpt_4)
excerpt_1.append(img_i1, p_i1)
excerpt_2.append(img_i2, p_i2)
excerpt_3.append(img_i3, p_i3)
excerpt_4.append(img_i4, p_i4)