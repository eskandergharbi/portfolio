const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve all static files (index.html, style.css, script.js) from this folder
app.use(express.static(path.join(__dirname)));

// Fallback: always return index.html (simple single-page site)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Portfolio en ligne sur http://localhost:${PORT}`);
});
