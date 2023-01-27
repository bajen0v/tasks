// В HTML-документе задан тег <select>. В скрипте объявлена переменная countries, в которой указаны некоторые страны. Доработайте скрипт так, чтобы в тег <select> добавились теги <option> по одному на каждую страну из массива countries. В качестве значения тега option укажите название страны, а в качестве атрибута — value первые две буквы страны в нижнем регистре (маленькими буквами).

const countries = ["Armenia", "Russia", "Germany", "France", "Georgia"];let select = document.querySelector('select')

function createOption(){
    countries.forEach(element => {
        let option = document.createElement('option')
        option.value = element.slice(0,2).toLowerCase()
        option.innerText = element
        select.append(option)
    });
}
createOption()