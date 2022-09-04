console.log("Hello here")
fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData(data.comments);
    })
    .catch(function (err) {
        console.log('error: ' + err);
    });

const container = document.getElementById('card');

function appendData(data) {
    for (var i = 0; i < data.length; i++) {
        let item = data[i];
        console.log(item)
        const card = document.createElement('div').classList("card");
        const content = `
        <div class="card">
            <div class="card-left-wrapper">
                <div class="plus-minus-card">
                    <div class="plus">+</div>
                    <div class="number">${item.score}</div>
                    <div class="minus">-</div>
                </div>
            </div>
            <div class="card-right-wrapper">
                <div class="card-top-wrapper">
                    <div class="image-name-date-wrapper">
                        <img class="image" src="${item.user.image.png}" alt="User">
                        <div class="name">${item.user.username}</div>
                        <div class="date">${item.createdAt}</div>
                    </div>
                    <img class="reply-button" src="./images/reply-icon.svg" alt="Reply button">
                </div>
            <div class="card-text">${item.content}</div>
            </div>        
        </div>
        `;
        container.innerHTML += content;
    }
}