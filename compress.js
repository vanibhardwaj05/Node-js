import zlib from 'zlib';

let data = "Meet me at the restaurant";

zlib.gzip(data, (err, buffer) => {
    if (err) {
        console.log("Error in compression");
    } else {
        console.log("The compressed data is:", buffer.toString());
        zlib.gunzip(buffer, (err, buffer) => {
            if (err) {
                console.log("Error in decompression");
            } else {
                console.log("The decompressed data is:", buffer.toString());
            }
        });
    }
});