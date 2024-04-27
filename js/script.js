function copyTime() {
    const now = new Date();
    const time = now.getHours() + ':' + (now.getMinutes()<10?'0':'') + now.getMinutes();
    navigator.clipboard.writeText(time).then(() => {
        const messageDiv = document.getElementById('message');
        messageDiv.textContent = 'Time copied: ' + time;
        messageDiv.style.opacity = '1';  // Make sure the message is fully visible

        // Set timeout to fade out the message after 3 seconds
        setTimeout(() => {
            messageDiv.style.transition = 'opacity 0.5s ease';
            messageDiv.style.opacity = '0';
        }, 3000);

        // Remove the message completely from the DOM after it fades out
        setTimeout(() => {
            messageDiv.textContent = '';
        }, 3500);

    }, (err) => { //Error handling
        console.error('Could not copy text: ', err);
        document.getElementById('message').textContent = 'Failed to copy time.';
        messageDiv.style.opacity = '1';
    });
}
