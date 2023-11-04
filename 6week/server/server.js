const express = require('express');
const app = express();
const port = 8080;

// CORS 설정 (로컬 테스트용, 프로덕션 환경에서는 필요에 따라 변경해야 합니다.)
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// 'hi' 엔드포인트
app.get('/hi', (req, res) => {
    const responseData = { message: '안녕하세요, 클라이언트!' };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`서버가 http://localhost:${port}에서 실행 중입니다.`);
});
