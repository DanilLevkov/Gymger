

export const DeleteAPI = (id, title) => {
    return fetch("https://qxrlui5g98.execute-api.us-east-1.amazonaws.com/Mynewupdate", {
        method: 'POST',
        body: JSON.stringify({ ID: _id, title: _title, value:  _value})
    }).then(res => res.json())
    .then(
        (result) => {
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
            alert(error);
        }
    );
}