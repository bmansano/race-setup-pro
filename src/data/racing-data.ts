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

export const simulatorData: Record<string, SimulatorData> = {
  "iRacing": {
    cars: [
      // GT3
      { id: "ferrari-488-gt3", name: "Ferrari 488 GT3 Evo", category: "GT3" },
      { id: "porsche-911-gt3-r", name: "Porsche 911 GT3 R", category: "GT3" },
      { id: "bmw-m4-gt3", name: "BMW M4 GT3", category: "GT3" },
      { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3", category: "GT3" },
      { id: "audi-r8-lms-gt3", name: "Audi R8 LMS GT3 Evo II", category: "GT3" },
      { id: "mclaren-720s-gt3", name: "McLaren 720S GT3", category: "GT3" },
      { id: "lamborghini-huracan-gt3", name: "Lamborghini Huracán GT3 EVO", category: "GT3" },
      // GT4
      { id: "porsche-718-gt4", name: "Porsche 718 Cayman GT4 Clubsport", category: "GT4" },
      { id: "bmw-m4-gt4", name: "BMW M4 GT4", category: "GT4" },
      { id: "audi-r8-lms-gt4", name: "Audi R8 LMS GT4", category: "GT4" },
      // Formula
      { id: "formula-vee", name: "Formula Vee", category: "Formula" },
      { id: "skipbarber-formula", name: "Skip Barber Formula 2000", category: "Formula" },
      { id: "dallara-f3", name: "Dallara F3", category: "Formula" },
      { id: "dallara-ir18", name: "Dallara IR18 (IndyCar)", category: "Formula" },
      { id: "super-formula-sf23", name: "Super Formula SF23", category: "Formula" },
      // Prototypes
      { id: "dallara-p217", name: "Dallara P217 LMP2", category: "Prototype" },
      { id: "radical-sr10", name: "Radical SR10", category: "Prototype" },
      // Stock Car
      { id: "nascar-cup-next-gen", name: "NASCAR Cup Series Next Gen", category: "Stock Car" },
      { id: "nascar-xfinity", name: "NASCAR Xfinity Series", category: "Stock Car" },
      { id: "stock-car-pro-series", name: "Stock Car Pro Series", category: "Stock Car" },
    ],
    tracks: [
      { id: "spa-francorchamps", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
      { id: "monza", name: "Autodromo Nazionale di Monza", country: "Italy" },
      { id: "nurburgring", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
      { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
      { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
      { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
      { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
      { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
      { id: "zandvoort", name: "Circuit Zandvoort", country: "Netherlands" },
      { id: "daytona", name: "Daytona International Speedway", country: "USA" },
      { id: "sebring", name: "Sebring International Raceway", country: "USA" },
      { id: "watkins-glen", name: "Watkins Glen International", country: "USA" },
      { id: "road-atlanta", name: "Road Atlanta", country: "USA" },
      { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
      { id: "cota", name: "Circuit of The Americas", country: "USA" },
      { id: "indianapolis", name: "Indianapolis Motor Speedway", country: "USA" },
      { id: "interlagos", name: "Autódromo José Carlos Pace (Interlagos)", country: "Brazil" },
      { id: "suzuka", name: "Suzuka International Racing Course", country: "Japan" },
      { id: "mount-panorama", name: "Mount Panorama Circuit (Bathurst)", country: "Australia" },
    ],
  },
  "Assetto Corsa Competizione": {
    cars: [
      // GT3
      { id: "amr-v8-vantage-gt3", name: "Aston Martin Vantage V8 GT3", category: "GT3" },
      { id: "audi-r8-lms-evo", name: "Audi R8 LMS Evo", category: "GT3" },
      { id: "bentley-continental-gt3", name: "Bentley Continental GT3", category: "GT3" },
      { id: "bmw-m6-gt3", name: "BMW M6 GT3", category: "GT3" },
      { id: "ferrari-488-gt3-evo", name: "Ferrari 488 GT3 Evo", category: "GT3" },
      { id: "honda-nsx-gt3-evo", name: "Honda NSX GT3 Evo", category: "GT3" },
      { id: "lamborghini-huracan-gt3-evo", name: "Lamborghini Huracán GT3 Evo", category: "GT3" },
      { id: "lexus-rc-f-gt3", name: "Lexus RC F GT3", category: "GT3" },
      { id: "mclaren-720s-gt3", name: "McLaren 720S GT3", category: "GT3" },
      { id: "mercedes-amg-gt3-evo", name: "Mercedes-AMG GT3 Evo", category: "GT3" },
      { id: "nissan-gt-r-nismo-gt3", name: "Nissan GT-R Nismo GT3", category: "GT3" },
      { id: "porsche-911-ii-gt3-r", name: "Porsche 911 II GT3 R", category: "GT3" },
      // GT4
      { id: "alpine-a110-gt4", name: "Alpine A110 GT4", category: "GT4" },
      { id: "audi-r8-lms-gt4", name: "Audi R8 LMS GT4", category: "GT4" },
      { id: "bmw-m4-gt4", name: "BMW M4 GT4", category: "GT4" },
      { id: "chevrolet-camaro-gt4", name: "Chevrolet Camaro GT4.R", category: "GT4" },
      { id: "ginetta-g55-gt4", name: "Ginetta G55 GT4", category: "GT4" },
      { id: "ktm-x-bow-gt4", name: "KTM X-Bow GT4", category: "GT4" },
      { id: "maserati-mc-gt4", name: "Maserati MC GT4", category: "GT4" },
      { id: "mclaren-570s-gt4", name: "McLaren 570S GT4", category: "GT4" },
      { id: "mercedes-amg-gt4", name: "Mercedes-AMG GT4", category: "GT4" },
      { id: "porsche-718-cayman-gt4", name: "Porsche 718 Cayman GT4 Clubsport", category: "GT4" },
    ],
    tracks: [
      { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
      { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
      { id: "hungaroring", name: "Hungaroring", country: "Hungary" },
      { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
      { id: "kyalami", name: "Kyalami Grand Prix Circuit", country: "South Africa" },
      { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
      { id: "misano", name: "Misano World Circuit Marco Simoncelli", country: "Italy" },
      { id: "monza", name: "Autodromo Nazionale di Monza", country: "Italy" },
      { id: "mount-panorama", name: "Mount Panorama Circuit (Bathurst)", country: "Australia" },
      { id: "nurburgring", name: "Nürburgring", country: "Germany" },
      { id: "paul-ricard", name: "Circuit Paul Ricard", country: "France" },
      { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
      { id: "spa-francorchamps", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
      { id: "suzuka", name: "Suzuka International Racing Course", country: "Japan" },
      { id: "zandvoort", name: "Circuit Zandvoort", country: "Netherlands" },
      { id: "zolder", name: "Circuit Zolder", country: "Belgium" },
      { id: "cota", name: "Circuit of The Americas", country: "USA" },
      { id: "indianapolis", name: "Indianapolis Motor Speedway", country: "USA" },
      { id: "watkins-glen", name: "Watkins Glen International", country: "USA" },
    ],
  },
  "Automobilista 2": {
    cars: [
      // GT3
      { id: "audi-r8-lms", name: "Audi R8 LMS", category: "GT3" },
      { id: "bmw-m6-gt3", name: "BMW M6 GT3", category: "GT3" },
      { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3", category: "GT3" },
      { id: "mclaren-650s-gt3", name: "McLaren 650S GT3", category: "GT3" },
      // Formula
      { id: "formula-vee", name: "Formula Vee", category: "Formula" },
      { id: "formula-3", name: "Formula 3", category: "Formula" },
      { id: "super-v8", name: "Super V8", category: "Touring Car" },
      // Stock Car Brasil
      { id: "stock-car-v8", name: "Stock Car V8", category: "Stock Car" },
      { id: "stock-car-2022", name: "Stock Car Pro Series 2022", category: "Stock Car" },
      // Prototypes
      { id: "ligier-js-p320", name: "Ligier JS P320 LMP3", category: "Prototype" },
      { id: "mcr-lmp2", name: "MCR LMP2", category: "Prototype" },
      // Historic
      { id: "porsche-962c", name: "Porsche 962C", category: "Historic" },
      { id: "brabham-bt44", name: "Brabham BT44", category: "Historic" },
      { id: "mclaren-f1-gtr", name: "McLaren F1 GTR", category: "Historic" },
    ],
    tracks: [
      { id: "interlagos", name: "Autódromo José Carlos Pace (Interlagos)", country: "Brazil" },
      { id: "goiania", name: "Autódromo Internacional Ayrton Senna", country: "Brazil" },
      { id: "curitiba", name: "Autódromo Internacional de Curitiba", country: "Brazil" },
      { id: "brasilia", name: "Autódromo Internacional Nelson Piquet", country: "Brazil" },
      { id: "velopark", name: "Velopark", country: "Brazil" },
      { id: "spa-francorchamps", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
      { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
      { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
      { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
      { id: "monza", name: "Autodromo Nazionale di Monza", country: "Italy" },
      { id: "nurburgring", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
      { id: "hockenheim", name: "Hockenheimring", country: "Germany" },
      { id: "kyalami", name: "Kyalami Grand Prix Circuit", country: "South Africa" },
    ],
  },
  "Assetto Corsa": {
    cars: [
      // GT3
      { id: "ferrari-488-gt3", name: "Ferrari 488 GT3", category: "GT3" },
      { id: "mclaren-650s-gt3", name: "McLaren 650S GT3", category: "GT3" },
      { id: "mercedes-amg-gt3", name: "Mercedes-AMG GT3", category: "GT3" },
      // Road Cars
      { id: "ferrari-laferrari", name: "Ferrari LaFerrari", category: "Hypercar" },
      { id: "porsche-911-gt3-rs", name: "Porsche 911 GT3 RS", category: "Sports Car" },
      { id: "lamborghini-huracan", name: "Lamborghini Huracán Performante", category: "Sports Car" },
      { id: "mclaren-p1", name: "McLaren P1", category: "Hypercar" },
      // Formula
      { id: "formula-abarth", name: "Formula Abarth", category: "Formula" },
      { id: "lotus-98t", name: "Lotus 98T", category: "Historic Formula" },
      // Historic
      { id: "ferrari-312t", name: "Ferrari 312T", category: "Historic Formula" },
      { id: "porsche-917k", name: "Porsche 917/30", category: "Historic" },
      { id: "ford-gt40", name: "Ford GT40", category: "Historic" },
    ],
    tracks: [
      { id: "spa-francorchamps", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
      { id: "monza", name: "Autodromo Nazionale di Monza", country: "Italy" },
      { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
      { id: "nurburgring-nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
      { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
      { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
      { id: "barcelona", name: "Circuit de Barcelona-Catalunya", country: "Spain" },
      { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
      { id: "mugello", name: "Mugello Circuit", country: "Italy" },
      { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
      { id: "vallelunga", name: "Autodromo Vallelunga Piero Taruffi", country: "Italy" },
      { id: "zandvoort", name: "Circuit Zandvoort", country: "Netherlands" },
    ],
  },
  "Assetto Corsa EVO": {
    cars: [
      // GT3
      { id: "ferrari-296-gt3", name: "Ferrari 296 GT3", category: "GT3" },
      { id: "porsche-911-gt3-r", name: "Porsche 911 GT3 R", category: "GT3" },
      { id: "bmw-m4-gt3", name: "BMW M4 GT3", category: "GT3" },
      // Hypercars
      { id: "ferrari-sf90", name: "Ferrari SF90 Stradale", category: "Hypercar" },
      { id: "lamborghini-revuelto", name: "Lamborghini Revuelto", category: "Hypercar" },
      // Sports Cars
      { id: "porsche-911-turbo-s", name: "Porsche 911 Turbo S", category: "Sports Car" },
      { id: "corvette-c8", name: "Chevrolet Corvette C8", category: "Sports Car" },
    ],
    tracks: [
      { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
      { id: "mount-panorama", name: "Mount Panorama Circuit (Bathurst)", country: "Australia" },
      { id: "nurburgring-nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
      { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
      { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
    ],
  },
  "RaceRoom": {
    cars: [
      // GT3
      { id: "audi-r8-lms-ultra", name: "Audi R8 LMS Ultra", category: "GT3" },
      { id: "bmw-z4-gt3", name: "BMW Z4 GT3", category: "GT3" },
      { id: "mercedes-sls-amg-gt3", name: "Mercedes-Benz SLS AMG GT3", category: "GT3" },
      { id: "porsche-911-gt3-r", name: "Porsche 911 GT3 R", category: "GT3" },
      // DTM
      { id: "audi-rs5-dtm", name: "Audi RS 5 DTM", category: "DTM" },
      { id: "bmw-m4-dtm", name: "BMW M4 DTM", category: "DTM" },
      { id: "mercedes-amg-c63-dtm", name: "Mercedes-AMG C 63 DTM", category: "DTM" },
      // WTCR
      { id: "hyundai-i30-n-tcr", name: "Hyundai i30 N TCR", category: "WTCR" },
      { id: "honda-civic-type-r-tcr", name: "Honda Civic Type R TCR", category: "WTCR" },
      // Formula
      { id: "formula-raceroom-3", name: "Formula RaceRoom 3", category: "Formula" },
      { id: "formula-raceroom-us", name: "Formula RaceRoom US", category: "Formula" },
    ],
    tracks: [
      { id: "spa-francorchamps", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
      { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
      { id: "nordschleife", name: "Nürburgring Nordschleife", country: "Germany" },
      { id: "hockenheim", name: "Hockenheimring", country: "Germany" },
      { id: "red-bull-ring", name: "Red Bull Ring", country: "Austria" },
      { id: "hungaroring", name: "Hungaroring", country: "Hungary" },
      { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
      { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
      { id: "zandvoort", name: "Circuit Zandvoort", country: "Netherlands" },
      { id: "monza", name: "Autodromo Nazionale di Monza", country: "Italy" },
      { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
      { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
    ],
  },
  "Project Cars 2": {
    cars: [
      // GT3
      { id: "ferrari-488-gt3", name: "Ferrari 488 GT3", category: "GT3" },
      { id: "porsche-911-gt3-r", name: "Porsche 911 GT3 R", category: "GT3" },
      { id: "mclaren-650s-gt3", name: "McLaren 650S GT3", category: "GT3" },
      // LMP
      { id: "oreca-07-lmp2", name: "Oreca 07 LMP2", category: "Prototype" },
      { id: "nissan-r90cp", name: "Nissan R90CP", category: "Historic Prototype" },
      // Formula
      { id: "formula-a", name: "Formula A", category: "Formula" },
      { id: "formula-renault", name: "Formula Renault 3.5", category: "Formula" },
      // IndyCar
      { id: "indycar-2016", name: "IndyCar DW12 2016", category: "IndyCar" },
    ],
    tracks: [
      { id: "spa-francorchamps", name: "Circuit de Spa-Francorchamps", country: "Belgium" },
      { id: "silverstone", name: "Silverstone Circuit", country: "United Kingdom" },
      { id: "brands-hatch", name: "Brands Hatch Circuit", country: "United Kingdom" },
      { id: "monza", name: "Autodromo Nazionale di Monza", country: "Italy" },
      { id: "imola", name: "Autodromo Enzo e Dino Ferrari (Imola)", country: "Italy" },
      { id: "nurburgring-gp", name: "Nürburgring Grand-Prix-Strecke", country: "Germany" },
      { id: "daytona", name: "Daytona International Speedway", country: "USA" },
      { id: "laguna-seca", name: "WeatherTech Raceway Laguna Seca", country: "USA" },
      { id: "le-mans", name: "Circuit de la Sarthe (Le Mans)", country: "France" },
      { id: "interlagos", name: "Autódromo José Carlos Pace (Interlagos)", country: "Brazil" },
    ],
  },
  "Assetto Corsa Rally": {
    cars: [
      // Rally
      { id: "lancia-delta-s4", name: "Lancia Delta S4", category: "Group B" },
      { id: "audi-quattro-s1", name: "Audi Quattro S1 E2", category: "Group B" },
      { id: "ford-rs200", name: "Ford RS200", category: "Group B" },
      { id: "peugeot-205-t16", name: "Peugeot 205 T16", category: "Group B" },
      // Modern Rally
      { id: "subaru-impreza-wrc", name: "Subaru Impreza WRC", category: "WRC" },
      { id: "mitsubishi-lancer-evo", name: "Mitsubishi Lancer Evolution", category: "Rally" },
    ],
    tracks: [
      { id: "trento-bondone", name: "Trento-Bondone", country: "Italy" },
      { id: "pikes-peak", name: "Pikes Peak International Hill Climb", country: "USA" },
      { id: "highland", name: "Highland Long", country: "Scotland" },
      { id: "drift", name: "Drift Track", country: "Various" },
    ],
  },
};

export const categories = [
  "GT3",
  "GT4",
  "Formula",
  "Prototype",
  "Stock Car",
  "DTM",
  "WTCR",
  "IndyCar",
  "Hypercar",
  "Sports Car",
  "Touring Car",
  "Historic",
  "Historic Formula",
  "Historic Prototype",
  "Group B",
  "WRC",
  "Rally",
];
