exports.showIndex = (req, res) => {
    res.render('index', { title: "Home" });
};

exports.showTransportation = (req, res) => {
    res.render('transportation', { title: "Transportation" });
};

exports.showContact = (req, res) => {
    res.render('contact', { title: "Contact Us" });
};

exports.postContact = (req, res) => {
    // 요청 본문에서 데이터를 처리하고 데이터베이스에 저장하는 로직이 필요할 수 있습니다.
    // 여기서는 단순히 'thanks' 페이지를 렌더링합니다.
    res.render('thanks', { title: "Thank You" });
};

exports.showThanks = (req, res) => {
    res.render('thanks', { title: "Thank You" });
};
