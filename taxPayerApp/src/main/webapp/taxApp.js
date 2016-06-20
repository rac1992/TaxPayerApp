(function(){
	var app = angular.module('app', []);
	var newData = {};
	app.controller('FormController',['$scope','$http',function($scope,$http){
		$scope.data =[{}];
		$scope.saveData=function(){
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange=function(){
				if(xhttp.readyState==4 && xhttp.status==200){
					var xmlDoc = xhttp.responseXML;
					var xmlName = xmlDoc.getElementsByTagName("name")[0];
					xmlName.childNodes[0].nodeValue = $scope.data.name;
					var xmlAddress = xmlDoc.getElementsByTagName("address")[0];
					xmlAddress.childNodes[0].nodeValue = $scope.data.address;
					var xmlPan = xmlDoc.getElementsByTagName("pan")[0];
					xmlPan.childNodes[0].nodeValue = $scope.data.pan;
					var xmlDOB = xmlDoc.getElementsByTagName("dob")[0];
					xmlDOB.childNodes[0].nodeValue = $scope.data.dob;
					var xmlAssessmentYear = xmlDoc.getElementsByTagName("assessmentyear")[0];
					xmlAssessmentYear.childNodes[0].nodeValue = $scope.data.assessmentyear;
					var xmlIncome = xmlDoc.getElementsByTagName("income")[0];
					xmlIncome.childNodes[0].nodeValue = $scope.data.income;
					var xmlTDS = xmlDoc.getElementsByTagName("tds")[0];
					xmlTDS.childNodes[0].nodeValue = $scope.data.tds;
					var xmlTaxDeducted = xmlDoc.getElementsByTagName("taxdeducted")[0];
					xmlTaxDeducted.childNodes[0].nodeValue = $scope.data.taxdeducted;
					
					//For Printing All XML Data
					var allelements = xmlDoc.getElementsByTagName("*");
					for(var i=0;i<allelements.length;i++)
						{
							document.getElementById("xml_data").innerHTML+="<br> "+ allelements[i].nodeName + " : "+ allelements[i].childNodes[0].nodeValue;
						}
					$scope.data={};
					
				}
			}
			xhttp.open("GET","data.xml",true);
			xhttp.send();
		}
		
	}]);
	
})();
