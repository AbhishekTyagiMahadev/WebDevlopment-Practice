import fs from "fs/promises"
import fsn from "fs"
import path from "path"

const basepath = "C:\\Programing\\WebDevlopment-Practice\\Backend\\NodeJs\\7-ClearingCluter"

async function organizeFiles() {
    let files = await fs.readdir(basepath)
    console.log(files)
    for (const item of files) {
        console.log("running for ", item)
        let ext = item.split(".")[item.split(".").length - 1]
        if (ext != "js" && ext != "json" && item.split(".").length > 1) {
            if (fsn.existsSync(path.join(basepath, ext))) {
                // Move the file to this directory if it's not a js or json file
                await fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
            } else {
                await fs.mkdir(path.join(basepath, ext))
                await fs.rename(path.join(basepath, item), path.join(basepath, ext, item))
            }
        }
    }
}

async function reverseOrganizeFiles() {
    let directories = await fs.readdir(basepath)

    for (const dir of directories) {
        let dirPath = path.join(basepath, dir)
        if (fsn.lstatSync(dirPath).isDirectory()) {
            let files = await fs.readdir(dirPath)
            for (const file of files) {
                await fs.rename(path.join(dirPath, file), path.join(basepath, file))
            }
            await fs.rmdir(dirPath)
        }
    }
}

// Call the functions as needed
organizeFiles()
// reverseOrganizeFiles()