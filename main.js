const inputs = document.querySelectorAll("input")
const text = document.querySelector("textarea")
const content = document.querySelector(".content")

function changeBorderRadius(event) {
    switch (event.target.id) {
        case "i1":
            content.style.borderTopLeftRadius = `${i1.value}px`
            break
        case "i2":
            content.style.borderTopRightRadius = `${i2.value}px`
            break
        case "i3":
            content.style.borderBottomRightRadius = `${i3.value}px`
            break
        case "i4":
            content.style.borderBottomLeftRadius = `${i4.value}px`
            break
        default:
            break
    }
    changeText()
}

function changeText() {
    text.innerText = `${i1.value}px ${i2.value}px ${i3.value}px ${i4.value}px`
}

function copyTextToClipBoard() {
    text.select()
    document.execCommand("copy");
}

inputs.forEach((input) => {
    input.addEventListener("input", changeBorderRadius)
})