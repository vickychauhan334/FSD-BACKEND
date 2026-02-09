import fs from 'fs';

const readFileSync = (path) => {
    try {
        fs.readFileSync(path);
        console.log(path);
    } catch (error) {
        console.log("Unable to read data");
        
    }
}



const writeFileSync = (file,data) => {
try {
    fs.writeFileSync(file,data);
    console.log("File has been written successfully...");
} catch (error) {
    console.log("Some error occured");   
}
}

readFileSync("./example.txt");

writeFileSync("./example.txt" ,
    "this data has been written through sync function of fs module");