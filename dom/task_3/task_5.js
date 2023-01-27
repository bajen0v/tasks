// В HTML-документе есть тег <div> с идентификатором photo. Внутри этого тега указана ссылка на картинку. Необходимо написать скрипт, который:
// заменит ссылку на тег <img> с этой картинкой
// ,
// укажет размеры картинки в атрибуте style 100 на 100 пикселей

let photo = document.querySelector('#photo')

	let http = photo.innerText
	photo.innerHTML = '<img>'
	let img = photo.firstChild
	img.src = http
	img.style.width = 100
	img.style.height = 100