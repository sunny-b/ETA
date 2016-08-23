<?php
session_start();

if(!isset($_SESSION['user_session'])){
	header("Location: index.php");
}

include_once 'config.php';

$stmt = $db_con->prepare("SELECT * FROM Login WHERE user_id=:uid");
$stmt->execute(array(":uid"=>$_SESSION['user_session']));
$row=$stmt->fetch(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html>
  <head>
    <title>To-Do App</title>
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="css/media.css" type="text/css"> 
     
  </head>
  <body>
    <div class="container">
    	<div class="taskBar">
    		<nav>
    			<div class="logo">
    				<h1>ETA</h1>
    			</div>
    			<div class="loginform-in">
    				<h1>User Login</h1>
    				<div class="err" id="add_err"></div>
    				<fieldset>
    					<form action="./" method="post">
    						<ul>
    							<li><label for="name">Username </label>
    							<input type="text" size="30" name="name" id="name" /></li>
    							<li><label for="name">Password </label>
    							<input type="text" size="30" name="word" id="word" /></li>
    							<li><label></label>
    							<input type="submit" value="Login" name="login" id="login" class="loginbutton" /></li>	
    						</ul>
    					</form>	
    				</fieldset>
    			</div>
    		</nav>
    	</div>
    	<div class="columns">
	    	<div id="incomplete" class="block">
		      <h3>To-Do <div class="plusButton"><button class="plus">+</button></div></h3>
		      
		      <div id="addTask" class="block hide">  
		      <p>
		      	<div class="group">
		        		<input id="new-task" type="text"><button class="add">Add</button>
		        </div>
		      </p>
	      </div>
		      <ul id="incomplete-tasks" class="shift">
		       
		      </ul>
	      </div>
	      
	      <div id="completed" class="block">
		      <h3 id="completedHead">Completed</h3>
		      <ul id="completed-tasks">
		        
		      </ul>
	      </div>
      </div>
    </div>
		<script type="text/javascript" src="js/jquery/jquery-1.12.3.min.js"></script>
		<script type="text/javascript" src="js/app.js"></script>
		<script>
    	document.onload = existingIncomTasks();
    	document.onload = existingComTasks();
    	console.log("this loaded!");
    </script>
  </body>
</html>