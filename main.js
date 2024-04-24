// main.js
"use strict";

const express = require('express'),
      layouts = require('express-ejs-layouts'),
      app = express(),
      homeController = require('./controllers/homeController'), // 이 파일과 메소드들이 실제로 존재해야 합니다.
      errorController = require('./controllers/errorController'); // 이 파일과 메소드들이 실제로 존재해야 합니다.



app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.use(layouts);
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 기존의 HTML 파일에 대응하는 EJS 뷰를 렌더링합니다.
app.get('/', (req, res) => res.render('index'));
app.get('/transportation', (req, res) => res.render('transportation'));
app.get('/contact', (req, res) => res.render('contact'));
app.post('/contact', (req, res) => res.render('thanks'));


// 오류 처리를 위한 미들웨어 - 실제로 존재하는 함수명을 사용해야 합니다.
app.use(errorController.logErrors);
app.use(errorController.respondNoResourceFound);
app.use(errorController.respondInternalError);

app.listen(app.get("port"), () => {
    console.log(`Server running at http://localhost:${app.get("port")}`);
});
