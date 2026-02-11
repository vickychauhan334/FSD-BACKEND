import  fs  from "fs/promises";
const filestatus = async(path)=>{
    try {
      const stats = await fs.stat(path);
      console.log (stats.size);
      console.log (stats.isFile());
      console.log (stats.isDirectory());
    } catch (error) {
      console.Console.log ("unabele to generate status",error);  
    }
}
filestatus("./dir.js");