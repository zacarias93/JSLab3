" use strict ";

var phonebook = new Object();
phonebook["zac"] = "22";
phonebook["katie"] = "25";

function PhoneBook() {
};

function listAllNames() {
  var names = "";
  for (var key in phonebook) {
    names += key + "</br>";
  }
  display.innerHTML = names;
};

function listAllNumbers() {
  var string = "";
  for (var key in phonebook) {
    string += key + " number is : " + phonebook[key] + "</br>";
  }
  display.innerHTML = string;
};

function lookUp() {
  var name = prompt("Who would you like to look up?");
  display.innerHTML = "Their number is : " + phonebook[name];
}

function addPerson() {
  var name = prompt("Enter full name");
  var number = prompt("Enter phone number");
  phonebook[name] = number;
  console.log(phonebook[name]);
};

function showRemove() {
  var remove = prompt("Enter name to remove");
  for(var i in phonebook) {
    console.log(i);
    if (i == remove) {
      delete phonebook[i];
    }
  }
};

function reverseLookup() {
  var num = prompt("Enter number to lookup");
  for(var i in phonebook) {
    if(phonebook[i] == num) {
      display.innerHTML = i;
    }
  }
}

var display = document.getElementById("display");
