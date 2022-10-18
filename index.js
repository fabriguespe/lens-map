import getMetaData from 'metadata-scraper';
import fs from "fs";
import converter from 'json-2-csv';
import fetch from "node-fetch";
import {Client} from "@notionhq/client";
import extractUrls from "extract-urls";
import {} from 'dotenv/config';
// Initializing a client

(async () => {

  const notion = new Client({ auth: process.env.NOTION})
  const databaseId = process.env.DB

    let response = await notion.databases.query({
      database_id: databaseId,
      filter: {
        or: [
          {
            property: 'Curated',
            checkbox: {
              equals: true,
            },
          },
        ],
      },
      sorts: [
        {
          property: 'Category',
          direction: 'ascending',
        },
        {
          property: 'Title',
          direction: 'ascending',
        },
      ],
    });

    let md=''
    let cate=''
    for(let i in response.results){
        let row=response.results[i]
        let url=row.properties.URL?.url
        let title=row.properties.Title?.title[0].plain_text
        let desc=row.properties.Description?.rich_text[0]?.plain_text
        let cc=row.properties.cc?.rich_text[0]?.plain_text
        let cate2=row.properties.Category?.select?.name
        if(cate2!=cate){
          cate=cate2
          console.log(cate)
          md+='## '+cate+'\n<br />';
          
        }
        md+='**['+title+']('+url+')**'+'<br />';
        md+=(desc)+'<br />';
        cc=cc?.split(',')
        let cc2='cc '
        for(let i in cc) cc2+='@'+cc[i]+' '
        md+=(cc2)
        
        md+=('<br /><br />\n')
        
        //updateMeta(url)
        //getTwitter()
    }
    converter.json2csv(md, (err, csv) => {fs.writeFileSync('README.md', md) })
})();


async function getTwitter(url){
    let twitter=''
    try{

      let text=await fetch(url).then((result) => { return result.text(); })
      if(text){
        let urls = extractUrls(text);
        if(urls){
          
          for (var j = 0; j < urls.length; j++) {
            if (urls[j].includes("twitter.com")) {
              twitter=urls[j].split('?')[0]
              twitter.replace('https://twitter.com/','@')
              //break;
              break
            }
          }
        }
      }
      if(twitter){
        console.log('tw',twitter)
        const response = await notion.pages.update({
          page_id: row.id ,
          properties: { 'twitter': { url:twitter }, },
          });
          console.log(response)
      }
    }catch(e){
      
    }
  }

  async function  updateMeta(url){
    let url_icon=row.icon
    let url_cover=row.cover
    if(!url_icon?.external?.url || !url_cover?.external?.url){    
        let data=await  getMetaData(url).then((data) => {return data})
        console.log(data)
        //csv[i]['Metadesc']=(data.description==undefined?'':data.description)
        if(data.icon!=undefined)url_icon=data.icon
        if(data.cover!=undefined)url_cover=data.image

        let obj={page_id: row.id  }
        if(url_cover)obj.cover={external:{url:url_cover}}
        if(url_icon)obj.icon={external:{url:url_icon}}
        if(url_icon)obj.twitter={external:{url:url_icon}}
        if(obj.cover?.external || obj.icon?.external){
            const response2 = await notion.pages.update(obj)
            console.log(response2.properties.Title.title[0].plain_text)
        }
    }
  }

  