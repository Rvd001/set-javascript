



var viz;
var workbook;
var activeSheet;

function initViz() {
    var containerDiv = document.getElementById("worksheet"),
        // url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/BubbleChart",
        url = "https://public.tableau.com/views/JavaScriptProjectWorkbook/Bar",
        options = {
            hideTabs: true,
            onFirstInteractive: function ()

                {
                    workbook = viz.getWorkbook();
                    activeSheet = workbook.getActiveSheet();
                    console.log("options is working");

                }

        };

    viz = new tableau.Viz(containerDiv, url, options);
}

//City


function addCity(filtervalue){

    activeSheet.applyFilterAsync(
        "City of Applicant",
        filtervalue,
        tableau.FilterUpdateType.ADD
    )
};


function removeCity(filtervalue){

    activeSheet.applyFilterAsync(
        "City of Applicant",
        filtervalue,
        tableau.FilterUpdateType.REMOVE
    )
};


function allCity(){

    activeSheet.applyFilterAsync(
        "City of Applicant", 
        ["Ibadan", "Others"],
        tableau.FilterUpdateType.ADD
    )
};



function removeAllCity(){

    activeSheet.applyFilterAsync(
        "City of Applicant", 
        ["Ibadan", "Others"],
        tableau.FilterUpdateType.REMOVE
    )
};




function city(){
    var chb = document.getElementsByClassName("city");
        if(chb[0].checked){
            // filter to add checkbox value
            // an array

        return allCity()
        } else{
            // remove the filter
            return removeAllCity()
            
        }

        if(chb[1].checked){
            // filter to add ibadan filter
           return addCity(document.getElementById("cIbadan").value)
           //filtervalue will be the value of the checkbox
        } else{
            // remove ibadan filter
            return removeCity(document.getElementById("cIbadan").value)
        }

        if(chb[2].checked){
            // filter to add other locations
            return addCity(document.getElementById("cOthers").value)
        } else{
            // remove other location filter
            return removeCity(document.getElementById("cOthers").value)
        }

}





//Region Filter


function addRegion(filtervalue){

    activeSheet.applyFilterAsync(
        "Region",
        filtervalue,
        tableau.FilterUpdateType.ADD
    )
};


function removeRegion(filtervalue){

    activeSheet.applyFilterAsync(
        "Region",
        filtervalue,
        tableau.FilterUpdateType.REMOVE
    )
};


function allRegion(){

    activeSheet.applyFilterAsync(
        "Region", 
        ["Central", "East", "South", "West"],
        tableau.FilterUpdateType.ADD
    )
};



function removeAllRegion(){

    activeSheet.applyFilterAsync(
        "Region", 
        ["Central", "East", "South", "West"],
        tableau.FilterUpdateType.REMOVE
    )
};








//Checking Logic Function

function region(){
    var chb = document.getElementsByClassName("region");
        if(chb[0].checked){
   
        return allRegion()
        
        } else{
      
            return removeAllRegion()
            
        }

        if(chb[1].checked){
      
           return addRegion(document.getElementById("rCentral" ).value)
        
        } else{
           
            return removeRegion(document.getElementById("rCentral").value)
        }

        if(chb[2].checked){
           
            return addRegion(document.getElementById("rEast").value)
        } else{
        
            return removeRegion(document.getElementById("rEast").value)
        }

        if(chb[3].checked){
         
            return addRegion(document.getElementById("rSouth").value)
        } else{
    
            return removeRegion(document.getElementById("rSouth").value)
        } 
        
        if(chb[4].checked){
        
            return addRegion(document.getElementById("rWest").value)
        } else{
     
            return removeRegion(document.getElementById("rWest").value)
        }         

}

















function vizResize() {
    var width = document.getElementById("resizeWidth").value;
    var height = document.getElementById("resizeHeight").value;

    // gets the width and height value

    viz.setFrameSize(parseInt(width, 10), parseInt(height, 10));
}


//Original Size

function originalSize() {
    // viz.setFrameSize(parseInt(1300, 10), parseInt(700, 10));
    var workbook = viz.getWorkbook();
    workbook.revertAllAsync();
}



//End of Test









//Switching Sheets

function barChart(){

    // var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("Bar");
    console.log('Bar Chart Activated');
    var chart = document.getElementById("barChart");
    var chartID = document.getElementById("chartType");
    chartID.innerHTML = 'You have Chosen to see ' + chart.value;
};


function BubbleChart(){
    var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("Bubble Chart");
    console.log('Bubble Chart Activated');
    var chart = document.getElementById("bubbleChart");
    var chartID = document.getElementById("chartType");
    chartID.innerHTML = 'You have Chosen to see ' + chart.value;
};

//This is because the Bubble chart and BW Chart do not have region filter

// var bubbleChart = document.getElementById("bubbleChart");
// var boxAndWhisker = document.getElementById("boxAndWhisker");



// bubbleChart.addEventListener('click', function(){
//     var regionDiv = document.getElementById("filterSelection");
//     regionDiv.style.display = 'none';
// });

// boxAndWhisker.addEventListener('click', function(){
//     var regionDiv = document.getElementById("filterSelection");
//     regionDiv.style.display = 'none';
// });








function boxAndWhisker(){
    var workbook = viz.getWorkbook();
    workbook.activateSheetAsync("BW");
    console.log('Box and Whisker Chart Activated');
    var chart = document.getElementById("boxAndWhisker");
    var chartID = document.getElementById("chartType");
    chartID.innerHTML = 'You have Chosen to see ' + chart.value;
};


//Filters
//wEST Filter
//Promise should be used here

function westFilter(){
    // workbook.activateSheetAsync("Bar Chart");
    activeSheet.applyFilterAsync(
        "Region",
        "West",
        tableau.FilterUpdateType.REPLACE
    );
};



//EAST Filter

function eastFilter(){

    activeSheet.applyFilterAsync(
        "Region",
        "East",
        tableau.FilterUpdateType.REPLACE
    )
};




//SOUTH Filter

function southFilter(){
   
    activeSheet.applyFilterAsync(
        'Region',
        'South',
        tableau.FilterUpdateType.ADD
    )
};



//radio button Activation

function radioButton()
{
    const rbs = document.querySelectorAll('input[name = "region"]');
    //double quote is needed in a single quote to ensure specitifity
    let selectedValue;
    for(const radiobutton of radiobuttons){
        if (radiobutton.checked){
            selectedValue = radiobutton.value;
            break;
        }
    }


};





























// function initializeViz() {
//   var placeholderDiv = document.getElementById("vizContainer");
//   // var url = "https://public.tableau.com/views/WorldIndicators/GDPpercapita";
//   var url = "https://public.tableau.com/views/testingdashboard_16069128488460/BainwithSSD"
//   // var url = 'https://lumpy-decorous-ixia.glitch.me/'
//   var options = {
//     width: placeholderDiv.offsetWidth,
//     height: placeholderDiv.offsetHeight,
//     hideTabs: false,
//     hideToolbar: false,
//     onFirstInteractive: function () {
//       workbook = viz.getWorkbook();
//       activeSheet = workbook.getActiveSheet();
//     }
//   };
//   viz = new tableau.Viz(placeholderDiv, url, options);
// } 

// function f() {
//   viz.workbook.getActiveSheet().applyFilterAsync(
//     "Category",
//     "Furniture",
//     tableau.FilterUpdateType.ADD);
// } 




// // function o() {
// //   workbook = workbook.activateSheetAsync("Bain with SSD")
// //   workbook.getActiveSheet().applyFilterAsync(filterName,filterValue,filterType);
// // } 



// // function vizFilter(filterName,filterValue,filterType){
// //   sheet=viz.getWorkbook().getActiveSheet();
// //   if(sheet.getSheetType() === 'worksheet'){
// //   sheet.applyFilterAsync(filterName,filterValue,filterType);
// //   }
// //   else{
// //   worksheetArray = sheet.getWorksheets();
// //   for(var i =0; i < worksheetArray.length; i++)
// //   {
// //   worksheetArray[i].applyFilterAsync(filterName,filterValue,filterType);
// //   }
// //   }
// //   };


// // function category(value) {
// //     activeSheet.applyFilterAsync(
// //       "Category",
// //       value,
// //       tableau.FilterUpdateType.ADD);
// //   }  

// //   function f() {
// //     activeSheet.applyFilterAsync(
// //       "Category",
// //       "Furniture",
// //       tableau.FilterUpdateType.ADD);
// //   } 

// //   function t() {
// //     activeSheet.applyFilterAsync(
// //       "Category",
// //       "Technology",
// //       tableau.FilterUpdateType.ADD);
// //   } 


// //   function o() {
// //     activeSheet.applyFilterAsync(
// //       "Category",
// //       "Office Supplies",
// //       tableau.FilterUpdateType.ADD);
// //   } 



// //   function addValuesToFilter() {
// //     activeSheet.applyFilterAsync(
// //       "Category",
// //       ["Furniture", "Technology", "Office Supplies"],
// //       tableau.FilterUpdateType.REMOVE);
// //   } 