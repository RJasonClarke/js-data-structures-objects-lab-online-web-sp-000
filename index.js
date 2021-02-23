// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]: value});
}

function destructivelyUpdateObjectWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromObjectByKey(driver, key) {
  var newObject = Object.assign({}, driver);
  delete newObject[key];
  return newObject;
}


function destructivelyDeleteFromObjectByKey(driver, key) {
  delete driver[key];
  return object;
}
