// script.js
function copyTime() {
    const now = new Date();
    const time = now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes();
    navigator.clipboard.writeText(time).then(() => {
        alert("Time copied: " + time);
    }, (err) => {
        console.error('Could not copy text: ', err);
    });
}
