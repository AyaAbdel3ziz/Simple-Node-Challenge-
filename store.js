#!/usr/bin/env node

var dictionary = require("./module");
var args = process.argv.slice(2);

switch (args[0]) {
    case "list":
        dictionary.list();
        break;
    case "add":
        dictionary.add(args[1], args[2]);
        break;
    case "get":
        dictionary.get(args[1]);
        break;
    case "remove":
        dictionary.remove(args[1]);
        break;
    case "clear":
        dictionary.clear();
        break;
    default:
        console.log("Please write input");
}