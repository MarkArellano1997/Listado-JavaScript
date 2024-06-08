function unir() {
    let completo = ''
    let nombre = form[0].value
    let apellido = form[1].value
    function capitalize(word) {
        return word[0].toUpperCase() + word.slice(1)
    }
    completo = `${capitalize(nombre)} ${capitalize(apellido)}`
    document.getElementById('list').innerHTML += `<li>${completo}</li>`
}