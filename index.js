const express = require('express')
const cors = require('cors');

const port = process.env.PORT || 8080;
// express 는 함수이므로, 반환값을 변수에 저장한다.
const app = express()

app.use(cors());

app.get('/', (req, res) => {
  res.json({
    success: true,
    localIP: req.ip
  });
});

app.listen(port, () => {
  console.log(`server is listening at localhost:${port}`);
});
