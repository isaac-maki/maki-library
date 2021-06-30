function dropZoneRange(sheet,startCol, endCol, rowsAmount) {
    let lastRow = sheet.getLastRow();
    sheet.insertRowAfter(lastRow);
    let newLastRow = lastRow + 1;
    rows = rowsAmount - 1; // Offset because one is included in the new last row.
    endRow = newLastRow + rows;
    let payload = sheet.getRange(startCol + newLastRow + ":" + endCol + endRow);
    return payload;
}

function determineRowExternalSheet(dataSheet, dataSearchColumn, dataRowOffset, searchKey) {

    /**  data sheet is the full location of the sheet 
    /*   e.g., where the function is called you might write
    /*   let data = SpreadsheetApp.OpenByUrl(url).getSheetByName(name); 
    /*   and pass that to this function
    */

    let searchRange = dataSheet.getRange(dataSearchColumn).getValues();

    let i = 0;
    while (i < searchRange.length) {

        let searchCell = searchRange[i][0].toString();
        if (searchCell === searchKey) {
            
            let determinedRow = dataRowOffset + i;
            return determinedRow;
            break;

        }
        i++;
    }
}

function setBorderStandard(range) {

    range.setBorder(true, true, true, true, true, true, '#ffffff', SpreadsheetApp.BorderStyle.SOLID);

}

function dropZoneRangeAlt(dz, startCol, endCol, firstRow, dzCountCell, payloadCount) {

    /* dz = Sheet where the dropzone range is to be located. 
    //      e.g., SpreadsheetApp.getActiveSpreadsheet.getSheetByName('x');
    // firstRow = the actual first row under the header. This is used to offset
    // dzCountCell = a referene to a cell that has a count of current amount of data in the dropZone. used as a offset. Relative to dz sheet specified in parameters. E.g., "C6" for dz.getRange('C6).getValue();
    // payloadCount = amount of rows in the payload data array.
    */
    
    let dzCountInteger = dz.getRange(dzCountCell).getValue();
    let firstDropZoneRow = firstRow + dzCountInteger;
    let lastDropZoneRow = firstDropZoneRow + payloadCount - 1;
    let range = dz.getRange(startCol + firstDropZoneRow + ':' + endCol + lastDropZoneRow);
    return range;

}

function dropZoneRangeAltExtUtil(dz, startCol, endCol, firstRow, dzCountCell, payloadCount) {

    // This is the same as dropZoneRangeAlt, however, an external dzCountCell cacn be used
    // for extample, if stored on an external utilities sheet (ExtUtil)
    
    let dzCountInteger = dzCountCell.getValue();
    let firstDropZoneRow = firstRow + dzCountInteger;
    let lastDropZoneRow = firstDropZoneRow + payloadCount - 1;
    let range = dz.getRange(startCol + firstDropZoneRow + ':' + endCol + lastDropZoneRow);
    return range;

}


function rangeSort(sheet, startCol, endCol, startRow, countCell) {

    let countValue = sheet.getRange(countCell).getValue();
    let lastRow = startRow + countValue - 1;
    let sortRange = sheet.getRange(startCol + startRow + ':' + endCol + lastRow);
    let sortBy = letterToColumn(startCol);
    sortRange.sort(sortBy);

}