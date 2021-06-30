function documentGenerator(destinationFolderId, filename) {

    // define document destination paramenters
    let destinationFolder = DriveApp.getFolderById(destinationFolderId);

    // create label document
    let document = DocumentApp.create(filename);

    // get file id
    let id = document.getId();

    // define file
    let file = DriveApp.getFileById(id);

    // original file location and removal
    let parents = file.getParents();
    parents.next().removeFile(file);

    // add file to destination folder
    destinationFolder.addFile(file);

    // return create
    return id;

}


function documentMargins(document, marginTop, marginBottom=marginTop, marginLeft=marginTop, marginRight=marginTop) {

    document.getBody().setMarginTop(marginTop).setMarginBottom(marginBottom).setMarginLeft(marginLeft).setMarginRight(marginRight);

}

function documentPageSize(document, paperSize, portrait) {

    // Dictionary of paper sizes by W and H in portrait in units of points
    let paper = {
        
        a4_size:[595.276,841.89],
        a5_size:[419.528,595.276],
        standardLabel:[216,288],
        labLabel:[288,72]
    };

    // setting W/H depending on oritentation
    if (portrait === true) {
        
        document.getBody().setPageWidth(paper[paperSize][0]).setPageHeight(paper[paperSize][1]);

    } else if (portrait === false) {
        
        document.getBody().setPageHeight(paper[paperSize][0]).setPageWidth(paper[paperSize][1]);

    } else {
        
        Logger.log('No portrait boolean selected');
        return;

    }

}

function documentPdfConverter(document, folderID) {

    let documentId = document.getId();

    let destinationFolderId = folderID;

    let documentFile = DriveApp.getFileById(documentId);
    let blobDocument = documentFile.getAs('application/pdf');
    let pdfDocument = DriveApp.createFile(blobDocument);

    let pdfDocumentId = pdfDocument.getId();

    let pdfDocumentFile = DriveApp.getFileById(pdfDocumentId);

    DriveApp.getFolderById(destinationFolderId).addFile(pdfDocumentFile);

    return pdfDocument.getUrl();
}

