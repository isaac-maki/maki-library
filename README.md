# KaffiMunster Google App Script Library
A Google App Script (GAS) library that houses atomic functions that are handy for GAS Projects or manupulating Google Workspace documents. __WORK IN PROGRESS__

Use the following Library ID to add this to a project:
`14Z2ySQozKVWzzu6tGOZzXnkThryfVKLUpkstFEwdkOufuKqCHolo3i2n`


# Range Utilities

## Determine Row of an External Sheet

This is primarily used to find the row of an entry of an archive list. E.g., There is a list of product codes and the row number of a specific product is wanted. This is useful for updating lists on a spreadsheet, since there are no database functions. This can be thought of as VLOOKUP() of a row of any sheet so ranges can be created. 

```javascript
determineRowExternalSheet(datasheet, dataSearchColumn, dataRowOffset, searchKey);
```

__datasheet__ : Location of the spreadsheet and sheet where the search will be conducted. E.g., SpreadsheetApp.openByUrl(url).getSheetByName(name); or ss.getSheetByName(name) variable.

__dataSearchColumn__ : Column range. E.g., 'C6:C'.

__dataRowOffset__ : Arrays are zero indexed so offset the return by the value. E.g., data begins on Row 6, the parameter should equal 6. 

__searchKey__ : What is being hunted for. 