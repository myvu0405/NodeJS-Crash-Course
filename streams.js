const fs =require('fs');

const rStream=fs.createReadStream('./docs/blog3.txt',{encoding:'utf8'});

const wStream=fs.createWriteStream('./docs/blog4.txt');
/*
//event listener to data event reading
rStream.on('data',(chunk)=>{
    console.log('--------------NEW CHUNK');
    console.log(chunk);
    wStream.write('\nNEW CHUNK\n');
    wStream.write(chunk);

});
*/
//piping (do the same thing as above)
rStream.pipe(wStream)