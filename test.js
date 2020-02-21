function runTest(){
    Logger.log("Hello, there you handsome devil!");
    let ss = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    let data = ss.getRange("A1").getValue();
    Logger.log(data);
}