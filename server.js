const express = require('express');
const app = express();

const server = app.listen(3000, () => {
    console.log('서버 시작');
});

app.use(express.static(__dirname + '/views')); // 1
app.set('views engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/',function(req,res) {
    res.render('index.ejs')
})
app.get('/login/login',function(req,res){
    res.render('login.html')
})
app.get('/login/join',function(req,res){
    res.render('join.ejs')
})

app.get('/about',function(req,res) {
    res.send('hleeofoeodfdfdffdfe')
})

// 위에는 홈페이지
// 밑은 db
//const 