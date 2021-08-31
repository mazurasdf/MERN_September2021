const albumName = document.getElementById("albumName");
const artistName = document.getElementById("artistName");
const imgSrc = document.getElementById("imgSrc");

const buildElement = () => {
    return `<div class="albumBox">
                <img src="${imgSrc.value}" alt="${albumName.value}">
                <h2>${albumName.value}</h2>
                <h2><i>${artistName.value}</i></h2>
            </div>`;
}

const onSubmitHandler = () => {
    document.getElementById("albums").innerHTML += buildElement();
}