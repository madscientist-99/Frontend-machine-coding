
const boxConfig = [
    {color: "red", width: '33.33%'},
    {color: "green", width: '33.33%'},
    {color: "blue", width: '33.33%'},
    {color: "yellow", width: '50%'},
    {color: "orange", width: '50%'},
    {color: "purple", width: '70%'},
    {color: "pink", width: '30%'},
];

const container = document.createElement("div");
container.className = "container";

boxConfig.forEach((config, index) => {
    const box = document.createElement("div");
    box.className = "box";
    box.style.backgroundColor = config.color;
    box.style.width = config.width;

    container.appendChild(box);
});

container.addEventListener("click", (e) => {
    const clickedBox = e.target;

    if(clickedBox.classList.contains("box")) {
        const index = Array.from(container.children).indexOf(clickedBox);
        const config = boxConfig[index];
        alert(`Color of ${index + 1} is ${config.color}`);
    }
})

const input = document.createElement("div");
input.className = "input";

const color = document.createElement("input");
color.className = "color";
color.placeholder = "Enter color";
color.id = "color";
const colorLabel = document.createElement("label");
colorLabel.setAttribute("for", color);
colorLabel.innerHTML = "Enter Color:";
color.appendChild(colorLabel);


const width = document.createElement("input");
width.className = "width";
width.placeholder = "Enter width";
width.id = "width";
const widthLabel = document.createElement("label");
widthLabel.setAttribute("for", width);
widthLabel.innerHTML = "Enter Width:";
width.appendChild(widthLabel);

const submit = document.createElement("button");
submit.type = "submit";


input.appendChild(color);

input.appendChild(width);

document.body.insertBefore(colorLabel, color);
document.body.insertBefore(widthLabel, width);

input.appendChild(submit);



document.body.appendChild(container);
document.body.appendChild(input);