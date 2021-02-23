// Write your solution in this file!
var driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromObjectByKey(driver, key) {
  var newObj = Object.assign({}, driver);
  delete newObj[key];
  return newObj;
}


function destructivelyDeleteFromObjectByKey(driver, key) {
  delete driver[key];
  return object;
}
