/*

var classesRequest = new XMLHttpRequest();
classesRequest.open('GET', 'classes.json');
classesRequest.onload = function(){
    console.log(classesRequest.responseText);
};
classesRequest.send();

 */

function showClasscodes() {
    selectionBox = document.getElementById("selectionbox");
    selection = document.createElement("select");
    selection.setAttribute("name", "classcode");
    selection.setAttribute("id", "classcodelist");
    optionVar = document.createElement("option");
    optionText = document.createTextNode("--classcode--");
    optionVar.appendChild(optionText);
    optionVar.setAttribute("value", "selectedClasscode");
    optionVar.disabled = true;
    optionVar.selected = true;
    selection.appendChild(optionVar);
    for(x=0; x<classes.length; x++){
        optionVar = document.createElement("option");
        var classcodeString = classes[x].classcode;
        optionText = document.createTextNode(classcodeString);
        optionVar.appendChild(optionText);
        optionVar.setAttribute("value", classcodeString);
        selection.appendChild(optionVar);
    }
    selectionBox.appendChild(selection);
    selection.addEventListener("change", showClassDays);
} 

function showClassDays() {
    selectwhat = document.getElementById("selectwhat");
    selectwhat.innerHTML = "Select a class day . . .";
    classhourlist = document.getElementById("classhourlist");
    classadviser = document.getElementById("advisername");
    classDaysDroplist = document.getElementById("classlist");
    if(classhourlist){
        selectionBox.removeChild(classadviser);
        selectionBox.removeChild(classhourlist);
    }
    selectionBox = document.getElementById("selectionbox");
    selectedClasscode = this.value;
    classDaysList = document.createElement("select");
    classDaysList.setAttribute("id", "classlist");
    for(x=0; x<classes.length; x++){
        if(selectedClasscode == classes[x].classcode){
            optionVar = document.createElement("option");
            optionText = document.createTextNode("--classday--");
            optionVar.setAttribute("value", "classday");
            optionVar.disabled = true;
            optionVar.selected = true;
            optionVar.appendChild(optionText);
            classDaysList.appendChild(optionVar);
            for(y=0; y<classes[x].classdays.length; y++){
                optionVar = document.createElement("option");
                var classdayString = classes[x].classdays[y].classday;
                optionText = document.createTextNode(classdayString);
                optionVar.appendChild(optionText);
                optionVar.setAttribute("value", classdayString);
                classDaysList.appendChild(optionVar);
            }
        }
    }
	var existing = document.getElementById("classlist");
	if(existing){
		selectionBox.replaceChild(classDaysList, existing);
	}else{
		selectionBox.appendChild(classDaysList);
	}
    
    classDaysList.addEventListener("change", showClassHours);
}  

function showClassHours() {
    selectwhat = document.getElementById("selectwhat");
    selectwhat.innerHTML = "Select a class hour . . .";

    classadviser = document.getElementById("advisername");
    classhourlist = document.getElementById("classhourlist");
    if(classhourlist || classadviser){
        selectionBox.removeChild(classadviser);
        selectionBox.removeChild(classhourlist);
    }

	selectionBox = document.getElementById("selectionbox");
	selection = document.getElementById("classcodelist");
	selectedClasscode = selection.value;
	selectedClassday = this.value;
	classHourList = document.createElement("ul");
	classHourList.setAttribute("id", "classhourlist");
	for(x=0; x<classes.length; x++){
		if(selectedClasscode == classes[x].classcode){
			adviser = document.createElement("h2");
            adviser.setAttribute("id", "advisername");
			adviserText = 'Adviser: ' + classes[x].adviser;
			textNodeForAdviser = document.createTextNode(adviserText);
			adviser.appendChild(textNodeForAdviser);
            var existingAdviserName = document.getElementById("advisername");
	        if(existingAdviserName){
	            selectionBox.replaceChild(adviser, existingAdviserName);
            }else{
		       selectionBox.appendChild(adviser);
	        }
			for(y=0; y<classes[x].classdays.length; y++){
				if(selectedClassday == classes[x].classdays[y].classday){
					for(z=0; z<classes[x].classdays[y].classhours.length; z++){
						hourVar = classes[x].classdays[y].classhours[z].classhour;
						varLi = document.createElement("li");
						textNodeLi = document.createTextNode(hourVar);
                        btnLi = document.createElement("button");
						btnLi.appendChild(textNodeLi);
                        varLi.appendChild(btnLi);
						classHourList.appendChild(varLi);
						btnLi.addEventListener('click', showStudents);
					}
				}
			}
		}
	}
    var existingHourList = document.getElementById("classhourlist");
	if(existingHourList){
	    selectionBox.replaceChild(classHourList, existingHourList);
    }else{
		selectionBox.appendChild(classHourList);
	}
} 

function showStudents(){
	seletionBox = document.getElementById("selectionbox");
	varSample = createElement("p");
	varText = createTextNode("sample");
	varSample.appendChild(varText);
	selectionBox.appendChild(varSample);
}



var classes = [
    {
        "classcode": "7074",
		"adviser": "Cristina Segnaken Aban",
        "classdays":  [
            {   //classday
                "classday": "Monday",
                "classhours": [
                    {   //classhour
                        "classhour": "7:30-8:30",
                        "students": [
                            {   //student
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {   //student
                                "idno": "2151235",
                                "name": "Akai, Izamu",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },

                    {   //classhour
                        "classhour": "8:00-9:00",
                        "students": [
                            {
                                "idno": "2151236",
                                "name": "Ao, Blue",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },

                    {   //classhour
                        "classhour": "8:30-9:30",
                        "students": [
                            {
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    }
                ]
            },

             {   //classday
                "classday": "Tuesday",
                "classhours": [
                    {   //classhour
                        "classhour": "7:30-8:30",
                        "students": [
                            {   //student
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {   //student
                                "idno": "2151235",
                                "name": "Akai, Izamu",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },

                    {   //classhour
                        "classhour": "8:00-9:00",
                        "students": [
                            {
                                "idno": "2151236",
                                "name": "Ao, Blue",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },

                    {   //classhour
                        "classhour": "8:30-9:30",
                        "students": [
                            {
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },
                    {   //classhour
                        "classhour": "9:30-10:30",
                        "students": [
                            {
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    }
                ]
            }
        ]
    },

    {
        "classcode": "7004",
		"adviser": "Makil Roderick",
        "classdays":  [
            {   //classday
                "classday": "Monday",
                "classhours": [
                    {   //classhour
                        "classhour": "7:30-8:30",
                        "students": [
                            {   //student
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {   //student
                                "idno": "2151235",
                                "name": "Akai, Izamu",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },

                    {   //classhour
                        "classhour": "8:00-9:00",
                        "students": [
                            {
                                "idno": "2151236",
                                "name": "Ao, Blue",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },

                    {   //classhour
                        "classhour": "8:30-9:30",
                        "students": [
                            {
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    }
                ]
            },

             {   //classday
                "classday": "Tuesday",
                "classhours": [
                    {   //classhour
                        "classhour": "7:30-8:30",
                        "students": [
                            {   //student
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {   //student
                                "idno": "2151235",
                                "name": "Akai, Izamu",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },

                    {   //classhour
                        "classhour": "8:00-9:00",
                        "students": [
                            {
                                "idno": "2151236",
                                "name": "Ao, Blue",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    },

                    {   //classhour
                        "classhour": "9:30-10:30",
                        "students": [
                            {
                                "idno": "2151234",
                                "name": "Akai, Red",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            },

                            {
                                "idno": "2151237",
                                "name": "Midorima, Green",
                                "demerit": "",
                                "absent": "",
                                "report": ""
                            }

                        ]
                    }
                ]
            }
        ]
    }
]
