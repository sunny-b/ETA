<!DOCTYPE html>
<html>
  <head>
    <title>To-Do App</title>
    <link href='http://fonts.googleapis.com/css?family=Lato:300,400,700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="css/style.css" type="text/css" media="screen" charset="utf-8">
    <link rel="stylesheet" href="css/media.css" type="text/css">
    <link rel="stylesheet" href="css/signUp.css" type="text/css"> 
     
  </head>
  <body>
    <div class="container">
    	<div class="taskBar">
    		<nav>
    			<div class="logo">
    				<h1>ETA</h1>
    			</div>
    			<div class="signInButton">
    				
    				
    			
    			<div class="registerButton">
    				
    			</div>
    		</nav>
    	</div>
    	
    	
    	<div class="overlays">
    		<div class="signIn">
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
    		
    		
    		
    		<div class="register">
    			<form action="#" method="post">
						<p>
							<label for="username">Username</label>
							<input id="username" name="username" type="text">
						</p>
						<p>
							<label for="password">Password</label>
							<input id="password" name="password" type="password">
							<span id="hint1">Enter a password longer than 8 characters</span>
						</p>
						<p>
							<label for="confirm_password">Confirm Password</label>
							<input id="confirm_password" name="confirm_password" type="password">
							<span id="hint2">Please confirm your password</span>
						</p>
						<p>
							<input id="submit" type="submit" value="SUBMIT" disabled>
						</p>
					</form>
    				
    		</div>
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