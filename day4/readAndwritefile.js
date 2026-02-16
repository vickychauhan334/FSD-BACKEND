import fs from "fs/promises";
export const readFile = async (path) => {
    try {
        const data = await fs.readFile(path , "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return "Error occured during reading";
    }
}

export const writeFile = async (path , data) => {
    try {
        const jsonData = JSON.stringify(data , null , 2);
        await fs.writeFile(path , jsonData , "utf-8");
        console.log("data has been written successfully");
    } catch (error) {
        console.log("Unabe to write data to file using writeFile fs");
    }
}
const students = [
    {
        "id": 11,
        "first_name": "vicky ",
        "last_name": "chauhan",
        "email": "vickysinghchauhan789@gmail.com.edu",
        "gender": "male",
        "ip_address": "1.21.96.120"
    },
    {
        "id": 12,
        "first_name": "shourya",
        "last_name": "awasthi",
        "email": "shourya@.edu",
        "gender": "male",
        "ip_address": "1.21.96.120"
    }    
]
writeFile("./students.json" , students)

readFile("./students.json")
    .then((data) => console.log(data))
    .catch((error) => console.log("Some error occured"));