function getPost() {
    return new Promise(function (resolve, reject) {
        $.get('/posts').done(function (response) {
            resolve(response);
        }).fail(function (error) {
            reject(error);
        });
    })
}

function getDownload() {
    return new Promise(function (resolve, reject) {
        $.get('/downloads').done(function (response) {
            resolve(response);
        }).fail(function (error) {
            reject(error);
        });
    })
}

$(document).ready(function () {
    getPost().then(function (response) {
        var elements = '';
        for (res in response) {
            elements += `<li class="list-group-item list-group-item-action">
                <b>${response[res].title}</b>
                <br>
                ${response[res].content}
            </li>`;
        }
        $('#home').html(elements);
    }).catch(function (error) {
        console.log(error);
    });

    getDownload().then(function (response) {
        var elements = '';
        for (res in response) {
            elements += `<li class="list-group-item list-group-item-action"><a href="${response[res].url}" target="_blank">${response[res].name}</a></li>`;
        }
        $('#downloads').html(elements);
    }).catch(function (error) {
        console.log(error);
    });
});