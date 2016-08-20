function sendRequest(u){
	 var obj = $.ajax({url:u, async:false});

      var result = $.parseJSON(obj.responseText);

      return result;
}

function addStudent(){
	
	var firstName= $("#firstName").val();
	
	var lastName=$("#lastName").val();
	var studentId=$("#studentId").val();
	var contact=$("#contact").val();
	var email=$("#email").val();
	var hostelName=$("#hostelName").val();
	var roomNumber=$("#roomNo").val();
	var roomKey =$("#roomKey").val();
	var keyNo=$("#keyNo").val();
	var lockerKey=$("#lockerkeyNo").val();
	var semester=document.getElementById("semester").value;
	var yearGroup=$("#yearGroup").val();
	var academicYear=$("#academicYear").val();

	var url="controller.php?cmd=1 &firstName="+firstName+"&lastName="+lastName+"&studentId="+studentId+"&contact="+contact+
	"&email="+email+"&hostelName="+hostelName+"&roomNo="+roomNumber+"&keyNo="+keyNo+"&semester="+semester+"&yearGroup="+yearGroup+"&academicYear="+academicYear+"&lockerkey="+lockerKey;
	
	var add=sendRequest(url);
	
	var url2="controller.php?cmd=40 &firstName="+firstName+"&lastName="+lastName+"&studentId="+studentId+"&contact="+contact+
	"&email="+email+"&hostelName="+hostelName+"&roomNo="+roomNumber+"&keyNo="+keyNo+"&semester="+semester+"&yearGroup="+yearGroup+"&academicYear="+academicYear;
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Student was successfully added.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Student was not added. Try Again!!</div></div>';

	}
	sendRequest(url2);


}

function search(){
	
	remove_div("students");
	show("theSearch");
	
	var search=$("#search").val();

	var url="controller.php?cmd=28&item="+search;
	var display=sendRequest(url);
	

	var table=document.getElementById("theSearch");
	var theRow=table.rows.length;
	for(var count=1; count<=display.message.length; count++){

	var row=table.insertRow(theRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	var cell8=row.insertCell(7);
	var cell9=row.insertCell(8);
	var cell10=row.insertCell(9);
	var cell11=row.insertCell(10);
	
	var cell13=row.insertCell(11);
	var cell14=row.insertCell(12);


	cell1.innerHTML=display.message[count].firstName;
	cell2.innerHTML=display.message[count].lastName;
	
	cell3.innerHTML=display.message[count].studentId;
	cell4.innerHTML=display.message[count].yearGroup;
	cell5.innerHTML=display.message[count].contact;
	cell6.innerHTML=display.message[count].email;
	cell7.innerHTML=display.message[count].semester;
	cell8.innerHTML=display.message[count].academicYear;
	cell9.innerHTML=display.message[count].issueDate;
	cell10.innerHTML=display.message[count].hostelName;
	cell11.innerHTML=display.message[count].roomNo;
	cell13.innerHTML="<a href='viewKeyStatus.html?id="+display.message[count].studentId +"' ><i class='glyphicon glyphicon-eye-open'></i> </a>";
	
	
	cell14.innerHTML="<a href='updateStudents.html?first="+display.message[count].firstName+"&last="+display.message[count].lastName+"&studentId="+display.message[count].studentId+"&yearGroup="+display.message[count].contact+"&contact="+display.message[count].email+"&email="+display.message[count].hostelName+"&semester="+display.message[count].semester+"&academicYear="+
	display.message[count].yearGroup+"&issueDate="+display.message[count].issueDate+"&hostelName="+display.message[count].academicYear+"&roomNo="+display.message[count].roomNo+"&roomKeyStatus="+display.message[count].roomKeyStatus+"&lockerKeyStatus="+display.message[count].lockerKeyStatus+"&id="+display.message[count].theId+"'><i class='glyphicon glyphicon-pencil'></i></a>";
	



}
}


function searchPayment(){
	
	remove_div("paid");
	show("theSearch");
	
	var search=$("#search").val();

	var url="controller.php?cmd=29&search="+search;
	
	var display=sendRequest(url);
	

	var table=document.getElementById("theSearch");
	var theRow=table.rows.length;
	for(var count=1; count<=display.message.length; count++){

	var row=table.insertRow(theRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	

	cell1.innerHTML=display.message[count].name;
	cell2.innerHTML=display.message[count].amount;
	
	cell3.innerHTML=display.message[count].studentId;
	cell4.innerHTML=display.message[count].payDate;
	

}
}
var userId=0;
function pullData(){
	var id=window.location.search.substring(1);
	
	var variables=id.split("=");
	var split1=variables[1].split("&");
	var firstName=split1[0];
	var split2=variables[2].split("&");
	var lastName=split2[0];
	var split3=variables[3].split("&");
	var studentId=split3[0];
	var split4=variables[4].split("&");
	var yearGroup=split4[0];
	var split5=variables[5].split("&");
	var contact=split5[0];
	var split6=variables[6].split("&");
	var email=split6[0];
	var split7=variables[7].split("&");
	var semester=split7[0];
	var split8=variables[8].split("&");
	var academicYear=split8[0];
	var split9=variables[9].split("&");
	var theDate=split9[0];
	var split10=variables[10].split("&");
	var hostelName=split10[0];
	var split11=variables[11].split("&");
	var roomNo=split11[0];
	var split12=variables[12].split("&");
	var keyNo=split12[0];
	var split13=variables[13].split("&");
	var roomKeyStatus=split13[0];
	var split14=variables[14].split("&");
	var lockerKeyStatus=split14[0];
	var split15=variables[15].split("&");
	theId=split15[0];
	var lockerKeyId=variables[16];


	

	document.getElementById('firstName').value=firstName;
	document.getElementById('lastName').value=lastName;
	document.getElementById('studentId').value=studentId;
	document.getElementById('contact').value=contact;
	document.getElementById('email').value=email;
	document.getElementById('hostelName').value=hostelName;
	document.getElementById('roomName').value=roomNo;
	document.getElementById('keyNo').value=keyNo;
	document.getElementById('theDate').value=theDate;
	document.getElementById('lockerkeyNo').value=lockerKeyId;
	
	document.getElementById('semester').value=semester;
	document.getElementById('yearGroup').value=yearGroup;
	document.getElementById('academicYear').value=academicYear;
	


}
function updateStudents(){

	
	var firstName= $("#firstName").val();
	var lastName=$("#lastName").val();
	var studentId=$("#studentId").val();
	var contact=$("#contact").val();
	var email=$("#email").val();
	var hostelName=$("#hostelName").val();
	var roomNumber=$("#roomName").val();
	var keyNo =$("#keyNo").val();
	var theDate=$("#theDate").val();
	var lockerKey=$("#lockerkeyNo").val();
	
	var semester=document.getElementById("semester").value;
	var yearGroup=$("#yearGroup").val();
	var academicYear=$("#academicYear").val();

	var url="controller.php?cmd=10 &firstName="+firstName+"&lastName="+lastName+"&studentId="+studentId+"&contact="+contact+"&email="+email+"&hostelName="+hostelName+"&roomNo="+roomNumber+"&keyNo="+keyNo+"&semester="+semester+"&yearGroup="
	+yearGroup+"&academicYear="+academicYear+"&theDate="+theDate+"&theId="+theId+"&lockerKey="+lockerKey;
	var add=sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Student was successfully updated.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Student was not updated. Try Again!!</div></div>';

	}


}

function addManager(){
	var firstName= $("#firstName").val();
	var lastName=$("#lastName").val();
	var managerId=$("#managerId").val();
	var password=$("#password").val();
	var email=$("#email").val();

	var url2="controller.php?cmd=2 &firstName="+firstName+"&lastName="+lastName+"&managerId="+managerId+"&email="+email+"&password="+password;
	
	var add2= sendRequest(url2);

}

function addIssues(){
	var reporterName= $("#name").val();
	var problem=$("#problem").val();
	
	var location=$("#location").val();
	var contact=$("#contact").val();

	var url2="controller.php?cmd=3 &reporterName="+reporterName+"&problem="+problem+"&location="+location+"&contact="+contact;
	
	var add= sendRequest(url2);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Issue was successfully added.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Issue was not added. Try Again!!</div></div>';

	}

}

function visitor(){
	var visitor= $("#visitor").val();
	var person=$("#person").val();
	
	var room=$("#room").val();
	var contact=$("#contact").val();
	var host=$("#host_contact").val();

	var url2="controller.php?cmd=30&visitor="+visitor+"&person="+person+"&room="+room+"&contact="+contact+"&host="+host;
	
	var add2= sendRequest(url2);
	if(add2.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Visitor was successfully added.</div></div>';
	}
	if(add2.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Visitor was not added. Try Again!!</div></div>';

	}

}
var visitorId=0;
function populateVisitor(){
	var visitor=window.location.search.substring(1);
	var variables=visitor.split("=");
	var visitor1=variables[1].split("&");
	var Name=visitor1[0];
	var visitor2=variables[2].split("&");
	var person_visited=visitor2[0];
	var visitor3=variables[3].split("&");
	var room_visited=visitor3[0];
	var visitor4=variables[4].split("&");
	var visitor_contact=visitor4[0];
	var visitor5=variables[5].split("&");
	var host_contact=visitor5[0];
	visitorId=variables[6];
	

	 document.getElementById("visitor").value=Name;
	 document.getElementById("person").value=person_visited;
	 document.getElementById("room").value=room_visited;
	 document.getElementById("contact").value=visitor_contact;
	 document.getElementById("host_contact").value=host_contact;

}
function editVisitor(){
	var visitor= $("#visitor").val();
	var person=$("#person").val();
	
	var room=$("#room").val();
	var contact=$("#contact").val();
	var host_contact=$("#host_contact").val();

	var url2="controller.php?cmd=32&visitor="+visitor+"&person="+person+"&room="+room+"&contact="+
	contact+"&id="+visitorId+"&host="+host_contact;
	
	var add= sendRequest(url2);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Visitor was successfully updated.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Visitor was not updated. Try Again!!</div></div>';

	}

}


var id=0;
function fillTextFields(){
	var data=window.location.search.substring(1);
	//alert(data);
	var variables=data.split("=");
	var split1=variables[1].split("&");
	var firstName=split1[0];
	var split2=variables[2].split("&");
	var lastName=split2[0];
	var split3=variables[3].split("&");
	var managerId=split3[0];
	var split4=variables[4].split("&");
	var email=split4[0];
	 id=variables[5];
	 

	 document.getElementById("firstName").value=firstName;
	 document.getElementById("lastName").value=lastName;
	 document.getElementById("managerId").value=managerId;
	 document.getElementById("email").value=email;
	
}

function viewVisitors(){
	var url2="controller.php?cmd=31";
	
	var display= sendRequest(url2);

	var table1=document.getElementById("visitors");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	


	cell1.innerHTML=display.message[count].name;
	cell2.innerHTML=display.message[count].person_visited;
	
	cell3.innerHTML=display.message[count].room_visited;
	cell4.innerHTML=display.message[count].visitor_contact;
	cell5.innerHTML=display.message[count].host_contact;
	cell6.innerHTML=display.message[count].date_of_visit;
	cell7.innerHTML="<a href='editVisitor.html?name="+display.message[count].name+"&person="+display.message[count].person_visited+
	"&room="+display.message[count].room_visited+"&contact="+display.message[count].visitor_contact+"&host="+display.message[count].host_contact+"&vId="+display.message[count].visitorId+"'> Edit</a>";

}

}


      function remove_div() {

      for (var i = 0; i < arguments.length; i++) {

        var input = arguments[i];
        $('#' + input).addClass('hide'); 
      }

    }

    function show() {
      for (var i = 0; i < arguments.length; i++) {

        var input = arguments[i];

        $('#' + input).removeClass('hide');
        $('#' + input).show();
      }


    }

function updateManager(){
	var firstName= $("#firstName").val();
	var lastName=$("#lastName").val();
	var managerId=$("#managerId").val();
	
	var email=$("#email").val();

	var url2="controller.php?cmd=11&firstName="+firstName+"&lastName="+lastName+"&managerId="+managerId+"&email="+email+"&id="+id;
	
	var add= sendRequest(url2);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> You have successfully updated your profile.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> your profile was not updated. Try Again!!</div></div>';

	}

}
function issues(){
	var name=$("#name").val();
	var problem=$("#problem").val();
	var hostel=$("#hostel").val();
	var roomNo=$("#roomNo").val();
	var contact=$("#contact").val();

	var url3="controller.php?cmd=3 & name="+name+"&problem="+problem+"&hostel="+hostel+"&roomNo="+roomNo+"&contact="+contact;
	var add3=sendRequest(url3);
}
var issueId=0;
function populateIssues(){
	var issues=window.location.search.substring(1);

	var variables=issues.split("=");
	var variable1=variables[1].split("&");
	var problem=variable1[0];
	var variable2=variables[2].split("&");
	var name=variable2[0];
	var variable3=variables[3].split("&");
	var location=variable3[0];
	var variable4=variables[4].split("&");
	var contact=variable4[0];
	issueId=variables[7];
	//alert(issueId);

	document.getElementById("name").value=name;
	document.getElementById("problem").value=problem;
	document.getElementById("location").value=location;
	document.getElementById("contact").value=contact;

}
function updateIssues(){
	var name=$("#name").val();
	var problem=$("#problem").val();
	var location=$("#location").val();
	
	var contact=$("#contact").val();
	var status=document.getElementById("status").value;

	var url3="controller.php?cmd=13&name="+name+"&problem="+problem+"&location="+location+"&contact="+contact+"&status="+status+"&id="+issueId;
	
	var add=sendRequest(url3);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Issue was successfully updated.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Issue was not updated. Try Again!!</div></div>';

	}
}

function viewKeyStatus(){
	var id=window.location.search.substring(1);
	var variables=id.split("=");
	var studentId=variables[1];

	var url4="controller.php?cmd=14 &id="+studentId;
	var display =sendRequest(url4);
	var table1=document.getElementById("allStudents");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	var cell8=row.insertCell(7);
	var cell9=row.insertCell(8);
	
	


	cell1.innerHTML=display.message[count].semester;
	cell2.innerHTML=display.message[count].academicYear;
	cell3.innerHTML=display.message[count].roomKeyNo;
	cell4.innerHTML=display.message[count].lockerKeyId;
	cell5.innerHTML=display.message[count].roomNo;
	cell6.innerHTML=display.message[count].hostelName;
	cell7.innerHTML=display.message[count].issueDate;
	cell8.innerHTML=display.message[count].roomKeyStatus;
	cell9.innerHTML=display.message[count].lockerKeyStatus;
	if(display.message[count].roomKeyStatus=="Taken"){

		cell8.style.backgroundColor="red";
	}
	else {
		cell8.style.backgroundColor="green";
	}

	if(display.message[count].lockerKeyStatus=="Taken"){

		cell9.style.backgroundColor="red";
	}
	else {
		cell9.style.backgroundColor="green";
	}
	 cell8.style.color="white";
	 cell9.style.color="white";
	 document.getElementById("name").innerHTML=display.message[count].firstName +""+display.message[count].lastName;

}



   

}

function TimedRefresh( t ) {

setTimeout("location.reload(true);", t);

}
function updateLockerKeyTaken(){
	var url="controller.php?cmd=15";
	
	sendRequest(url);
	
	
}
function updateLockerKeyReturn(){
	var url="controller.php?cmd=16";
	
	sendRequest(url);
	

}
function updateRoomKeyTaken(){
	var url="controller.php?cmd=17";
	sendRequest(url);

}
function updateRoomKeyReturn(){
	var url="controller.php?cmd=18";
	sendRequest(url);


}
function paidLockerKey(){
	var url="controller.php?cmd=19";
	sendRequest(url);

}
function paidRoomKey(){
	var url="controller.php?cmd=20";
	sendRequest(url);

}
function addPayment(){
	var name=$("#fullName").val();
	var amount=$("#amount").val();
	var studentId=$("#studentId").val();
	var type=$("#type").val();

	var url="controller.php?cmd=26&fullName="+name+"&amount="+amount+"&studentId="+studentId+"&type="+type;
		var add =sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Payment was successfully added.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Payment was not added. Try Again!!</div></div>';

	}
}
var id=0;
function populatePayment(){
	var pay=window.location.search.substring(1);
	var variables=pay.split("=");
	var variable1=variables[1].split("&");
	var name=variable1[0];
	var variable2=variables[2].split("&");
	var studentId=variable2[0];
	var variable3=variables[3].split("&");
	var amount=variable3[0];
	
	var variable4=variables[4].split("&");
	var type=variable4[0];
	 id=variables[5];

	 document.getElementById("fullName").value=name;
	 document.getElementById("amount").value=amount;
	 document.getElementById("studentId").value=studentId;
	 document.getElementById("type").value=type;

}

function editPayment(){
	//alert(id);
	var name=$("#fullName").val();
	var amount=$("#amount").val();
	var studentId=$("#studentId").val();
	var type=$("#type").val();

	var url="controller.php?cmd=33&fullName="+name+"&amount="+amount+"&studentId="+studentId+"&type="+type+"&id="+id;
	//prompt("y",url);
	var add=sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Payment was successfully updated.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Payment was not updated. Try Again!!</div></div>';

	}

}
function selectAll(){
	remove_div("theSearch");
	var url4="controller.php?cmd=4";
	var display =sendRequest(url4);
	var table1=document.getElementById("students");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	var cell8=row.insertCell(7);
	var cell9=row.insertCell(8);
	var cell10=row.insertCell(9);
	

	cell1.innerHTML=display.message[count].firstName;
	cell2.innerHTML=display.message[count].lastName;
	
	cell3.innerHTML=display.message[count].studentId;
	cell4.innerHTML=display.message[count].yearGroup;
	cell5.innerHTML=display.message[count].contact;
	cell6.innerHTML=display.message[count].email;
	cell7.innerHTML=display.message[count].semester;
	cell8.innerHTML=display.message[count].academicYear;
	
	cell9.innerHTML="<a href='viewKeyStatus.html?id="+display.message[count].studentId +"' ><i class='glyphicon glyphicon-eye-open'></i> </a>";
	
	
	cell10.innerHTML="<a href='updateStudents.html?first="+display.message[count].firstName+"&last="+display.message[count].lastName+"&studentId="+display.message[count].studentId+"&yearGroup="+display.message[count].yearGroup+"&contact="+display.message[count].contact+"&email="+display.message[count].email+"&semester="+display.message[count].semester+"&academicYear="+
	display.message[count].academicYear+"&issueDate="+display.message[count].issueDate+"&hostelName="+display.message[count].hostelName+"&roomNo="+display.message[count].roomNo+"&keyNo="+display.message[count].roomKeyNo+"&roomKeyStatus="+display.message[count].roomKeyStatus+"&lockerKeyStatus="+display.message[count].lockerKeyStatus+
	"&id="+display.message[count].Id+"&locker="+display.message[count].lockerKeyId+"'><i class='glyphicon glyphicon-pencil'></i></a>";
	

}

}

function selectManagers(){
	var url4="controller.php?cmd=7";
	var display =sendRequest(url4);
	var table1=document.getElementById("managers");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	
	
	cell1.innerHTML=display.message[count].firstName;
	cell2.innerHTML=display.message[count].lastName;
	cell3.innerHTML=display.message[count].managerId;
	cell4.innerHTML=display.message[count].email;
	
}
}

function managersProfile(){
	var url4="controller.php?cmd=21";
		var display =sendRequest(url4);
	var table1=document.getElementById("managers");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	
	
	cell1.innerHTML=display.message[count].firstName;
	cell2.innerHTML=display.message[count].lastName;
	cell3.innerHTML=display.message[count].managerId;
	cell4.innerHTML=display.message[count].email;
	
	cell5.innerHTML="<a href='updateManagers.html?firstName="+display.message[count].firstName+"&lastName="+display.message[count].lastName
	+"&managerId="+display.message[count].managerId+"&email="+display.message[count].email+"&id="+display.message[count].id+"'>Update</a>"
	
	
}
}


function paid(){
	remove_div("theSearch");
	var url4="controller.php?cmd=27";
	var display =sendRequest(url4);
	var table1=document.getElementById("paid");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	
	
	cell1.innerHTML=display.message[count].name;
	cell2.innerHTML=display.message[count].studentId;
	cell3.innerHTML=display.message[count].amount;
	cell4.innerHTML=display.message[count].type;
	cell5.innerHTML=display.message[count].payDate;
	cell6.innerHTML="<a href='editPayment.html?name="+display.message[count].name+"&studentId="+display.message[count].studentId+"&amount="+display.message[count].amount+"&type="+display.message[count].type+"&payId="+display.message[count].theId+"'>Edit</a>";
	
}
}
function login(){
	var managerId=$("#managerId").val();
	var password=$("#password").val();
	var url="controller.php?cmd=23&managerId="+managerId+"&password="+password;
	//prompt("m",url);
	var display =sendRequest(url);
	for(var count=0; count<display.message.length; count++){
		var id=display.message[count].managerId;
		var pass=display.message[count].password;
	if(managerId==id&password==pass){

	window.location.href="viewStudents.html";
}
else {
	document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-info fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Password or ID not correct.</div></div>';
    window.location.href="login.html";
}
}


}
function changePassword(){
    var oldPassword=$("#oldPassword").val();
	var newPassword=$("#newPassword").val();
	var confirm=$("#confirmPassword").val();
	var url="controller.php?cmd=24";
	
	var display =sendRequest(url);
	if(newPassword!=confirm){
		alert("passwords do not march");
		window.location.href="changePassword.html";
	}
	for(var count=1; count<=display.message.length; count++){
		
		if(display.message[count].password==oldPassword){
		var url2="controller.php?cmd=25&newPassword="+newPassword;
		var display =sendRequest(url2);
		

	}

	if(display.message[count].password!=oldPassword){

		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-info fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Passwords do not match.</div></div>';
		window.location.href="changePassword.html";
	}
	if(display.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Password was successfully updated.</div></div>';
	}
	if(display.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Password was not updated. Try Again!!</div></div>';

	}


}


}
function selectReturned(){
	remove_div("theSearch");
    var url4="controller.php?cmd=5";
      
	var display =sendRequest(url4);
	var table1=document.getElementById("students");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	var cell8=row.insertCell(7);
	var cell9=row.insertCell(8);
	var cell10=row.insertCell(9);
	var cell11=row.insertCell(10);
	var cell12=row.insertCell(11);
	var cell13=row.insertCell(12);
	var cell14=row.insertCell(13);

	cell1.innerHTML=display.message[count].firstName;
	cell2.innerHTML=display.message[count].lastName;
	cell3.innerHTML=display.message[count].studentId;
	cell4.innerHTML=display.message[count].yearGroup;
	cell5.innerHTML=display.message[count].contact;
	cell6.innerHTML=display.message[count].email;
	cell7.innerHTML=display.message[count].semester;
	cell8.innerHTML=display.message[count].academicYear;
	cell9.innerHTML=display.message[count].issueDate;
	cell10.innerHTML=display.message[count].hostelName;
	cell11.innerHTML=display.message[count].roomNo;
	cell12.innerHTML=display.message[count].roomKeyStatus;
	cell13.innerHTML=display.message[count].lockerKeyStatus;
	cell14.innerHTML="<a href='updateStudents.html?first="+display.message[count].firstName+"&last="+display.message[count].lastName+"&studentId="+display.message[count].studentId+"&yearGroup="+display.message[count].yearGroup+"&contact="+display.message[count].email+"&semester="+display.message[count].semester+"&academicYear="+display.message[count].academicYear+
	"&issueDate="+display.message[count].issueDate+"&hostelName="+display.message[count].hostelName+"&roomNo="+display.message[count].roomNo+"&roomKeyStatus="+display.message[count].roomKeyStatus+"&lockerKeyStatus="+display.message[count].lockerKeyStatus+"&id="+display.message[count].theId+"'>Update</a>";
	
	

}
}


function selectNotReturned(){
var url4="controller.php?cmd=4";
	var display =sendRequest(url4);
	var table1=document.getElementById("keysNotReturned");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){
		if(display.message[count].roomKeyStatus=="Taken" || display.message[count].lockerKeyStatus=="Taken"){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	var cell8=row.insertCell(7);
	var cell9=row.insertCell(8);
	var cell10=row.insertCell(9);
	var cell11=row.insertCell(10);
	var cell12=row.insertCell(11);
	var cell13=row.insertCell(12);
	var cell14=row.insertCell(13);

	cell1.innerHTML=display.message[count].firstName;
	cell2.innerHTML=display.message[count].lastName;
	cell3.innerHTML=display.message[count].studentId;
	cell4.innerHTML=display.message[count].yearGroup;
	cell5.innerHTML=display.message[count].contact;
	cell6.innerHTML=display.message[count].email;
	cell7.innerHTML=display.message[count].semester;
	cell8.innerHTML=display.message[count].academicYear;
	cell9.innerHTML=display.message[count].issueDate;
	cell10.innerHTML=display.message[count].hostelName;
	cell11.innerHTML=display.message[count].roomNo;
	cell12.innerHTML=display.message[count].roomKeyStatus;
	cell13.innerHTML=display.message[count].lockerKeyStatus;
	cell14.innerHTML="<a href='updateStudents.html?first="+display.message[count].firstName+"&last="+display.message[count].lastName+"&studentId="+display.message[count].studentId+"&yearGroup="+display.message[count].yearGroup+"&contact="+display.message[count].email+"&semester="+display.message[count].semester+"&academicYear="+display.message[count].academicYear+
	"&issueDate="+display.message[count].issueDate+"&hostelName="+display.message[count].hostelName+"&roomNo="+display.message[count].roomNo+"&roomKeyStatus="+display.message[count].roomKeyStatus+"&lockerKeyStatus="+display.message[count].lockerKeyStatus+"&id="+display.message[count].theId+"'>Update</a>";
	    if(display.message[count].roomKeyStatus=="Taken" ){ 

		
		cell12.style.backgroundColor="red";

	}
	if(display.message[count].roomKeyStatus=="Returned"){
		cell12.style.backgroundColor="green";
	}

	if(display.message[count].lockerKeyStatus=="Taken" ){ 

		
		cell13.style.backgroundColor="red";

	}
	if(display.message[count].lockerKeyStatus=="Returned"){
		cell13.style.backgroundColor="green";
	}

	cell12.style.color="white";
	cell13.style.color="white";

}


	

}
}
function selectResolved(){
var url4="controller.php?cmd=8";
	var display =sendRequest(url4);
	var table1=document.getElementById("issuesResolved");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	
	cell1.innerHTML=display.message[count].issue;
	cell2.innerHTML=display.message[count].reporter;
	cell3.innerHTML=display.message[count].roomNo;
	cell4.innerHTML=display.message[count].hostel;
	cell5.innerHTML=display.message[count].contact;
	cell6.innerHTML=display.message[count].issueStatus;
	

}
}

function selectAllIssues(){
var url4="controller.php?cmd=12";

	var display =sendRequest(url4);
	var table1=document.getElementById("allIssues");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	var cell7=row.insertCell(6);
	
	cell1.innerHTML=display.message[count].issue;
	cell2.innerHTML=display.message[count].reporterName;
	
	cell3.innerHTML=display.message[count].location;
	cell4.innerHTML=display.message[count].contact;
	cell5.innerHTML=display.message[count].issueStatus;
	cell6.innerHTML=display.message[count].date_reported;
	cell7.innerHTML="<a href='updateIssueStatus.html?issue="+display.message[count].issue+"&name="+display.message[count].reporterName+
	"&location="+display.message[count].location+"&contact="+display.message[count].contact+"&status="+display.message[count].issueStatus
	+"&date="+display.message[count].date_reported+"&id="+display.message[count].id+"'>Update</a>";

	

}
}

function selectNotResolved(){
var url4="controller.php?cmd=9";
	var display =sendRequest(url4);
	var table1=document.getElementById("issueNotResolved");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1); 
	var cell3=row.insertCell(2);
	var cell4=row.insertCell(3);
	var cell5=row.insertCell(4);
	var cell6=row.insertCell(5);
	
	cell1.innerHTML=display.message[count].issue;
	cell2.innerHTML=display.message[count].reporter;
	cell3.innerHTML=display.message[count].roomNo;
	cell4.innerHTML=display.message[count].hostel;
	cell5.innerHTML=display.message[count].contact;
	cell6.innerHTML=display.message[count].issueStatus;
	

}
}
function addRoomKey(){
	var key =$("#keyNo").val();
	var url="controller.php?cmd=34&key="+key;
	
	var add =sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Key was successfully added.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Key was not added. Try Again!!</div></div>';

	}
	
}

function addLockerKey(){
	var key =$("#lockerKeyNo").val();
	var url="controller.php?cmd=41&key="+key;
	
	var add =sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Key was successfully added.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Key was not added. Try Again!!</div></div>';

	}
	
}
var keyId=0;
function populateKeyField(){
	var key= window.location.search.substring(1);
	var variable=key.split("=");
	var keyNo=variable[1].split("&");
	var roomKey=keyNo[0];
	keyId=variable[2];

	document.getElementById("keyNo").value=roomKey;


}
function updateRoomKey(){
	var key =$("#keyNo").val();
	var url="controller.php?cmd=39&roomKey="+key+"&keyId="+keyId;
	//prompt("u",url);
	var add=sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Key was successfully updated.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Key was not updated. Try Again!!</div></div>';

	}
	
}
function updateLockerKey(){
	var key =$("#keyNo").val();
	var url="controller.php?cmd=42&lockerKey="+key+"&keyId="+keyId;
	//prompt("u",url);
	var add=sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Key was successfully updated.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Key was not updated. Try Again!!</div></div>';

	}
	
}
function addRoom(){
	var room =$("#roomNo").val();
	var url="controller.php?cmd=35&roomNo="+room;
	
	var add = sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Room was successfully added.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Room was not added. Try Again!!</div></div>';

	}
	
}
var id=0;
function populateRoomField(){
	var room= window.location.search.substring(1);
	var variable=room.split("=");
	var roomNo=variable[1].split("&");
	var roomId=roomNo[0];
	id=variable[2];

	document.getElementById("roomNo").value=roomId;

}

function updateRoom(){
	var room =$("#roomNo").val();
	var url="controller.php?cmd=38&roomNo="+room+"&roomsId="+id;
	
	var add=sendRequest(url);
	if(add.result==1){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-success fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Hurray!!</strong> Room was successfully updated.</div></div>';
	}
	if(add.result==0){
		document.getElementById("message").innerHTML='<div align="center"><div class="alert alert-danger fade in radius-bordered alert-shadowed"><button class="close" data-dismiss="alert"> × </button><i class="fa-fw fa fa-times"></i><strong>Sorry!!</strong> Room was not updated. Try Again!!</div></div>';

	}
	
}
function selectRoomKey(){
	var url="controller.php?cmd=37";
	
	var display= sendRequest(url);
	var table1=document.getElementById("keys");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	cell1.innerHTML=display.message[count].room_key;
	cell2.innerHTML="<a href='updateRoomKey.html?roomKey="+display.message[count].room_key+"&keyId="+display.message[count].keyId+"'>Update</a>";


}
}

function selectLockerKey(){
	var url="controller.php?cmd=43";
	
	var display= sendRequest(url);
	var table1=document.getElementById("keys");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	cell1.innerHTML=display.message[count].lockerKey;
	cell2.innerHTML="<a href='updateLockerKey.html?lockerKey="+display.message[count].lockerKey+"&keyId="+display.message[count].lockerKeyId+"'>Update</a>";


}
}

function selectRoom(){
	var url="controller.php?cmd=36&key";
	
	var display =sendRequest(url);

	var table1=document.getElementById("rooms");
	var myRow= table1.rows.length;
	for(var count=1; count<display.message.length; count++){

	var row=table1.insertRow(myRow);
	var cell1=row.insertCell(0);
	var cell2=row.insertCell(1);
	cell1.innerHTML=display.message[count].roomNo;
	cell2.innerHTML="<a href='updateRooms.html?roomNo="+display.message[count].roomNo+"&roomsId="+display.message[count].roomsId+"'>Update</a>";

}
}