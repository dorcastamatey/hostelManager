<?php
session_start();
 $cmd=$_REQUEST['cmd'];
 switch ($cmd) {
 	case 1:
 	addStudents();
 	break;
 	case 2;
 	addManagers();
 	break;
 	case 3;
 	issuesLogging();
 	break;
    case 4;
    viewAll();
    break;
    case 5;
    viewReturned();
    break;
    // case 6;
    // viewNotReturn();
    // break;
    case 7;
    managers();
    break;
    case 8;
    issuesResolved();
    break;
    case 9;
    issuesNotResolved();
    break;
    case 10;
    updateStudents();
    break;
    case 11;
    updateManagers();
    break;
    case 12;
    selectAllIssues();
    break;
    case 13;
    updateIssuesLogging();
    break;
    case 14;
    viewStatus();
    break;

    case 15;
    updateLockerKeyTaken();
    break;
    case 16;
    updateLockerKeyReturned();
    break;
    case 17;
    updateRoomKeyTaken();
    break;
    case 18;
    updateRoomKeyReturn();
    break;
    case 19;
    updateLockerKeyPaid();
    break;
    case 20;
    updateRoomKeyPaid();
    break;

    case 21;
    managersProfile();
    break;
    case 23;
    login();
    break;
    case 24;
    selectDetails();
    break;
    case 25;
    changePassword();
    break;
    case 26;
    payments();
    break;
    case 27;
    selectPayments();
    break;
    case 28;
    search();
    break;
    case 29;
    searchPayment();
    break;
    case 30;
    visitor();
    break;
    case 31;
    viewVisitor();
    break;
    case 32;
    editVisitor();
    break;
    case 33;
    editPayments();
    break;
    case 34;
    addRoomKey();
    break;
    case 35;
    addRoom();
    break;
    case 36;
    selectRoom();
    break;
    case 37;
    selectRoomKey();
    break;
    case 38;
    updateRoom();
    break;
    case 39;
    updateRoomKey();
    break;
    case 40;
    historic_data();
    break;
    case 41;
    addLockerKey();
    break;
    case 42;
    updateLockerKey();
    break;
    case 43;
    selectLockerKey();
    break;
}
 function addStudents(){
    include("function.php");
    $add=new users();
    $firstName=$_REQUEST['firstName'];
    $lastName=$_REQUEST['lastName'];
    $studentId=$_REQUEST['studentId'];
    $email=$_REQUEST['email'];
    $contact=$_REQUEST['contact'];
    $hostelName=$_REQUEST['hostelName'];
    $roomNo=$_REQUEST['roomNo'];
    $keyNo=$_REQUEST['keyNo'];
    $roomKeyStatus="Taken";
    $lockerKeyStatus="Taken";
    $date =Date("Y.m.d");
    $yearGroup=$_REQUEST['yearGroup'];
    $semester=$_REQUEST['semester'];
    $academicYear=$_REQUEST['academicYear'];
    $lockerKey=$_REQUEST['lockerkey'];
    

    if(!$add-> students($firstName,$lastName,$studentId,$email,$contact,$hostelName,$roomNo,$keyNo,$lockerKey
       ,$roomKeyStatus,$lockerKeyStatus,$date,$academicYear,$yearGroup,$semester)){

        echo '{"result": 0, "message": " student was not added"}';
        echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " student was added successfully"}';
    echo mysql_error();
    return;

 }

  function historic_data(){
    include("function.php");
    $add=new users();
    $firstName=$_REQUEST['firstName'];
    $lastName=$_REQUEST['lastName'];
    $studentId=$_REQUEST['studentId'];
    $email=$_REQUEST['email'];
    $contact=$_REQUEST['contact'];
    $hostelName=$_REQUEST['hostelName'];
    $roomNo=$_REQUEST['roomNo'];
    $keyNo=$_REQUEST['keyNo'];
    //$roomKeyStatus="Taken";
    //$lockerKeyStatus="Taken";
    $date =Date("Y.m.d");
    $yearGroup=$_REQUEST['yearGroup'];
    $semester=$_REQUEST['semester'];
    $academicYear=$_REQUEST['academicYear'];
    

    if(!$add-> historic_data($firstName,$lastName,$studentId,$email,$contact,$hostelName,$roomNo,$keyNo
       ,$date,$academicYear,$yearGroup,$semester)){

        echo '{"result": 0, "message": " student was not added"}';
        echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " student was added successfully"}';
    echo mysql_error();
    return;

 }
function addManagers(){

    include("function.php");
    $add=new users();
    $firstName=$_REQUEST['firstName'];
    $lastName=$_REQUEST['lastName'];
    $managerId=$_REQUEST['managerId'];
    $email=$_REQUEST['email'];
    $password=$_REQUEST['password'];
    $pwd=md5($password);



    if(!$add->managers($firstName,$lastName,$managerId,$email,$pwd )){

        echo '{"result": 0, "message": "manager was not added"}';
        return;
    }
    echo '{"result": 1, "message": "manager was added successfully"}';
    return;

 }

 function issuesLogging(){
 	 include("function.php");
    $add=new users();
    $reporterName=$_REQUEST['reporterName'];
    //$roomNo=$_REQUEST['roomNo'];
    $location=$_REQUEST['location'];
    $issue=$_REQUEST['problem'];
    $contact=$_REQUEST['contact'];
    $status="not resolved";
    $date=date("Y.m.d");


    if(!$add->issues($issue,$location,$reporterName,$status,$contact,$date)){

        echo '{"result": 0, "message": "issue was not logged"}';
        echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": "issue was logged successfully"}';
    return;


 }

  function updateIssuesLogging(){
     include("function.php");
    $add=new users();
    $reporterName=$_REQUEST['name'];
    //$roomNo=$_REQUEST['roomNo'];
    $location=$_REQUEST['location'];
    $issue=$_REQUEST['problem'];
    $contact=$_REQUEST['contact'];
    $status= $_REQUEST['status'];
    $id=$_REQUEST['id'];


    if(!$add->updateIssues($issue,$location,$reporterName,$status,$contact,$id)){

        echo '{"result": 0, "message": "issue was not updated"}';
        echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": "issue was updated successfully"}';
    return;


 }

 function viewAll(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->selectAll())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }

     function login(){

        include("function.php");
        $obj=new users();
        $managerId=$_REQUEST['managerId'];
        $password=$_REQUEST['password'];
        //$pass=md5($password);
        //$_SESSION["managerId"];

       $obj->login($managerId,$password);
       $row = $obj->fetch();
     if ($row) {
        echo '{"result":1, "message":[';
        while ($row)
        {
            $_SESSION['managerId']=$row['managerId'];
            echo json_encode($row);

            $row = $obj->fetch(); 
            if ($row){
                echo ",";
            }
        }
        echo "]}";
        return;
    }
    echo '{"result": 0, "message": "invalid details"}';
    echo mysql_error();
    return;
    }

  function payments(){

        include("function.php");
        $add=new users();
        $name=$_REQUEST['fullName'];
        $studentId=$_REQUEST['studentId'];
        $amount=$_REQUEST['amount'];
        $type=$_REQUEST['type'];
        $date=date("Y.m.d");
        //$_SESSION["password"]=$password;

        if(!$add-> payment($name,$studentId,$amount,$date,$type)){

        echo '{"result": 0, "message": "payment was not added"}';
        echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": "payment was added successfully"}';
    return;
    }

    function editPayments(){

        include("function.php");
        $obj=new users();
        $name=$_REQUEST['fullName'];
        $studentId=$_REQUEST['studentId'];
        $amount=$_REQUEST['amount'];
        $type=$_REQUEST['type'];
        $id=$_REQUEST['id'];
        //$_SESSION["password"]=$password;

        if (!$row=$obj->editPayment($name,$studentId,$amount,$type,$id))
        {

             echo '{"result": 0, "message": "payment was not updated"}';
             echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": "payment was updated successfully"}';
    return;
            
    }

     function selectPayments(){

        include("function.php");
        $obj=new users();
        //$name=$_REQUEST['fullName'];
        //$studentId=$_REQUEST['studentId'];
        //$amount=$_REQUEST['amount'];
        //$date=date("Y.m.d");
        //$_SESSION["password"]=$password;

        if ($row=$obj->selectPayment())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }



function viewStatus (){

        include("function.php");
        $obj=new users();
        $id=$_REQUEST['id'];
        $_SESSION["studentId"]=$id;

        if ($row=$obj->viewStatus($id))
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }

 function viewReturned(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->selectReturnedKey())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            return;
        }
    }

    //  function viewNotReturn(){

    //     include("function.php");
    //     $obj=new users();

    //     if ($row=$obj->selectNotReturned())
    //     {
    //         echo '{"result":1, "message":[';
    //         while ($row)
    //         {
    //             echo json_encode($row);

    //             $row = $obj->fetch (); 
    //             if ($row){
    //                 echo ",";
    //             }
    //         }
    //         echo "]}";
    //         return;
    //     }
    //     else{
    //         echo '{"result":0, "message":"not display"}';
    //         return;
    //     }
    // }

    function issuesNotResolved(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->issuesNotResolved())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            return;
        }
    }

    function issuesResolved(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->issuesResolved())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            return;
        }
    }

     function managers(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->selectManagers())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            return;
        }
    }

     function managersProfile(){

        include("function.php");
        $obj=new users();
        $id=$_SESSION['managerId'];

        if ($row=$obj->managersProfile($id))
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            return;
        }
    }
     function updateStudents(){

        include("function.php");
        $obj=new users();

            $firstName=$_REQUEST['firstName'];
            $lastName=$_REQUEST['lastName'];
            $studentId=$_REQUEST['studentId'];
            $email=$_REQUEST['email'];
            $contact=$_REQUEST['contact'];
            $hostelName=$_REQUEST['hostelName'];
            $roomNo=$_REQUEST['roomNo'];
            $keyNo=$_REQUEST['keyNo'];
            $lockerKey=$_REQUEST['lockerKey'];
            // $roomKeyStatus=$_REQUEST["roomKeyStatus"];
            // $lockerKeyStatus=$_REQUEST["lockerKeyStatus"];
            $date =$_REQUEST['theDate'];
            $yearGroup=$_REQUEST['yearGroup'];
            $semester=$_REQUEST['semester'];
            $academicYear=$_REQUEST['academicYear'];
            $id=$_REQUEST["theId"];
    

       if(!$obj->updateStudents($firstName,$lastName,$studentId,$email,$contact,$hostelName,$roomNo,$keyNo,$lockerKey
      ,$date,$academicYear,$yearGroup,$semester,$id)){

        echo '{"result": 0, "message": " student was not updated"}';
        echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " student was updated successfully"}';
    echo mysql_error();
    return;
    }


    function updateLockerKeyTaken(){

        include("function.php");
        $obj=new users();
        
        $id=$_SESSION["studentId"];
        $taken="Taken";
        
        if (!$obj->updateLockerKeyStatusTaken($id,$taken))
        {
        echo '{"result": 0, "message": " locker key was not updated"}';
        echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " locker key was updated successfully"}';
    echo mysql_error();
    return;
    }


    function updateLockerKeyReturned(){

        include("function.php");
        $obj=new users();
        
        $id=$_SESSION["studentId"];
        $returned="Returned";
        
        if (!$obj->updateLockerKeyStatusReturn($id,$returned))
        {
            echo '{"result": 0, "message": " locker key was not updated"}';
            echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " locker key was updated successfully"}';
    echo mysql_error();
    return;
    }



    function updateRoomKeyTaken(){

        include("function.php");
        $obj=new users();
        
        $id=$_SESSION["studentId"];
        $taken="Taken";
        
        if (!$obj->updateRoomKeyStatusTaken($id,$taken))
        {
           echo '{"result": 0, "message": " Room key was not updated"}';
           echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " Room key was updated successfully"}';
    echo mysql_error();
    return;
    }


    function updateRoomKeyReturn(){

        include("function.php");
        $obj=new users();
        
        $id=$_SESSION["studentId"];
        $returned="Returned";
        
        if (!$obj->updateRoomKeyStatusReturn($id,$returned))
        {
            echo '{"result": 0, "message": " Room key was not updated"}';
            echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " Room key was updated successfully"}';
    echo mysql_error();
    return;
    }


     function changePassword(){

        include("function.php");
        $obj=new users();
        
        $id=$_SESSION["managerId"];
        $password=$_REQUEST["newPassword"];
        
        if ($row=$obj->changePassword($password,$id))
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            echo mysql_error();
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();
            return;
        }
    }


    function selectDetails(){

        include("function.php");
        $obj=new users();
        
        $managerId=$_SESSION["managerId"];
       // $password=$_SESSION["password"];
        
        if ($row=$obj->selectDetails($managerId))
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            return;
        }
    }
function updateRoomKeyPaid(){

        include("function.php");
        $obj=new users();
        
        $id=$_SESSION["studentId"];
        
        if (!$obj->updateRoomKeyPaid($id))
        {
            echo '{"result": 0, "message": "  payment was not updated"}';
            echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " payment was updated successfully"}';
    echo mysql_error();
    return;
    }

function updateLockerKeyPaid(){

        include("function.php");
        $obj=new users();
        
        $id=$_SESSION["studentId"];
        
        if (!$obj->updateLockerKeyPaid($id))
        {
           echo '{"result": 0, "message": " payment was not updated"}';
            echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " payment was updated successfully"}';
    echo mysql_error();
    return;
    }


    function updateManagers(){

        include("function.php");
        $obj=new users();
        $firstName=$_REQUEST['firstName'];
        $lastName=$_REQUEST['lastName'];
        $email=$_REQUEST['email'];
        $id=$_REQUEST['id'];
        $managerId=$_REQUEST['managerId'];
        if (!$obj->updateManager($firstName,$lastName,$email,$id,$managerId))
        {
            echo '{"result": 0, "message": " manager was not updated"}';
           echo mysql_error();
        return;
    }
    echo '{"result": 1, "message": " manager was updated successfully"}';
    echo mysql_error();
    return;
    }

    function selectAllIssues(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->selectAllIssues())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }

     function viewVisitor(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->selectVisitors())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }


 function search(){

        include("function.php");
        $obj=new users();
        $item=$_REQUEST['item'];

        if ($row=$obj->search($item))
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }

    function searchPayment(){

        include("function.php");
        $obj=new users();
        $payment=$_REQUEST['search'];

        if ($row=$obj->searchPayment($payment))
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }
    function visitor(){
         include("function.php");
         $add=new users();
        $visitor=$_REQUEST['visitor'];
        $person=$_REQUEST['person'];
        $room=$_REQUEST['room'];
        $contact=$_REQUEST['contact'];
        $host=$_REQUEST['host'];
        $date=date("Y.m.d");

        if(!$add-> visitor($visitor,$person,$room,$contact,$date,$host)){

        echo '{"result": 0, "message": " visitor was not added"}';
        echo mysql_error();
        return;
    }
        echo '{"result": 1, "message": " visitor was added successfully"}';
        echo mysql_error();
        return;


    }
    function editVisitor(){
         include("function.php");
         $add=new users();
        $visitor=$_REQUEST['visitor'];
        $person_visited=$_REQUEST['person'];
        $room=$_REQUEST['room'];
        $contact=$_REQUEST['contact'];
        $host=$_REQUEST['host'];
        $id=$_REQUEST['id'];
        //$date=date("Y.m.d");

        if(!$add-> editVisitor($visitor,$person_visited,$room,$contact,$host,$id)){

        echo '{"result": 0, "message": " visitor was not edited"}';
        echo mysql_error();
        return;
    }
        echo '{"result": 1, "message": " student was edited successfully"}';
        echo mysql_error();
        return;


    }

        function addRoomKey(){
         include("function.php");
         $add=new users();
        $key=$_REQUEST['key'];
        

        if(!$add-> addRoomKey($key)){

        echo '{"result": 0, "message": " key was not added"}';
        echo mysql_error();
        return;
    }
        echo '{"result": 1, "message": " key was added successfully"}';
        echo mysql_error();
        return;


    }

     function addLockerKey(){
         include("function.php");
         $add=new users();
        $key=$_REQUEST['key'];
        

        if(!$add-> addLockerKey($key)){

        echo '{"result": 0, "message": " key was not added"}';
        echo mysql_error();
        return;
    }
        echo '{"result": 1, "message": " key was added successfully"}';
        echo mysql_error();
        return;


    }
    function updateRoomKey(){
         include("function.php");
         $add=new users();
        $key=$_REQUEST['roomKey'];
        $id=$_REQUEST['keyId'];
        

        if(!$add-> updateRoomKey($id,$key)){

        echo '{"result": 0, "message": " key was not updated"}';
        echo mysql_error();
        return;
    }
        echo '{"result": 1, "message": " key was updated successfully"}';
        echo mysql_error();
        return;


    }

    function updateLockerKey(){
         include("function.php");
         $add=new users();
        $key=$_REQUEST['lockerKey'];
        $id=$_REQUEST['keyId'];
        

        if(!$add-> updateLockerKey($id,$key)){

        echo '{"result": 0, "message": " key was not updated"}';
        echo mysql_error();
        return;
    }
        echo '{"result": 1, "message": " key was updated successfully"}';
        echo mysql_error();
        return;


    }

 function addRoom(){
         include("function.php");
         $add=new users();
        $room=$_REQUEST['roomNo'];
        

        if(!$add-> addRoom($room)){

        echo '{"result": 0, "message": " room was not added"}';
        echo mysql_error();
        return;
    }
        echo '{"result": 1, "message": " room was added successfully"}';
        echo mysql_error();
        return;


    }

 function updateRoom(){
         include("function.php");
         $add=new users();
        $room=$_REQUEST['roomNo'];
        $id=$_REQUEST['roomsId'];
        

        if(!$add-> updateRoom($id,$room)){

        echo '{"result": 0, "message": " room was not updated"}';
        echo mysql_error();
        return;
    }
        echo '{"result": 1, "message": " room was updated successfully"}';
        echo mysql_error();
        return;


    }

function selectRoomKey(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->selectRoomKey())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }

    function selectLockerKey(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->selectLockerKey())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }

function selectRoom(){

        include("function.php");
        $obj=new users();

        if ($row=$obj->selectRoom())
        {
            echo '{"result":1, "message":[';
            while ($row)
            {
                echo json_encode($row);

                $row = $obj->fetch (); 
                if ($row){
                    echo ",";
                }
            }
            echo "]}";
            
            return;
        }
        else{
            echo '{"result":0, "message":"not display"}';
            echo mysql_error();

            return;
        }
    }
    // function forgottenPassword(){
    //     $obj=new users();
    //     $email=$_REQUEST['email'];
    //     $row=$obj->forgottenPassword($email);

    //     while($row){
    //         echo json_encode($row);
    //         $row=$obj->fetch();
    //     }

    // }


?>