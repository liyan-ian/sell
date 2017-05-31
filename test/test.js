let a;


var mongoose = require('mongoose');
// 连接数据库
var db = mongoose.createConnection('mongodb://127.0.0.1:27017/test');
//console.log(db);
/*
var mongooseSchema = new mongoose.Schema({
    liyan : {type : String, default : 'liyan'},
});

var mongooseModel = db.model('mongoose', mongooseSchema);
*/
/*
var criteria = {name : 'liyan'}; // 查询条件
var fields   = {name : 1}; // 待返回的字段
var options  = {};
mongooseModel.find(criteria, fields, options, function(error, result){
    if(error) {
        console.log("error");
    } else {
        console.log("result");
    }
    //关闭数据库链接
    db.close();
});
*/
module.exports=function(){
		// 设置数据类型
	var monSchema = new mongoose.Schema({
	    name:{type:String,default:"name"},
	    age: {type:Number},
	    sex:{type:String}
	});
	// 选择集合
	var monModel = db.model('user',monSchema);
	var content = {name:"Nick"};
	var field = {name:1,age:1,sex:1};
	monModel.find(content,field,function(err,result){
	  if(err){
	    console.log(err);
	  }else{
	  	console.log("result");
	    console.log(result);
	  }
	  db.close();
	});
}


/*insert right
var monSchema = new mongoose.Schema({
    name:{type:String,default:"username"},
    age: {type:Number},
    sex:{type:String}
});
// 选择集合
var monModel = db.model('user',monSchema);
// 数据集
var content = {name:"Nick",age:23,sex:'男'};
// 实例化对象并插入数据
var monInsert = new monModel(content);
monInsert.save(function(err){
  if(err){
    console.log(err);
  }else{
    console.log('成功插入数据');
  }
  db.close();
});
*/

//module.exports = find();