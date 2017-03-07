document.addEventListener("exitButton",function(){ 

    navigator.notification.confirm(
           'Do you want to quit', 
           onConfirmQuit, 
           'QUIT TITLE', 
           'OK,Cancel'  
    );

}, true);

function onConfirmQuit(button){
   if(button == "1"){
     navigator.app.exitApp(); 
   }
}
	function getUrlVars() {
		var vars = {};
		var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
		});
		return vars;
		}

$(document).ready(function() {
//	alert("in");
	
	var weekdate = getUrlVars()["weekdate"];
//	alert(weekdate);
	var name = getUrlVars()["name"];
//	alert(name);
//	var teamname = getUrlVars()["teamname"];
//	alert(teamname);
	var comments = getUrlVars()["comments"];
//	alert(comments);
	var attendinfomtg = getUrlVars()["attendinfomtg"];
//	alert(attendinfomtg);
	var attendinfomtgwguest = getUrlVars()["attendinfomtgwguest"];
//	alert(attendinfomtgwguest);
	var phoneconference = getUrlVars()["phoneconference"];
//	alert(phoneconference);
	var d4d = getUrlVars()["d4d"];
//	alert(d4d);
	var banditsigns = getUrlVars()["banditsigns"];
//	alert(banditsigns);
	var lois = getUrlVars()["lois"];
//	alert(lois);
//	var attendclasses = getUrlVars()["attendclasses"];
//	alert(attendclasses);
	var powerteammtg = getUrlVars()["powerteammtg"];
//	alert(powerteammtg);
	var fbpost = getUrlVars()["fbpost"];
//	alert(fbpost);
	var postinfomtg = getUrlVars()["postinfomtg"];
//	alert(postinfomtg);
	var webinar = getUrlVars()["webinar"];
//	alert(webinar);
	var networkingevent = getUrlVars()["networkingevent"];
//	alert(networkingevent);
	var newmember = getUrlVars()["newmember"];
//	alert(newmember);
	var propertydeal = getUrlVars()["propertydeal"];
//	alert(propertydeal);
	var bookread = getUrlVars()["bookread"];
//	alert(bookread);
	var points = getUrlVars()["points"];
//	alert(points);
	var version = "Matrix Companion "+getUrlVars()["version"];
//	alert(version);
	var delimeter = ";";
	
    $.ajax({
        url: "http://www.infinitehealthcoaching.com/MatrixActivity-0.0.1/submitIPA105?code="+weekdate+delimeter+name+delimeter+comments+delimeter+attendinfomtg+delimeter+
		attendinfomtgwguest+delimeter+
		phoneconference+delimeter+d4d+delimeter+banditsigns+delimeter+lois+delimeter+webinar+delimeter+powerteammtg+delimeter+fbpost+delimeter+postinfomtg+delimeter+networkingevent+delimeter+newmember+delimeter+propertydeal+delimeter+bookread+delimeter+points
		+delimeter+version
        //url: "http://localhost:8080/greeting"
       	//url: "http://rest-service.guides.spring.io/greeting"

    }).then(function(data) {
		alert("Thank you, "+data.content+"!");
		
			localStorage.removeItem('lclComments');
			localStorage.removeItem('lclWeekDate');

			localStorage.removeItem('lclAttendInfoMtg');
			localStorage.removeItem('lclAttendInfoMtgwGuest');
			localStorage.removeItem('lclPhoneConference');
			localStorage.removeItem('lclD4D');
			localStorage.removeItem('lclBanditSigns');
			localStorage.removeItem('lclLOIs');
			localStorage.removeItem('lclAttendClasses');
			localStorage.removeItem('lclWebinar');
			localStorage.removeItem('lclPowerTeamMtg');
			localStorage.removeItem('lclFBPost');
			localStorage.removeItem('lclPostInfoMtg');
			localStorage.removeItem('lclNetworkingEvent');
			localStorage.removeItem('lclNewMember');
			localStorage.removeItem('lclPropertyDeal');
			localStorage.removeItem('lclBookRead');
			localStorage.removeItem('lclComments');

		
		window.history.back();
		navigator.app.exitApp();
		
    //   $('.greeting-id').append(data.id);
   //    $('.greeting-content').append(data.content);
    });
});


