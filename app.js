const express = require('express');
const path = require('path');
const app = express();

// ตั้งค่า static files เช่น CSS, รูปภาพ
app.use(express.static(path.join(__dirname, 'public')));

// หน้า Home (index.html)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/index2.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index2.html'));
});

app.get('/index3.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index3.html'));
});

app.get('/index4.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index4.html'));
});


// เริ่มเซิร์ฟเวอร์
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});