
function initializeViz() {
  var placeholderDiv = document.getElementById("vizContainer");
  // var url = "https://public.tableau.com/views/WorldIndicators/GDPpercapita";
  var url = 'https://lumpy-decorous-ixia.glitch.me/'
  var options = {
    width: placeholderDiv.offsetWidth,
    height: placeholderDiv.offsetHeight,
    hideTabs: true,
    hideToolbar: true,
    onFirstInteractive: function () {
      workbook = viz.getWorkbook();
      activeSheet = workbook.getActiveSheet();
    }
  };
  viz = new tableau.Viz(placeholderDiv, url, options);
} 


function category(value) {
    activeSheet.applyFilterAsync(
      "Category",
      value,
      tableau.FilterUpdateType.ADD);
  }  



  function addValuesToFilter() {
    activeSheet.applyFilterAsync(
      "Category",
      ["Furniture", "Technology", "Office Supplies"],
      tableau.FilterUpdateType.REMOVE);
  } 