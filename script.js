let words = {
    'apple': 'A fruit that is typically red or green',
    'banana': 'A long curved fruit that is yellow',
    'orange': 'A round fruit that is typically orange in color',
    'grape': 'A small, round fruit that grows in clusters',
    'pineapple': 'A tropical fruit with a tough, spiky skin'
};

function addListItem(newWord) {
    let myList = document.getElementById('myList');
    let listItem = document.createElement('li');
    listItem.textContent = newWord;
    myList.appendChild(listItem);
}

function addNewWord(newWord) {
    const newDescription = document.getElementById("imputDescription").value.toLowerCase();
    const rezult = document.getElementById("rezult");
    words[newWord] = newDescription;
    rezult.innerHTML = `The word was added successfully`;
    addListItem(newWord);
}

function search() {
    let searchInput = document.getElementById("inputNav").value.toLowerCase();
    let rezultSrc = document. getElementById ("rezult");
    if (words.hasOwnProperty(searchInput)) {
        rezultSrc.innerHTML = `<strong>${searchInput}</strong>: ${words[searchInput]}`;
    } else {
        rezultSrc.innerHTML = `<strong>Sorry this word is not in system</strong><br> DO YOU WANT TO ADD ? <br>`;
        const button = document.createElement("button");
        const inportDesc = document.createElement("input");
        button.textContent = `ADD WORD`;
        inportDesc.id = `imputDescription`;
        inportDesc.placeholder = `Description`;
        button.id = 'newWord';
        rezultSrc.appendChild (inportDesc);
        rezultSrc.appendChild (button);
        button.addEventListener('click', function() {
            addNewWord(searchInput);
        });
    }
} 