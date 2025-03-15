const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');

const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = '❌';
li.append(deleteButton);
li.append(li);


buttonElement.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const input = document.querySelector('#favchap');
        const button = document.querySelector('button');
        const list = document.querySelector('#list');
        const li = document.createElement('li');

        const deleteButton = document.createElement('button');
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        li.append(li);
    }
    else {
        input.focus();
        alert('Enter a chapter before proceeding.');

        return;
    }





})


deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    input.focus();
});

input.value = '';
input.focus();