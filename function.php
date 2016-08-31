<?php
include("adb.php");
class users extends adb{

function students($firstName,$lastName,$studentId,$email,$contact,$hostelName,$roomNo,$roomkeyNo,$lockerKeyId
 ,$roomKeyStatus,$lockerKeyStatus,$date,$academicYear,$yearGroup,$semester){
	$insert="INSERT INTO students set firstName ='$firstName',lastName='$lastName',studentId='$studentId',email='$email',
	contact='$contact',hostelName='$hostelName',roomNo='$roomNo',roomKeyNo='$roomkeyNo',lockerKeyId='$lockerKeyId',academicYear='$academicYear',
	roomKeyStatus='$roomKeyStatus',lockerKeyStatus='$lockerKeyStatus',issueDate='$date',yearGroup='$yearGroup',semester='$semester'";
	mysql_error();

	return $this->query($insert);
}

function historic_data($firstName,$lastName,$studentId,$email,$contact,$hostelName,$roomNo,$keyNo
        ,$date,$academicYear,$yearGroup,$semester){
	$insert="INSERT INTO historic_data set firstName ='$firstName',lastName='$lastName',studentId='$studentId',email='$email',
	contact='$contact',hostelName='$hostelName',roomNo='$roomNo',keyNo='$keyNo',academicYear='$academicYear',
	issueDate='$date',yearGroup='$yearGroup',semester='$semester'";
	mysql_error();

	return $this->query($insert);
}
 function managers($firstName,$lastName,$managerId,$email,$password ){
 	$insert="INSERT INTO admin set firstName='$firstName',lastName='$lastName',managerId='$managerId'
 	,email='$email',password='$password'";

 	return $this->query($insert);
 }

 function issues($issue,$location,$reporterName,$status,$contact,$date){

 	$insert="INSERT INTO maintainceissues set issue ='$issue',location=
 	'$location',reporterName='$reporterName',issueStatus='$status', contact='$contact', date_reported='$date'";
 	return $this->query($insert);
 }
 function updateIssues($issue,$location,$reporterName,$status,$contact,$id){
 	$update="UPDATE maintainceissues set issue ='$issue',location=
 	'$location',reporterName='$reporterName',issueStatus='$status', contact='$contact' WHERE id='$id'";
 	return $this->query($update);


 }

 function selectAll(){
 	$select="SELECT firstName, lastName,studentId,email,contact,hostelName,roomNo,academicYear, 
 	roomKeyStatus, lockerKeyStatus,issueDate, Id ,semester, yearGroup,roomKeyNo,lockerKeyId FROM students ORDER BY firstName DESC";
 	return $this->query($select);


 }
 function updateLockerKeyStatusReturn($id,$returned){
 	$update="UPDATE students set lockerKeyStatus='$returned' WHERE studentId ='$id'";
 	return $this->query($update);

 }

 function updateLockerKeyStatusTaken($id,$taken){
 	$update="UPDATE students set lockerKeyStatus='$taken' WHERE studentId ='$id'";
 	return $this->query($update);

 }
 function selectVisitors(){
 	$select="SELECT name, room_visited, person_visited, visitor_contact,host_contact, date_of_visit,visitorId FROM visitor ORDER BY date_of_visit DESC";
 	return $this->query($select);
 }

 function updateRoomKeyStatusReturn($id,$returned){
 	$update="UPDATE students set roomKeyStatus='$returned' WHERE studentId ='$id'";
 	return $this->query($update);

 }


 function updateRoomKeyStatusTaken($id,$taken){
 	$update="UPDATE students set roomKeyStatus='$taken' WHERE studentId ='$id'";
 	return $this->query($update);

 }

 function updateRoomKeyPaid($id){
 	$update="UPDATE students set roomKeyStatus='Paid' WHERE studentId ='$id'";
 	return $this->query($update);

 }

  function updateLockerKeyPaid($id){
 	$update="UPDATE students set lockerKeyStatus='Paid' WHERE studentId ='$id'";
 	return $this->query($update);

 }

 function viewStatus($id){
 	$select="SELECT firstName, lastName, semester,academicYear,
 	roomKeyStatus, lockerKeyStatus, roomNo, hostelName,roomKeyNo,lockerKeyId,issueDate FROM students WHERE studentID ='$id'";
 	return $this->query($select);


 }

 function selectReturnedKey(){
 	$select="SELECT firstName, lastName,studentId,email,contact,hostelName,roomNo,academicYear, 
 	roomKeyStatus, lockerKeyStatus,issueDate,semester, yearGroup FROM students WHERE roomKeyStatus='returned' AND lockerKeyStatus='returned'";
 	return $this->query($select);


 }
 function visitor($visitor,$peron_visited,$room,$contact,$date,$host){
 	$insert="INSERT INTO visitor set name ='$visitor', person_visited='$peron_visited', room_visited='$room', visitor_contact='$contact', date_of_visit='$date',host_contact='$host'";
 	   return $this->query($insert);
 }
 function editVisitor($visitor,$peron_visited,$room,$contact,$host,$id){
 	$update="UPDATE visitor set name ='$visitor', person_visited='$peron_visited', room_visited='$room', 
 	visitor_contact='$contact',host_contact='$host' WHERE visitorId='$id'";
 	return $this->query($update);
 }

// function selectNotReturned(){
// 	$select="SELECT firstName, lastName,studentId,email,contact,hostelName,roomNo, semester, yearGroup, academicYear, 
//  	roomKeyStatus, lockerKeyStatus,issueDate FROM students WHERE roomKeyStatus='Taken' AND lockerKeyStatus='Taken'";
//  	return $this->query($select);

// }
function selectManagers(){
	$select="SELECT firstName, lastName, managerId, email from admin";
	return $this->query($select);
}
function managersProfile($id){
	$select="SELECT firstName, lastName, managerId, email , id From admin WHERE managerId='$id'";
	return $this->query($select);
}
// function issuesNotResolved(){
// 	$select="SELECT issue,  location,reporter, issueStatus FROM maintainceissues WHERE status='not resolved'";
// 	return $this->query($select);

// }

// function issuesResolved(){
// 	$select="SELECT issue,  location,reporter, issueStatus FROM maintainceissues WHERE status='resolved'";
// 	return $this->query($select);

// }

function selectAllIssues(){
	$select="SELECT issue, location,reporterName, issueStatus, contact,id, date_reported FROM maintainceissues ORDER BY date_reported DESC";
	return $this->query($select);

}
function updateStudents($firstName,$lastName,$studentId,$email,$contact,$hostelName,$roomNo,$keyNo,$lockerKeyId
 ,$date,$academicYear,$yearGroup,$semester,$id){
	$update="UPDATE students set firstName ='$firstName',lastName='$lastName',studentId='$studentId',email='$email',
	contact='$contact',hostelName='$hostelName',roomNo='$roomNo', roomKeyNo='$keyNo', lockerKeyId='$lockerKeyId',academicYear='$academicYear'
	,issueDate='$date',yearGroup='$yearGroup',semester='$semester' WHERE 
	Id='$id'";
	return $this->query($update);
}
function updateManager($firstName,$lastName,$email,$id,$managerId){

	$update="UPDATE admin set firstName='$firstName',lastName='$lastName',email='$email', managerId='$managerId' WHERE id ='$id'";
	return $this->query($update);
}
function login($managerId,$password){
	$select="SELECT managerId, password,firstName, lastName FROM admin WHERE managerId='$managerId' AND password='$password'";
	echo mysql_error();

	return $this->query($select);

}
function changePassword($password,$managerId){
	$update="UPDATE admin set password='$password' WHERE managerId='$managerId'";
	return $this->query($update);

}
function selectDetails($managerId){
	$select="SELECT firstName, lastName, managerId, password FROM admin WHERE managerId='$managerId' ";
	return $this->query($select);
}
function payment($name,$id,$amount,$date,$type){
	$insert="INSERT INTO payment set name ='$name',studentId ='$id', amount='$amount',payDate='$date',type='$type'";
	echo mysql_error();
	return $this->query($insert);
}

function editPayment($name,$studentId,$amount,$type,$id){
	$update="UPDATE payment set name ='$name',studentId='$studentId',amount='$amount',type='$type' WHERE theId='$id'";
	return $this->query($update);
}
function selectPayment(){
	$select="SELECT name, amount, studentId, payDate, type,theId FROM payment ";
	return $this->query($select);
}
function searchPayment($name){
	$select="SELECT name, amount, studentId, type,payDate,theId FROM payment WHERE name LIKE '$name%'";
	return $this->query($select);
}
function search($name){
 $select="SELECT firstName, lastName,studentId,email,contact,hostelName,roomNo,academicYear, 
 	roomKeyStatus, lockerKeyStatus,issueDate, Id ,semester, yearGroup FROM students WHERE firstName LIKE '$name%'";
 	return $this->query($select);

}
function addRoom($room){
	$insert="INSERT INTO rooms SET roomNo ='$room'";
	return $this->query($insert);
}
function addRoomKey($key){
	$insert="INSERT INTO roomkeyNo SET room_key ='$key'";
	return $this->query($insert);
}
function addLockerKey($key){
	$insert="INSERT INTO lockerKey SET lockerKey ='$key'";
	return $this->query($insert);
}
function selectRoomKey(){
	$select="SELECT room_key, keyId FROM roomkeyNo";
	return $this->query($select);

}
function selectLockerKey(){
	$select="SELECT lockerKey, lockerKeyId FROM lockerKey";
	return $this->query($select);

}

function selectRoom(){
	$select="SELECT roomNo,roomsId FROM rooms";
	return $this->query($select);

}
function updateRoomKey($id,$key){
	$update="UPDATE  roomkeyNo SET room_key ='$key' WHERE keyId='$id'";
	return $this->query($update);

}
function updateLockerKey($id,$key){
	$update="UPDATE  lockerKey SET lockerKey ='$key' WHERE lockerKeyId='$id'";
	return $this->query($update);

}


function updateRoom($id,$room){
	$update="UPDATE  rooms SET roomNo ='$room' WHERE roomsId='$id'";
	return $this->query($update);

}

function searchVisitor($name){
	$select="SELECT  visitorId, name, person_visited, room_visited, host_contact, visitor_contact,date_of_visit FROM visitor WHERE person_visited LIKE '$name%'";
	return $this->query($select);
}
function searchRoomKey($key){
	$select="SELECT keyId, room_key FROM roomkeyno WHERE room_key LIKE '$key%'";
	return $this->query($select);

}
function searchLockerKey($key){
	$select="SELECT lockerKey FROM lockerKey WHERE lockerKey LIKE '$key%'";
	return $this->query($select);

}

function searchIssues($status){
	$select="SELECT issue, location,reporterName, issueStatus, contact,id, date_reported FROM maintainceissues WHERE issueStatus LIKE '$status%'";
	return $this->query($select);
}
}
  

?>