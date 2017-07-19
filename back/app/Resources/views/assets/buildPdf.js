function buildPdf(value) {
    var pdfContent = value;

    var docDefinition = {
        content: [{
            text: 'My name is: ' + pdfContent
        }]
    }
    console.log(pdfContent);
    return docDefinition;
}