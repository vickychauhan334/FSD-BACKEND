import fs from "fs";
const makeDirSync = (path)=>{
    try {
        fs.mkdirSync(path);
        console.log("Directory has been created successfully");
    } catch (error) {
        console.log("unable to make dir");
    }
}
makeDirSync("../dayday05");        