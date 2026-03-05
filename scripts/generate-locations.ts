import * as fs from "fs";
import * as path from "path";

interface MallSeed {
  mall: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  lat: number;
  lng: number;
}

const mallSeeds: MallSeed[] = [
  // Northeast (15)
  { mall: "King of Prussia Mall", address: "160 N Gulph Rd", city: "King of Prussia", state: "PA", zip: "19406", lat: 40.0891, lng: -75.389 },
  { mall: "Roosevelt Field", address: "630 Old Country Rd", city: "Garden City", state: "NY", zip: "11530", lat: 40.7275, lng: -73.6132 },
  { mall: "Palisades Center", address: "1000 Palisades Center Dr", city: "West Nyack", state: "NY", zip: "10994", lat: 41.0972, lng: -73.9538 },
  { mall: "Destiny USA", address: "9090 Destiny USA Dr", city: "Syracuse", state: "NY", zip: "13204", lat: 43.0625, lng: -76.1724 },
  { mall: "Walden Galleria", address: "1 Walden Galleria", city: "Buffalo", state: "NY", zip: "14225", lat: 42.9309, lng: -78.7506 },
  { mall: "Garden State Plaza", address: "1 Garden State Plaza", city: "Paramus", state: "NJ", zip: "07652", lat: 40.9166, lng: -74.0748 },
  { mall: "Menlo Park Mall", address: "55 Parsonage Rd", city: "Edison", state: "NJ", zip: "08837", lat: 40.5512, lng: -74.3374 },
  { mall: "Cherry Hill Mall", address: "2000 NJ-38", city: "Cherry Hill", state: "NJ", zip: "08002", lat: 39.9359, lng: -75.0118 },
  { mall: "Connecticut Post Mall", address: "1201 Boston Post Rd", city: "Milford", state: "CT", zip: "06460", lat: 41.2195, lng: -73.0174 },
  { mall: "Westfarms", address: "500 Westfarms Mall", city: "Farmington", state: "CT", zip: "06032", lat: 41.7285, lng: -72.7634 },
  { mall: "South Shore Plaza", address: "250 Granite St", city: "Braintree", state: "MA", zip: "02184", lat: 42.2182, lng: -71.0019 },
  { mall: "Natick Mall", address: "1245 Worcester St", city: "Natick", state: "MA", zip: "01760", lat: 42.3031, lng: -71.3816 },
  { mall: "Providence Place", address: "1 Providence Pl", city: "Providence", state: "RI", zip: "02903", lat: 41.8277, lng: -71.4153 },
  { mall: "Park City Center", address: "142 Park City Center", city: "Lancaster", state: "PA", zip: "17601", lat: 40.0578, lng: -76.3218 },
  { mall: "Lehigh Valley Mall", address: "250 Lehigh Valley Mall", city: "Whitehall", state: "PA", zip: "18052", lat: 40.6375, lng: -75.5358 },

  // Southeast (14)
  { mall: "Aventura Mall", address: "19501 Biscayne Blvd", city: "Aventura", state: "FL", zip: "33180", lat: 25.9579, lng: -80.1424 },
  { mall: "Sawgrass Mills", address: "12801 W Sunrise Blvd", city: "Sunrise", state: "FL", zip: "33323", lat: 26.1512, lng: -80.3222 },
  { mall: "The Florida Mall", address: "8001 S Orange Blossom Trail", city: "Orlando", state: "FL", zip: "32809", lat: 28.4492, lng: -81.3937 },
  { mall: "Brandon Town Center", address: "459 Brandon Town Center Mall", city: "Brandon", state: "FL", zip: "33511", lat: 27.9351, lng: -82.2862 },
  { mall: "Tysons Corner Center", address: "1961 Chain Bridge Rd", city: "Tysons", state: "VA", zip: "22102", lat: 38.9187, lng: -77.2311 },
  { mall: "Dulles Town Center", address: "21100 Dulles Town Cir", city: "Dulles", state: "VA", zip: "20166", lat: 39.0313, lng: -77.4195 },
  { mall: "Valley View Mall", address: "4802 Valley View Blvd NW", city: "Roanoke", state: "VA", zip: "24012", lat: 37.2834, lng: -79.9697 },
  { mall: "Arundel Mills", address: "7000 Arundel Mills Cir", city: "Hanover", state: "MD", zip: "21076", lat: 39.1528, lng: -76.7243 },
  { mall: "Columbia Mall", address: "10300 Little Patuxent Pkwy", city: "Columbia", state: "MD", zip: "21044", lat: 39.2112, lng: -76.8625 },
  { mall: "Lenox Square", address: "3393 Peachtree Rd NE", city: "Atlanta", state: "GA", zip: "30326", lat: 33.846, lng: -84.3619 },
  { mall: "Cumberland Mall", address: "2860 Cumberland Mall SE", city: "Atlanta", state: "GA", zip: "30339", lat: 33.8736, lng: -84.4694 },
  { mall: "SouthPark Mall", address: "4400 Sharon Rd", city: "Charlotte", state: "NC", zip: "28211", lat: 35.1493, lng: -80.8279 },
  { mall: "Hanes Mall", address: "3320 Silas Creek Pkwy", city: "Winston-Salem", state: "NC", zip: "27103", lat: 36.059, lng: -80.3231 },
  { mall: "Haywood Mall", address: "700 Haywood Rd", city: "Greenville", state: "SC", zip: "29607", lat: 34.8377, lng: -82.3655 },

  // Midwest (12)
  { mall: "Woodfield Mall", address: "5 Woodfield Mall", city: "Schaumburg", state: "IL", zip: "60173", lat: 42.0451, lng: -88.034 },
  { mall: "Oakbrook Center", address: "100 Oakbrook Center", city: "Oak Brook", state: "IL", zip: "60523", lat: 41.8492, lng: -87.9507 },
  { mall: "Fox Valley Mall", address: "195 Fox Valley Center Dr", city: "Aurora", state: "IL", zip: "60504", lat: 41.7506, lng: -88.2449 },
  { mall: "Mall of America", address: "60 E Broadway", city: "Bloomington", state: "MN", zip: "55425", lat: 44.8549, lng: -93.2422 },
  { mall: "Rosedale Center", address: "1595 MN-36", city: "Roseville", state: "MN", zip: "55113", lat: 45.0096, lng: -93.1697 },
  { mall: "Beachwood Place", address: "26300 Cedar Rd", city: "Beachwood", state: "OH", zip: "44122", lat: 41.4642, lng: -81.5012 },
  { mall: "Easton Town Center", address: "160 Easton Town Center", city: "Columbus", state: "OH", zip: "43219", lat: 40.0507, lng: -82.9135 },
  { mall: "Great Lakes Crossing", address: "4000 Baldwin Rd", city: "Auburn Hills", state: "MI", zip: "48326", lat: 42.674, lng: -83.2426 },
  { mall: "Twelve Oaks Mall", address: "27500 Novi Rd", city: "Novi", state: "MI", zip: "48377", lat: 42.4873, lng: -83.4711 },
  { mall: "Castleton Square", address: "6020 E 82nd St", city: "Indianapolis", state: "IN", zip: "46250", lat: 39.9063, lng: -86.0626 },
  { mall: "Mayfair Mall", address: "2500 N Mayfair Rd", city: "Wauwatosa", state: "WI", zip: "53226", lat: 43.0509, lng: -88.0627 },
  { mall: "Oak Park Mall", address: "11461 W 95th St", city: "Overland Park", state: "KS", zip: "66214", lat: 38.9408, lng: -94.6871 },

  // Texas & South (10)
  { mall: "Galleria Dallas", address: "13350 Dallas Pkwy", city: "Dallas", state: "TX", zip: "75240", lat: 32.9342, lng: -96.8217 },
  { mall: "NorthPark Center", address: "8687 N Central Expy", city: "Dallas", state: "TX", zip: "75225", lat: 32.8681, lng: -96.7727 },
  { mall: "The Galleria (Houston)", address: "5085 Westheimer Rd", city: "Houston", state: "TX", zip: "77056", lat: 29.7389, lng: -95.4617 },
  { mall: "Memorial City Mall", address: "303 Memorial City Way", city: "Houston", state: "TX", zip: "77024", lat: 29.7755, lng: -95.5547 },
  { mall: "North Star Mall", address: "7400 San Pedro Ave", city: "San Antonio", state: "TX", zip: "78216", lat: 29.5381, lng: -98.4895 },
  { mall: "Barton Creek Square", address: "2901 S Capital of Texas Hwy", city: "Austin", state: "TX", zip: "78746", lat: 30.2648, lng: -97.7966 },
  { mall: "Ridgeland Mall", address: "200 Ring Rd", city: "Ridgeland", state: "MS", zip: "39157", lat: 32.4169, lng: -90.1373 },
  { mall: "Opry Mills", address: "433 Opry Mills Dr", city: "Nashville", state: "TN", zip: "37214", lat: 36.2053, lng: -86.6934 },
  { mall: "Wolfchase Galleria", address: "2760 N Germantown Pkwy", city: "Memphis", state: "TN", zip: "38133", lat: 35.2277, lng: -89.7815 },
  { mall: "Lakeside Shopping Center", address: "3301 Veterans Memorial Blvd", city: "Metairie", state: "LA", zip: "70002", lat: 30.0065, lng: -90.1567 },

  // West Coast (13)
  { mall: "South Coast Plaza", address: "3333 Bristol St", city: "Costa Mesa", state: "CA", zip: "92626", lat: 33.6914, lng: -117.8887 },
  { mall: "Del Amo Fashion Center", address: "3525 W Carson St", city: "Torrance", state: "CA", zip: "90503", lat: 33.8312, lng: -118.3525 },
  { mall: "Valley Fair", address: "2855 Stevens Creek Blvd", city: "Santa Clara", state: "CA", zip: "95050", lat: 37.3245, lng: -121.9452 },
  { mall: "Westfield Galleria at Roseville", address: "1151 Galleria Blvd", city: "Roseville", state: "CA", zip: "95678", lat: 38.7718, lng: -121.2686 },
  { mall: "Ontario Mills", address: "1 Mills Cir", city: "Ontario", state: "CA", zip: "91764", lat: 34.0589, lng: -117.5953 },
  { mall: "Bellevue Square", address: "575 Bellevue Square", city: "Bellevue", state: "WA", zip: "98004", lat: 47.6162, lng: -122.2037 },
  { mall: "Westfield Southcenter", address: "2800 Southcenter Mall", city: "Tukwila", state: "WA", zip: "98188", lat: 47.4591, lng: -122.2573 },
  { mall: "Washington Square", address: "9585 SW Washington Square Rd", city: "Portland", state: "OR", zip: "97223", lat: 45.4493, lng: -122.7812 },
  { mall: "Chandler Fashion Center", address: "3111 W Chandler Blvd", city: "Chandler", state: "AZ", zip: "85226", lat: 33.3024, lng: -111.8723 },
  { mall: "Scottsdale Fashion Square", address: "7014 E Camelback Rd", city: "Scottsdale", state: "AZ", zip: "85251", lat: 33.5027, lng: -111.9275 },
  { mall: "Fashion Show Mall", address: "3200 S Las Vegas Blvd", city: "Las Vegas", state: "NV", zip: "89109", lat: 36.1271, lng: -115.1705 },
  { mall: "Park Meadows", address: "8401 Park Meadows Center Dr", city: "Lone Tree", state: "CO", zip: "80124", lat: 39.5633, lng: -104.8764 },
  { mall: "FlatIron Crossing", address: "1 W Flatiron Crossing Dr", city: "Broomfield", state: "CO", zip: "80021", lat: 39.9273, lng: -105.1317 },
];

const brands = [
  { id: "china-star-buffet", name: "China Star Buffet" },
  { id: "jade-wok", name: "Jade Wok" },
  { id: "lucky-bowl", name: "Lucky Bowl Express" },
  { id: "golden-dragon", name: "Golden Dragon Grill" },
];

// Area codes by state
const areaCodes: Record<string, string[]> = {
  PA: ["215", "610", "717"], NY: ["212", "516", "718", "315", "716"],
  NJ: ["201", "732", "856"], CT: ["203", "860"], MA: ["617", "781", "508"],
  RI: ["401"], FL: ["305", "954", "407", "813"], VA: ["703", "540"],
  MD: ["410", "443"], GA: ["404", "770"], NC: ["704", "336"],
  SC: ["864"], IL: ["312", "847", "630"], MN: ["612", "651"],
  OH: ["216", "614"], MI: ["248", "248"], IN: ["317"],
  WI: ["414"], KS: ["913"], TX: ["214", "713", "210", "512"],
  MS: ["601"], TN: ["615", "901"], LA: ["504"],
  CA: ["714", "310", "408", "916", "909"], WA: ["425", "206"],
  OR: ["503"], AZ: ["480"], NV: ["702"], CO: ["303", "720"],
};

function randomPhone(state: string): string {
  const codes = areaCodes[state] || ["800"];
  const areaCode = codes[Math.floor(Math.random() * codes.length)];
  const mid = String(Math.floor(Math.random() * 900) + 100);
  const last = String(Math.floor(Math.random() * 9000) + 1000);
  return `(${areaCode}) ${mid}-${last}`;
}

function slugify(text: string): string {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function assignBrand(index: number): typeof brands[number] {
  // ~70% China Star, ~12% Jade Wok, ~10% Lucky Bowl, ~8% Golden Dragon
  if (index < 45) return brands[0];
  if (index < 53) return brands[1];
  if (index < 59) return brands[2];
  return brands[3];
}

const locations = mallSeeds.map((seed, i) => {
  const brand = assignBrand(i);
  const citySlug = slugify(seed.city);
  return {
    id: `${slugify(brand.name)}-${citySlug}-${slugify(seed.mall)}`,
    name: brand.name,
    mall: seed.mall,
    address: seed.address,
    city: seed.city,
    state: seed.state,
    zip: seed.zip,
    lat: seed.lat,
    lng: seed.lng,
    phone: randomPhone(seed.state),
    hours: {
      monday: "11:00 AM - 9:30 PM",
      tuesday: "11:00 AM - 9:30 PM",
      wednesday: "11:00 AM - 9:30 PM",
      thursday: "11:00 AM - 9:30 PM",
      friday: "11:00 AM - 10:30 PM",
      saturday: "11:00 AM - 10:30 PM",
      sunday: "11:30 AM - 9:00 PM",
    },
    brandId: brand.id,
    doordashUrl: `https://www.doordash.com/store/${slugify(brand.name)}-${citySlug}/`,
    uberEatsUrl: `https://www.ubereats.com/store/${slugify(brand.name)}-${citySlug}/`,
    isOpen: true,
  };
});

const outPath = path.join(__dirname, "..", "data", "locations.json");
fs.writeFileSync(outPath, JSON.stringify(locations, null, 2));
console.log(`Generated ${locations.length} locations -> ${outPath}`);
