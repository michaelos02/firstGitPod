function onOpen(){
  var ui = SpreadsheetApp.getUi(); 
  ui.createMenu("Show dialog")
    .addItem("Show it", 'serveIt')
    .addToUi();
}
function serveIt(){
    let html = HtmlService.createTemplateFromFile('start').evaluate();
    SpreadsheetApp.getUi().showSidebar(html);
}


//get css and js into the web page
function include(filename){
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}