
const getMetaData = require('metadata-scraper')
const converter = require('json-2-csv')
const fs = require("fs");
const { Client } = require("@notionhq/client")

// Initializing a client
const notion = new Client({ auth: 'secret_jkgkkyP2FT6fF9Vp7pB3u49sRMY1kX8M3B92lclnzTx',})

const databaseId = '3d216a1bb958427996a732a5dace2a0a';


async function main() {
    let csv=await require('csvtojson').csv().fromFile('notion.csv').then((jsonObj)=>{ return jsonObj    })

    for(let i in csv){
        let row=csv[i]
        let data=await  getMetaData(row.URL).then((data) => {return data})
        csv[i]['Favicon']=(data.icon==undefined?'':data.icon.replace('.ico','.png'))
        csv[i]['Metadesc']=(data.description==undefined?'':data.description)
        csv[i]['Cover']=(data.image==undefined?'':data.image)
    }   
    converter.json2csv(csv, (err, csv) => {fs.writeFileSync('new.csv', csv) })

}

main()

