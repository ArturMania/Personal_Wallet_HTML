window.onload = function(){ 

	var xIncomeValues = ["Wynagrodzenie", "Odestki bankowe", "Sprzedaż", "Inne"];
	var yIncomeValues = [75, 10, 20, 45];	
	var barColors = [
		"#b91d47",
		"#00aba9",
		"#2b5797",
		"#e8c3b9",
		"#3333ff",
		"#6699ff",
		"#99ccff",
		"#0099cc",
		"#009999",
		"#009933",
		"#669900",
		"#ffcc00",
		"#ff6600",
		"#ff6666",
		"#cc3399",
		"#ff66ff",
		"#9933ff",
	];
			
	new Chart("incomeChart", {
		type: "doughnut",
		data: {
			labels: xIncomeValues,
			datasets: [{
				backgroundColor: barColors,
				borderColor: "rgb(230, 230, 230)",
				data: yIncomeValues
			}]
		
		},
		options: {
			title: {
				display: true,
				text: "Bilans Przychodów",
				fontColor: "rgb(230, 230, 230)",
				fontSize: 18,
				fontStyle: "normal"
			},
			legend: {
				labels: {
					fontColor: "rgb(230, 230, 230)",
					fontSize: 18
				}
			}
		}
	});
	
	var xOutcomeValues = ["Jedzenie", "Mieszkanie", "Transport","Telekomunikacja","Opieka zdrowotna","Ubranie","Higiena","Dzieci","Rozrywka","Wycieczki","Szkolenia","Książki","Oszczędności","Emerytura","Długi","Darowizny","Inne"];
	var yOutcomeValues = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
	
	new Chart("outcomeChart", {
		type: "doughnut",
		data: {
			labels: xOutcomeValues,
			datasets: [{
				backgroundColor: barColors,
				borderColor: "rgb(230, 230, 230)",
				data: yOutcomeValues
			}]
		
		},
		options: {
			title: {
				display: true,
				text: "Bilans Wydatków",
				fontColor: "rgb(230, 230, 230)",
				fontSize: 18,
				fontStyle: "normal"
			},
			legend: {
				labels: {
					fontColor: "rgb(230, 230, 230)",
					fontSize: 14
				}
			}
		}
	});
	
	$(document).ready(function() {
		var NavY = $('.topmenu').offset().top;
		 
		var stickyNav = function(){
		var ScrollY = $(window).scrollTop();
			  
		if (ScrollY > NavY) { 
			$('.topmenu').addClass('sticky');
		} else {
			$('.topmenu').removeClass('sticky'); 
		}
		};
		 
		stickyNav();
		 
		$(window).scroll(function() {
			stickyNav();
		});
	});
	
}