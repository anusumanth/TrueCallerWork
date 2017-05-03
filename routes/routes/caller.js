
exports.registerduser=function(req, res) {
   

var mdn= req.query.mdn;
 console.log(mdn);
 res.status(200).send('Hello');

};

exports.updateuser=function(req, res) {
  
 if (!req.body) return res.sendStatus(400);
    console.log(JSON.stringify(req.body));
    console.log(req.body);
    res.status(200).send(req.body);

};