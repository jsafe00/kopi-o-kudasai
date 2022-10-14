const fs = require('fs-extra')

const files = [
    //Example
    // 'ingredients/coffee/ko-peeh-oh.txt', 
    // 'ingredients/sugar/sugar-lah.txt'
];

try {
    files.forEach(file => {
        //fs.copySync('C:/Users/Safventure/Documents/kopi-o/'+file, 'C:/Users/Safventure/Documents/kopi-c/'+file)
        fs.copySync('{from}'+file, '{to}'+file)
    });
    console.log('Done');
} catch (err) {
    console.error(err);
}
