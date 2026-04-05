export interface Car {
  id: string;
  name: string;
  category: string;
}

export interface Track {
  id: string;
  name: string;
  country: string;
}

export interface SimulatorData {
  cars: Car[];
  tracks: Track[];
}

// iRacing - Carros organizados alfabeticamente
const iRacingCars: Car[] = [
  // Formula
  { id: "dallara-dw12", name: "Dallara DW12", category: "Formula" },
  { id: "dallara-ir01", name: "Dallara iR-01", category: "Formula" },
  { id: "dallara-ir18", name: "Dallara IR18 (IndyCar)", category: "Formula" },
  { id: "formula-renault-2", name: "Formula Renault 2.0", category: "Formula" },
  { id: "formula-renault-3.5", name: "Formula Renault 3.5", category: "Formula" },
  { id: "formula-vee", name: "Formula Vee", category: "Formula" },
  { id: "mclaren-mp4-30", name: "McLaren MP4-30 F1", category: "Formula" },
  { id: "mercedes-w12", name: "Mercedes-AMG W12 F1", category: "Formula" },
  { id: "mercedes-w13", name: "Mercedes-AMG W13 F1", category: "Formula" },
  { id: "pro-mazda", name: "Pro Mazda", category: "Formula" },
  { id: "skipbarber-2000", name: "Skip Barber Formula 2000", category: "Formula" },
  { id: "super-formula-sf23", name: "Super Formula SF23", category: "Formula" },
  { id: "usf-2000", name: "USF 2000", category: "Formula" },
  { id: "usf-pro-2000", name: "USF Pro 2000", category: "Formula" },
  { id: "williams-fw31", name: "Williams FW31 F1", category: "Formula" },
  
  // GT3 Cars
  { id: "aston-martin-vantage-gt3", name: "Aston Martin Vantage GT3", category: "GT3" },
  { id: "audi-r8-lms-gt3", name: "Audi R8 LMS GT3", category: "GT3" },
  { id: "audi-r8-lms-gt3-evo2", name: "Audi R8 LMS GT3 Evo II", category: "GT3" },
  { id: "bmw-m4-gt3", name: "BMW M4 GT3", category: "GT3" },
  { id: "ferrari-296-gt3", name: "Ferrari 296 GT3", category: "GT3" },
  { id: "ferrari-488-gt3-evo", name: "Ferrari 488 GT3 Evo 2020", category: "GT3" },
  { id: "lamborghini-huracan-gt3-evo2", name: "Lamborghini Huracán GT3 EVO2", category: "GT3" },
  { id: "mclaren-mp4-12c-gt3", name: "McLaren MP4-12C GT3", category: "GT3" },
  { id: "mclaren-720s-gt3", name: "McLaren 720S GT3", category: "GT3" },
  { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3 2020", category: "GT3" },
  { id: "porsche-911-gt3-r", name: "Porsche 911 GT3 R (991)", category: "GT3" },
  { id: "porsche-992-gt3-r", name: "Porsche 911 GT3 R (992)", category: "GT3" },
  
  // GT4 Cars
  { id: "aston-vantage-gt4", name: "Aston Martin Vantage GT4", category: "GT4" },
  { id: "bmw-m4-gt4", name: "BMW M4 GT4", category: "GT4" },
  { id: "mclaren-570s-gt4", name: "McLaren 570S GT4", category: "GT4" },
  { id: "porsche-718-cayman-gt4", name: "Porsche 718 Cayman GT4 Clubsport MR", category: "GT4" },
  
  // GTP/LMDh/Prototype
  { id: "acura-arx-06", name: "Acura ARX-06 GTP", category: "Prototype" },
  { id: "bmw-m-hybrid", name: "BMW M Hybrid V8", category: "Prototype" },
  { id: "cadillac-v-series", name: "Cadillac V-Series.R", category: "Prototype" },
  { id: "dallara-p217", name: "Dallara P217 LMP2", category: "Prototype" },
  { id: "lamborghini-sc63", name: "Lamborghini SC63", category: "Prototype" },
  { id: "porsche-963", name: "Porsche 963 GTP", category: "Prototype" },
  
  // NASCAR
  { id: "nascar-cup-camaro", name: "NASCAR Cup Series Chevrolet Camaro ZL1", category: "NASCAR" },
  { id: "nascar-cup-camry", name: "NASCAR Cup Series Toyota Camry", category: "NASCAR" },
  { id: "nascar-cup-mustang", name: "NASCAR Cup Series Ford Mustang", category: "NASCAR" },
  { id: "nascar-nextgen-camaro", name: "NASCAR Next Gen Chevrolet Camaro ZL1", category: "NASCAR" },
  { id: "nascar-nextgen-camry", name: "NASCAR Next Gen Toyota Camry", category: "NASCAR" },
  { id: "nascar-nextgen-mustang", name: "NASCAR Next Gen Ford Mustang", category: "NASCAR" },
  { id: "nascar-truck-f150", name: "NASCAR Truck Series Ford F150", category: "NASCAR" },
  { id: "nascar-truck-ram", name: "NASCAR Truck Series RAM", category: "NASCAR" },
  { id: "nascar-truck-silverado", name: "NASCAR Truck Series Chevrolet Silverado", category: "NASCAR" },
  { id: "nascar-truck-tundra", name: "NASCAR Truck Series Toyota Tundra TRD Pro", category: "NASCAR" },
  { id: "nascar-xfinity-camaro", name: "NASCAR Xfinity Chevrolet Camaro", category: "NASCAR" },
  { id: "nascar-xfinity-mustang", name: "NASCAR Xfinity Ford Mustang", category: "NASCAR" },
  { id: "nascar-xfinity-supra", name: "NASCAR Xfinity Toyota Supra", category: "NASCAR" },
  
  // Road Cars / Sports Cars
  { id: "cadillac-ctsv", name: "Cadillac CTS-V", category: "Road Car" },
  { id: "corvette-c8-stingray", name: "Chevrolet Corvette C8 Stingray", category: "Road Car" },
  { id: "mazda-mx5-cup", name: "Mazda MX-5 Cup", category: "Cup" },
  { id: "porsche-911-gt3-cup", name: "Porsche 911 GT3 Cup (992)", category: "Cup" },
  { id: "porsche-911-cup-992-2", name: "Porsche 911 Cup (992.2)", category: "Cup" },
  { id: "toyota-gr86", name: "Toyota GR86", category: "Road Car" },
  
  // TCR
  { id: "audi-rs3-lms-tcr", name: "Audi RS3 LMS TCR", category: "TCR" },
  { id: "audi-rs3-lms-gen2-tcr", name: "Audi RS3 LMS Gen2 TCR", category: "TCR" },
  { id: "honda-civic-type-r-tcr", name: "Honda Civic Type R TCR", category: "TCR" },
  { id: "hyundai-elantra-n-tcr", name: "Hyundai Elantra N TCR", category: "TCR" },
  
  // V8 Supercars
  { id: "supercars-camaro", name: "Supercars Chevrolet Camaro ZL1", category: "V8 Supercars" },
  { id: "supercars-mustang", name: "Supercars Ford Mustang GT", category: "V8 Supercars" },

  // RallyCross
  { id: "fia-cross-car", name: "FIA Cross Car", category: "RallyCross" },
].sort((a, b) => a.name.localeCompare(b.name));

const iRacingTracks: Track[] = [
  { id: "atlanta-oval", name: "Atlanta Motor Speedway", country: "USA" },
  { id: "autopolis", name: "Autopolis", country: "Japan" },
  { id: "interlagos", name: "Autódromo José Carlos Pace (Interlagos)", country: "Brazil" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "barber", name: "Barber Motorsports Park", country: "USA" },
  { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
  { id: "bristol", name: "Bristol Motor Speedway", country: "USA" },
  { id: "charlotte", name: "Charlotte Motor Speedway", country: "USA" },
  { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "le-mans", name: "Circuit de la Sarthe (24h Le Mans)", country: "France" },
  { id: "cota", name: "Circuit of The Americas", country: "USA" },
  { id: "zandvoort", name: "Circuit Park Zandvoort", country: "Netherlands" },
  { id: "darlington", name: "Darlington Raceway", country: "USA" },
  { id: "daytona-oval", name: "Daytona International Speedway - Oval", country: "USA" },
  { id: "daytona-road", name: "Daytona International Speedway - Road Course", country: "USA" },
  { id: "donnington", name: "Donington Park", country: "United Kingdom" },
  { id: "fuji", name: "Fuji Speedway", country: "Japan" },
  { id: "hockenheim", name: "Hockenheimring", country: "Germany" },
  { id: "homestead", name: "Homestead Miami Speedway", country: "USA" },
  { id: "hungaroring", name: "Hungaroring", country: "Hungary" },
  { id: "indianapolis-oval", name: "Indianapolis Motor Speedway - Oval", country: "USA" },
  { id: "indianapolis-road", name: "Indianapolis Motor Speedway - Road Course", country: "USA" },
  { id: "kansas", name: "Kansas Speedway", country: "USA" },
  { id: "kyalami", name: "Kyalami Grand Prix Circuit", country: "South Africa" },
  { id: "lime-rock", name: "Lime Rock Park", country: "USA" },
  { id: "martinsville", name: "Martinsville Speedway", country: "USA" },
  { id: "mid-ohio", name: "Mid-Ohio Sports Car Course", country: "USA" },
  { id: "bathurst", name: "Mount Panorama Circuit (Bathurst)", country: "Australia" },
  { id: "motegi", name: "Mobility Resort Motegi", country: "Japan" },
  { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
  { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
  { id: "oulton-park", name: "Oulton Park", country: "United Kingdom" },
  { id: "phillip-island", name: "Phillip Island Circuit", country: "Australia" },
  { id: "phoenix", name: "Phoenix Raceway", country: "USA" },
  { id: "pocono", name: "Pocono Raceway", country: "USA" },
  { id: "portland", name: "Portland International Raceway", country: "USA" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "road-america", name: "Road America", country: "USA" },
  { id: "road-atlanta", name: "Road Atlanta", country: "USA" },
  { id: "sebring", name: "Sebring International Raceway", country: "USA" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "snetterton", name: "Snetterton Circuit", country: "United Kingdom" },
  { id: "sonoma", name: "Sonoma Raceway", country: "USA" },
  { id: "suzuka", name: "Suzuka International Racing Course", country: "Japan" },
  { id: "talladega", name: "Talladega Superspeedway", country: "USA" },
  { id: "texas", name: "Texas Motor Speedway", country: "USA" },
  { id: "vir", name: "VIRginia International Raceway", country: "USA" },
  { id: "watkins-glen", name: "Watkins Glen International", country: "USA" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
].sort((a, b) => a.name.localeCompare(b.name));

// Automobilista 2 - Complete car list (base + all DLCs) organized alphabetically
const automobilista2Cars: Car[] = [
  // ARC Camaro
  { id: "arc-camaro", name: "Aussie Racing Camaro", category: "ARC Camaro" },

  // Caterham
  { id: "caterham-620r", name: "Caterham 620R", category: "Road Car" },
  { id: "caterham-academy", name: "Caterham Academy", category: "Road Car" },
  { id: "caterham-superlight", name: "Caterham Superlight", category: "Road Car" },
  { id: "caterham-supersport", name: "Caterham Supersport", category: "Road Car" },

  // Copa Classic B
  { id: "chevette-classic-b", name: "Chevrolet Chevette (Copa Classic B)", category: "Copa Classic" },
  { id: "gol-classic-b", name: "Gol Classic B", category: "Copa Classic" },
  { id: "mini-cooper-1965-b", name: "MINI Cooper S 1965 B", category: "Copa Classic" },
  { id: "passat-classic-b", name: "Passat Classic B", category: "Copa Classic" },
  { id: "puma-gte-classic-b", name: "Puma GTE (Copa Classic B)", category: "Copa Classic" },
  { id: "uno-classic-b", name: "Uno Classic B", category: "Copa Classic" },

  // Copa Classic FL
  { id: "fusca-classic-fl", name: "Fusca Classic FL", category: "Copa Classic" },
  { id: "gol-classic-fl", name: "Gol Classic FL", category: "Copa Classic" },
  { id: "passat-classic-fl", name: "Passat Classic FL", category: "Copa Classic" },
  { id: "puma-gtb-classic-fl", name: "Puma GTB (Copa Classic FL)", category: "Copa Classic" },

  // Copa Fusca / Montana / Uno
  { id: "copa-fusca", name: "Copa Fusca", category: "Copa" },
  { id: "copa-montana", name: "Copa Montana", category: "Copa" },
  { id: "copa-uno", name: "Copa Uno", category: "Copa" },

  // Copa Truck
  { id: "iveco-stralis", name: "Iveco Stralis (Copa Truck)", category: "Truck" },
  { id: "man-tgx", name: "MAN TGX (Copa Truck)", category: "Truck" },
  { id: "mercedes-actros", name: "Mercedes-Benz Actros (Copa Truck)", category: "Truck" },
  { id: "vw-constellation", name: "Volkswagen Constellation (Copa Truck)", category: "Truck" },
  { id: "vulkan-truck", name: "Vulkan Truck (Copa Truck)", category: "Truck" },

  // DPI
  { id: "cadillac-dpi-vr", name: "Cadillac DPi-VR", category: "DPI" },

  // Formula Edge
  { id: "f-edge-v12", name: "F-Edge Model 1 (V12)", category: "Formula" },
  { id: "f-edge-v10", name: "F-Edge Model 2 (V10)", category: "Formula" },
  { id: "f-edge-v8", name: "F-Edge Model 3 (V8)", category: "Formula" },

  // Formula HiTech Gen1
  { id: "f-hitech-gen1-m1", name: "Formula HiTech Gen1 Model 1", category: "Formula" },
  { id: "f-hitech-gen1-m2", name: "Formula HiTech Gen1 Model 2", category: "Formula" },
  { id: "f-hitech-gen1-m3", name: "Formula HiTech Gen1 Model 3", category: "Formula" },
  { id: "f-hitech-gen1-m4", name: "Formula HiTech Gen1 Model 4", category: "Formula" },
  { id: "mclaren-mp4-7a", name: "McLaren MP4/7A", category: "Formula" },

  // Formula HiTech Gen2
  { id: "f-hitech-gen2-m1", name: "Formula HiTech Gen2 Model 1", category: "Formula" },
  { id: "f-hitech-gen2-m2", name: "Formula HiTech Gen2 Model 2", category: "Formula" },
  { id: "f-hitech-gen2-m3", name: "Formula HiTech Gen2 Model 3", category: "Formula" },
  { id: "mclaren-mp4-8", name: "McLaren Cosworth MP4/8", category: "Formula" },

  // F3 Brasil
  { id: "dallara-f301", name: "Dallara F301 (F3 Brasil)", category: "Formula" },
  { id: "dallara-f309", name: "Dallara F309 (F3 Brasil)", category: "Formula" },

  // Formula Classic Gen1-4
  { id: "f-classic-gen1-m1", name: "Formula Classic Gen1 Model 1", category: "Historic Formula" },
  { id: "f-classic-gen1-m2", name: "Formula Classic Gen1 Model 2", category: "Historic Formula" },
  { id: "lotus-98t", name: "Lotus Renault 98T", category: "Historic Formula" },
  { id: "f-classic-gen2-m1", name: "Formula Classic Gen2 Model 1", category: "Historic Formula" },
  { id: "f-classic-gen2-m2", name: "Formula Classic Gen2 Model 2", category: "Historic Formula" },
  { id: "f-classic-gen2-m3", name: "Formula Classic Gen2 Model 3", category: "Historic Formula" },
  { id: "mclaren-mp4-4", name: "McLaren Honda MP4/4", category: "Historic Formula" },
  { id: "f-classic-gen3-m1", name: "Formula Classic Gen3 Model 1", category: "Historic Formula" },
  { id: "f-classic-gen3-m2", name: "Formula Classic Gen3 Model 2", category: "Historic Formula" },
  { id: "f-classic-gen3-m3", name: "Formula Classic Gen3 Model 3", category: "Historic Formula" },
  { id: "f-classic-gen3-m4", name: "Formula Classic Gen3 Model 4", category: "Historic Formula" },
  { id: "mclaren-mp4-5b", name: "McLaren MP4/5B", category: "Historic Formula" },
  { id: "f-classic-gen4-m1", name: "Formula Classic Gen4 Model 1", category: "Historic Formula" },
  { id: "f-classic-gen4-m2", name: "Formula Classic Gen4 Model 2", category: "Historic Formula" },
  { id: "f-classic-gen4-m3", name: "Formula Classic Gen4 Model 3", category: "Historic Formula" },
  { id: "mclaren-mp4-6", name: "McLaren Honda MP4/6", category: "Historic Formula" },

  // Formula Dirt
  { id: "formula-dirt", name: "Formula Dirt", category: "Formula" },

  // Formula Inter / Junior
  { id: "formula-inter", name: "Formula Inter MG-15", category: "Formula" },
  { id: "formula-junior", name: "Formula Junior", category: "Formula" },

  // Formula V8 Gen3
  { id: "formula-v8-gen3", name: "Formula V8 Gen3", category: "Formula" },

  // Formula Retro Gen1
  { id: "brabham-bt44", name: "Brabham BT44", category: "Historic Formula" },
  { id: "f-retro-v12", name: "Formula Retro V12", category: "Historic Formula" },
  { id: "f-retro-v8", name: "Formula Retro V8", category: "Historic Formula" },
  { id: "lotus-72e", name: "Lotus 72E", category: "Historic Formula" },
  { id: "mclaren-m23", name: "McLaren M23", category: "Historic Formula" },

  // Formula Retro Gen2
  { id: "brabham-bt46b", name: "Brabham Alfa Romeo BT46B", category: "Historic Formula" },
  { id: "brabham-bt49", name: "Brabham Cosworth BT49", category: "Historic Formula" },
  { id: "f-retro-gen2", name: "Formula Retro Gen2", category: "Historic Formula" },
  { id: "lotus-79", name: "Lotus 79", category: "Historic Formula" },

  // Formula Retro Gen3
  { id: "brabham-bt52", name: "Brabham BMW BT52", category: "Historic Formula" },
  { id: "f-retro-gen3-dfy", name: "Formula Retro Gen3 DFY", category: "Historic Formula" },
  { id: "f-retro-gen3-turbo", name: "Formula Retro Gen3 Turbo", category: "Historic Formula" },
  { id: "mclaren-mp4-1c", name: "McLaren Cosworth MP4/1C", category: "Historic Formula" },

  // Formula Trainer
  { id: "formula-trainer", name: "Formula Trainer", category: "Formula" },
  { id: "formula-trainer-adv", name: "Formula Trainer Advanced", category: "Formula" },

  // Formula Hybrid Gen1-3
  { id: "f-hybrid-gen1", name: "Formula Hybrid Gen1", category: "Formula" },
  { id: "f-hybrid-gen2", name: "Formula Ultimate Hybrid Gen2", category: "Formula" },
  { id: "f-hybrid-gen3", name: "Formula Ultimate Hybrid Gen3", category: "Formula" },

  // Formula USA 2023
  { id: "f-usa-2023", name: "Formula USA 2023 (IndyCar)", category: "Formula" },

  // Formula USA Gen1
  { id: "lola-t95-ford", name: "Lola T95/00 Ford-Cosworth", category: "Historic Formula" },
  { id: "lola-t95-merc", name: "Lola T95/00 Mercedes-Benz", category: "Historic Formula" },
  { id: "reynard-95i-ford", name: "Reynard 95i Ford-Cosworth", category: "Historic Formula" },
  { id: "reynard-95i-honda", name: "Reynard 95i Honda", category: "Historic Formula" },
  { id: "reynard-95i-merc", name: "Reynard 95i Mercedes-Benz", category: "Historic Formula" },

  // Formula USA Gen2
  { id: "lola-t98-ford", name: "Lola T98/00 Ford-Cosworth", category: "Historic Formula" },
  { id: "reynard-98i-ford", name: "Reynard 98i Ford-Cosworth", category: "Historic Formula" },
  { id: "reynard-98i-honda", name: "Reynard 98i Honda", category: "Historic Formula" },
  { id: "reynard-98i-merc", name: "Reynard 98i Mercedes-Benz", category: "Historic Formula" },
  { id: "reynard-98i-toyota", name: "Reynard 98i Toyota", category: "Historic Formula" },
  { id: "swift-009c-ford", name: "Swift 009c Ford-Cosworth", category: "Historic Formula" },

  // Formula USA Gen3
  { id: "lola-b2k00-ford", name: "Lola B2K/00 Ford-Cosworth", category: "Historic Formula" },
  { id: "lola-b2k00-merc", name: "Lola B2K/00 Mercedes-Benz", category: "Historic Formula" },
  { id: "lola-b2k00-toyota", name: "Lola B2K/00 Toyota", category: "Historic Formula" },
  { id: "reynard-2ki-ford", name: "Reynard 2Ki Ford-Cosworth", category: "Historic Formula" },
  { id: "reynard-2ki-honda", name: "Reynard 2Ki Honda", category: "Historic Formula" },
  { id: "reynard-2ki-merc", name: "Reynard 2Ki Mercedes-Benz", category: "Historic Formula" },
  { id: "reynard-2ki-toyota", name: "Reynard 2Ki Toyota", category: "Historic Formula" },

  // Formula V10 Gen1/Gen2
  { id: "f-v10-gen1", name: "Formula V10 Gen1", category: "Historic Formula" },
  { id: "mclaren-mp4-12", name: "McLaren-Mercedes MP4/12", category: "Historic Formula" },
  { id: "f-v10-gen2", name: "Formula V10 Gen2", category: "Historic Formula" },

  // Formula Vee Gen1/Gen2
  { id: "formula-vee", name: "Formula Vee", category: "Formula" },
  { id: "formula-vee-fin", name: "Formula Vee + Fin", category: "Formula" },
  { id: "formula-vee-gen2", name: "Formula Vee Gen2", category: "Formula" },

  // Formula Vintage Gen1/Gen2
  { id: "f-vintage-gen1-m1", name: "Formula Vintage Gen1 Model 1", category: "Historic Formula" },
  { id: "f-vintage-gen1-m2", name: "Formula Vintage Gen1 Model 2", category: "Historic Formula" },
  { id: "brabham-bt26a", name: "Brabham BT26A", category: "Historic Formula" },
  { id: "f-vintage-gen2-m1", name: "Formula Vintage Gen2 Model 1", category: "Historic Formula" },
  { id: "f-vintage-gen2-m2", name: "Formula Vintage Gen2 Model 2", category: "Historic Formula" },
  { id: "lotus-49c", name: "Lotus 49C", category: "Historic Formula" },

  // Ginetta
  { id: "ginetta-g40-cup", name: "Ginetta G40 Cup", category: "GT5" },
  { id: "ginetta-g55-gt4", name: "Ginetta G55 GT4 Supercup", category: "GT4" },

  // German Group A
  { id: "audi-v8-quattro-dtm", name: "Audi V8 Quattro DTM", category: "Group A" },
  { id: "bmw-m3-evo-groupa", name: "BMW M3 Sport Evo (Group A)", category: "Group A" },
  { id: "mercedes-190e-evo2", name: "Mercedes-Benz 190E 2.5-16 Evo II DTM", category: "Group A" },

  // Group C
  { id: "corvette-gtp", name: "Chevrolet Corvette GTP", category: "Group C" },
  { id: "nissan-r89c", name: "Nissan R89C", category: "Group C" },
  { id: "porsche-962c", name: "Porsche 962C", category: "Group C" },
  { id: "sauber-c9", name: "Sauber Mercedes C9", category: "Group C" },

  // GT Classics
  { id: "corvette-c3r", name: "Chevrolet Corvette C3-R", category: "GT Classics" },
  { id: "corvette-c3r-conv", name: "Chevrolet Corvette C3-R Convertible", category: "GT Classics" },
  { id: "porsche-911-rsr-74", name: "Porsche 911 RSR 74", category: "GT Classics" },

  // GT Open
  { id: "ginetta-g55-gt3", name: "Ginetta G55 GT3", category: "GT Open" },
  { id: "ultima-gtr-race", name: "Ultima GTR Race", category: "GT Open" },

  // GT1
  { id: "mclaren-f1-gtr", name: "McLaren F1 GTR", category: "GT1" },
  { id: "mercedes-clk-lm", name: "Mercedes-Benz CLK LM", category: "GT1" },
  { id: "nissan-r390-gt1", name: "Nissan R390 GT1", category: "GT1" },
  { id: "porsche-911-gt1-98", name: "Porsche 911 GT1-98", category: "GT1" },

  // GT1 2005
  { id: "aston-dbr9", name: "Aston Martin DBR9", category: "GT1 2005" },
  { id: "corvette-c5r", name: "Chevrolet Corvette C5-R", category: "GT1 2005" },
  { id: "dodge-viper-gtsr", name: "Dodge Viper GTS-R", category: "GT1 2005" },
  { id: "lamborghini-murcielago-rgt", name: "Lamborghini Murciélago R-GT", category: "GT1 2005" },
  { id: "maserati-mc12-gt1", name: "Maserati MC12 GT1", category: "GT1 2005" },

  // GT2 2005
  { id: "milano-gt36", name: "Milano GT36", category: "GT2 2005" },
  { id: "porsche-996-gt3-rsr", name: "Porsche 996 GT3 RSR", category: "GT2 2005" },

  // GT3 Gen1
  { id: "audi-r8-gt3-gen1", name: "Audi R8 LMS GT3", category: "GT3 Gen1" },
  { id: "bmw-m6-gt3", name: "BMW M6 GT3", category: "GT3 Gen1" },
  { id: "mclaren-720s-gt3-gen1", name: "McLaren 720S GT3", category: "GT3 Gen1" },
  { id: "mercedes-gt3-gen1", name: "Mercedes-AMG GT3", category: "GT3 Gen1" },
  { id: "nissan-gtr-nismo-gt3", name: "Nissan GT-R Nismo GT3", category: "GT3 Gen1" },
  { id: "porsche-911-gt3-r-gen1", name: "Porsche 911 GT3 R", category: "GT3 Gen1" },

  // GT3 Gen2
  { id: "aston-vantage-gt3-evo", name: "Aston Martin Vantage GT3 Evo", category: "GT3 Gen2" },
  { id: "audi-r8-gt3-evo2", name: "Audi R8 LMS GT3 Evo II", category: "GT3 Gen2" },
  { id: "bmw-m4-gt3", name: "BMW M4 GT3", category: "GT3 Gen2" },
  { id: "corvette-z06-gt3r", name: "Chevrolet Corvette Z06 GT3.R", category: "GT3 Gen2" },
  { id: "lamborghini-huracan-gt3-evo2", name: "Lamborghini Huracán GT3 EVO2", category: "GT3 Gen2" },
  { id: "mclaren-720s-gt3-evo", name: "McLaren 720S GT3 Evo", category: "GT3 Gen2" },
  { id: "mercedes-gt3-evo", name: "Mercedes-AMG GT3 Evo", category: "GT3 Gen2" },
  { id: "porsche-992-gt3-r", name: "Porsche 992 GT3 R", category: "GT3 Gen2" },

  // GT4
  { id: "alpine-a110-gt4-evo", name: "Alpine A110 GT4 Evo", category: "GT4" },
  { id: "aston-vantage-gt4-evo", name: "Aston Martin Vantage GT4 Evo", category: "GT4" },
  { id: "audi-r8-gt4", name: "Audi R8 LMS GT4", category: "GT4" },
  { id: "bmw-m4-gt4", name: "BMW M4 GT4", category: "GT4" },
  { id: "camaro-gt4r", name: "Chevrolet Camaro GT4.R", category: "GT4" },
  { id: "mclaren-570s-gt4", name: "McLaren 570S GT4", category: "GT4" },
  { id: "mercedes-gt4", name: "Mercedes-AMG GT4", category: "GT4" },
  { id: "porsche-718-gt4-mr", name: "Porsche Cayman GT4 Clubsport MR", category: "GT4" },

  // GT5
  { id: "ginetta-g40", name: "Ginetta G40", category: "GT5" },
  { id: "puma-p052", name: "Puma P052", category: "GT5" },

  // GTE
  { id: "aston-vantage-gte", name: "Aston Martin Vantage GTE", category: "GTE" },
  { id: "bmw-m8-gte", name: "BMW M8 GTE", category: "GTE" },
  { id: "corvette-c8r-gte", name: "Chevrolet Corvette C8.R", category: "GTE" },
  { id: "porsche-911-rsr-gte", name: "Porsche 911 RSR GTE", category: "GTE" },

  // GTR 2004
  { id: "bmw-m3-e36-gtr", name: "BMW M3 E36 GTR", category: "GTR 2004" },

  // Hot Cars
  { id: "fusca-1-hotcars", name: "Fusca 1 Hot Cars", category: "Hot Cars" },
  { id: "fusca-2-hotcars", name: "Fusca 2 Hot Cars", category: "Hot Cars" },
  { id: "gol-hotcars", name: "Gol Hot Cars", category: "Hot Cars" },
  { id: "passat-hotcars", name: "Passat Hot Cars", category: "Hot Cars" },

  // Hypercars
  { id: "aston-valkyrie-road", name: "Aston Martin Valkyrie", category: "Hypercar" },
  { id: "brabham-bt62", name: "Brabham BT62", category: "Hypercar" },
  { id: "lamborghini-revuelto", name: "Lamborghini Revuelto", category: "Hypercar" },
  { id: "lamborghini-veneno", name: "Lamborghini Veneno Roadster", category: "Hypercar" },
  { id: "mclaren-senna", name: "McLaren Senna", category: "Hypercar" },

  // Karts
  { id: "kart-2t-125", name: "Kart 2-Stroke 125cc Direct", category: "Kart" },
  { id: "kart-4t-race", name: "Kart 4-Stroke Race", category: "Kart" },
  { id: "kart-4t-rental", name: "Kart 4-Stroke Rental", category: "Kart" },
  { id: "kart-shifter", name: "Kart 2-Stroke 125cc Shifter", category: "Kart" },
  { id: "kart-cross", name: "Kart Cross", category: "Kart" },
  { id: "superkart-250", name: "Superkart 250cc", category: "Kart" },

  // Ligier European Series
  { id: "ligier-js-p4", name: "Ligier JS P4", category: "Ligier European Series" },
  { id: "ligier-js2-r", name: "Ligier JS2 R", category: "Ligier European Series" },

  // LMDh
  { id: "alpine-a424", name: "Alpine A424", category: "LMDh" },
  { id: "aston-valkyrie-lmh", name: "Aston Martin Valkyrie Hypercar", category: "LMDh" },
  { id: "bmw-m-hybrid", name: "BMW M Hybrid V8", category: "LMDh" },
  { id: "cadillac-v-series", name: "Cadillac V-Series.R", category: "LMDh" },
  { id: "lamborghini-sc63", name: "Lamborghini SC63", category: "LMDh" },
  { id: "porsche-963", name: "Porsche 963", category: "LMDh" },

  // LMP1 2005
  { id: "audi-r8-lmp1", name: "Audi R8 LMP1", category: "LMP1 2005" },
  { id: "courage-c60", name: "Courage C60 Hybrid", category: "LMP1 2005" },
  { id: "dallara-sp1", name: "Dallara SP1", category: "LMP1 2005" },

  // LMP2 Gen1
  { id: "ligier-jsp217-gen1", name: "Ligier JS P217 (Gen1)", category: "LMP2 Gen1" },
  { id: "oreca-07-gen1", name: "Oreca 07 (Gen1)", category: "LMP2 Gen1" },

  // LMP2 Gen2
  { id: "ligier-jsp217-gen2", name: "Ligier JS P217 (Gen2)", category: "LMP2 Gen2" },
  { id: "oreca-07-gen2", name: "Oreca 07 (Gen2)", category: "LMP2 Gen2" },

  // LMP2 2005
  { id: "lola-b05-40-turbo", name: "Lola B05/40 Turbo", category: "LMP2 2005" },
  { id: "lola-b05-40-v8", name: "Lola B05/40 V8", category: "LMP2 2005" },

  // MINI JCW UK
  { id: "mini-jcw", name: "MINI Cooper JCW", category: "MINI JCW" },

  // Mitsubishi Lancer Cup
  { id: "mitsubishi-lancer-r", name: "Mitsubishi Lancer R", category: "Mitsubishi Lancer Cup" },
  { id: "mitsubishi-lancer-rs", name: "Mitsubishi Lancer RS", category: "Mitsubishi Lancer Cup" },

  // BMW M1 Procar
  { id: "bmw-m1-procar", name: "BMW M1 Procar", category: "M1 Procar" },

  // Old Stock Race
  { id: "opala-old-stock", name: "Chevrolet Opala Old Stock Race", category: "Stock Car" },

  // Opala Stock Cars
  { id: "opala-1979", name: "Chevrolet Opala Stock Cars 1979", category: "Stock Car" },
  { id: "opala-1986", name: "Chevrolet Opala Stock Cars 1986", category: "Stock Car" },

  // P1 Gen1
  { id: "ginetta-g58", name: "Ginetta G58", category: "Prototype" },
  { id: "metalmoro-ajr-chevy", name: "MetalMoro AJR Chevrolet", category: "Prototype" },
  { id: "metalmoro-ajr-honda", name: "MetalMoro AJR Honda", category: "Prototype" },
  { id: "metalmoro-ajr-judd", name: "MetalMoro AJR Judd", category: "Prototype" },
  { id: "metalmoro-ajr-nissan", name: "MetalMoro AJR Nissan", category: "Prototype" },

  // P1 Gen2
  { id: "ginetta-g58-gen2", name: "Ginetta G58 Gen2", category: "Prototype" },
  { id: "ligier-jsp320", name: "Ligier JS P320", category: "Prototype" },
  { id: "metalmoro-ajr-gen2-chevy", name: "MetalMoro AJR Gen2 Chevrolet", category: "Prototype" },
  { id: "metalmoro-ajr-gen2-honda", name: "MetalMoro AJR Gen2 Honda", category: "Prototype" },
  { id: "metalmoro-ajr-gen2-nissan", name: "MetalMoro AJR Gen2 Nissan", category: "Prototype" },
  { id: "sigma-p1-g5", name: "Sigma P1 G5", category: "Prototype" },

  // P2
  { id: "metalmoro-mrx-turbo-p2", name: "MetalMoro MRX Duratec Turbo P2", category: "Prototype" },
  { id: "sigma-p1", name: "Sigma P1", category: "Prototype" },

  // P3
  { id: "metalmoro-mrx-turbo-p3", name: "MetalMoro MRX Duratec Turbo P3", category: "Prototype" },
  { id: "metalmoro-mrx-honda-p3", name: "MetalMoro MRX Honda P3", category: "Prototype" },
  { id: "roco-001", name: "Roco 001", category: "Prototype" },

  // P4
  { id: "mcr-s2000", name: "MCR S2000", category: "Prototype" },
  { id: "metalmoro-mrx-duratec-p4", name: "MetalMoro MRX Duratec P4", category: "Prototype" },

  // Porsche Carrera Cup
  { id: "porsche-911-cup-38", name: "Porsche 911 GT3 Cup 3.8", category: "Porsche Cup" },
  { id: "porsche-911-cup-40", name: "Porsche 911 GT3 Cup 4.0", category: "Porsche Cup" },

  // RallyCross
  { id: "citroen-ds3-rx", name: "Citroën DS3 RX", category: "RallyCross" },
  { id: "mini-countryman-rx", name: "MINI Countryman R60 RX", category: "RallyCross" },
  { id: "mitsubishi-evo-rx", name: "Mitsubishi Lancer Evo10 RX", category: "RallyCross" },
  { id: "vw-polo-rx", name: "Volkswagen Polo RX", category: "RallyCross" },

  // Sprint Race
  { id: "sprint-race", name: "Sprint Race", category: "Sprint Race" },

  // Stock Car Brasil
  { id: "stock-car-1999", name: "Chevrolet Omega Stock Car 1999", category: "Stock Car" },
  { id: "stock-car-2019", name: "Chevrolet Cruze Stock Car 2019", category: "Stock Car" },
  { id: "stock-car-2020-chevy", name: "Chevrolet Cruze Stock Car 2020", category: "Stock Car" },
  { id: "stock-car-2020-toyota", name: "Toyota Corolla Stock Car 2020", category: "Stock Car" },
  { id: "stock-car-2021-chevy", name: "Chevrolet Cruze Stock Car 2021", category: "Stock Car" },
  { id: "stock-car-2021-toyota", name: "Toyota Corolla Stock Car 2021", category: "Stock Car" },
  { id: "stock-car-2022-chevy", name: "Chevrolet Cruze Stock Car 2022", category: "Stock Car" },
  { id: "stock-car-2022-toyota", name: "Toyota Corolla Stock Car 2022", category: "Stock Car" },
  { id: "stock-car-2023-chevy", name: "Chevrolet Cruze Stock Car 2023", category: "Stock Car" },
  { id: "stock-car-2023-toyota", name: "Toyota Corolla Stock Car 2023", category: "Stock Car" },
  { id: "stock-car-2024-chevy", name: "Chevrolet Cruze Stock Car 2024", category: "Stock Car" },
  { id: "stock-car-2024-toyota", name: "Toyota Corolla Stock Car 2024", category: "Stock Car" },

  // Stock USA
  { id: "stock-usa-gen1", name: "Stock USA Gen1", category: "Stock USA" },
  { id: "stock-usa-gen2", name: "Stock USA Gen2", category: "Stock USA" },
  { id: "stock-usa-gen3", name: "Stock USA Gen3", category: "Stock USA" },
  { id: "stock-usa-gen3-lm", name: "Stock USA Gen3 Le Mans", category: "Stock USA" },

  // Street Cars
  { id: "camaro-ss", name: "Chevrolet Camaro SS", category: "Road Car" },

  // Super Trophy Trucks
  { id: "super-trophy-truck", name: "Super Trophy Truck", category: "Off-Road" },

  // Super Trofeo
  { id: "huracan-super-trofeo-evo2", name: "Lamborghini Huracán Super Trofeo EVO2", category: "Super Trofeo" },
  { id: "diablo-sv-r", name: "Lamborghini Diablo SV-R", category: "Diablo Super Trofeo" },

  // Super V8
  { id: "super-v8", name: "Super V8", category: "Super V8" },

  // Super Cars
  { id: "audi-r8-v10-gt", name: "Audi R8 V10 GT", category: "Supercars" },
  { id: "corvette-c8-z06", name: "Chevrolet Corvette C8 Z06 / Z07", category: "Supercars" },
  { id: "dodge-viper-acr", name: "Dodge Viper ACR", category: "Supercars" },
  { id: "maserati-gt2-stradale", name: "Maserati GT2 Stradale", category: "Supercars" },
  { id: "mclaren-f1-lm", name: "McLaren F1 LM", category: "Supercars" },
  { id: "ultima-gtr", name: "Ultima GTR", category: "Supercars" },

  // TS Cup
  { id: "vw-polo-tscup", name: "Volkswagen Polo (TS Cup)", category: "TS Cup" },
  { id: "vw-polo-gts-tscup", name: "Volkswagen Polo GTS (TS Cup)", category: "TS Cup" },
  { id: "vw-virtus-tscup", name: "Volkswagen Virtus (TS Cup)", category: "TS Cup" },
  { id: "vw-virtus-gts-tscup", name: "Volkswagen Virtus GTS (TS Cup)", category: "TS Cup" },

  // Vintage Touring Cars
  { id: "bmw-2002-turbo", name: "BMW 2002 Turbo", category: "Vintage Touring" },
  { id: "corvette-c3", name: "Chevrolet Corvette C3", category: "Vintage Touring" },
  { id: "lamborghini-miura-sv", name: "Lamborghini Miura SV", category: "Vintage Touring" },
  { id: "lotus-23", name: "Lotus 23", category: "Vintage Touring" },
  { id: "mini-cooper-1965", name: "MINI Cooper S 1965", category: "Vintage Touring" },
].sort((a, b) => a.name.localeCompare(b.name));

const automobilista2Tracks: Track[] = [
  { id: "adelaide", name: "Adelaide Street Circuit", country: "Australia" },
  { id: "autopolis", name: "Autopolis", country: "Japan" },
  { id: "interlagos", name: "Autódromo José Carlos Pace (Interlagos)", country: "Brazil" },
  { id: "mexico", name: "Autódromo Hermanos Rodríguez", country: "Mexico" },
  { id: "curitiba", name: "Autódromo Internacional de Curitiba", country: "Brazil" },
  { id: "goiania", name: "Autódromo de Goiânia", country: "Brazil" },
  { id: "londrina", name: "Autódromo de Londrina", country: "Brazil" },
  { id: "taruma", name: "Autódromo de Tarumã", country: "Brazil" },
  { id: "jacarepagua", name: "Autódromo de Jacarepaguá", country: "Brazil" },
  { id: "brasilia", name: "Autódromo de Brasília", country: "Brazil" },
  { id: "velopark", name: "Autódromo Velopark", country: "Brazil" },
  { id: "cascavel", name: "Autódromo Zilmar Beux (Cascavel)", country: "Brazil" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "brands-hatch", name: "Brands Hatch", country: "United Kingdom" },
  { id: "campo-grande", name: "Campo Grande", country: "Brazil" },
  { id: "mosport", name: "Canadian Tire Motorsport Park", country: "Canada" },
  { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
  { id: "zandvoort", name: "Circuit Park Zandvoort", country: "Netherlands" },
  { id: "zolder", name: "Circuit Zolder", country: "Belgium" },
  { id: "estoril", name: "Circuito do Estoril", country: "Portugal" },
  { id: "daytona", name: "Daytona International Speedway", country: "USA" },
  { id: "donnington", name: "Donington Park", country: "United Kingdom" },
  { id: "fuji", name: "Fuji Speedway", country: "Japan" },
  { id: "hockenheim", name: "Hockenheimring", country: "Germany" },
  { id: "indianapolis", name: "Indianapolis Motor Speedway", country: "USA" },
  { id: "kyalami", name: "Kyalami", country: "South Africa" },
  { id: "long-beach", name: "Long Beach Street Circuit", country: "USA" },
  { id: "misano", name: "Misano World Circuit", country: "Italy" },
  { id: "bathurst", name: "Mount Panorama (Bathurst)", country: "Australia" },
  { id: "mugello", name: "Mugello Circuit", country: "Italy" },
  { id: "nurburgring", name: "Nürburgring", country: "Germany" },
  { id: "oulton-park", name: "Oulton Park", country: "United Kingdom" },
  { id: "phillip-island", name: "Phillip Island", country: "Australia" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "road-atlanta", name: "Road Atlanta", country: "USA" },
  { id: "sebring", name: "Sebring International Raceway", country: "USA" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "snetterton", name: "Snetterton Circuit", country: "United Kingdom" },
  { id: "suzuka", name: "Suzuka Circuit", country: "Japan" },
  { id: "cota", name: "Circuit of The Americas (COTA)", country: "USA" },
  { id: "vallelunga", name: "Vallelunga Circuit", country: "Italy" },
  { id: "watkins-glen", name: "Watkins Glen International", country: "USA" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
].sort((a, b) => a.name.localeCompare(b.name));

// Assetto Corsa Competizione
const accCars: Car[] = [
  // GT3 - 2023/2024
  { id: "audi-r8-evo2", name: "Audi R8 LMS Evo II GT3 (2022)", category: "GT3" },
  { id: "bmw-m4-gt3", name: "BMW M4 GT3 (2021)", category: "GT3" },
  { id: "ferrari-296-gt3", name: "Ferrari 296 GT3 (2023)", category: "GT3" },
  { id: "lamborghini-huracan-evo2", name: "Lamborghini Huracan EVO2 GT3 (2023)", category: "GT3" },
  { id: "mclaren-720s-evo", name: "McLaren 720S Evo GT3 (2023)", category: "GT3" },
  { id: "porsche-992-gt3r", name: "Porsche 992 GT3R (2023)", category: "GT3" },
  
  // GT3 - 2018-2020
  { id: "aston-v12-2013", name: "Aston Martin V12 Vantage GT3 (2013)", category: "GT3" },
  { id: "aston-v8-2019", name: "Aston Martin V8 Vantage GT3 (2019)", category: "GT3" },
  { id: "audi-r8-2015", name: "Audi R8 LMS GT3 (2015)", category: "GT3" },
  { id: "audi-r8-evo-2019", name: "Audi R8 LMS Evo GT3 (2019)", category: "GT3" },
  { id: "bentley-2015", name: "Bentley Continental GT3 (2015)", category: "GT3" },
  { id: "bentley-2018", name: "Bentley Continental GT3 (2018)", category: "GT3" },
  { id: "bmw-m6-2017", name: "BMW M6 GT3 (2017)", category: "GT3" },
  { id: "jaguar-gt3", name: "Emil Frey Jaguar GT3 (2012)", category: "GT3" },
  { id: "ferrari-488-2018", name: "Ferrari 488 GT3 (2018)", category: "GT3" },
  { id: "ferrari-488-evo", name: "Ferrari 488 EVO GT3 (2020)", category: "GT3" },
  { id: "honda-nsx-2017", name: "Honda NSX GT3 (2017)", category: "GT3" },
  { id: "honda-nsx-evo", name: "Honda NSX Evo GT3 (2019)", category: "GT3" },
  { id: "lamborghini-2015", name: "Lamborghini Huracan GT3 (2015)", category: "GT3" },
  { id: "lamborghini-evo-2019", name: "Lamborghini Huracan Evo GT3 (2019)", category: "GT3" },
  { id: "lexus-rcf", name: "Lexus RC F GT3 (2016)", category: "GT3" },
  { id: "mclaren-650s", name: "McLaren 650S GT3 (2015)", category: "GT3" },
  { id: "mclaren-720s-2019", name: "McLaren 720S GT3 (2019)", category: "GT3" },
  { id: "mercedes-2015", name: "Mercedes-AMG GT3 (2015)", category: "GT3" },
  { id: "mercedes-evo-2020", name: "Mercedes-AMG Evo GT3 (2020)", category: "GT3" },
  { id: "nissan-2015", name: "Nissan GTR Nismo GT3 (2015)", category: "GT3" },
  { id: "nissan-2018", name: "Nissan GTR Nismo GT3 (2018)", category: "GT3" },
  { id: "porsche-911-2018", name: "Porsche 911 GT3 R (2018)", category: "GT3" },
  { id: "porsche-911-ii-2019", name: "Porsche 911 II GT3R (2019)", category: "GT3" },
  { id: "reiter-r-ex", name: "Reiter Engineering R-EX GT3 (2017)", category: "GT3" },
  
  // GT2
  { id: "audi-r8-gt2", name: "Audi R8 LMS GT2", category: "GT2" },
  { id: "ktm-xbow-gt2", name: "KTM X-Bow GT2", category: "GT2" },
  { id: "maserati-mc20-gt2", name: "Maserati MC20 GT2", category: "GT2" },
  { id: "mercedes-gt2", name: "Mercedes-AMG GT2", category: "GT2" },
  { id: "porsche-935-2019", name: "Porsche 935 (2019)", category: "GT2" },
  { id: "porsche-gt2-rs", name: "Porsche 911 GT2 RS CS EVO Kit", category: "GT2" },
  
  // GT4
  { id: "alpine-a110-gt4", name: "Alpine A110 GT4 (2018)", category: "GT4" },
  { id: "aston-vantage-gt4", name: "Aston Martin Vantage AMR GT4 (2018)", category: "GT4" },
  { id: "audi-r8-gt4", name: "Audi R8 LMS GT4 (2018)", category: "GT4" },
  { id: "bmw-m4-gt4", name: "BMW M4 GT4 (2018)", category: "GT4" },
  { id: "camaro-gt4", name: "Chevrolet Camaro GT4.R (2017)", category: "GT4" },
  { id: "ginetta-g55", name: "Ginetta G55 GT4 (2012)", category: "GT4" },
  { id: "ktm-xbow-gt4", name: "KTM X-Bow GT4 (2016)", category: "GT4" },
  { id: "maserati-gt4", name: "Maserati Granturismo MC GT4 (2016)", category: "GT4" },
  { id: "mclaren-570s", name: "McLaren 570S GT4 (2016)", category: "GT4" },
  { id: "mercedes-gt4", name: "Mercedes-AMG GT4 (2016)", category: "GT4" },
  { id: "porsche-718-gt4", name: "Porsche 718 Cayman GT4 Clubsport (2019)", category: "GT4" },
  
  // Cup/Trophy Cars
  { id: "bmw-m2-cs", name: "BMW M2 CS Racing (2020)", category: "Cup" },
  { id: "ferrari-488-challenge", name: "Ferrari 488 Challenge Evo (2020)", category: "Cup" },
  { id: "lamborghini-st-2015", name: "Lamborghini Huracan Super Trofeo (2015)", category: "Cup" },
  { id: "lamborghini-st-evo2", name: "Lamborghini Huracan Super Trofeo Evo 2 (2021)", category: "Cup" },
  { id: "porsche-cup-2017", name: "Porsche 911 II GT3 Cup (2017)", category: "Cup" },
  { id: "porsche-cup-992", name: "Porsche 911 GT3 Cup (992) (2021)", category: "Cup" },
].sort((a, b) => a.name.localeCompare(b.name));

const accTracks: Track[] = [
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale di Monza", country: "Italy" },
  { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
  { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "cota", name: "Circuit of The Americas (COTA)", country: "USA" },
  { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
  { id: "valencia", name: "Circuit Ricardo Tormo (Valencia)", country: "Spain" },
  { id: "zandvoort", name: "Circuit Zandvoort", country: "Netherlands" },
  { id: "zolder", name: "Circuit Zolder", country: "Belgium" },
  { id: "donnington", name: "Donington Park Circuit", country: "United Kingdom" },
  { id: "hungaroring", name: "Hungaroring", country: "Hungary" },
  { id: "indianapolis", name: "Indianapolis Motor Speedway", country: "USA" },
  { id: "kyalami", name: "Kyalami Grand Prix Circuit", country: "South Africa" },
  { id: "misano", name: "Misano World Circuit Marco Simoncelli", country: "Italy" },
  { id: "bathurst", name: "Mount Panorama Circuit (Bathurst)", country: "Australia" },
  { id: "nurburgring", name: "Nürburgring", country: "Germany" },
  { id: "oulton-park", name: "Oulton Park Circuit", country: "United Kingdom" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "snetterton", name: "Snetterton Circuit", country: "United Kingdom" },
  { id: "suzuka", name: "Suzuka International Racing Course", country: "Japan" },
  { id: "watkins-glen", name: "Watkins Glen International", country: "USA" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
].sort((a, b) => a.name.localeCompare(b.name));

// Assetto Corsa - 178 carros (incluindo todos os DLCs)
const assettoCorsaCars: Car[] = [
  // Abarth
  { id: "abarth-500-essesse", name: "Abarth 500 EsseEsse", category: "Sports Car" },
  { id: "abarth-595-ss", name: "Abarth 595 SS", category: "Sports Car" },
  { id: "fiat-500-abarth", name: "Fiat 500 Abarth", category: "Sports Car" },
  
  // Alfa Romeo
  { id: "alfa-155-ti-dtm", name: "Alfa Romeo 155 V6 Ti (DTM 1995)", category: "DTM 1995" },
  { id: "alfa-33-stradale", name: "Alfa Romeo 33 Stradale", category: "Historic" },
  { id: "alfa-4c", name: "Alfa Romeo 4C", category: "Sports Car" },
  { id: "alfa-giulietta-qv", name: "Alfa Romeo Giulietta QV Launch Edition", category: "Sports Car" },
  { id: "alfa-gta", name: "Alfa Romeo GTA", category: "Historic" },
  { id: "alfa-mito-qv", name: "Alfa Romeo MiTo QV", category: "Sports Car" },
  
  // Audi
  { id: "audi-r18", name: "Audi R18 E-Tron Quattro 2014", category: "Prototype" },
  { id: "audi-r8-lms", name: "Audi R8 LMS", category: "GT3" },
  { id: "audi-r8-lms-ultra", name: "Audi R8 LMS Ultra", category: "GT3" },
  
  // BMW
  { id: "bmw-m3-e30", name: "BMW M3 E30", category: "Sports Car" },
  { id: "bmw-m3-e30-drift", name: "BMW M3 E30 Drift", category: "Drift" },
  { id: "bmw-m3-e30-dtm", name: "BMW M3 E30 DTM", category: "DTM" },
  { id: "bmw-m3-e92", name: "BMW M3 E92", category: "Sports Car" },
  { id: "bmw-m3-gt2", name: "BMW M3 GT2", category: "GT2" },
  { id: "bmw-m4", name: "BMW M4", category: "Sports Car" },
  { id: "bmw-z4-e89", name: "BMW Z4 E89 35is", category: "Sports Car" },
  { id: "bmw-z4-gt3", name: "BMW Z4 GT3", category: "GT3" },
  
  // Corvette
  { id: "corvette-c7r", name: "Corvette C7.R", category: "GTE" },
  
  // Ferrari
  { id: "ferrari-250-gto", name: "Ferrari 250 GTO", category: "Historic" },
  { id: "ferrari-312t", name: "Ferrari 312T (F1 1975)", category: "Historic Formula" },
  { id: "ferrari-458-italia", name: "Ferrari 458 Italia", category: "Sports Car" },
  { id: "ferrari-488-gt3", name: "Ferrari 488 GT3", category: "GT3" },
  { id: "ferrari-488-gtb", name: "Ferrari 488 GTB", category: "Sports Car" },
  { id: "ferrari-599xx-evo", name: "Ferrari 599XX Evo", category: "Track Car" },
  { id: "ferrari-f138", name: "Ferrari F138 (F1 2013)", category: "Formula" },
  { id: "ferrari-f2004", name: "Ferrari F2004 (F1 2004)", category: "Formula" },
  { id: "ferrari-fxxk", name: "Ferrari FXX K", category: "Hypercar" },
  { id: "ferrari-laferrari", name: "Ferrari LaFerrari", category: "Hypercar" },
  
  // Ford
  { id: "ford-escort-rs1600", name: "Ford Escort RS1600", category: "Historic" },
  { id: "ford-gt40", name: "Ford GT40", category: "Historic" },
  
  // Formula & Single Seaters
  { id: "dallara-f312", name: "Dallara F312", category: "Formula 3" },
  { id: "formula-abarth", name: "Formula Abarth", category: "Formula" },
  { id: "tatuus-fa01", name: "Tatuus FA01", category: "Formula" },
  
  // Glickenhaus
  { id: "glickenhaus-scg003", name: "Glickenhaus SCG003", category: "Prototype" },
  
  // Lamborghini
  { id: "lamborghini-aventador", name: "Lamborghini Aventador LP700-4", category: "Hypercar" },
  { id: "lamborghini-huracan", name: "Lamborghini Huracan Performante", category: "Sports Car" },
  
  // Lancia
  { id: "lancia-delta-s4", name: "Lancia Delta S4", category: "Group B" },
  { id: "lancia-stratos", name: "Lancia Stratos", category: "Historic" },
  
  // Lotus
  { id: "lotus-2-eleven", name: "Lotus 2-Eleven GT4", category: "GT4" },
  { id: "lotus-25", name: "Lotus 25 (F1 1963)", category: "Historic Formula" },
  { id: "lotus-49", name: "Lotus 49 (F1 1967)", category: "Historic Formula" },
  { id: "lotus-72d", name: "Lotus 72D (F1 1970)", category: "Historic Formula" },
  { id: "lotus-98t", name: "Lotus 98T (F1 1986)", category: "Historic Formula" },
  { id: "lotus-evora-gtc", name: "Lotus Evora GTC", category: "GT" },
  { id: "lotus-evora-gte", name: "Lotus Evora GTE", category: "GT" },
  { id: "lotus-exos-125", name: "Lotus Exos 125", category: "Formula" },
  
  // Maserati
  { id: "maserati-alfieri", name: "Maserati Alfieri", category: "Sports Car" },
  { id: "maserati-granturismo-gt4", name: "Maserati GranTurismo MC GT4", category: "GT4" },
  { id: "maserati-levante", name: "Maserati Levante S", category: "SUV" },
  { id: "maserati-mc12", name: "Maserati MC12 GT1", category: "GT1" },
  { id: "maserati-quattroporte", name: "Maserati Quattroporte", category: "Luxury" },
  
  // Mazda
  { id: "mazda-787b", name: "Mazda 787B", category: "Group C" },
  { id: "mazda-mx5-cup", name: "Mazda MX-5 Cup", category: "Cup" },
  { id: "mazda-mx5-na", name: "Mazda MX-5 NA", category: "Road Car" },
  { id: "mazda-mx5-nd", name: "Mazda MX-5 ND", category: "Road Car" },
  { id: "mazda-rx7-spirit-r", name: "Mazda RX-7 Spirit R", category: "Sports Car" },
  
  // McLaren
  { id: "mclaren-650s-gt3", name: "McLaren 650S GT3", category: "GT3" },
  { id: "mclaren-mp4-12c-gt3", name: "McLaren MP4-12C GT3", category: "GT3" },
  { id: "mclaren-p1", name: "McLaren P1", category: "Hypercar" },
  { id: "mclaren-p1-gtr", name: "McLaren P1 GTR", category: "Hypercar" },
  
  // Mercedes
  { id: "mercedes-190e-dtm", name: "Mercedes-Benz 190E Evo II DTM", category: "DTM" },
  { id: "mercedes-190e-evo2", name: "Mercedes-Benz 190E Evo II", category: "Touring Car" },
  { id: "mercedes-amg-gtr", name: "Mercedes-AMG GT R", category: "Sports Car" },
  { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3", category: "GT3" },
  { id: "mercedes-c9", name: "Mercedes-Benz C9", category: "Group C" },
  { id: "mercedes-sls-amg", name: "Mercedes-Benz SLS AMG", category: "Sports Car" },
  { id: "mercedes-sls-gt3", name: "Mercedes-Benz SLS AMG GT3", category: "GT3" },
  
  // Nissan
  { id: "nissan-gtr-2015", name: "Nissan GT-R Nismo 2015", category: "Sports Car" },
  { id: "nissan-gtr-gt3-2015", name: "Nissan GT-R Nismo 2014 GT3", category: "GT3" },
  { id: "nissan-skyline-r34", name: "Nissan Skyline GT-R R34", category: "Sports Car" },
  
  // Pagani
  { id: "pagani-huayra", name: "Pagani Huayra", category: "Hypercar" },
  { id: "pagani-huayra-bc", name: "Pagani Huayra BC", category: "Hypercar" },
  { id: "pagani-zonda-r", name: "Pagani Zonda R", category: "Hypercar" },
  
  // Porsche
  { id: "porsche-718-boxster-s", name: "Porsche 718 Boxster S", category: "Sports Car" },
  { id: "porsche-718-cayman-s", name: "Porsche 718 Cayman S", category: "Sports Car" },
  { id: "porsche-911-carrera-s", name: "Porsche 911 Carrera S", category: "Sports Car" },
  { id: "porsche-911-gt3-cup", name: "Porsche 911 GT3 Cup 2017", category: "Cup" },
  { id: "porsche-911-gt3-r-2016", name: "Porsche 911 GT3 R 2016", category: "GT3" },
  { id: "porsche-911-gt3-rs", name: "Porsche 911 GT3 RS", category: "Sports Car" },
  { id: "porsche-911-turbo-s", name: "Porsche 911 Turbo S", category: "Sports Car" },
  { id: "porsche-917-30", name: "Porsche 917/30", category: "Historic" },
  { id: "porsche-917k", name: "Porsche 917K", category: "Historic" },
  { id: "porsche-918-spyder", name: "Porsche 918 Spyder", category: "Hypercar" },
  { id: "porsche-919-2015", name: "Porsche 919 Hybrid 2015", category: "Prototype" },
  { id: "porsche-919-2016", name: "Porsche 919 Hybrid 2016", category: "Prototype" },
  { id: "porsche-935-78", name: "Porsche 935/78 Moby Dick", category: "Historic" },
  { id: "porsche-962c-long", name: "Porsche 962C Long Tail", category: "Group C" },
  { id: "porsche-962c-short", name: "Porsche 962C Short Tail", category: "Group C" },
  { id: "porsche-cayman-gt4", name: "Porsche Cayman GT4 Clubsport", category: "GT4" },
  
  // Praga
  { id: "praga-r1", name: "Praga R1", category: "Track Car" },
  
  // RUF
  { id: "ruf-ctr3", name: "RUF CTR3", category: "Sports Car" },
  { id: "ruf-rgt8", name: "RUF RGT-8", category: "Sports Car" },
  { id: "ruf-rt12r", name: "RUF RT12 R", category: "Sports Car" },
  
  // Shelby
  { id: "shelby-cobra", name: "Shelby Cobra 427 S/C", category: "Historic" },
  
  // Toyota
  { id: "toyota-ae86", name: "Toyota AE86", category: "Sports Car" },
  { id: "toyota-gt86", name: "Toyota GT86", category: "Sports Car" },
  { id: "toyota-supra", name: "Toyota Supra", category: "Sports Car" },
  { id: "toyota-ts040", name: "Toyota TS040 Hybrid", category: "Prototype" },
].sort((a, b) => a.name.localeCompare(b.name));

const assettoCorsaTracks: Track[] = [
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "magione", name: "Autodromo dell'Umbria - Magione", country: "Italy" },
  { id: "vallelunga", name: "Autodromo Vallelunga", country: "Italy" },
  { id: "black-cat-county", name: "Black Cat County", country: "USA" },
  { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "zandvoort", name: "Circuit Park Zandvoort", country: "Netherlands" },
  { id: "drift", name: "Drift Track", country: "Various" },
  { id: "drag", name: "Drag Strip", country: "Various" },
  { id: "highlands", name: "Highlands Motorsport Park", country: "New Zealand" },
  { id: "mugello", name: "Mugello Circuit", country: "Italy" },
  { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
  { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "trento-bondone", name: "Trento-Bondone (Hillclimb)", country: "Italy" },
].sort((a, b) => a.name.localeCompare(b.name));

// Assetto Corsa EVO
const assettoConaEVOCars: Car[] = [
  { id: "abarth-695", name: "Abarth 695 Biposto", category: "Hot Hatch" },
  { id: "alfa-75-turbo", name: "Alfa Romeo 75 Turbo Evoluzione", category: "Sports Sedan" },
  { id: "alfa-giulia-gtam", name: "Alfa Romeo Giulia GTAm", category: "Sports Sedan" },
  { id: "alfa-giulia-sprint-gta", name: "Alfa Romeo Giulia Sprint GTA", category: "Historic" },
  { id: "alfa-junior", name: "Alfa Romeo Junior Veloce", category: "Hot Hatch" },
  { id: "alpine-a110-s", name: "Alpine A110 S", category: "Sports Car" },
  { id: "alpine-a290", name: "Alpine A290 Beta", category: "Hot Hatch" },
  { id: "audi-rs3", name: "Audi RS3 Sportback", category: "Sports Sedan" },
  { id: "audi-rs6", name: "Audi RS6", category: "Sports Sedan" },
  { id: "audi-sport-quattro", name: "Audi Sport quattro (1983)", category: "Historic" },
  { id: "bmw-m2-cs-racing", name: "BMW M2 CS Racing", category: "Cup" },
  { id: "bmw-m3-e30-evo", name: "BMW M3 E30 Sport Evolution", category: "Historic" },
  { id: "bmw-m3-e46-csl", name: "BMW M3 E46 CSL", category: "Sports Car" },
  { id: "bmw-m4-csl", name: "BMW M4 CSL", category: "Sports Car" },
  { id: "bmw-m4-gt3-evo", name: "BMW M4 GT3 Evo", category: "GT3" },
  { id: "bmw-m8-comp", name: "BMW M8 Competition", category: "Sports Car" },
  { id: "caterham-academy", name: "Caterham Seven Academy", category: "Road Car" },
  { id: "caterham-485-csr", name: "Caterham Seven 485 CSR Final Edition", category: "Road Car" },
  { id: "chevrolet-camaro-zl1", name: "Chevrolet Camaro ZL1", category: "Muscle Car" },
  { id: "dallara-stradale", name: "Dallara Stradale", category: "Track Car" },
  { id: "dallara-exp", name: "Dallara EXP", category: "Track Car" },
  { id: "ferrari-288-gto", name: "Ferrari 288 GTO", category: "Historic" },
  { id: "ferrari-296-gtb", name: "Ferrari 296 GTB", category: "Supercar" },
  { id: "ferrari-296-gt3", name: "Ferrari 296 GT3", category: "GT3" },
  { id: "ferrari-488-challenge-evo", name: "Ferrari 488 Challenge Evo", category: "Cup" },
  { id: "ferrari-daytona-sp3", name: "Ferrari Daytona SP3", category: "Hypercar" },
  { id: "ferrari-f40-lm", name: "Ferrari F40 LM", category: "Historic" },
  { id: "ferrari-f2004", name: "Ferrari F2004", category: "Formula" },
  { id: "ferrari-sf25", name: "Ferrari SF-25", category: "Formula" },
  { id: "ford-escort-cosworth", name: "Ford Escort Cosworth RS", category: "Historic" },
  { id: "ford-mustang-gt3", name: "Ford Mustang GT3", category: "GT3" },
  { id: "honda-nsx-r", name: "Honda NSX-R", category: "Sports Car" },
  { id: "honda-s2000", name: "Honda S2000", category: "Sports Car" },
  { id: "hyundai-i30-n", name: "Hyundai i30 N", category: "Hot Hatch" },
  { id: "lamborghini-countach", name: "Lamborghini Countach LP5000 QV", category: "Historic" },
  { id: "lamborghini-huracan-sto", name: "Lamborghini Huracán STO", category: "Supercar" },
  { id: "lamborghini-huracan-st-evo2", name: "Lamborghini Huracán Super Trofeo EVO 2", category: "Cup" },
  { id: "lancia-delta-integrale", name: "Lancia Delta HF Integrale Evoluzione II", category: "Historic" },
  { id: "lancia-delta-evo3", name: "Lancia Delta HF Integrale Evo 3 Prototype", category: "Historic" },
  { id: "lotus-emira", name: "Lotus Emira", category: "Sports Car" },
  { id: "lotus-exige-v6-cup", name: "Lotus Exige V6 Cup", category: "Track Car" },
  { id: "maserati-gt2", name: "Maserati GT2 (MC20)", category: "GT2" },
  { id: "mazda-mx5-na", name: "Mazda MX-5 NA", category: "Road Car" },
  { id: "mazda-mx5-nd-cup", name: "Mazda MX-5 ND Global Cup", category: "Cup" },
  { id: "mercedes-190e-evo2", name: "Mercedes-Benz 190E Evo II", category: "Historic" },
  { id: "mercedes-amg-gt2", name: "Mercedes-AMG GT2", category: "GT2" },
  { id: "mini-jcw", name: "Mini John Cooper S", category: "Hot Hatch" },
  { id: "peugeot-205-t16", name: "Peugeot 205 T16", category: "Group B" },
  { id: "porsche-718-gt4-cs", name: "Porsche 718 Cayman GT4 Clubsport", category: "GT4" },
  { id: "porsche-718-gt4", name: "Porsche 718 Cayman GT4", category: "Sports Car" },
  { id: "porsche-718-gt4-rs", name: "Porsche 718 Cayman GT4 RS", category: "Track Car" },
  { id: "porsche-911-gt3-cup-992", name: "Porsche 911 GT3 Cup (992)", category: "Cup" },
  { id: "porsche-964-turbo", name: "Porsche 911 Turbo 3.6 (964)", category: "Historic" },
  { id: "renault-5-gt-turbo", name: "Renault 5 GT Turbo", category: "Historic" },
  { id: "toyota-gr86", name: "Toyota GR86", category: "Sports Car" },
  { id: "toyota-supra-mkiv", name: "Toyota Supra MKIV RZ", category: "Sports Car" },
  { id: "vw-golf-gti-cs", name: "Volkswagen Golf Mk8 GTI Clubsport", category: "Hot Hatch" },
].sort((a, b) => a.name.localeCompare(b.name));

const assettoConaEVOTracks: Track[] = [
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "brands-hatch", name: "Brands Hatch", country: "United Kingdom" },
  { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "bathurst", name: "Mount Panorama (Bathurst)", country: "Australia" },
  { id: "nurburgring-gp", name: "Nürburgring GP", country: "Germany" },
  { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "suzuka", name: "Suzuka International Racing Course", country: "Japan" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
].sort((a, b) => a.name.localeCompare(b.name));

// RaceRoom
const raceroomCars: Car[] = [
  // DTM
  { id: "alfa-155-v6-ti-dtm", name: "Alfa Romeo 155 V6 Ti (DTM 1995)", category: "DTM 1995" },
  { id: "audi-a4-dtm", name: "Audi A4 DTM 2005", category: "DTM" },
  { id: "audi-a5-dtm", name: "Audi A5 DTM 2013", category: "DTM" },
  { id: "audi-rs5-dtm", name: "Audi RS5 DTM 2018", category: "DTM" },
  { id: "bmw-m3-dtm-1992", name: "BMW M3 DTM 1992", category: "DTM" },
  { id: "bmw-m4-dtm", name: "BMW M4 DTM 2018", category: "DTM" },
  { id: "mercedes-c-dtm-1995", name: "Mercedes-Benz C-Class (DTM 1995)", category: "DTM 1995" },
  { id: "mercedes-c-dtm-2005", name: "Mercedes-Benz C-Class DTM 2005", category: "DTM" },
  { id: "mercedes-c-dtm-2013", name: "Mercedes-Benz C-Class DTM 2013", category: "DTM" },
  { id: "opel-calibra-dtm", name: "Opel Calibra (DTM 1995)", category: "DTM 1995" },
  
  // Formula
  { id: "dallara-f312-fr35", name: "Dallara F312 (FR3.5)", category: "Formula" },
  { id: "formula-raceroom-2", name: "Formula RaceRoom 2", category: "Formula" },
  { id: "formula-raceroom-3", name: "Formula RaceRoom 3", category: "Formula" },
  { id: "formula-raceroom-junior", name: "Formula RaceRoom Junior", category: "Formula" },
  { id: "formula-raceroom-us", name: "Formula RaceRoom US", category: "Formula" },
  { id: "tatuus-f4", name: "Tatuus F4", category: "Formula" },
  
  // Group 5
  { id: "bmw-320-turbo-gr5", name: "BMW 320 Turbo Group 5", category: "Group 5" },
  { id: "bmw-m1-procar", name: "BMW M1 Procar", category: "Group 5" },
  { id: "ford-capri-zakspeed", name: "Ford Capri Zakspeed Turbo", category: "Group 5" },
  { id: "porsche-935-78", name: "Porsche 935/78 'Moby Dick'", category: "Group 5" },
  
  // Group B Rally
  { id: "audi-quattro-s1", name: "Audi Sport quattro S1", category: "Group B" },
  { id: "ford-rs200", name: "Ford RS200", category: "Group B" },
  { id: "lancia-delta-s4", name: "Lancia Delta S4", category: "Group B" },
  { id: "peugeot-205-t16", name: "Peugeot 205 T16", category: "Group B" },
  
  // GT1 Historic
  { id: "mclaren-f1-gtr", name: "McLaren F1 GTR", category: "GT1" },
  { id: "mercedes-clk-gtr", name: "Mercedes CLK-GTR", category: "GT1" },
  { id: "porsche-911-gt1", name: "Porsche 911 GT1", category: "GT1" },
  
  // GT2
  { id: "audi-r8-gt2", name: "Audi R8 LMS GT2", category: "GT2" },
  { id: "ktm-xbow-gt2", name: "KTM X-Bow GT2", category: "GT2" },
  { id: "mercedes-gt2", name: "Mercedes-AMG GT2", category: "GT2" },
  { id: "porsche-gt2-rs", name: "Porsche 911 GT2 RS Clubsport", category: "GT2" },
  
  // GT3
  { id: "audi-r8-gt3", name: "Audi R8 LMS GT3", category: "GT3" },
  { id: "audi-r8-gt3-evo2", name: "Audi R8 LMS GT3 Evo II", category: "GT3" },
  { id: "bentley-gt3", name: "Bentley Continental GT3", category: "GT3" },
  { id: "bmw-m4-gt3", name: "BMW M4 GT3", category: "GT3" },
  { id: "bmw-m6-gt3", name: "BMW M6 GT3", category: "GT3" },
  { id: "corvette-c7-gt3", name: "Corvette C7.R GT3", category: "GT3" },
  { id: "ferrari-488-gt3", name: "Ferrari 488 GT3", category: "GT3" },
  { id: "mclaren-720s-gt3", name: "McLaren 720S GT3", category: "GT3" },
  { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3", category: "GT3" },
  { id: "porsche-911-gt3-r", name: "Porsche 911 GT3 R", category: "GT3" },
  
  // GT4
  { id: "alpine-a110-cup", name: "Alpine A110 Cup", category: "Cup" },
  { id: "alpine-a110-gt4-plus", name: "Alpine A110 GT4+", category: "GT4" },

  // NASCAR
  { id: "chevy-monte-carlo-nascar", name: "Chevrolet Monte Carlo NASCAR", category: "NASCAR" },
  { id: "ford-fusion-nascar", name: "Ford Fusion NASCAR", category: "NASCAR" },
  
  // Prototypes
  { id: "audi-r18", name: "Audi R18", category: "LMP1" },
  { id: "corvette-dp", name: "Corvette DP", category: "DPi" },
  { id: "nissan-npt-90", name: "Nissan NPT-90", category: "Group C" },
  
  // TCR
  { id: "audi-rs3-tcr", name: "Audi RS3 LMS TCR", category: "TCR" },
  { id: "cupra-leon-tcr", name: "Cupra Leon TCR", category: "TCR" },
  { id: "honda-civic-tcr", name: "Honda Civic TCR", category: "TCR" },
  { id: "hyundai-i30-tcr", name: "Hyundai i30 N TCR", category: "TCR" },
  { id: "lynk-co-tcr", name: "Lynk & Co 03 TCR", category: "TCR" },
  { id: "vw-golf-tcr", name: "Volkswagen Golf GTI TCR", category: "TCR" },
  
  // Touring Cars
  { id: "bmw-320-wtcc", name: "BMW 320 TC (WTCC)", category: "Touring Car" },
  { id: "ford-focus-btcc", name: "Ford Focus (BTCC)", category: "Touring Car" },
  { id: "volvo-s60-wtcc", name: "Volvo S60 (WTCC)", category: "Touring Car" },

  // Electric
  { id: "lrt-nxt1", name: "LRT NXT1", category: "Electric" },
].sort((a, b) => a.name.localeCompare(b.name));

const raceroomTracks: Track[] = [
  { id: "anderstorp", name: "Anderstorp Raceway", country: "Sweden" },
  { id: "most", name: "Autodrom Most", country: "Czech Republic" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "brands-hatch", name: "Brands Hatch", country: "United Kingdom" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
  { id: "zandvoort", name: "Circuit Park Zandvoort", country: "Netherlands" },
  { id: "zolder", name: "Circuit Zolder", country: "Belgium" },
  { id: "detroit", name: "Detroit Belle Isle", country: "USA" },
  { id: "donnington", name: "Donington Park", country: "United Kingdom" },
  { id: "lausitzring", name: "EuroSpeedway Lausitz", country: "Germany" },
  { id: "falkenberg", name: "Falkenberg", country: "Sweden" },
  { id: "gellerasen", name: "Gelleråsen Arena", country: "Sweden" },
  { id: "osnabruck", name: "Hillclimb Osnabrück", country: "Germany" },
  { id: "hockenheim", name: "Hockenheimring Baden-Württemberg", country: "Germany" },
  { id: "hungaroring", name: "Hungaroring", country: "Hungary" },
  { id: "karlskoga", name: "Karlskoga Motorstadion", country: "Sweden" },
  { id: "knutstorp", name: "Knutstorp Ring", country: "Sweden" },
  { id: "mantorp", name: "Mantorp Park", country: "Sweden" },
  { id: "mid-ohio", name: "Mid-Ohio Sports Car Course", country: "USA" },
  { id: "sachsenring", name: "Motorsport Arena Oschersleben", country: "Germany" },
  { id: "norisring", name: "Norisring", country: "Germany" },
  { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
  { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
  { id: "pikes-peak", name: "Pikes Peak International Hill Climb", country: "USA" },
  { id: "raceroom-raceway", name: "RaceRoom Raceway", country: "Fictional" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "road-america", name: "Road America", country: "USA" },
  { id: "salzburgring", name: "Salzburgring", country: "Austria" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "slovakiaring", name: "Slovakiaring", country: "Slovakia" },
  { id: "sonoma", name: "Sonoma Raceway", country: "USA" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
].sort((a, b) => a.name.localeCompare(b.name));

// Le Mans Ultimate
const leMansUltimateCars: Car[] = [
  // Hypercar / LMDh / LMH
  { id: "alpine-a424", name: "Alpine A424", category: "LMDh" },
  { id: "alpine-a480", name: "Alpine A480 - Gibson", category: "LMP1" },
  { id: "aston-valkyrie-lmh", name: "Aston Martin Valkyrie AMR LMH", category: "Hypercar" },
  { id: "bmw-m-hybrid", name: "BMW M Hybrid V8", category: "LMDh" },
  { id: "cadillac-v-series", name: "Cadillac V-Series.R", category: "LMDh" },
  { id: "ferrari-499p", name: "Ferrari 499P", category: "Hypercar" },
  { id: "genesis-gmr-001", name: "Genesis GMR-001", category: "LMDh" },
  { id: "glickenhaus-007", name: "Glickenhaus SCG 007 LMH", category: "Hypercar" },
  { id: "isotta-fraschini", name: "Isotta Fraschini Tipo6-C", category: "LMH" },
  { id: "lamborghini-sc63", name: "Lamborghini SC63", category: "LMDh" },
  { id: "peugeot-9x8-2023", name: "Peugeot 9X8 (2023)", category: "Hypercar" },
  { id: "peugeot-9x8-2024", name: "Peugeot 9X8 (2024)", category: "Hypercar" },
  { id: "porsche-963", name: "Porsche 963", category: "LMDh" },
  { id: "toyota-gr010", name: "Toyota GR010 Hybrid", category: "Hypercar" },
  { id: "vanwall-vandervell", name: "Vanwall Vandervell 680", category: "LMH" },

  // LMP2
  { id: "dallara-p217", name: "Dallara P217 - Gibson", category: "LMP2" },
  { id: "ligier-jse-p2", name: "Ligier JS P2", category: "LMP2" },
  { id: "oreca-07", name: "Oreca 07 - Gibson", category: "LMP2" },
  { id: "oreca-07-elms", name: "Oreca 07 - Gibson ELMS", category: "LMP2" },

  // LMP3
  { id: "duqueine-d09", name: "Duqueine D09", category: "LMP3" },
  { id: "ginetta-g61-ltp3", name: "Ginetta G61-LT-P3 Evo", category: "LMP3" },
  { id: "ligier-js-p325", name: "Ligier JS P325", category: "LMP3" },

  // GTE
  { id: "aston-vantage-gte", name: "Aston Martin Vantage GTE", category: "GTE" },
  { id: "corvette-c8r", name: "Chevrolet Corvette C8.R", category: "GTE" },
  { id: "ferrari-488-gte", name: "Ferrari 488 GTE Evo", category: "GTE" },
  { id: "porsche-911-rsr", name: "Porsche 911 RSR-19", category: "GTE" },

  // LMGT3
  { id: "aston-vantage-lmgt3", name: "Aston Martin Vantage AMR LMGT3 Evo", category: "LMGT3" },
  { id: "bmw-m4-lmgt3", name: "BMW M4 LMGT3", category: "LMGT3" },
  { id: "bmw-m4-lmgt3-evo", name: "BMW M4 LMGT3 Evo", category: "LMGT3" },
  { id: "corvette-z06-lmgt3", name: "Chevrolet Corvette Z06 LMGT3.R", category: "LMGT3" },
  { id: "ferrari-296-lmgt3", name: "Ferrari 296 LMGT3", category: "LMGT3" },
  { id: "ford-mustang-lmgt3", name: "Ford Mustang LMGT3", category: "LMGT3" },
  { id: "lamborghini-huracan-lmgt3", name: "Lamborghini Huracán LMGT3 Evo 2", category: "LMGT3" },
  { id: "lexus-rcf-lmgt3", name: "Lexus RC F LMGT3", category: "LMGT3" },
  { id: "mclaren-720s-lmgt3", name: "McLaren 720S LMGT3 Evo", category: "LMGT3" },
  { id: "mercedes-lmgt3", name: "Mercedes-AMG LMGT3", category: "LMGT3" },
  { id: "porsche-911-lmgt3", name: "Porsche 911 LMGT3 R (992)", category: "LMGT3" },
].sort((a, b) => a.name.localeCompare(b.name));

const leMansUltimateTracks: Track[] = [
  { id: "interlagos", name: "Autódromo José Carlos Pace (Interlagos)", country: "Brazil" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "portimao", name: "Autódromo Internacional do Algarve (Portimão)", country: "Portugal" },
  { id: "bahrain", name: "Bahrain International Circuit (8 Hours)", country: "Bahrain" },
  { id: "spa", name: "Circuit de Spa-Francorchamps (6 Hours)", country: "Belgium" },
  { id: "le-mans", name: "Circuit de la Sarthe (24 Heures du Mans)", country: "France" },
  { id: "cota", name: "Circuit of The Americas (COTA)", country: "USA" },
  { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
  { id: "fuji", name: "Fuji Speedway (6 Hours)", country: "Japan" },
  { id: "sebring", name: "Sebring International Raceway (12 Hours)", country: "USA" },
  { id: "shanghai", name: "Shanghai International Circuit", country: "China" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
].sort((a, b) => a.name.localeCompare(b.name));

// Assetto Corsa Rally
const assettoCorsaRallyCars: Car[] = [
  // WRC
  { id: "citroen-xsara-wrc", name: "Citroën Xsara WRC 2003", category: "WRC" },

  // Rally2
  { id: "hyundai-i20n-rally2", name: "Hyundai i20N Rally2 2021", category: "Rally2" },

  // Group A
  { id: "lancia-delta-integrale", name: "Lancia Delta HF Integrale Evoluzione 1992", category: "Group A" },

  // Group B
  { id: "lancia-rally-037", name: "Lancia Rally 037 EVO 2 Gr.B 1984", category: "Group B" },

  // Rally4
  { id: "peugeot-208-rally4", name: "Peugeot 208 Rally4 2020", category: "Rally4" },

  // Group 2
  { id: "alfa-gta-1300-junior", name: "Alfa Romeo GTA 1300 Junior Gr.2 1972", category: "Group 2" },
  { id: "lancia-fulvia-hf", name: "Lancia Fulvia Coupe HF 1600", category: "Group 2" },
  { id: "lancia-stratos-gr4", name: "Lancia Stratos Gr.4 1976", category: "Group 4" },
  { id: "mini-cooper-s-gr2", name: "Mini Cooper S Gr.2 1964", category: "Group 2" },

  // Group 4
  { id: "alpine-a110-gr4", name: "Alpine A110 Group 4 1973", category: "Group 4" },
  { id: "fiat-124-abarth-rally", name: "Fiat 124 Sport Abarth Rally 16V Gr.4 1973", category: "Group 4" },
  { id: "fiat-131-abarth-gr4", name: "Fiat 131 Abarth Gr.4 1976", category: "Group 4" },
].sort((a, b) => a.name.localeCompare(b.name));

const assettoCorsaRallyTracks: Track[] = [
  { id: "ac-rally-monte", name: "Monte Carlo - Col de Turini", country: "Monaco" },
  { id: "ac-rally-finland", name: "Rally Finland - Ouninpohja", country: "Finland" },
  { id: "ac-rally-portugal", name: "Rally Portugal - Fafe", country: "Portugal" },
  { id: "ac-rally-sardinia", name: "Rally Sardinia - Monte Lerno", country: "Italy" },
  { id: "ac-rally-sweden", name: "Rally Sweden - Hagfors", country: "Sweden" },
  { id: "ac-rally-wales", name: "Wales Rally GB - Sweet Lamb", country: "United Kingdom" },
].sort((a, b) => a.name.localeCompare(b.name));

// Project Motor Racing
const projectMotorRacingCars: Car[] = [
  // LMDh/LMH
  { id: "pmr-acura-arx06", name: "Acura ARX-06", category: "LMDh" },
  { id: "pmr-alpine-a424", name: "Alpine A424 Beta", category: "LMDh" },
  { id: "pmr-aston-valkyrie", name: "Aston Martin Valkyrie Hypercar", category: "Hypercar" },
  { id: "pmr-bmw-m-hybrid", name: "BMW M Hybrid V8", category: "LMDh" },
  { id: "pmr-cadillac-vseries", name: "Cadillac V-Series.R", category: "LMDh" },
  { id: "pmr-lamborghini-sc63", name: "Lamborghini SC63 LMDh", category: "LMDh" },
  { id: "pmr-peugeot-9x8", name: "Peugeot 9X8", category: "Hypercar" },
  { id: "pmr-porsche-963", name: "Porsche 963", category: "LMDh" },
  { id: "pmr-toyota-gr010", name: "Toyota GR010 Hybrid", category: "Hypercar" },

  // GT3
  { id: "pmr-acura-nsx-gt3", name: "Acura NSX GT3 Evo 2022", category: "GT3" },
  { id: "pmr-aston-vantage-gt3", name: "Aston Martin Vantage GT3 2022", category: "GT3" },
  { id: "pmr-aston-vantage-gt3-evo", name: "Aston Martin Vantage GT3 Evo 2024", category: "GT3" },
  { id: "pmr-audi-r8-gt3-evo2", name: "Audi R8 LMS GT3 Evo 2", category: "GT3" },
  { id: "pmr-bmw-m3-gt3-evo", name: "BMW M3 GT3 Evo 2025", category: "GT3" },
  { id: "pmr-corvette-z06-gt3", name: "Chevrolet Corvette Z06 GT3.R", category: "GT3" },
  { id: "pmr-ford-mustang-gt3", name: "Ford Mustang GT3", category: "GT3" },
  { id: "pmr-lamborghini-gt3-evo2", name: "Lamborghini Huracán GT3 EVO2", category: "GT3" },
  { id: "pmr-mercedes-amg-gt3", name: "Mercedes-AMG GT3 2020", category: "GT3" },
  { id: "pmr-porsche-911-gt3r", name: "Porsche 911 GT3 R (992.1)", category: "GT3" },

  // GT4
  { id: "pmr-alpine-a110-gt4", name: "Alpine A110 GT4", category: "GT4" },
  { id: "pmr-aston-vantage-gt4", name: "Aston Martin Vantage GT4", category: "GT4" },
  { id: "pmr-audi-r8-gt4", name: "Audi R8 GT4", category: "GT4" },
  { id: "pmr-bmw-m4-gt4-evo", name: "BMW M4 GT4 Evo 2025", category: "GT4" },
  { id: "pmr-camaro-gt4", name: "Chevrolet Camaro ZL-1 GT4 R", category: "GT4" },
  { id: "pmr-ford-mustang-gt4", name: "Ford Mustang GT4", category: "GT4" },
  { id: "pmr-mercedes-amg-gt4", name: "Mercedes-AMG GT4", category: "GT4" },
  { id: "pmr-nissan-z-gt4", name: "Nissan Z GT4", category: "GT4" },
  { id: "pmr-porsche-718-gt4", name: "Porsche 718 Cayman GT4 Clubsport", category: "GT4" },
  { id: "pmr-toyota-supra-gt4", name: "Toyota GR Supra GT4 Evo", category: "GT4" },

  // MX-5 Trophy
  { id: "pmr-mazda-mx5", name: "Mazda MX-5 ND Cup", category: "Cup" },

  // 992 Trophy / 964 Trophy
  { id: "pmr-porsche-992-cup", name: "Porsche 911 GT3 Cup (992)", category: "Cup" },
  { id: "pmr-porsche-964-cup", name: "Porsche Carrera Cup (964) 1990", category: "Cup" },

  // GT (FIA GT)
  { id: "pmr-aston-dbr9", name: "Aston Martin DBR9", category: "GT" },
  { id: "pmr-corvette-c5r", name: "Chevrolet Corvette C5-R", category: "GT" },
  { id: "pmr-corvette-c6r", name: "Chevrolet Corvette C6.R 2005", category: "GT" },
  { id: "pmr-chrysler-viper", name: "Chrysler Viper GTS-R 2003", category: "GT" },
  { id: "pmr-lamborghini-murcielago", name: "Lamborghini Murciélago R-GT", category: "GT" },
  { id: "pmr-lister-storm", name: "Lister Storm", category: "GT" },
  { id: "pmr-maserati-mc12", name: "Maserati MC12 GT-R", category: "GT" },
  { id: "pmr-saleen-s7r", name: "Saleen S7-R", category: "GT" },

  // N-GT
  { id: "pmr-bmw-m3-gtr", name: "BMW M3 GTR E46 2004", category: "N-GT" },
  { id: "pmr-dodge-viper-comp", name: "Dodge Viper Competition Coupe 2004", category: "N-GT" },
  { id: "pmr-gillet-vertigo", name: "Gillet Vertigo 2004", category: "N-GT" },
  { id: "pmr-marcos-mantara", name: "Marcos Mantara LM600 2004", category: "N-GT" },
  { id: "pmr-morgan-aero8", name: "Morgan Aero8 GT(N) 2004", category: "N-GT" },
  { id: "pmr-mosler-mt900r", name: "Mosler MT900R 2004", category: "N-GT" },
  { id: "pmr-porsche-996-gt3-rsr", name: "Porsche 911 996 GT3 RSR 2004", category: "N-GT" },
  { id: "pmr-tvr-t400r", name: "TVR T400R 2004", category: "N-GT" },

  // GT1
  { id: "pmr-lotus-elise-gt1", name: "Lotus Elise GT1", category: "GT1" },
  { id: "pmr-mercedes-clk-gtr", name: "Mercedes-Benz CLK GTR", category: "GT1" },
  { id: "pmr-nissan-r390", name: "Nissan R390 GT1", category: "GT1" },
  { id: "pmr-panoz-esperante", name: "Panoz Esperante GTR-1", category: "GT1" },
  { id: "pmr-porsche-911-gt1-98", name: "Porsche 911 GT1-98", category: "GT1" },
  { id: "pmr-toyota-gt-one", name: "Toyota GT-One", category: "GT1" },

  // Group C
  { id: "pmr-jaguar-xjr9", name: "Jaguar XJR-9 1990", category: "Group C" },
  { id: "pmr-mazda-787b", name: "Mazda 787B 1991", category: "Group C" },
  { id: "pmr-mercedes-sauber-c9", name: "Mercedes-Benz Sauber C9 1989", category: "Group C" },
  { id: "pmr-nissan-r89c", name: "Nissan R89C 1989", category: "Group C" },
  { id: "pmr-porsche-962c", name: "Porsche 962C", category: "Group C" },

  // LMP
  { id: "pmr-audi-r8-lm900", name: "Audi R8 LM900 2002", category: "LMP1" },
  { id: "pmr-bmw-v12-lmr", name: "BMW V12 LMR 1999", category: "LMP1" },
  { id: "pmr-cadillac-northstar", name: "Cadillac Northstar LMP-02", category: "LMP1" },
  { id: "pmr-panoz-lmp1", name: "Panoz LMP-1 Roadster-S 1999", category: "LMP1" },

  // Sports Car 70
  { id: "pmr-lola-t70", name: "Lola T70 Mk3B GT 1970", category: "Historic" },
  { id: "pmr-porsche-917k", name: "Porsche 917K 1970", category: "Historic" },

  // IMSA GTO
  { id: "pmr-audi-90-gto", name: "Audi 90 quattro IMSA GTO 1989", category: "GTO" },
  { id: "pmr-camaro-z28-gto", name: "Chevrolet Camaro Z28 IMSA GTO 1989", category: "GTO" },
  { id: "pmr-mazda-rx7-gto", name: "Mazda RX-7 IMSA GTO 1989", category: "GTO" },
  { id: "pmr-nissan-300zx-gto", name: "Nissan 300 ZX Turbo GTO 1989", category: "GTO" },
  { id: "pmr-mercury-cougar", name: "Roush Mercury Cougar XR-7 1989", category: "GTO" },

  // GTE (DLC)
  { id: "pmr-aston-vantage-gte", name: "Aston Martin Vantage GTE 2020", category: "GTE" },
  { id: "pmr-bmw-m8-gte", name: "BMW M8 GTE 2020", category: "GTE" },
  { id: "pmr-corvette-c7r", name: "Chevrolet Corvette C7.R 2017", category: "GTE" },
  { id: "pmr-corvette-c8r", name: "Chevrolet Corvette C8.R 2020", category: "GTE" },
  { id: "pmr-dodge-viper-gtsr", name: "Dodge SRT Viper GTS-R", category: "GTE" },
  { id: "pmr-ford-gt-lm-gte", name: "Ford GT LM GTE 2020", category: "GTE" },
  { id: "pmr-porsche-911-rsr-gte", name: "Porsche 911 RSR GTE 2020", category: "GTE" },

  // Group 5 (DLC)
  { id: "pmr-bmw-320-turbo-gr5", name: "BMW 320 Turbo Group 5 1978", category: "Group 5" },
  { id: "pmr-ford-capri-gr5", name: "Ford Capri Zakspeed Group 5 1980", category: "Group 5" },
  { id: "pmr-nissan-280zx-gtx", name: "Nissan 280 ZX IMSA GTX 1982", category: "Group 5" },
  { id: "pmr-nissan-skyline-silhouette", name: "Nissan Skyline Super Silhouette 1982", category: "Group 5" },
  { id: "pmr-porsche-935-80", name: "Porsche 935/80 1979", category: "Group 5" },

  // Aus-V8 (DLC)
  { id: "pmr-ford-falcon-v8", name: "Ford Falcon V8 2013", category: "V8 Supercars" },
].sort((a, b) => a.name.localeCompare(b.name));

const projectMotorRacingTracks: Track[] = [
  { id: "pmr-bathurst", name: "Mount Panorama (Bathurst)", country: "Australia" },
  { id: "pmr-brands-hatch", name: "Brands Hatch", country: "United Kingdom" },
  { id: "pmr-donnington", name: "Donington Park", country: "United Kingdom" },
  { id: "pmr-imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "pmr-monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "pmr-nurburgring-gp", name: "Nürburgring GP", country: "Germany" },
  { id: "pmr-red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "pmr-silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "pmr-spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "pmr-suzuka", name: "Suzuka International Racing Course", country: "Japan" },
  { id: "pmr-watkins-glen", name: "Watkins Glen International", country: "USA" },
  { id: "pmr-laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
].sort((a, b) => a.name.localeCompare(b.name));

export const simulatorData: Record<string, SimulatorData> = {
  "Assetto Corsa": {
    cars: assettoCorsaCars,
    tracks: assettoCorsaTracks,
  },
  "Assetto Corsa Competizione": {
    cars: accCars,
    tracks: accTracks,
  },
  "Assetto Corsa EVO": {
    cars: assettoConaEVOCars,
    tracks: assettoConaEVOTracks,
  },
  "Assetto Corsa Rally": {
    cars: assettoCorsaRallyCars,
    tracks: assettoCorsaRallyTracks,
  },
  "Automobilista 2": {
    cars: automobilista2Cars,
    tracks: automobilista2Tracks,
  },
  "iRacing": {
    cars: iRacingCars,
    tracks: iRacingTracks,
  },
  "Le Mans Ultimate": {
    cars: leMansUltimateCars,
    tracks: leMansUltimateTracks,
  },
  "Project Motor Racing": {
    cars: projectMotorRacingCars,
    tracks: projectMotorRacingTracks,
  },
  "RaceRoom": {
    cars: raceroomCars,
    tracks: raceroomTracks,
  },
};

export const categories = [
  "Cup",
  "DPi",
  "DTM",
  "DTM 1995",
  "Drift",
  "Electric",
  "Formula",
  "Formula 3",
  "GT",
  "GT1",
  "GT2",
  "GT3",
  "GT4",
  "GTE",
  "GTO",
  "GTP",
  "Group 2",
  "Group 4",
  "Group 5",
  "Group A",
  "Group B",
  "Group C",
  "Historic",
  "Historic Formula",
  "Historic Rally",
  "Hot Hatch",
  "Hypercar",
  "IndyCar",
  "Kart",
  "LMDh",
  "LMGT3",
  "LMH",
  "LMP1",
  "LMP2",
  "LMP3",
  "Luxury",
  "Muscle Car",
  "N-GT",
  "NASCAR",
  "Prototype",
  "RGT",
  "Rally",
  "Rally2",
  "Rally4",
  "RallyCross",
  "Road Car",
  "SUV",
  "Sports Car",
  "Sports Sedan",
  "Stock Car",
  "Supercar",
  "TCR",
  "Touring Car",
  "Track Car",
  "Truck",
  "V8 Supercars",
  "WRC",
  "WTCR",
] as const;

export type Category = typeof categories[number];
