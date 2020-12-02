
function initializeViz() {
  var placeholderDiv = document.getElementById("vizContainer");
  // var url = "https://public.tableau.com/views/WorldIndicators/GDPpercapita";
  var url = 'https://lumpy-decorous-ixia.glitch.me/'
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: false,
    hideToolbar: false,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
} 

function f() {
  activeSheet.applyFilterAsync(
    "Category",
    "Furniture",
    tableau.FilterUpdateType.ADD);
} 




// function o() {
//   workbook = workbook.activateSheetAsync("Bain with SSD")
//   workbook.getActiveSheet().applyFilterAsync(filterName,filterValue,filterType);
// } 



// function vizFilter(filterName,filterValue,filterType){
//   sheet=viz.getWorkbook().getActiveSheet();
//   if(sheet.getSheetType() === 'worksheet'){
//   sheet.applyFilterAsync(filterName,filterValue,filterType);
//   }
//   else{
//   worksheetArray = sheet.getWorksheets();
//   for(var i =0; i < worksheetArray.length; i++)
//   {
//   worksheetArray[i].applyFilterAsync(filterName,filterValue,filterType);
//   }
//   }
//   };


// function category(value) {
//     activeSheet.applyFilterAsync(
//       "Category",
//       value,
//       tableau.FilterUpdateType.ADD);
//   }  

//   function f() {
//     activeSheet.applyFilterAsync(
//       "Category",
//       "Furniture",
//       tableau.FilterUpdateType.ADD);
//   } 

//   function t() {
//     activeSheet.applyFilterAsync(
//       "Category",
//       "Technology",
//       tableau.FilterUpdateType.ADD);
//   } 


//   function o() {
//     activeSheet.applyFilterAsync(
//       "Category",
//       "Office Supplies",
//       tableau.FilterUpdateType.ADD);
//   } 



//   function addValuesToFilter() {
//     activeSheet.applyFilterAsync(
//       "Category",
//       ["Furniture", "Technology", "Office Supplies"],
//       tableau.FilterUpdateType.REMOVE);
//   } 