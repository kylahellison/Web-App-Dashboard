/*=============================================
=            HIDE ALERT BOX           =
=============================================*/

function hide(obj) {
	var el = document.getElementById(obj);
	el.style.display = 'none';
}

/*============================================
=            DROP DOWN ALERT MENU            =
============================================*/

//when user clicks the button, toggle hiding and showing the dropdown content
function dropAlert() {
	document.getElementById('myDropdown').classList.toggle("show");
}

//close the dropdown menu if the user clicks outside of it.
	//when user clicks anywhere on the page, run the function(event)
document.getElementById('right').addEventListener('click', function(event) {
	var dropdowns = document.getElementById('myDropdown');
	//if where the user clicks is NOT on the drop-down menu...
	if (event.target != dropdowns) {
		dropdowns.classList.remove('show');
	}	
});

/*===============================================================
=            CHANGE COLOR OF SELECTED TRAFFIC BUTTON            =
===============================================================*/

function toggleTrafficSelected(el) {
	var list = document.getElementById('trafficbuttons');
	for (var i=0; i < list.children.length; i++) {
		var current = list.children[i];
		console.log(current);
		if (el == current) {
			current.classList.add('selected');
			//console.log(current);
		} else {
			if(current.classList.contains('selected')){
				current.classList.remove('selected');
				//console.log(current);
			}
		}
	}
}

/*==============================
=            CHARTS            =
==============================*/

/*----------  LINE CHART DATA  ----------*/

var traffic = document.getElementById('line');

	// 4 Dataset Variables
		//hourly, daily, weekly, monthly

//HOURLY

var hourlyData = {
	labels: ['6 AM', '8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM', '10 PM'],
	datasets: [
		{
			label: 'Hourly Data',
			data: [20, 60, 76, 100, 90, 250, 160, 300, 50],
	 		backgroundColor: 'rgba(23, 101, 11, 0.6)',
			borderColor: 'rgba(0, 0, 0, 0.6)',
			borderWidth: 2, 
			lineTension: 0.1,
			pointBorderColor: 'rgba(0, 0, 0, 1)', 
 			pointBackgroundColor: 'rgba(4, 61, 3, 1)', 
			pointBorderWidth: 2,
			pointRadius: 5			
		}	
	]
};

//DAILY

var dailyData = {
	labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
	datasets: [
		{
			label: 'Daily Data',
			data: [200, 100, 80, 150, 50, 300, 40],
	 		backgroundColor: 'rgba(168, 45, 255, 0.5)',
			borderColor: 'rgba(0, 0, 0, 0.7)',
			borderWidth: 2, 
			lineTension: 0.1,
			pointBorderColor: 'rgba(0, 0, 0, 1)', 
 			pointBackgroundColor: 'rgba(4, 61, 3, 1)', 
			pointBorderWidth: 2,
			pointRadius: 5
		}	
	]
};

//WEEKLY

var weeklyData = {
	labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
	datasets: [
		{
			label: 'Weekly Data',
			data: [60, 80, 50, 40],
	 		backgroundColor: 'rgba(23, 101, 11, 0.6)',
			borderColor: 'rgba(0, 0, 0, 0.6)',
			borderWidth: 2, 
			lineTension: 0.1,
			pointBorderColor: 'rgba(0, 0, 0, 1)', 
 			pointBackgroundColor: 'rgba(4, 61, 3, 1)',  
			pointBorderWidth: 2,
			pointRadius: 5	
		}	
	]
};


//MONTHLY

var monthlyData = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
	datasets: [
		{
			label: 'Monthly Data',
			data: [100, 80, 90, 120, 150, 170, 200, 110, 75, 60, 130, 150],
	 		backgroundColor: 'rgba(168, 45, 255, 0.5)',
			borderColor: 'rgba(0, 0, 0, 0.7)',
			borderWidth: 2, 
			lineTension: 0.1,
			pointBorderColor: 'rgba(0, 0, 0, 1)', 
 			pointBackgroundColor: 'rgba(4, 61, 3, 1)', 
			pointBorderWidth: 2,
			pointRadius: 5				
		}	
	]
};

/*----------  FUNCTION TO GENERATE CHART  ----------*/

function generateChart(element, chartType, data) {
	console.log('Chart is being generated');
	var lineChart = new Chart(element, {
		type: chartType,
		data: data,
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},
		}
	});
}


/*----------  GENERATE LINE CHART  ----------*/

generateChart(traffic, 'line', monthlyData);



/*----------  SWITCH LINE CHARTS  ----------*/

var hourly = document.getElementById('hourly');
var daily = document.getElementById('daily');
var weekly = document.getElementById('weekly');
var monthly = document.getElementById('monthly');

hourly.addEventListener('click', function() {
	generateChart(traffic, 'line', hourlyData);
});

daily.addEventListener('click', function() {
	generateChart(traffic, 'line', dailyData);
});

weekly.addEventListener('click', function() {
	generateChart(traffic, 'line', weeklyData);
});

monthly.addEventListener('click', function() {
	generateChart(traffic, 'line', monthlyData);
});


/*----------  BAR CHART DATA  ----------*/

var dailyTraffic = document.getElementById('bar');

var barChart = new Chart(dailyTraffic, {
	type: 'bar',
	data: {
		labels: ['SAT', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],	
		datasets: [{
				label: 'dataset 1', //new
				data: [50, 35, 60, 80, 100, 75, 65],
				backgroundColor: 'rgba(70, 15, 109, 1)',
				borderColor: 'rgba(0, 0, 0, 1)',
				borderWidth: 2  
			}, {
				label: 'Dataset 2', //new
				data: [80, 60, 75, 99, 110, 80, 70],
				backgroundColor: 'rgba(23, 101, 11, 0.8)',
				borderColor: 'rgba(0, 0, 0, 1)',
				borderWidth: 2
			}
		]},
		options: {
			responsive: true,
			maintainAspectRatio: false,
			legend: {
				display: false
			},
			scales: {
				yAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			}
		}
	});


/*----------  PIE CHART DATA  ----------*/

var mobileUsers = document.getElementById('pie');

var pieChart = new Chart(mobileUsers, {
	type: 'doughnut',
	data: {
		labels: ['Phones', 'Tablets', 'Laptops', 'Desktops'],
		datasets: [{
			data: [60, 15, 15, 10],
			backgroundColor: [
			'rgba(22, 101, 10, 1)',
			'rgba(83, 158, 13, 1)',
			'rgba(174, 244, 18, 1)',
			'rgba(196, 247, 85, 1)'			
			],
		borderColor: [
			'rgba(0, 0, 0, 1)',
			'rgba(0, 0, 0, 1)',
			'rgba(0, 0, 0, 1)',
			'rgba(0, 0, 0, 1)'	
		],
		borderWidth: 3,  
		}]
	},
	options: {
		responsive: true,
		maintainAspectRatio: false,
		legend: {
			display: true,
			position: 'right',
			fullWidth: true
		},
		scales: {
			display: false
		}
	}    


});

/*=====  End of CHARTS  ======*/


/*===============================================================
=            SEARCH FOR USER FUNCTION - message user            =
===============================================================*/

//jQuery EasyAutoComplete instructions

 var options = {
 	data: ["John Smith", "Sam Cook", "Andie Day", "Rick Carlisle"],
 	list: {
		match: {enabled: true},
		showAnimation: {type: "slide", time: 300},
		hideAnimation: {type: "slide", time: 300}
	}
 };

 $("#u-search").easyAutocomplete(options);
$('div.easy-autocomplete').removeAttr('style');

/*=====  End of SEARCH FOR USER FUNCTION - message user  ======*/



/*===========================================
=            MESSAGE USER WIDGET            =
===========================================*/

/**

	TODO:
	- User clicks SUBMIT button
	  - Check if a user has been selected from the drop-down
	  - Check if something has been typed in the message field
	- IF YES to BOTH:
	  - JS alert pops up letting them know message was sent
	- IF NO to EITHER:
	  - JS alert pops up letting them know message was unsuccessful

 */

function validateForm() {
    var x = document.forms["message"]["u-search"].value;
    var y = document.forms["message"]["user-message"].value;
    if (x == "") {
        alert("Please choose a member name");
        return false;
    } else if (y == "") {
    	alert("Please type a message");
        return false;
    } else {
    	alert("Message sent successfully");
   	 return true;
	}
}

/*=====  End of MESSAGE USER WIDGET  ======*/



/*=========================================================
=            STORING SETTINGS IN LOCAL STORAGE            =
=========================================================*/

function storeSettings() {
	var onOffSwitchOne = document.getElementById("myonoffswitch1");
	var onOffSwitchTwo = document.getElementById("myonoffswitch2");

	if(onOffSwitchOne.checked) {
		localStorage.setItem(onOffSwitchOne, "true");
		console.log("local storage set to true");
	} else {
		localStorage.setItem(onOffSwitchOne, "false");
		console.log("local storage set to false");
	}
}


/*=====  End of STORING SETTINGS IN LOCAL STORAGE  ======*/
