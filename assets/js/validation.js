
function validateAll()
{
	var fnm = document.getElementById("fname").value;
	var fnmreg = new RegExp(/^[A-Za-z]+$/);
	var lnm = document.getElementById("lname").value;
	var lnmreg = new RegExp(/^[A-Za-z]+$/);
	var em = document.getElementById("eml").value;
	var emreg = new RegExp(/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/);
	var pnm = document.getElementById("pnum").value;
	var pnmreg 	= new RegExp(/\(\+[0-9]{2}\)\s[0-9]{3}[\s][0-9]{3}[\s][0-9]{4}/gm);
	var genM = document.getElementById("mgen");
	var genF = document.getElementById("fgen");
	var gen = document.querySelector('input[name="Male"]:checked').value;
	var cnt = document.getElementById("cntr");
	var strCnt = cnt.options[cnt.selectedIndex].value;
	var cbx = document.getElementById("cbox");
// Validation all on submit
	if(fnm !="" || lnm !="" || em !="" || pnm !="" || (genM.checked == false && genF.checked == true) ||
		strCnt != 0 || cbx.checked == true)
			// first name validation
		{
			if(!fnmreg.test(fnm))
			{
				document.getElementById("fnerror").innerHTML = "*Please enter valid first name";
				document.getElementById("fname").focus();
				document.getElementById("fname").style.borderColor = "red";
				return false;
			}else
			{
				document.getElementById("fnerror").style.visibility = "hidden";
				document.getElementById("fname").style.borderColor = "initial";
			}
			// last name validation
			if(!lnmreg.test(lnm))
			{
				document.getElementById("lnerror").innerHTML = "*Please enter valid last name";
				document.getElementById("lname").focus();
				document.getElementById("lname").style.borderColor = "red";
				return false;
			}
			else if (lnm.length < 2)
			{
				document.getElementById("lnerror").innerHTML = "*Please enter atleast 2 characters";
				document.getElementById("lname").focus();
				document.getElementById("lname").style.borderColor = "red";
				return false;
			}
			else
			{
				document.getElementById("lnerror").style.visibility = "hidden";
				document.getElementById("lname").style.borderColor = "initial";
			}
			// email validation
			if(!emreg.test(em)) 
			{     
		      document.getElementById("emerror").innerHTML = "*Please enter valid Email Address";
		      document.getElementById("eml").style.borderColor = "red";
		      document.getElementById("eml").focus();
		      return false;
		   	}else
		   	{
				document.getElementById("emerror").style.visibility = "hidden";
				document.getElementById("eml").style.borderColor = "initial";
			}
			// phone number validation
			if(!pnmreg.test(pnm))
			{
				document.getElementById("pnerror").innerHTML = "*Please enter valid phone number";
				document.getElementById("pnum").focus();
				document.getElementById("pnum").style.borderColor = "red";
				return false;
			}
    		else
			{
				document.getElementById("pnerror").style.visibility = "hidden";
				document.getElementById("pnum").style.borderColor = "initial";

			}
			// Gender validation
			if(genM.checked == false && genF.checked == false)
			{
				document.getElementById("gerror").innerHTML = "*Select Gender";
				document.getElementById("mgen").focus();
				return false;
			}else
			{
				document.getElementById("gerror").style.visibility = "hidden";
			}
			// drop down validation
			if(strCnt == 0)
			{
				document.getElementById("cerror").innerHTML = "*Select country";
				document.getElementById("cntr").focus();
				return false;
			}else
			{
				document.getElementById("cerror").style.visibility = "hidden";
			}
			// checkbox validation
			if(cbx.checked == false)
			{
				document.getElementById("cbxerror").innerHTML = "*Accept privacy policy";
				document.getElementById("cbox").focus();
				return false;
			}else
			{
				document.getElementById("cbxerror").style.visibility = "hidden";
			}
	}
	else
	{
		
		document.getElementById("fnerror").innerHTML = "*Please enter first name";
		document.getElementById("lnerror").innerHTML = "*Please enter last name";
		document.getElementById("emerror").innerHTML = "*Please enter email address";
		document.getElementById("pnerror").innerHTML = "*Please enter phone number";
		document.getElementById("gerror").innerHTML = "*Select Gender";
		document.getElementById("cerror").innerHTML = "*Select country";
		document.getElementById("cbxerror").innerHTML = "*Accept privacy policy";
		// document.getElementById("fname").focus();
		return false;
	}
	alert("first name :" + fnm +
		   "\nlast name : "+ lnm +
		   "\nemail :" + em +
		   "\nphone number :" + pnm +
		   "\nGender :" + gen +
		   "\ncountry :" + strCnt +
		   "\npolicy :" + cbx.checked);
};
