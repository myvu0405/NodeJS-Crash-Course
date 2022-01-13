const fs=require ('fs');
/*
fs.readFile('./docs/blog1111.txt',(err,data) =>{
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});

console.log('LAST LINE');
*/
/*
fs.writeFile('./docs/blog1.txt', 'HELLO WORLD!', () => {
    console.log('File written done!');
});

fs.writeFile('./docs/blog2.txt', 'HELLO WORLD, another!', () => {
    console.log('File written done!');
});
*/
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) console.log(err);
        console.log ('new folder created!')
    });
} else {
    fs.rmdir('./assets', (err) => {
        if (err) console.log(err);
        console.log('folder deleted!')
    })
}

if (fs.existsSync('./docs/deleteme.txt')) {
    fs.unlink('./docs/deleteme.txt', (err)=> {
        if(err) console.log(err);
        console.log('file deleted!')
    })
}