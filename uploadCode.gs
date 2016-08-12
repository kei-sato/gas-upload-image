var AWS_ACCESS_KEY_ID = 'AAAAAAAAAAAAAAAAAAAA';
var AWS_SECRET_ACCESS_KEY = 'BBBBBBBBBBBBBBBBBBBBBBBBBBBBBB';

var BUCKET = 'great-bucket';
var KEY_PREFIX = 'images/';

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('Custom Menu')
    .addItem('Upload File', 'dialogUploadFile')
    .addToUi();
}

function dialogUploadFile() {
  var html = HtmlService.createHtmlOutputFromFile('index');
  SpreadsheetApp.getUi()
    .showModalDialog(html, 'Upload File Example');
}

function getS3Instance() {
  var awsAccessKeyId     = AWS_ACCESS_KEY_ID;
  var awsSecretAccessKey = AWS_SECRET_ACCESS_KEY;
  return S3.getInstance(awsAccessKeyId, awsSecretAccessKey);
}

// Blob reference
// https://developers.google.com/apps-script/reference/base/blob
function uploadFile(theForm) {
  var s3 = getS3Instance();
  var fileBlob = theForm.theFile; // This is a Blob.
  var name = fileBlob.getName();
  var match = name.match(/(\.jpe?g|\.png|\.gif|\.mp4)/);
  if (!match) throw new Error('invalid file');
  var ext = match[0];
  var filename = Date.now() + ext;
  var key = KEY_PREFIX + filename;
  s3.putObject(BUCKET, key, fileBlob, { logRequests: true });
  return filename;
}
