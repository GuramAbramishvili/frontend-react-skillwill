const NUM_CONTACTS = 1000;

const firstNames = [
    "Andrew",
    "Leon",
    "Joana",
    "Ashely",
    "Marcus",
    "Janiya",
    "Ashton",
    "Myron",
    "Dejon",
    "Aaron",
    "Cornelius",
    "Clarence",
    "Kalli",
    "Demi",
    "Laney",
    "Charlie",
    "Daniela",
    "Nyasia",
    "Alora",
    "Marcel",
    "Jaylen",
    "Grady","Jensen","Candy","Catrina","Devan","Clarissa","Milan","Liliana","Duncan","Peyton","Christina","Micah","Holland","Mauricio","Cyrus","Vernon","Zaire","Darcy","Melanie","Devante","Jon","Gemma","Janice","Savanna","Carissa","Sydnie","Lynette","Quincy","Kale","Ammon","Xander","Alycia","Auston","Fredy","Yvonne","Shivani","Hunter","Hailee","Bridget","Liza","Jennie","Kristina","Tracy","Kalob","Kaylie","Jamarcus","Kasey","Gino","Kenny","Norma","Leyla","Keely","Ashli","Maliyah","Brennan","Sherry","Alejandro","Jude","Samson","Latrell","Dakota","Justice","Selene","Rick","Dejuan","Gage","Ingrid","Austin","Yasmin","Cheyanne","Jaron","Rosario","Karah","Cale","Clint","Tommy","Simone","Abigale","Isabela",
]


const lastNames = [
    "Long",
    "Redfiled",
    "Crooks",
    "Forrester",
    "Sheets",
    "Madsen","McKee","Schofield","Stratton","Rees","Hurt","Vidal","Ramos","Valentin","Condon","Keeler","Guinn","Ragan","Montes","Dorman","Booth","Betz","Langdon","Merchant","Harwood","Creel","Glover","Stepp","Mulligan","Hoskins","Earley","Woods","Fallon","Brinkley","Wofford","Grubbs","Broome","Sewell","Jacques","Wendt","Walls","Alcala","Hess","Fullerton","Santamaria","Olivas","Hummel","Brothers","Staples","Stacy","Jacobsen","Tillman","Kirk","Rudolph","Davila","Valenzuela","Rourke","Gorman","Helm","Leon","Camp","Devries","Lackey","Shin","Boyle","Nunes","Angel","Uribe","Schubert","Adkins","Tackett","Ali","Rocha","Keel","Boone","Guevara","Donnell","Metzger","Rosenthal","Reaves","Smith","Wyatt","Little","Bermudez","Templeton","Christopher","Joiner","Spencer","McCrary","Gillis","Smoot","Eller","Capps","Busby","Zook","Person","Coffey","Stearns","Hanlon","Clemons",
]


const rand = (max,min=0) => Math.floor(Math.random() * (max - min + 1)) + min;

const generateName = () => `${firstNames[rand(firstNames.length -1)]} ${lastNames[rand(lastNames.length -1)]}`

const generateNumber  = () => `+995-${rand(599-500)}-${String(rand(99)).padStart(2,"0")}-${String(rand(99)).padStart(2,"0")}-${String(rand(99)).padStart(2,"0")}`

const createContact = () => ({
    name: generateName(),
    phone: generateNumber()
})


export const compareNames = (contact1, contact2) => contact1.name.localeCompare(contact2.name)

const addKeys = (val, key) => ({ key, ...val})


export default Array.from({length: NUM_CONTACTS}, createContact).map(addKeys)