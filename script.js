document.getElementById('shorten-btn').addEventListener('click', async () => {
    const originalUrl = document.getElementById('original-url').value;
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const customCode = document.getElementById('custom-code').value;

    const response = await fetch('http://localhost:5000/shorten', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ originalUrl, name, phone, customCode })
    });

    const data = await response.json();

    const result = document.getElementById('result');
    if (response.ok) {
        result.innerHTML = `✅ Short URL: <a href="${data.shortUrl}" target="_blank">${data.shortUrl}</a>`;
    } else {
        result.innerText = `❌ Error: ${data.error}`;
        result.style.color = 'red';
    }
});
