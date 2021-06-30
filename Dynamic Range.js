// Various types of dynamic ranges that cn be generated. 


function dynamicRangeA1(sheetName, headerRange,colName) {
    let sheet = ss.getSheetByName(sheetName); // The sheet the range exists on
    let range = sheet.getRange(headerRange); // The range the headers of the data.
    let finder = range.createTextFinder(colName).findNext(); // Finds the next instance of colName in the headerRange
    let cell = finder.getA1Notation(); // Gets the A1 cell notation
    return cell;
}

function dynamicRangeRow(sheetName, headerRange,colName) {
    let sheet = ss.getSheetByName(sheetName); // The sheet the range exists on
    let range = sheet.getRange(headerRange); // The range the return row;
}

function dynamicRangeCol(sheetName, headerRange,colName) {
    let sheet = ss.getSheetByName(sheetName); // The sheet the range exists on
    let range = sheet.getRange(headerRange); // The range the headers of the data.
    let finder = range.createTextFinder(colName).findNext(); // Finds the next instance of colName in the headerRange
    let col = finder.getColumn(); // Gets the column as an integer
    return columnToLetter(col); // Converts the column index integer to letter
}


function dynamicRangeVerticalData(sheetName, labelColumn, dataColumnOffset, labelName) {
    let sheet = ss.getSheetByName(sheetName);
    let _labelColumn = labelColumn
    let labelRange = sheet.getRange(_labelColumn + "1:" + _labelColumn + "1000");
    let finder = labelColumn.createTextFinder(labelName).findNext();
    let dataColumn = _labelColumn + dataColumnOffset;
    return dataColumn; 
}