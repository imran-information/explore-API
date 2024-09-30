function userLoadData() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
        .then(res => res.json())
        .then(data => showData(data))
}

function showData(data) {
    console.log(data);

}