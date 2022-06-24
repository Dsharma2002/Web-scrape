const axios = require("axios");
const cheerio = require("cheerio");

// URL for test finding
const url = `https://www.amazon.ca/Comgrow-Creality-Printing-Function-220x220x250mm/dp/B07FFTHMMN/ref=sr_1_6?crid=4HO6V4V5PZLY&keywords=3d+printer&qid=1656038701&sprefix=3d+printe%2Caps%2C160&sr=8-6`;

// initialize item
const item = {name: "", price: "", link: "", rating: ""};

// async function to initiate scraping
async function scrape() {
    const {data} = await axios.get(url);
    const $ = cheerio.load(data);
    const product = $("div#titleSection");
    item.name = $(product).find("h1#title").text();
    // return finding
    console.log(item.name);
}

scrape();