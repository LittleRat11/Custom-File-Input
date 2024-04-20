const fileInput = document.querySelector("#fileInput");
const imgContainer = document.querySelector("#images");
const numOfFiles = document.querySelector("#num-of-files");

const preview = () => {
    imgContainer.innerHTML = "";
    numOfFiles.textContent = ` ${fileInput.files.length} Files Selected`;

    for (i of fileInput.files) {
        let reader = new FileReader();
        let figure = document.createElement("figure");
        let figCap = document.createElement("figcaption");
        figCap.innerText = i.name;
        figure.appendChild(figCap);
        reader.onload = () => {
            let img = document.createElement("img");
            img.setAttribute("src", reader.result);
            figure.insertBefore(img, figCap);
        }
        imgContainer.appendChild(figure);
        reader.readAsDataURL(i);
    }

}