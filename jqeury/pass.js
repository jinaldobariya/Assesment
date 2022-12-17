$(document).ready(function()
{
$('#pass').keyup(function()
{
$('#message').html(checkStrength($('#pass').val()))
}) 

function checkStrength(password)
{
	var useremail="testing@gmail.com";
	var username="testing";

	var strength = 0
	if (password.length < 6) { 
		$('#message').removeClass();
		$('#message').addClass('weak');
		return 'Too short!';
	}
	if ((username.indexOf(password) > -1) || (password.indexOf(username)> -1))
	{
		$('#message').removeClass();
		$('#message').addClass('weak');
		return "Password must be different from user name!"; 
	}
	if ((useremail.indexOf(password) > -1) || (password.indexOf(useremail)> -1))
	{
		$('#message').removeClass();
		$('#message').addClass('weak');
		return "Password must be different from user email!"; 
	}
	if (password.length > 7) strength += 1
	if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/))  strength += 1
	if (password.match(/([a-zA-Z])/) && password.match(/([0-9])/))  strength += 1 
	if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/))  strength += 1
	if (password.match(/(.*[!,%,&,@,#,$,^,*,?,_,~].*[!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1
	if (strength < 2 )
	{
		$('#message').removeClass();
		$('#message').addClass('weak');
		return 'Weak!';   
	}
	else if (strength == 2 )
	{
		$('#message').removeClass();
		$('#message').addClass('good');
		return 'Good!';  
	}
	else
	{
		$('#message').removeClass();
		$('#message').addClass('strong');
		return 'Strong!';
	}
}
});