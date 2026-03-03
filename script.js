document.getElementById("ansbtn")?.addEventListener("click", () => {
    let answer = document.getElementById("answer")
    let list = document.getElementById("submittedlist")
    if(answer.value.trim()!=""){
        const newAnswer = document.createElement("li");
        newAnswer.textContent = answer.value
        list.appendChild(newAnswer);
        answer.value = ""
    }
})

document.getElementById("coolbtn")?.addEventListener("click", () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
})