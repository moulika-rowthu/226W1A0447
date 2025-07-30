
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>URL Shortener</title>
  <style>
    body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin-top: 50px;
    }

    input, button {
        margin: 5px;
        padding: 10px;
        font-size: 16px;
    }

    #result {
        margin-top: 20px;
        font-weight: bold;
        color: green;
    }
  </style>
</head>
<body>
  <h1>URL Shortener</h1>

  <input type="text" id="original-url" placeholder="Enter original URL" />
  <input type="text" id="name" placeholder="Your Name" />
  <input type="text" id="phone" placeholder="Phone Number" />
  <input type="text" id="custom-code" placeholder="Custom short code (optional)" />
  <button id="shorten-btn">Shorten URL</button>

  <div id="result"></div>

  <script>
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
            result.style.color = 'green';
        } else {
            result.innerText = `❌ Error: ${data.error}`;
            result.style.color = 'red';
        }
    });
  </script>
</body>
</html>
