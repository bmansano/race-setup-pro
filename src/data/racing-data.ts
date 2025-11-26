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

// iRacing - Mais de 100 carros e 140+ pistas
const iRacingCars: Car[] = [
  // NASCAR
  { id: "nascar-truck-silverado", name: "NASCAR Truck Series Chevrolet Silverado", category: "NASCAR" },
  { id: "nascar-truck-f150", name: "NASCAR Truck Series Ford F150", category: "NASCAR" },
  { id: "nascar-truck-tundra", name: "NASCAR Truck Series Toyota Tundra TRD Pro", category: "NASCAR" },
  { id: "nascar-xfinity-camaro", name: "NASCAR Xfinity Chevrolet Camaro", category: "NASCAR" },
  { id: "nascar-xfinity-mustang", name: "NASCAR Xfinity Ford Mustang", category: "NASCAR" },
  { id: "nascar-xfinity-supra", name: "NASCAR Xfinity Toyota Supra", category: "NASCAR" },
  { id: "nascar-cup-camaro", name: "NASCAR Cup Series Chevrolet Camaro ZL1", category: "NASCAR" },
  { id: "nascar-cup-mustang", name: "NASCAR Cup Series Ford Mustang", category: "NASCAR" },
  { id: "nascar-cup-camry", name: "NASCAR Cup Series Toyota Camry", category: "NASCAR" },
  { id: "nascar-nextgen-camaro", name: "NASCAR Next Gen Chevrolet Camaro ZL1", category: "NASCAR" },
  { id: "nascar-nextgen-mustang", name: "NASCAR Next Gen Ford Mustang", category: "NASCAR" },
  { id: "nascar-nextgen-camry", name: "NASCAR Next Gen Toyota Camry", category: "NASCAR" },
  
  // Open Wheel - F1
  { id: "mercedes-w13", name: "Mercedes-AMG W13 F1", category: "Formula" },
  { id: "mercedes-w12", name: "Mercedes-AMG W12 F1", category: "Formula" },
  { id: "mclaren-mp4-30", name: "McLaren MP4-30 F1", category: "Formula" },
  { id: "williams-fw31", name: "Williams FW31 F1", category: "Formula" },
  
  // Open Wheel - IndyCar/Formula
  { id: "dallara-ir18", name: "Dallara IR18 (IndyCar)", category: "Formula" },
  { id: "dallara-ir01", name: "Dallara iR-01", category: "Formula" },
  { id: "dallara-dw12", name: "Dallara DW12", category: "Formula" },
  { id: "formula-renault-2", name: "Formula Renault 2.0", category: "Formula" },
  { id: "formula-vee", name: "Formula Vee", category: "Formula" },
  { id: "skipbarber-2000", name: "Skip Barber Formula 2000", category: "Formula" },
  { id: "usf-2000", name: "USF 2000", category: "Formula" },
  { id: "pro-mazda", name: "Pro Mazda", category: "Formula" },
  
  // GT3 Cars
  { id: "ferrari-488-gt3-evo", name: "Ferrari 488 GT3 Evo 2020", category: "GT3" },
  { id: "ferrari-296-gt3", name: "Ferrari 296 GT3", category: "GT3" },
  { id: "porsche-911-gt3-r", name: "Porsche 911 GT3 R", category: "GT3" },
  { id: "bmw-m4-gt3", name: "BMW M4 GT3", category: "GT3" },
  { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3 2020", category: "GT3" },
  { id: "audi-r8-lms-gt3", name: "Audi R8 LMS GT3", category: "GT3" },
  { id: "mclaren-mp4-12c-gt3", name: "McLaren MP4-12C GT3", category: "GT3" },
  { id: "lamborghini-huracan-gt3", name: "Lamborghini Huracan GT3 EVO", category: "GT3" },
  
  // GT4 Cars
  { id: "aston-vantage-gt4", name: "Aston Martin Vantage GT4", category: "GT4" },
  { id: "bmw-m4-gt4", name: "BMW M4 GT4", category: "GT4" },
  { id: "mclaren-570s-gt4", name: "McLaren 570S GT4", category: "GT4" },
  
  // GTP/LMDh Prototypes
  { id: "acura-arx-06", name: "Acura ARX-06 GTP", category: "Prototype" },
  { id: "bmw-m-hybrid", name: "BMW M Hybrid V8", category: "Prototype" },
  { id: "cadillac-v-series", name: "Cadillac V-Series.R", category: "Prototype" },
  { id: "porsche-963", name: "Porsche 963 GTP", category: "Prototype" },
  { id: "dallara-p217", name: "Dallara P217 LMP2", category: "Prototype" },
  
  // Road Cars
  { id: "toyota-gr86", name: "Toyota GR86", category: "Road Car" },
  { id: "mazda-mx5-cup", name: "Mazda MX-5 Cup", category: "Road Car" },
  { id: "cadillac-ctsv", name: "Cadillac CTS-V", category: "Road Car" },
  { id: "corvette-c8-stingray", name: "Chevrolet Corvette C8 Stingray", category: "Road Car" },
  { id: "porsche-911-gt3-cup", name: "Porsche 911 GT3 Cup", category: "Road Car" },
];

const iRacingTracks: Track[] = [
  // América do Norte - Circuitos
  { id: "barber", name: "Barber Motorsports Park", country: "USA" },
  { id: "cota", name: "Circuit of The Americas", country: "USA" },
  { id: "daytona-road", name: "Daytona International Speedway - Road Course", country: "USA" },
  { id: "indianapolis-road", name: "Indianapolis Motor Speedway - Road Course", country: "USA" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
  { id: "lime-rock", name: "Lime Rock Park", country: "USA" },
  { id: "mid-ohio", name: "Mid-Ohio Sports Car Course", country: "USA" },
  { id: "portland", name: "Portland International Raceway", country: "USA" },
  { id: "road-america", name: "Road America", country: "USA" },
  { id: "road-atlanta", name: "Road Atlanta", country: "USA" },
  { id: "sebring", name: "Sebring International Raceway", country: "USA" },
  { id: "sonoma", name: "Sonoma Raceway", country: "USA" },
  { id: "vir", name: "VIRginia International Raceway", country: "USA" },
  { id: "watkins-glen", name: "Watkins Glen International", country: "USA" },
  
  // América do Norte - Ovais
  { id: "atlanta-oval", name: "Atlanta Motor Speedway", country: "USA" },
  { id: "bristol", name: "Bristol Motor Speedway", country: "USA" },
  { id: "charlotte", name: "Charlotte Motor Speedway", country: "USA" },
  { id: "darlington", name: "Darlington Raceway", country: "USA" },
  { id: "daytona-oval", name: "Daytona International Speedway - Oval", country: "USA" },
  { id: "homestead", name: "Homestead Miami Speedway", country: "USA" },
  { id: "indianapolis-oval", name: "Indianapolis Motor Speedway - Oval", country: "USA" },
  { id: "kansas", name: "Kansas Speedway", country: "USA" },
  { id: "martinsville", name: "Martinsville Speedway", country: "USA" },
  { id: "phoenix", name: "Phoenix Raceway", country: "USA" },
  { id: "pocono", name: "Pocono Raceway", country: "USA" },
  { id: "talladega", name: "Talladega Superspeedway", country: "USA" },
  { id: "texas", name: "Texas Motor Speedway", country: "USA" },
  
  // Europa
  { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
  { id: "donnington", name: "Donington Park", country: "United Kingdom" },
  { id: "hockenheim", name: "Hockenheimring", country: "Germany" },
  { id: "hungaroring", name: "Hungaroring", country: "Hungary" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "le-mans", name: "Circuit de la Sarthe (24h Le Mans)", country: "France" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
  { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
  { id: "oulton-park", name: "Oulton Park", country: "United Kingdom" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "snetterton", name: "Snetterton Circuit", country: "United Kingdom" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "zandvoort", name: "Circuit Park Zandvoort", country: "Netherlands" },
  
  // Ásia
  { id: "suzuka", name: "Suzuka International Racing Course", country: "Japan" },
  { id: "fuji", name: "Fuji Speedway", country: "Japan" },
  { id: "motegi", name: "Twin Ring Motegi", country: "Japan" },
  { id: "autopolis", name: "Autopolis", country: "Japan" },
  
  // Austrália
  { id: "bathurst", name: "Mount Panorama Circuit (Bathurst)", country: "Australia" },
  { id: "phillip-island", name: "Phillip Island Circuit", country: "Australia" },
  
  // América do Sul
  { id: "interlagos", name: "Autódromo José Carlos Pace (Interlagos)", country: "Brazil" },
  
  // África
  { id: "kyalami", name: "Kyalami Grand Prix Circuit", country: "South Africa" },
];

// Automobilista 2 - 225+ carros
const automobilista2Cars: Car[] = [
  // GT3 Gen2
  { id: "aston-vantage-gt3-evo", name: "Aston Martin Vantage GT3 Evo", category: "GT3" },
  { id: "audi-r8-gt3-evo2", name: "Audi R8 LMS GT3 Evo II", category: "GT3" },
  { id: "bmw-m4-gt3", name: "BMW M4 GT3", category: "GT3" },
  { id: "corvette-z06-gt3", name: "Chevrolet Corvette Z06 GT3.R", category: "GT3" },
  { id: "ferrari-296-gt3", name: "Ferrari 296 GT3", category: "GT3" },
  { id: "lamborghini-huracan-gt3-evo2", name: "Lamborghini Huracán GT3 EVO2", category: "GT3" },
  { id: "mclaren-720s-gt3-evo", name: "McLaren 720S GT3 Evo", category: "GT3" },
  { id: "mercedes-gt3-evo", name: "Mercedes-AMG GT3 Evo", category: "GT3" },
  { id: "porsche-992-gt3-r", name: "Porsche 911 GT3 R (992)", category: "GT3" },
  
  // GT4
  { id: "alpine-a110-gt4", name: "Alpine A110 GT4 Evo", category: "GT4" },
  { id: "aston-vantage-gt4", name: "Aston Martin Vantage GT4", category: "GT4" },
  { id: "audi-r8-gt4", name: "Audi R8 LMS GT4", category: "GT4" },
  { id: "bmw-m4-gt4", name: "BMW M4 GT4", category: "GT4" },
  { id: "camaro-gt4", name: "Chevrolet Camaro GT4.R", category: "GT4" },
  { id: "ginetta-g55-gt4", name: "Ginetta G55 GT4", category: "GT4" },
  { id: "mclaren-570s-gt4", name: "McLaren 570S GT4", category: "GT4" },
  { id: "mercedes-gt4", name: "Mercedes-AMG GT4", category: "GT4" },
  { id: "porsche-718-gt4", name: "Porsche 718 Cayman GT4 Clubsport", category: "GT4" },
  
  // LMDh/GTP Prototypes
  { id: "alpine-a424", name: "Alpine A424", category: "LMDh" },
  { id: "aston-valkyrie-lmh", name: "Aston Martin Valkyrie AMR-LMH", category: "LMDh" },
  { id: "bmw-m-hybrid", name: "BMW M Hybrid V8", category: "LMDh" },
  { id: "cadillac-v-series", name: "Cadillac V-Series.R", category: "LMDh" },
  { id: "lamborghini-sc63", name: "Lamborghini SC63", category: "LMDh" },
  { id: "porsche-963", name: "Porsche 963", category: "LMDh" },
  
  // Stock Car Brasil (múltiplas gerações)
  { id: "stock-car-2024", name: "Chevrolet Cruze Stock Car 2024", category: "Stock Car" },
  { id: "stock-car-2023", name: "Chevrolet Cruze Stock Car 2023", category: "Stock Car" },
  { id: "stock-car-2022", name: "Chevrolet Cruze Stock Car 2022", category: "Stock Car" },
  { id: "toyota-stock-2024", name: "Toyota Corolla Stock Car 2024", category: "Stock Car" },
  { id: "stock-car-1999", name: "Chevrolet Omega Stock Car 1999", category: "Stock Car" },
  { id: "opala-1979", name: "Chevrolet Opala Stock Cars 1979", category: "Stock Car" },
  
  // Formula - Modernas
  { id: "f-ultimate-gen2", name: "Formula Ultimate Gen 2 (F1 2022-24)", category: "Formula" },
  { id: "f-reiza", name: "Formula Reiza (F1 2011)", category: "Formula" },
  { id: "f-usa-2023", name: "Formula USA 2023 (IndyCar)", category: "Formula" },
  { id: "formula-3-brasil", name: "Dallara F309 (F3 Brasil)", category: "Formula" },
  
  // Formula - Clássicas
  { id: "f-v10-gen2", name: "Formula V10 Gen 2 (Williams FW23 - F1 2001)", category: "Historic Formula" },
  { id: "f-v12", name: "Formula V12 (Ferrari 412T2 - F1 1995)", category: "Historic Formula" },
  { id: "f-classic-gen4", name: "Formula Classic Gen 4 (F1 1991)", category: "Historic Formula" },
  { id: "lotus-98t", name: "Lotus 98T (F1 1986)", category: "Historic Formula" },
  { id: "lotus-79", name: "Lotus 79 (F1 1978/79)", category: "Historic Formula" },
  { id: "lotus-72e", name: "Lotus 72E (F1 1974)", category: "Historic Formula" },
  { id: "lotus-49", name: "Lotus 49C (F1 1969/70)", category: "Historic Formula" },
  { id: "brabham-bt52", name: "Brabham BT52 (F1 1983)", category: "Historic Formula" },
  { id: "brabham-bt49", name: "Brabham BT49 (F1 1978/79)", category: "Historic Formula" },
  { id: "mclaren-m23", name: "McLaren M23 (F1 1974)", category: "Historic Formula" },
  
  // Group C
  { id: "mercedes-c9", name: "Mercedes-Benz C9", category: "Group C" },
  { id: "porsche-962c", name: "Porsche 962C", category: "Group C" },
  { id: "jaguar-xjr9", name: "Jaguar XJR-9", category: "Group C" },
  { id: "nissan-r89c", name: "Nissan R89C", category: "Group C" },
  { id: "sauber-c9", name: "Sauber C9", category: "Group C" },
  
  // GT1
  { id: "mclaren-f1-gtr", name: "McLaren F1 GTR", category: "GT1" },
  { id: "maserati-mc12-gt1", name: "Maserati MC12 GT1", category: "GT1" },
  { id: "aston-dbr9", name: "Aston Martin DBR9", category: "GT1" },
  { id: "corvette-c5r", name: "Chevrolet Corvette C5.R", category: "GT1" },
  { id: "dodge-viper-gtsr", name: "Dodge Viper GTS-R", category: "GT1" },
  
  // Touring Cars Group A
  { id: "audi-quattro-v8", name: "Audi Quattro V8 (Group A)", category: "Touring Car" },
  { id: "bmw-m3-e30-groupa", name: "BMW M3 Sport Evolution (Group A)", category: "Touring Car" },
  { id: "ford-sierra-rs500", name: "Ford Sierra RS500 Cosworth (Group A)", category: "Touring Car" },
  { id: "mercedes-190e-evo2", name: "Mercedes-Benz 190E Evo II (Group A)", category: "Touring Car" },
  
  // Karts
  { id: "kart-125-2stroke", name: "Kart 125cc 2Stroke", category: "Kart" },
  { id: "kart-125-shifter", name: "Kart 125cc Shifter", category: "Kart" },
  { id: "kart-gx390", name: "Kart GX390 Race", category: "Kart" },
  { id: "kart-cross", name: "Kart Cross", category: "Kart" },
  
  // Copa Truck Brasil
  { id: "iveco-stralis", name: "Iveco Stralis (Copa Truck)", category: "Truck" },
  { id: "man-tgx", name: "MAN TGX (Copa Truck)", category: "Truck" },
  { id: "mercedes-atego", name: "Mercedes-Benz Atego (Copa Truck)", category: "Truck" },
  { id: "vw-constellation", name: "Volkswagen Constellation (Copa Truck)", category: "Truck" },
  
  // Road Cars & Hypercars
  { id: "corvette-c8-z06", name: "Chevrolet Corvette C8 Z06", category: "Road Car" },
  { id: "lamborghini-revuelto", name: "Lamborghini Revuelto", category: "Hypercar" },
  { id: "lamborghini-veneno", name: "Lamborghini Veneno Roadster", category: "Hypercar" },
  { id: "brabham-bt62", name: "Brabham BT62", category: "Hypercar" },
  
  // Caterham
  { id: "caterham-620r", name: "Caterham 620R", category: "Road Car" },
  { id: "caterham-academy", name: "Caterham Academy", category: "Road Car" },
  
  // RallyCross
  { id: "citroen-ds3-rx", name: "Citroen DS3 RX", category: "RallyCross" },
  { id: "ford-fiesta-rx", name: "Ford Fiesta RX", category: "RallyCross" },
  { id: "mitsubishi-evo-rx", name: "Mitsubishi Lancer Evo X RX", category: "RallyCross" },
  { id: "vw-polo-rx", name: "Volkswagen Polo RX", category: "RallyCross" },
];

const automobilista2Tracks: Track[] = [
  // Brasil
  { id: "interlagos", name: "Autódromo José Carlos Pace (Interlagos)", country: "Brazil" },
  { id: "curitiba", name: "Autódromo Internacional de Curitiba", country: "Brazil" },
  { id: "goiania", name: "Autódromo de Goiânia", country: "Brazil" },
  { id: "velopark", name: "Autódromo Velopark", country: "Brazil" },
  { id: "campo-grande", name: "Campo Grande", country: "Brazil" },
  { id: "brasilia", name: "Autódromo de Brasília", country: "Brazil" },
  { id: "cascavel", name: "Autódromo Zilmar Beux (Cascavel)", country: "Brazil" },
  { id: "londrina", name: "Autódromo de Londrina", country: "Brazil" },
  { id: "taruma", name: "Autódromo de Tarumã", country: "Brazil" },
  { id: "jacarepagua", name: "Autódromo de Jacarepaguá", country: "Brazil" },
  
  // América do Norte
  { id: "watkins-glen", name: "Watkins Glen International", country: "USA" },
  { id: "road-atlanta", name: "Road Atlanta", country: "USA" },
  { id: "daytona", name: "Daytona International Speedway", country: "USA" },
  { id: "indianapolis", name: "Indianapolis Motor Speedway", country: "USA" },
  { id: "sebring", name: "Sebring International Raceway", country: "USA" },
  { id: "cota", name: "Circuit of The Americas (COTA)", country: "USA" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
  { id: "long-beach", name: "Long Beach Street Circuit", country: "USA" },
  { id: "mexico", name: "Autódromo Hermanos Rodríguez", country: "Mexico" },
  { id: "mosport", name: "Canadian Tire Motorsport Park", country: "Canada" },
  
  // Europa
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "brands-hatch", name: "Brands Hatch", country: "United Kingdom" },
  { id: "donnington", name: "Donington Park", country: "United Kingdom" },
  { id: "oulton-park", name: "Oulton Park", country: "United Kingdom" },
  { id: "snetterton", name: "Snetterton Circuit", country: "United Kingdom" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "nurburgring", name: "Nürburgring", country: "Germany" },
  { id: "hockenheim", name: "Hockenheimring", country: "Germany" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "mugello", name: "Mugello Circuit", country: "Italy" },
  { id: "vallelunga", name: "Vallelunga Circuit", country: "Italy" },
  { id: "misano", name: "Misano World Circuit", country: "Italy" },
  { id: "estoril", name: "Circuito do Estoril", country: "Portugal" },
  { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  { id: "zandvoort", name: "Circuit Park Zandvoort", country: "Netherlands" },
  { id: "zolder", name: "Circuit Zolder", country: "Belgium" },
  { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
  
  // Austrália/Ásia
  { id: "bathurst", name: "Mount Panorama (Bathurst)", country: "Australia" },
  { id: "adelaide", name: "Adelaide Street Circuit", country: "Australia" },
  { id: "phillip-island", name: "Phillip Island", country: "Australia" },
  { id: "suzuka", name: "Suzuka Circuit", country: "Japan" },
  { id: "fuji", name: "Fuji Speedway", country: "Japan" },
  { id: "autopolis", name: "Autopolis", country: "Japan" },
  
  // África
  { id: "kyalami", name: "Kyalami", country: "South Africa" },
];

// Assetto Corsa Competizione - 53 carros
const accCars: Car[] = [
  // GT3 - 2023/2024
  { id: "ferrari-296-gt3", name: "Ferrari 296 GT3 (2023)", category: "GT3" },
  { id: "lamborghini-huracan-evo2", name: "Lamborghini Huracan EVO2 GT3 (2023)", category: "GT3" },
  { id: "porsche-992-gt3r", name: "Porsche 992 GT3R (2023)", category: "GT3" },
  { id: "mclaren-720s-evo", name: "McLaren 720S Evo GT3 (2023)", category: "GT3" },
  { id: "audi-r8-evo2", name: "Audi R8 LMS Evo II GT3 (2022)", category: "GT3" },
  { id: "bmw-m4-gt3", name: "BMW M4 GT3 (2021)", category: "GT3" },
  
  // GT3 - 2018-2020
  { id: "aston-v8-2019", name: "Aston Martin V8 Vantage GT3 (2019)", category: "GT3" },
  { id: "aston-v12-2013", name: "Aston Martin V12 Vantage GT3 (2013)", category: "GT3" },
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
];

const accTracks: Track[] = [
  // Base Game - GT World Challenge Europe
  { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
  { id: "hungaroring", name: "Hungaroring", country: "Hungary" },
  { id: "misano", name: "Misano World Circuit Marco Simoncelli", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale di Monza", country: "Italy" },
  { id: "nurburgring", name: "Nürburgring", country: "Germany" },
  { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "zandvoort", name: "Circuit Zandvoort", country: "Netherlands" },
  { id: "zolder", name: "Circuit Zolder", country: "Belgium" },
  
  // Intercontinental GT Pack DLC
  { id: "kyalami", name: "Kyalami Grand Prix Circuit", country: "South Africa" },
  { id: "bathurst", name: "Mount Panorama Circuit (Bathurst)", country: "Australia" },
  { id: "suzuka", name: "Suzuka International Racing Course", country: "Japan" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
  
  // British GT Pack DLC
  { id: "donnington", name: "Donington Park Circuit", country: "United Kingdom" },
  { id: "oulton-park", name: "Oulton Park Circuit", country: "United Kingdom" },
  { id: "snetterton", name: "Snetterton Circuit", country: "United Kingdom" },
  
  // American Track Pack DLC
  { id: "cota", name: "Circuit of The Americas (COTA)", country: "USA" },
  { id: "indianapolis", name: "Indianapolis Motor Speedway", country: "USA" },
  { id: "watkins-glen", name: "Watkins Glen International", country: "USA" },
  
  // Other DLCs
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "valencia", name: "Circuit Ricardo Tormo (Valencia)", country: "Spain" },
];

// Assetto Corsa - 178 carros (incluindo todos os DLCs)
const assettoCorsaCars: Car[] = [
  // Hypercars & Supercars
  { id: "ferrari-laferrari", name: "Ferrari LaFerrari", category: "Hypercar" },
  { id: "ferrari-fxxk", name: "Ferrari FXX K", category: "Hypercar" },
  { id: "mclaren-p1", name: "McLaren P1", category: "Hypercar" },
  { id: "mclaren-p1-gtr", name: "McLaren P1 GTR", category: "Hypercar" },
  { id: "pagani-huayra", name: "Pagani Huayra", category: "Hypercar" },
  { id: "pagani-huayra-bc", name: "Pagani Huayra BC", category: "Hypercar" },
  { id: "pagani-zonda-r", name: "Pagani Zonda R", category: "Hypercar" },
  { id: "lamborghini-aventador", name: "Lamborghini Aventador LP700-4", category: "Hypercar" },
  { id: "lamborghini-huracan", name: "Lamborghini Huracan Performante", category: "Sports Car" },
  
  // GT3 Race Cars
  { id: "ferrari-488-gt3", name: "Ferrari 488 GT3", category: "GT3" },
  { id: "mclaren-650s-gt3", name: "McLaren 650S GT3", category: "GT3" },
  { id: "mclaren-mp4-12c-gt3", name: "McLaren MP4-12C GT3", category: "GT3" },
  { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3", category: "GT3" },
  { id: "nissan-gtr-gt3-2015", name: "Nissan GT-R Nismo 2014 GT3", category: "GT3" },
  { id: "bmw-z4-gt3", name: "BMW Z4 GT3", category: "GT3" },
  { id: "audi-r8-lms", name: "Audi R8 LMS", category: "GT3" },
  { id: "audi-r8-lms-ultra", name: "Audi R8 LMS Ultra", category: "GT3" },
  
  // Porsche Pack (15+ carros)
  { id: "porsche-918-spyder", name: "Porsche 918 Spyder", category: "Hypercar" },
  { id: "porsche-911-turbo-s", name: "Porsche 911 Turbo S", category: "Sports Car" },
  { id: "porsche-911-gt3-rs", name: "Porsche 911 GT3 RS", category: "Sports Car" },
  { id: "porsche-911-carrera-s", name: "Porsche 911 Carrera S", category: "Sports Car" },
  { id: "porsche-718-cayman-s", name: "Porsche 718 Cayman S", category: "Sports Car" },
  { id: "porsche-718-boxster-s", name: "Porsche 718 Boxster S", category: "Sports Car" },
  { id: "porsche-cayman-gt4", name: "Porsche Cayman GT4 Clubsport", category: "GT4" },
  { id: "porsche-911-gt3-cup", name: "Porsche 911 GT3 Cup 2017", category: "Cup" },
  { id: "porsche-911-gt3-r-2016", name: "Porsche 911 GT3 R 2016", category: "GT3" },
  { id: "porsche-919-2015", name: "Porsche 919 Hybrid 2015", category: "Prototype" },
  { id: "porsche-919-2016", name: "Porsche 919 Hybrid 2016", category: "Prototype" },
  { id: "porsche-917-30", name: "Porsche 917/30", category: "Historic" },
  { id: "porsche-917k", name: "Porsche 917K", category: "Historic" },
  { id: "porsche-935-78", name: "Porsche 935/78 Moby Dick", category: "Historic" },
  { id: "porsche-962c-short", name: "Porsche 962C Short Tail", category: "Group C" },
  { id: "porsche-962c-long", name: "Porsche 962C Long Tail", category: "Group C" },
  
  // Ferrari Pack (7 carros)
  { id: "ferrari-250-gto", name: "Ferrari 250 GTO", category: "Historic" },
  { id: "ferrari-458-italia", name: "Ferrari 458 Italia", category: "Sports Car" },
  { id: "ferrari-488-gtb", name: "Ferrari 488 GTB", category: "Sports Car" },
  { id: "ferrari-599xx-evo", name: "Ferrari 599XX Evo", category: "Track Car" },
  { id: "ferrari-f138", name: "Ferrari F138 (F1 2013)", category: "Formula" },
  { id: "ferrari-f2004", name: "Ferrari F2004 (F1 2004)", category: "Formula" },
  { id: "ferrari-312t", name: "Ferrari 312T (F1 1975)", category: "Historic Formula" },
  
  // Lotus Pack
  { id: "lotus-25", name: "Lotus 25 (F1 1963)", category: "Historic Formula" },
  { id: "lotus-49", name: "Lotus 49 (F1 1967)", category: "Historic Formula" },
  { id: "lotus-72d", name: "Lotus 72D (F1 1970)", category: "Historic Formula" },
  { id: "lotus-98t", name: "Lotus 98T (F1 1986)", category: "Historic Formula" },
  { id: "lotus-exos-125", name: "Lotus Exos 125", category: "Formula" },
  { id: "lotus-2-eleven", name: "Lotus 2-Eleven GT4", category: "GT4" },
  { id: "lotus-evora-gtc", name: "Lotus Evora GTC", category: "GT" },
  { id: "lotus-evora-gte", name: "Lotus Evora GTE", category: "GT" },
  
  // Japanese Pack
  { id: "mazda-787b", name: "Mazda 787B", category: "Group C" },
  { id: "mazda-rx7-spirit-r", name: "Mazda RX-7 Spirit R", category: "Sports Car" },
  { id: "nissan-skyline-r34", name: "Nissan Skyline GT-R R34", category: "Sports Car" },
  { id: "nissan-gtr-2015", name: "Nissan GT-R Nismo 2015", category: "Sports Car" },
  { id: "toyota-ae86", name: "Toyota AE86", category: "Sports Car" },
  { id: "toyota-gt86", name: "Toyota GT86", category: "Sports Car" },
  { id: "toyota-supra", name: "Toyota Supra", category: "Sports Car" },
  { id: "toyota-ts040", name: "Toyota TS040 Hybrid", category: "Prototype" },
  
  // BMW Pack
  { id: "bmw-m3-e30", name: "BMW M3 E30", category: "Sports Car" },
  { id: "bmw-m3-e30-drift", name: "BMW M3 E30 Drift", category: "Drift" },
  { id: "bmw-m3-e30-dtm", name: "BMW M3 E30 DTM", category: "Touring Car" },
  { id: "bmw-m3-e92", name: "BMW M3 E92", category: "Sports Car" },
  { id: "bmw-m3-gt2", name: "BMW M3 GT2", category: "GT2" },
  { id: "bmw-m4", name: "BMW M4", category: "Sports Car" },
  { id: "bmw-z4-e89", name: "BMW Z4 E89 35is", category: "Sports Car" },
  
  // Mercedes Pack
  { id: "mercedes-190e-evo2", name: "Mercedes-Benz 190E Evo II", category: "Touring Car" },
  { id: "mercedes-190e-dtm", name: "Mercedes-Benz 190E Evo II DTM", category: "Touring Car" },
  { id: "mercedes-sls-amg", name: "Mercedes-Benz SLS AMG", category: "Sports Car" },
  { id: "mercedes-sls-gt3", name: "Mercedes-Benz SLS AMG GT3", category: "GT3" },
  { id: "mercedes-amg-gtr", name: "Mercedes-AMG GT R", category: "Sports Car" },
  { id: "mercedes-c9", name: "Mercedes-Benz C9", category: "Group C" },
  
  // Maserati Pack
  { id: "maserati-alfieri", name: "Maserati Alfieri", category: "Sports Car" },
  { id: "maserati-granturismo-gt4", name: "Maserati GranTurismo MC GT4", category: "GT4" },
  { id: "maserati-levante", name: "Maserati Levante S", category: "SUV" },
  { id: "maserati-mc12", name: "Maserati MC12 GT1", category: "GT1" },
  { id: "maserati-quattroporte", name: "Maserati Quattroporte", category: "Luxury" },
  
  // Alfa Romeo
  { id: "alfa-4c", name: "Alfa Romeo 4C", category: "Sports Car" },
  { id: "alfa-giulietta-qv", name: "Alfa Romeo Giulietta QV Launch Edition", category: "Sports Car" },
  { id: "alfa-mito-qv", name: "Alfa Romeo MiTo QV", category: "Sports Car" },
  { id: "alfa-155-ti", name: "Alfa Romeo 155 Ti V6 (BTCC)", category: "Touring Car" },
  { id: "alfa-gta", name: "Alfa Romeo GTA", category: "Historic" },
  { id: "alfa-33-stradale", name: "Alfa Romeo 33 Stradale", category: "Historic" },
  
  // Abarth
  { id: "abarth-500-essesse", name: "Abarth 500 EsseEsse", category: "Sports Car" },
  { id: "abarth-595-ss", name: "Abarth 595 SS", category: "Sports Car" },
  { id: "fiat-500-abarth", name: "Fiat 500 Abarth", category: "Sports Car" },
  
  // Historic Racing
  { id: "ford-gt40", name: "Ford GT40", category: "Historic" },
  { id: "ford-escort-rs1600", name: "Ford Escort RS1600", category: "Historic" },
  { id: "shelby-cobra", name: "Shelby Cobra 427 S/C", category: "Historic" },
  { id: "lancia-delta-s4", name: "Lancia Delta S4", category: "Group B" },
  { id: "lancia-stratos", name: "Lancia Stratos", category: "Historic" },
  
  // Mazda Pack
  { id: "mazda-mx5-cup", name: "Mazda MX-5 Cup", category: "Cup" },
  { id: "mazda-mx5-na", name: "Mazda MX-5 NA", category: "Road Car" },
  { id: "mazda-mx5-nd", name: "Mazda MX-5 ND", category: "Road Car" },
  
  // Formula & Single Seaters
  { id: "dallara-f312", name: "Dallara F312", category: "Formula 3" },
  { id: "formula-abarth", name: "Formula Abarth", category: "Formula" },
  { id: "tatuus-fa01", name: "Tatuus FA01", category: "Formula" },
  
  // Prototypes
  { id: "audi-r18", name: "Audi R18 E-Tron Quattro 2014", category: "Prototype" },
  { id: "corvette-c7r", name: "Corvette C7.R", category: "GTE" },
  { id: "glickenhaus-scg003", name: "Glickenhaus SCG003", category: "Prototype" },
  
  // RUF Collection
  { id: "ruf-ctr3", name: "RUF CTR3", category: "Sports Car" },
  { id: "ruf-rgt8", name: "RUF RGT-8", category: "Sports Car" },
  { id: "ruf-rt12r", name: "RUF RT12 R", category: "Sports Car" },
  
  // Praga
  { id: "praga-r1", name: "Praga R1", category: "Track Car" },
];

const assettoCorsaTracks: Track[] = [
  // Base Game
  { id: "magione", name: "Autodromo dell'Umbria - Magione", country: "Italy" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "mugello", name: "Mugello Circuit", country: "Italy" },
  { id: "vallelunga", name: "Autodromo Vallelunga", country: "Italy" },
  { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
  { id: "zandvoort", name: "Circuit Park Zandvoort", country: "Netherlands" },
  { id: "trento-bondone", name: "Trento-Bondone (Hillclimb)", country: "Italy" },
  { id: "drift", name: "Drift Track", country: "Various" },
  { id: "drag", name: "Drag Strip", country: "Various" },
  
  // Dream Pack DLCs
  { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
  { id: "black-cat-county", name: "Black Cat County", country: "USA" },
  { id: "highlands", name: "Highlands Motorsport Park", country: "New Zealand" },
];

// Assetto Corsa EVO - Early Access (20+ carros)
const assettoConaEVOCars: Car[] = [
  // Hot Hatches
  { id: "abarth-695", name: "Abarth 695 Biposto", category: "Hot Hatch" },
  { id: "alfa-giulia-gtam", name: "Alfa Romeo Giulia GTAm", category: "Sports Sedan" },
  { id: "alfa-junior", name: "Alfa Romeo Junior Veloce", category: "Hot Hatch" },
  { id: "alpine-a110-s", name: "Alpine A110 S", category: "Sports Car" },
  { id: "alpine-a290", name: "Alpine A290 Beta", category: "Hot Hatch" },
  { id: "audi-rs3", name: "Audi RS3", category: "Sports Sedan" },
  { id: "hyundai-i20-n", name: "Hyundai i20 N", category: "Hot Hatch" },
  { id: "hyundai-i30-n", name: "Hyundai i30 N", category: "Hot Hatch" },
  { id: "toyota-gr-yaris", name: "Toyota GR Yaris", category: "Hot Hatch" },
  { id: "toyota-gr86", name: "Toyota GR86", category: "Sports Car" },
  
  // Performance Cars
  { id: "bmw-m2", name: "BMW M2", category: "Sports Car" },
  { id: "bmw-m3-comp", name: "BMW M3 Competition", category: "Sports Sedan" },
  { id: "bmw-m4-csl", name: "BMW M4 CSL", category: "Sports Car" },
  { id: "mercedes-a45s", name: "Mercedes-AMG A45 S", category: "Hot Hatch" },
  { id: "nissan-gtr-nismo", name: "Nissan GT-R Nismo", category: "Sports Car" },
  { id: "ford-mustang-dark", name: "Ford Mustang Dark Horse", category: "Muscle Car" },
  
  // Track & Supercars
  { id: "dallara-stradale", name: "Dallara Stradale", category: "Track Car" },
  { id: "ferrari-296-gtb", name: "Ferrari 296 GTB", category: "Supercar" },
  { id: "ferrari-sf90", name: "Ferrari SF90 Stradale", category: "Hypercar" },
  { id: "lamborghini-sterrato", name: "Lamborghini Huracán Sterrato", category: "Sports Car" },
  { id: "lotus-emira", name: "Lotus Emira", category: "Sports Car" },
  { id: "porsche-911-gt3-992", name: "Porsche 911 GT3 (992)", category: "Sports Car" },
  { id: "porsche-911-gt3-rs-992", name: "Porsche 911 GT3 RS (992)", category: "Sports Car" },
  { id: "porsche-718-gt4-rs", name: "Porsche 718 Cayman GT4 RS", category: "Track Car" },
];

const assettoConaEVOTracks: Track[] = [
  // Early Access
  { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
  { id: "brands-hatch", name: "Brands Hatch", country: "United Kingdom" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
  { id: "bathurst", name: "Mount Panorama (Bathurst)", country: "Australia" },
  { id: "nurburgring-gp", name: "Nürburgring GP", country: "Germany" },
  { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "suzuka", name: "Suzuka International Racing Course", country: "Japan" },
];

// RaceRoom Racing Experience - 150+ carros
const raceroomCars: Car[] = [
  // DTM (múltiplas gerações)
  { id: "mercedes-c-dtm-1995", name: "Mercedes-Benz C-Class DTM 1995", category: "DTM" },
  { id: "mercedes-c-dtm-2005", name: "Mercedes-Benz C-Class DTM 2005", category: "DTM" },
  { id: "mercedes-c-dtm-2013", name: "Mercedes-Benz C-Class DTM 2013", category: "DTM" },
  { id: "audi-a4-dtm", name: "Audi A4 DTM 2005", category: "DTM" },
  { id: "audi-a5-dtm", name: "Audi A5 DTM 2013", category: "DTM" },
  { id: "audi-rs5-dtm", name: "Audi RS5 DTM 2018", category: "DTM" },
  { id: "bmw-m3-dtm-1992", name: "BMW M3 DTM 1992", category: "DTM" },
  { id: "bmw-m4-dtm", name: "BMW M4 DTM 2018", category: "DTM" },
  { id: "opel-calibra-dtm", name: "Opel Calibra DTM 1995", category: "DTM" },
  
  // GT3
  { id: "audi-r8-gt3", name: "Audi R8 LMS GT3", category: "GT3" },
  { id: "audi-r8-gt3-evo2", name: "Audi R8 LMS GT3 Evo II", category: "GT3" },
  { id: "bmw-m6-gt3", name: "BMW M6 GT3", category: "GT3" },
  { id: "bmw-m4-gt3", name: "BMW M4 GT3", category: "GT3" },
  { id: "bentley-gt3", name: "Bentley Continental GT3", category: "GT3" },
  { id: "corvette-c7-gt3", name: "Corvette C7.R GT3", category: "GT3" },
  { id: "ferrari-488-gt3", name: "Ferrari 488 GT3", category: "GT3" },
  { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3", category: "GT3" },
  { id: "mclaren-720s-gt3", name: "McLaren 720S GT3", category: "GT3" },
  { id: "porsche-911-gt3-r", name: "Porsche 911 GT3 R", category: "GT3" },
  
  // GT2
  { id: "audi-r8-gt2", name: "Audi R8 LMS GT2", category: "GT2" },
  { id: "ktm-xbow-gt2", name: "KTM X-Bow GT2", category: "GT2" },
  { id: "mercedes-gt2", name: "Mercedes-AMG GT2", category: "GT2" },
  { id: "porsche-gt2-rs", name: "Porsche 911 GT2 RS Clubsport", category: "GT2" },
  
  // Touring Cars (WTCC, BTCC, TCR)
  { id: "audi-rs3-tcr", name: "Audi RS3 LMS TCR", category: "TCR" },
  { id: "cupra-leon-tcr", name: "Cupra Leon TCR", category: "TCR" },
  { id: "honda-civic-tcr", name: "Honda Civic TCR", category: "TCR" },
  { id: "hyundai-i30-tcr", name: "Hyundai i30 N TCR", category: "TCR" },
  { id: "lynk-co-tcr", name: "Lynk & Co 03 TCR", category: "TCR" },
  { id: "vw-golf-tcr", name: "Volkswagen Golf GTI TCR", category: "TCR" },
  { id: "alfa-155-btcc", name: "Alfa Romeo 155 V6 Ti (BTCC)", category: "Touring Car" },
  { id: "bmw-320-wtcc", name: "BMW 320 TC (WTCC)", category: "Touring Car" },
  { id: "ford-focus-btcc", name: "Ford Focus (BTCC)", category: "Touring Car" },
  { id: "volvo-s60-wtcc", name: "Volvo S60 (WTCC)", category: "Touring Car" },
  
  // Group 5
  { id: "bmw-320-turbo-gr5", name: "BMW 320 Turbo Group 5", category: "Group 5" },
  { id: "bmw-m1-procar", name: "BMW M1 Procar", category: "Group 5" },
  { id: "ford-capri-zakspeed", name: "Ford Capri Zakspeed Turbo", category: "Group 5" },
  { id: "porsche-935-78", name: "Porsche 935/78 'Moby Dick'", category: "Group 5" },
  
  // Formula & Single Seaters
  { id: "dallara-f312-fr35", name: "Dallara F312 (FR3.5)", category: "Formula" },
  { id: "tatuus-f4", name: "Tatuus F4", category: "Formula" },
  { id: "formula-raceroom-2", name: "Formula RaceRoom 2", category: "Formula" },
  { id: "formula-raceroom-3", name: "Formula RaceRoom 3", category: "Formula" },
  { id: "formula-raceroom-junior", name: "Formula RaceRoom Junior", category: "Formula" },
  { id: "formula-raceroom-us", name: "Formula RaceRoom US", category: "Formula" },
  
  // Prototypes
  { id: "audi-r18", name: "Audi R18", category: "LMP1" },
  { id: "corvette-dp", name: "Corvette DP", category: "DPi" },
  { id: "nissan-npt-90", name: "Nissan NPT-90", category: "Group C" },
  
  // Group B Rally
  { id: "audi-quattro-s1", name: "Audi Sport quattro S1", category: "Group B" },
  { id: "ford-rs200", name: "Ford RS200", category: "Group B" },
  { id: "lancia-delta-s4", name: "Lancia Delta S4", category: "Group B" },
  { id: "peugeot-205-t16", name: "Peugeot 205 T16", category: "Group B" },
  
  // GT1 Historic
  { id: "mclaren-f1-gtr", name: "McLaren F1 GTR", category: "GT1" },
  { id: "mercedes-clk-gtr", name: "Mercedes CLK-GTR", category: "GT1" },
  { id: "porsche-911-gt1", name: "Porsche 911 GT1", category: "GT1" },
  
  // NASCAR
  { id: "chevy-monte-carlo-nascar", name: "Chevrolet Monte Carlo NASCAR", category: "NASCAR" },
  { id: "ford-fusion-nascar", name: "Ford Fusion NASCAR", category: "NASCAR" },
];

const raceroomTracks: Track[] = [
  // Europa - Alemanha
  { id: "hockenheim", name: "Hockenheimring Baden-Württemberg", country: "Germany" },
  { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
  { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
  { id: "lausitzring", name: "EuroSpeedway Lausitz", country: "Germany" },
  { id: "norisring", name: "Norisring", country: "Germany" },
  { id: "oschersleben", name: "Motorsport Arena Oschersleben", country: "Germany" },
  { id: "sachsenring", name: "Sachsenring", country: "Germany" },
  
  // Europa - Outros
  { id: "brands-hatch", name: "Brands Hatch", country: "United Kingdom" },
  { id: "donnington", name: "Donington Park", country: "United Kingdom" },
  { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
  { id: "spa", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
  { id: "zandvoort", name: "Circuit Park Zandvoort", country: "Netherlands" },
  { id: "zolder", name: "Circuit Zolder", country: "Belgium" },
  { id: "hungaroring", name: "Hungaroring", country: "Hungary" },
  { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
  { id: "monza", name: "Autodromo Nazionale Monza", country: "Italy" },
  { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
  { id: "salzburgring", name: "Salzburgring", country: "Austria" },
  { id: "slovakiaring", name: "Slovakiaring", country: "Slovakia" },
  { id: "most", name: "Autodrom Most", country: "Czech Republic" },
  { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
  
  // Escandinávia
  { id: "anderstorp", name: "Anderstorp Raceway", country: "Sweden" },
  { id: "falkenberg", name: "Falkenberg", country: "Sweden" },
  { id: "gellerasen", name: "Gelleråsen Arena", country: "Sweden" },
  { id: "knutstorp", name: "Knutstorp Ring", country: "Sweden" },
  { id: "karlskoga", name: "Karlskoga Motorstadion", country: "Sweden" },
  { id: "mantorp", name: "Mantorp Park", country: "Sweden" },
  
  // América
  { id: "detroit", name: "Detroit Belle Isle", country: "USA" },
  { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
  { id: "mid-ohio", name: "Mid-Ohio Sports Car Course", country: "USA" },
  { id: "road-america", name: "Road America", country: "USA" },
  { id: "sonoma", name: "Sonoma Raceway", country: "USA" },
  
  // Hillclimb
  { id: "pikes-peak", name: "Pikes Peak International Hill Climb", country: "USA" },
  { id: "osnabruck", name: "Hillclimb Osnabrück", country: "Germany" },
  
  // Fictional
  { id: "raceroom-raceway", name: "RaceRoom Raceway", country: "Fictional" },
];

export const simulatorData: Record<string, SimulatorData> = {
  "iRacing": {
    cars: iRacingCars,
    tracks: iRacingTracks,
  },
  "Automobilista 2": {
    cars: automobilista2Cars,
    tracks: automobilista2Tracks,
  },
  "Assetto Corsa EVO": {
    cars: assettoConaEVOCars,
    tracks: assettoConaEVOTracks,
  },
  "Assetto Corsa": {
    cars: assettoCorsaCars,
    tracks: assettoCorsaTracks,
  },
  "Assetto Corsa Competizione": {
    cars: accCars,
    tracks: accTracks,
  },
  "RaceRoom Racing Experience": {
    cars: raceroomCars,
    tracks: raceroomTracks,
  },
};

export const categories = [
  "GT3",
  "GT4",
  "GT2",
  "GT1",
  "GTE",
  "Formula",
  "Historic Formula",
  "Prototype",
  "LMP1",
  "LMP2",
  "LMDh",
  "GTP",
  "DPi",
  "Group C",
  "Stock Car",
  "NASCAR",
  "DTM",
  "TCR",
  "WTCR",
  "BTCC",
  "IndyCar",
  "Hypercar",
  "Supercar",
  "Sports Car",
  "Sports Sedan",
  "Hot Hatch",
  "Muscle Car",
  "Road Car",
  "Track Car",
  "Touring Car",
  "Group A",
  "Group B",
  "Group 5",
  "Cup",
  "Kart",
  "Truck",
  "RallyCross",
  "Drift",
  "Historic",
] as const;

export type Category = typeof categories[number];
