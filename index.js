var recipes = new Object({});

function updateObjectWithKeyAndValue(object,key,value) {
  var newItem = new Object({});
  Object.assign(newItem,object,{[key]: value});
  return newItem;
}

function destructivelyUpdateObjectWithKeyAndValue(object,key,value) {
  Object.assign(object,key,value);
  return object;
}

function deleteFromObjectByKey(object,key) {
  
}

function destructivelyDeleteFromObjectByKey(object,key) {
  
}