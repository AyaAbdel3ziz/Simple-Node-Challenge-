var fs = require('fs');
var path = require('path');

var file_path = path.join(__dirname, "data.txt");

//Check if file exist
if (!fs.existsSync(file_path)) {
    fs.writeFileSync('./data.txt', '{"key":"value"}');
}

var dictionary = JSON.parse(fs.readFileSync(file_path));


module.exports = {

    add: function (key, value) {
        dictionary[key] = value;
        fs.writeFileSync(file_path, JSON.stringify(dictionary));
        console.log('data is added successfully');
    },

    list: function () {
        let dictionary = JSON.parse(fs.readFileSync(file_path));
        console.log(dictionary);
    },

    get: function (key) {
        let dictionary = JSON.parse(fs.readFileSync(file_path));
        console.log('The ' + key + ' is : ', dictionary[key]);
        //   return dictionary[key];
    },

    remove: function (key) {
        let dictionary = JSON.parse(fs.readFileSync(file_path));
        delete(dictionary[key]);
        fs.writeFileSync(file_path, JSON.stringify(dictionary));
        console.log('Selected data deleted');
    },
    
    clear: function () {
        fs.writeFileSync(file_path, JSON.stringify({}));
        console.log('Done , It is cleared');
    }
};
