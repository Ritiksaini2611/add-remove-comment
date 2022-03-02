<?php


if($_SERVER['REQUEST_METHOD']=='POST')
{
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $profession = $_POST['profession'];
    $profilepic = $_FILES["profilepic"]['name'];

    // Connecting to the database
    $servername ="localhost";
    $username ="root"; 
    $password ="";
    $database="aooghummo";


    

    
      $conn = mysqli_connect($servername,$username,$password,$database);

      if(!$conn){
        die( "sorry we fail to connect:" . mysqli_connect_error());
        }
        else{
        echo "connection was successful <br>";
        }
    
        $query = "INSERT INTO logininfo (`name`,`email`,`password`,`profession`,`profilepic`)  
          VALUES('$name','$email','$password','$profession','$profilepic')" ;

       
        $query_run = mysqli_query($connection,$query);
       
       
       // adding data to the table
       if($result){
        echo '<div class="alert alert-success alert-dismissible fade show" role="alert">
        <strong> Success!</strong> your entery has been submitted successfully!
        <button type="button" class="close" data-dismiss="alert" arial-label="close">
          <span aria-hidden="true">&times;</span>
          </button>
          </div>';
       }

       else{
          // echo "the record has not been added  to the database " . mysqli_error($conn);
          echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong> fail!</strong> your entery has not been submitted ,server is facing some issues.Sorry! for the inconvenience.
        <button type="button" class="close" data-dismiss="alert" arial-label="close">
          <span aria-hidden="true">&times;</span>
          </button>
          </div>';
       }
      }

