function getDataArray(sheet, countCell, startCellToCol, headerRow) {

    let count = sheet.getRange(countCell).getValue();
    let endRow = headerRow + count;
    let array = sheet.getRange(startCellToCol + endRow).getValues();

    return array;
}