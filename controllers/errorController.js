exports.logErrors = (err, req, res, next) => {
    console.error(err.stack);
    next(err);
};

exports.respondNoResourceFound = (req, res) => {
    let errorCode = 404;
    res.status(errorCode);
    res.render('error', { title: "Error", errorCode: errorCode, message: "Resource not found." });
};

exports.respondInternalError = (error, req, res, next) => {
    let errorCode = 500;
    console.error(error.stack);
    res.status(errorCode);
    res.render('error', { title: "Error", errorCode: errorCode, message: "Internal Server Error." });
};

exports.showError = (req, res) => {
    // showError 함수는 라우트에서 사용되므로 errorCode를 404로 설정합니다.
    let errorCode = 404;
    res.status(errorCode);
    res.render('error', { title: "Error", errorCode: errorCode, message: "Resource not found." });
};
