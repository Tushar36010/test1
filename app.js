//http://localhost:3000/users
var express=require("express");
var app=express();
app.listen(process.env.PORT || 5000);
var bodyParser=require("body-parser");
var url=bodyParser.urlencoded({extended:false});
app.use(bodyParser.json());
app.get("/", (req, res) => {

	let data = {
		name: "GFG",
		age: 18,
		male: true
	}
res.send(data);
});
app.post("/users",url, (req,res)=>{
a=req.body.numbers;
f=true
username="Acro_123"
odd=[];
even=[];
c=0;
c1=0;
for(i=0;i<a.length;i++)
{
x=parseInt(a[i]);
if(x%2==0)
 even[c++]=x;
else
odd[c1++]=x;
}
json={is_success:f , user_id:username, "odd":odd, "even":even}
res.send(json);
});
var request = require('request'); 

function updateClient(postData)
{ var clientServerOptions = { uri: 'https://test1tushar.herokuapp.com/users',
body: JSON.stringify(postData), 
method: 'POST', 
headers: { 'Content-Type': 'application/json' } } 
request(clientServerOptions, 
function (error, response) 
{ console.log(error,response);
 return; 
}); 
}
updateClient({numbers:[2,3]});
