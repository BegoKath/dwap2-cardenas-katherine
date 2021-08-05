const hbs= require('hbs');

var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('./data/datas.json', 'utf8'));
//atrae los productos del archivo.json
hbs.registerHelper('getProduct',function(){
    var pro="";
    obj.forEach (objeto => {
        pro += '<div class="produc">';
        pro += '<img src="'+ objeto.url+'"><br></br>';
        pro += '<figcaption>$'+objeto.price+'</figcaption><br></br>';
        pro += '<h4>'+objeto.product+'</h4>';
        pro += '</div>';
    });
    return new hbs.SafeString(pro);
});