function userData2() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data))
}


function displayData(users) {
    const userList = document.getElementById('user-list');
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = user.name;
        userList.appendChild(li)
    }
}


