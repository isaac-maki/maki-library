function randomBetween(minumum,maximum) {
    let min = Math.ceil(minumum);
    let max = Math.floor(maximum);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function characterFromCode(code) {
    let character = String.fromCharCode(code);
        return character;
}

function leadingZeros(number, digits) {
    let i = number.toString();
    while (i.length < digits) {
        i ='0' + i;
    }
    return i;
}

function columnToLetter(column) {
    var temp, letter = '';
        while (column > 0) {
          temp = (column - 1) % 26;
          letter = String.fromCharCode(temp + 65) + letter;
          column = (column - temp - 1) / 26;
        }
        return letter;
}

function openTabs(urls) {
    if(!Array.isArray(urls))
      urls = [urls];
  
    var html =
      "<script>" +
        urls.map(function(url) {
          return "window.open('" + url + "');";
        })
        .join('') +
        "google.script.host.close();" +
      "</script>";
  
    var userInterface = HtmlService.createHtmlOutput(html)
    .setWidth( 90 )
    .setHeight( 1 );
  
    SpreadsheetApp.getUi().showModalDialog(userInterface, 'Opening...');
  }
  