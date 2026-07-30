// Orange County, California cities served by ManHair Online.
// Lake Forest is the home studio (20 Heron). Distances are approximate drive
// distances from the studio, used in copy on programmatic city pages.

export interface Location {
  city: string;
  state: string;
  slug: string;
  county: string;
  zip: string;
  distance: string;
  /** Short, human descriptor used in unique intro copy. */
  note: string;
}

const locations: Location[] = [
  { city: "Lake Forest", state: "CA", slug: "lake-forest-ca", county: "Orange", zip: "92630", distance: "right here in town", note: "home of our private ManHair studio on Heron" },
  { city: "Mission Viejo", state: "CA", slug: "mission-viejo-ca", county: "Orange", zip: "92691", distance: "about 5 minutes", note: "just up the 5 from our studio" },
  { city: "Laguna Hills", state: "CA", slug: "laguna-hills-ca", county: "Orange", zip: "92653", distance: "about 5 minutes", note: "minutes from our Lake Forest studio" },
  { city: "Laguna Woods", state: "CA", slug: "laguna-woods-ca", county: "Orange", zip: "92637", distance: "about 7 minutes", note: "a short drive from our studio" },
  { city: "Aliso Viejo", state: "CA", slug: "aliso-viejo-ca", county: "Orange", zip: "92656", distance: "about 10 minutes", note: "neighboring South County community" },
  { city: "Laguna Niguel", state: "CA", slug: "laguna-niguel-ca", county: "Orange", zip: "92677", distance: "about 12 minutes", note: "a quick hop down the 73" },
  { city: "Rancho Santa Margarita", state: "CA", slug: "rancho-santa-margarita-ca", county: "Orange", zip: "92688", distance: "about 12 minutes", note: "just east in the foothills" },
  { city: "Irvine", state: "CA", slug: "irvine-ca", county: "Orange", zip: "92618", distance: "about 12 minutes", note: "a short drive up the 5" },
  { city: "Ladera Ranch", state: "CA", slug: "ladera-ranch-ca", county: "Orange", zip: "92694", distance: "about 12 minutes", note: "neighboring South County community" },
  { city: "Foothill Ranch", state: "CA", slug: "foothill-ranch-ca", county: "Orange", zip: "92610", distance: "about 8 minutes", note: "just minutes away" },
  { city: "Trabuco Canyon", state: "CA", slug: "trabuco-canyon-ca", county: "Orange", zip: "92679", distance: "about 12 minutes", note: "in the eastern foothills" },
  { city: "Dana Point", state: "CA", slug: "dana-point-ca", county: "Orange", zip: "92629", distance: "about 18 minutes", note: "on the South County coast" },
  { city: "San Juan Capistrano", state: "CA", slug: "san-juan-capistrano-ca", county: "Orange", zip: "92675", distance: "about 18 minutes", note: "down the 5 in South County" },
  { city: "San Clemente", state: "CA", slug: "san-clemente-ca", county: "Orange", zip: "92672", distance: "about 22 minutes", note: "on the southern OC coast" },
  { city: "Newport Beach", state: "CA", slug: "newport-beach-ca", county: "Orange", zip: "92660", distance: "about 18 minutes", note: "on the OC coast" },
  { city: "Costa Mesa", state: "CA", slug: "costa-mesa-ca", county: "Orange", zip: "92626", distance: "about 18 minutes", note: "a short drive up the 405" },
  { city: "Tustin", state: "CA", slug: "tustin-ca", county: "Orange", zip: "92780", distance: "about 16 minutes", note: "in central Orange County" },
  { city: "Santa Ana", state: "CA", slug: "santa-ana-ca", county: "Orange", zip: "92701", distance: "about 20 minutes", note: "the OC county seat" },
  { city: "Orange", state: "CA", slug: "orange-ca", county: "Orange", zip: "92866", distance: "about 22 minutes", note: "in central Orange County" },
  { city: "Anaheim", state: "CA", slug: "anaheim-ca", county: "Orange", zip: "92805", distance: "about 25 minutes", note: "up the 5 in North County" },
  { city: "Fountain Valley", state: "CA", slug: "fountain-valley-ca", county: "Orange", zip: "92708", distance: "about 22 minutes", note: "a short drive up the 405" },
  { city: "Huntington Beach", state: "CA", slug: "huntington-beach-ca", county: "Orange", zip: "92647", distance: "about 25 minutes", note: "on the OC coast" },
  { city: "Garden Grove", state: "CA", slug: "garden-grove-ca", county: "Orange", zip: "92840", distance: "about 25 minutes", note: "in central Orange County" },
  { city: "Westminster", state: "CA", slug: "westminster-ca", county: "Orange", zip: "92683", distance: "about 25 minutes", note: "a short drive up the 405" },
  { city: "Fullerton", state: "CA", slug: "fullerton-ca", county: "Orange", zip: "92831", distance: "about 30 minutes", note: "in North Orange County" },
  { city: "Brea", state: "CA", slug: "brea-ca", county: "Orange", zip: "92821", distance: "about 32 minutes", note: "at the north end of the county" },
  { city: "Placentia", state: "CA", slug: "placentia-ca", county: "Orange", zip: "92870", distance: "about 30 minutes", note: "in North County" },
  { city: "Yorba Linda", state: "CA", slug: "yorba-linda-ca", county: "Orange", zip: "92886", distance: "about 32 minutes", note: "in North Orange County" },
  { city: "Buena Park", state: "CA", slug: "buena-park-ca", county: "Orange", zip: "90620", distance: "about 30 minutes", note: "in North County" },
  { city: "La Habra", state: "CA", slug: "la-habra-ca", county: "Orange", zip: "90631", distance: "about 35 minutes", note: "at the north edge of the county" },
  { city: "Cypress", state: "CA", slug: "cypress-ca", county: "Orange", zip: "90630", distance: "about 30 minutes", note: "in West County" },
  { city: "Los Alamitos", state: "CA", slug: "los-alamitos-ca", county: "Orange", zip: "90720", distance: "about 30 minutes", note: "in West County" },
  { city: "Seal Beach", state: "CA", slug: "seal-beach-ca", county: "Orange", zip: "90740", distance: "about 30 minutes", note: "on the northern OC coast" },
  { city: "Stanton", state: "CA", slug: "stanton-ca", county: "Orange", zip: "90680", distance: "about 27 minutes", note: "in central Orange County" },
  { city: "La Palma", state: "CA", slug: "la-palma-ca", county: "Orange", zip: "90623", distance: "about 32 minutes", note: "in North County" },
  { city: "Villa Park", state: "CA", slug: "villa-park-ca", county: "Orange", zip: "92861", distance: "about 22 minutes", note: "in central Orange County" },
  { city: "Laguna Beach", state: "CA", slug: "laguna-beach-ca", county: "Orange", zip: "92651", distance: "about 18 minutes", note: "on the OC coast" },
  { city: "Coto de Caza", state: "CA", slug: "coto-de-caza-ca", county: "Orange", zip: "92679", distance: "about 14 minutes", note: "in the eastern foothills" },
];

export default locations;
