function displayPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => showPost(data))
}

displayPost()

function showPost(data) {
    const postContainer = document.querySelector('#post-container');
    for (const post of data) {
        const article = document.createElement('article');
        article.classList.add('post-style')
        article.innerHTML = `
        <h3>Id: ${post.id}</h3>
        <h3>User id: ${post.userId}</h3>
        <h4>Post Title: ${post.title}</h4>
        <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(article)
    }

}