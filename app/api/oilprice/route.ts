import { NextRequest, NextResponse } from "next/server";
import Cheerio from "cheerio";

interface OilProduct {
  title: string;
  price: string;
  percentage: string;
  unit: string;
  date: string;
}

async function scrapeOilData(): Promise<OilProduct[]> {
  try {
    const OilData: OilProduct[] = [];

    const response = await fetch(
      "https://markets.businessinsider.com/commodities/oil-price"
    );  
    const html = await response.text();
    const $ = Cheerio.load(html);


    $('.table__tr').each((i, product) => {
      const title = $(product).find('.table__td a').text().trim();
      const price = $(product).find('.table__td:nth-child(3)').text().trim();
      const percentage = $(product).find('.table__td:nth-child(5)').text().trim();
      const unit = $(product).find('.table__td:nth-child(6)').text().trim();
      const date = $(product).find('.table__td:nth-child(7)').text().trim();

      if (title && (price || percentage || unit || date)) {
        const productData: OilProduct = {
          title,
          price,
          percentage,
          unit,
          date,
        };
        OilData.push(productData);
      }
    });

    return OilData; 
  } catch (error) {
    console.error('Error scraping oil data:', error);
    throw error; 
  }
}

export async function GET(request: NextRequest) {
    try {
      const OilData: OilProduct[] = await scrapeOilData();
      return NextResponse.json(OilData);  
    } catch (error) {
      console.error('Error scraping oil data:', error);
      return new Response('Error fetching oil data.', { status: 500 });  
    }

}
