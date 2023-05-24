export default function PostNewComment(imageChoose, text, func){
    const formData = new FormData();
    formData.append('file', imageChoose);

    formData.append('diKem', text);

    fetch('http://localhost:8080/upload/comment', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(message => {
            func(message);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}