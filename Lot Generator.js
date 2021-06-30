function lotGenerator(cid,date) {

    // Format provided date
    let dateFormatted = Utilities.formatDate(date, Session.getScriptTimeZone(), "yy-MM-dd");

    // Create date array from split
    let dateArray = dateFormatted.toString().split("-");

    // Separate date components
    let year = dateArray[0];
    let day = dateArray[2];

    // generate number letter
    let randomLetter = characterFromCode(randomBetween(65,90));

    // generate random number with two digits (for leading zeros)
    let randomNumber = leadingZeros(randomBetween(0,99),2);

    // retrieve month code
    
    let monthCode = retrieveMonthCodes(date);

    // Build lot/batch number

    let lot = cid + '.' + randomLetter + randomNumber + monthCode +  day + year;
    return lot;
}


function incrementedLotGenerator(cid,date,increments) {

    // Format provided date
    let dateFormatted = Utilities.formatDate(date, Session.getScriptTimeZone(), "yy-MM-dd");

    // Create date array from split
    let dateArray = dateFormatted.toString().split("-");

    // Separate date components
    let year = dateArray[0];
    let day = dateArray[2];

    // generate number letter
    let randomLetter = characterFromCode(randomBetween(65,90));

    // generate random number with two digits (for leading zeros)
    let randomNumber = randomBetween(0,99);

    // retrieve month code
    
    let monthCode = retrieveMonthCodes(date);

    // Build lot/batch number array to increment for split lots.

    let lotArray = [];
    let i = 0;
    while (i < increments) {
        
        let lot = cid + '.' + randomLetter + leadingZeros((randomNumber + i)) + monthCode +  day + year;
        lotArray.push(lot);
        i++;
    }
    return lotArray;
}


function retrieveMonthCodes(date) {

    // declaration of atomic list spreadsheet and sheet for month codes 
    let ss = SpreadsheetApp.openByUrl('https://docs.google.com/spreadsheets/d/1CR5aXW6MtrUWh92Uj-KKCFkt-nZ9rfeIlPTQEprW5yA/edit').getSheetByName("Month Codes");

    // define the header row where the years are kept
    let range = ss.getRange('D4:Z4')

    // format the date so that it is only YY; e.g., 2021 = 21.
    let dateYear = Utilities.formatDate(date, Session.getScriptTimeZone(), "yy");

    // format date so that it is only MM; e.g., March = 03.
    let dateMonth = Utilities.formatDate(date, Session.getScriptTimeZone(), 'MM');

    // create a text finder
    let finder = range.createTextFinder('20' + dateYear).findNext();

    // get column number and correspodning letter
    let colNumber = finder.getColumn();
    let col = columnToLetter(colNumber);

    // build month codes array for specified year
    let monthCodes = ss.getRange(col + '5:' + col + '16').getValues().flat();
    
    let monthIndex = dateMonth - 1;
    
    return monthCodes[monthIndex];
}
