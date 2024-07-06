const axios = require("axios");
const Cheerio = require("cheerio");
const fs = require("fs");

const url = "https://markets.businessinsider.com/commodities/oil-price";

const OilData = {};

async function scrapeOilData() {
  try {
    const { data: html } = await axios.get(url);
    const $ = Cheerio.load(html);

    $('.table__tr').each((i, product) => {
      const title = $(product).find('.table__td a').text().trim();
      const price = $(product).find('.table__td:nth-child(3)').text().trim();
      const percentage = $(product).find('.table__td:nth-child(5)').text().trim();
      const unit = $(product).find('.table__td:nth-child(6)').text().trim();
      const date = $(product).find('.table__td:nth-child(7)').text().trim();

      // Create product data only if any value is present and title is not empty
      if (title && (price || percentage || unit || date)) {
        const productData = {
          title,
          price,
          percentage,
          unit,
          date,
        };
        OilData[title] = productData;
      }
    });

    // Write OilData to JSON file
    fs.writeFile('OilData.json', JSON.stringify(OilData, null, 2), (error) => {
      if (error) {
        console.error('Error writing file:', error);
      } else {
        console.log('Oil Data saved to OilData.json');
      }
    });
  } catch (error) {
    console.error('Error scraping oil data:', error);
  }
}

scrapeOilData();
