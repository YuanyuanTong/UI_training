// Q1: compare two objects to determine if the first one contains
// equivalent property values to the second one. 
var easy_obj1 = {name: "EO1"};

var easy_obj2 = {name: "EO2"};

var easy_obj3 = {name: "EO1"};

var obj1 = {
    name: "name1",
    number: "000",
    easy_obj: easy_obj1
};

var obj2 = {
    name: "name1",
    number: "0001",
    easy_obj: easy_obj1
};

var obj3 = {
    name: "name1",
    number: "000",
    easy_obj: easy_obj3
};

var obj4 = {
    name: "name1",
    number: "000",
    easy_obj: easy_obj1,
    some_func: function(){
        return 0;
    }
};

var obj5 = {
    name: "name1",
    number: "000",
    easy_obj: easy_obj1,
    some_func: function(){
        return 0;
    }
};

// // Using the Node built-in function to compare objects
// // But this seems like a lot of pains to use in the client-side/browser
// // interesting finding: objects w/ methods will never equal to other objects
// // even if the method is totally same
// const util = require('util');

// util.isDeepStrictEqual(obj1, obj2);

function isObject(val) {
    if (val === null) { return false;}
    return ( (typeof val === 'function') || (typeof val === 'object') );
}

// This self-defined function does not compare methods though.
function deepEqual(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      areObjects && !deepEqual(val1, val2) ||
      !areObjects && val1 !== val2
    ) {
      return false;
    }
  }

  return true;
}

console.log("Obj1 is equal to obj2: " + deepEqual(obj1, obj2));
console.log("Obj1 is equal to obj3: " + deepEqual(obj1, obj3));
console.log("Obj1 is equal to obj4: " + deepEqual(obj1, obj4));
console.log("Obj4 is equal to obj5: " + deepEqual(obj4, obj5));

// Q2: copy a string to the clipboard
function myCopyFunc(){
    var copyText = document.getElementById("myInput");
    copyText.select();
    console.log("Copied text: " + copyText.value);

    // Use this w/ select()
    document.execCommand("copy");
}

// Q3: convert a comma-separated values (CSV) string to a 2D array.
