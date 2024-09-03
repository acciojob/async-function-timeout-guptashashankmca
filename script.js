//your JS code here. If required.
document.getElementById('btn').addEventListener('click', async function() {
    const text = document.getElementById('text').value;
    const delay = parseInt(document.getElementById('delay').value);

    await delayMessage(text, delay);
});

async function delayMessage(message, delay) {
    await new Promise(resolve => setTimeout(resolve, delay));
    document.getElementById('output').textContent = message;
}
