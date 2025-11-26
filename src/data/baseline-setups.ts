// Baseline setups based on official simulator documentation and community standards
// These provide realistic starting points for different car/track combinations

export interface BaselineSetup {
  aero: {
    frontWing?: string;
    rearWing?: string;
    diffuserHeight?: string;
    rake?: string;
    frontSplitter?: string;
    gurneyFlap?: string;
  };
  suspension: {
    frontSpring?: string;
    rearSpring?: string;
    frontBump?: string;
    rearBump?: string;
    frontRebound?: string;
    rearRebound?: string;
    frontARB?: string;
    rearARB?: string;
    frontHeight?: string;
    rearHeight?: string;
    frontCamber?: string;
    rearCamber?: string;
    frontToe?: string;
    rearToe?: string;
    caster?: string;
  };
  tires: {
    frontLeftPressure?: string;
    frontRightPressure?: string;
    rearLeftPressure?: string;
    rearRightPressure?: string;
    frontCompound?: string;
    rearCompound?: string;
  };
  brake: {
    bias?: string;
    systemPressure?: string;
    frontDisc?: string;
    rearDisc?: string;
    frontPads?: string;
    rearPads?: string;
  };
  differential: {
    preload?: string;
    power?: string;
    coast?: string;
    finalRatio?: string;
  };
  trackTemp?: string;
  lapTime?: string;
}

// NASCAR Next Gen baselines for different track types
const nascarNextGenOvalShort: BaselineSetup = {
  aero: {
    rake: "0.5 inches",
  },
  suspension: {
    frontSpring: "LF: 1000 lbs/in, RF: 1100 lbs/in",
    rearSpring: "LR: 700 lbs/in, RR: 650 lbs/in",
    frontBump: "LF: 8 clicks, RF: 8 clicks",
    rearBump: "LR: 6 clicks, RR: 6 clicks",
    frontRebound: "LF: 6 clicks, RF: 6 clicks",
    rearRebound: "LR: 8 clicks, RR: 8 clicks",
    frontARB: "1.375\" (Soft) - P3",
    rearARB: "1.375\" (Soft) - P2",
    frontHeight: "4.5 inches",
    rearHeight: "5.0 inches",
    frontCamber: "LF: -3.5°, RF: -3.0°",
    rearCamber: "LR: +1.0°, RR: -0.5°",
    frontToe: "1/16 inch out (total)",
    rearToe: "0.0 (neutral)",
    caster: "LF: +5.0°, RF: +6.0°",
  },
  tires: {
    frontLeftPressure: "28 psi",
    frontRightPressure: "30 psi",
    rearLeftPressure: "22 psi",
    rearRightPressure: "20 psi",
    frontCompound: "Standard",
    rearCompound: "Standard",
  },
  brake: {
    bias: "58%",
    systemPressure: "100%",
  },
  differential: {
    preload: "120 Nm",
    power: "80%",
    coast: "20%",
    finalRatio: "3.70",
  },
  trackTemp: "75-85°F",
};

const nascarNextGenOvalIntermediate: BaselineSetup = {
  aero: {
    rake: "0.6 inches",
  },
  suspension: {
    frontSpring: "LF: 1100 lbs/in, RF: 1200 lbs/in",
    rearSpring: "LR: 750 lbs/in, RR: 700 lbs/in",
    frontBump: "LF: 9 clicks, RF: 9 clicks",
    rearBump: "LR: 7 clicks, RR: 7 clicks",
    frontRebound: "LF: 7 clicks, RF: 7 clicks",
    rearRebound: "LR: 9 clicks, RR: 9 clicks",
    frontARB: "1.375\" (Soft) - P4",
    rearARB: "1.375\" (Soft) - P3",
    frontHeight: "4.25 inches",
    rearHeight: "4.75 inches",
    frontCamber: "LF: -3.8°, RF: -3.3°",
    rearCamber: "LR: +1.2°, RR: -0.3°",
    frontToe: "1/8 inch out (total)",
    rearToe: "0.0 (neutral)",
    caster: "LF: +5.5°, RF: +6.5°",
  },
  tires: {
    frontLeftPressure: "30 psi",
    frontRightPressure: "32 psi",
    rearLeftPressure: "23 psi",
    rearRightPressure: "21 psi",
    frontCompound: "Standard",
    rearCompound: "Standard",
  },
  brake: {
    bias: "60%",
    systemPressure: "100%",
  },
  differential: {
    preload: "140 Nm",
    power: "85%",
    coast: "25%",
    finalRatio: "3.55",
  },
  trackTemp: "75-85°F",
};

// Assetto Corsa Competizione GT3 baseline
const accGT3Baseline: BaselineSetup = {
  aero: {
    frontWing: "3-4 (Medium)",
    rearWing: "5-6 (Medium-High)",
    frontSplitter: "2",
    rake: "Medium",
  },
  suspension: {
    frontSpring: "90,000-100,000 N/m",
    rearSpring: "85,000-95,000 N/m",
    frontBump: "6 clicks",
    rearBump: "5 clicks",
    frontRebound: "7 clicks",
    rearRebound: "6 clicks",
    frontARB: "4-5",
    rearARB: "3-4",
    frontHeight: "55-58mm",
    rearHeight: "60-63mm",
    frontCamber: "-3.8°",
    rearCamber: "-3.2°",
    frontToe: "0.00°",
    rearToe: "+0.10° (slight toe-in)",
    caster: "11.0-12.0°",
  },
  tires: {
    frontLeftPressure: "27.0 psi (cold, target 27.7 hot)",
    frontRightPressure: "27.0 psi (cold, target 27.7 hot)",
    rearLeftPressure: "26.5 psi (cold, target 27.7 hot)",
    rearRightPressure: "26.5 psi (cold, target 27.7 hot)",
    frontCompound: "Dry Slick",
    rearCompound: "Dry Slick",
  },
  brake: {
    bias: "56-58%",
    systemPressure: "80-85%",
    frontPads: "Pad 1 (Sprint/Quali)",
    rearPads: "Pad 1 (Sprint/Quali)",
  },
  differential: {
    preload: "90-110 Nm",
    power: "70-80%",
    coast: "40-50%",
  },
  trackTemp: "25-30°C optimal",
};

// Assetto Corsa Competizione GT4 baseline
const accGT4Baseline: BaselineSetup = {
  aero: {
    frontWing: "2-3",
    rearWing: "4-5",
  },
  suspension: {
    frontSpring: "75,000-85,000 N/m",
    rearSpring: "70,000-80,000 N/m",
    frontBump: "5 clicks",
    rearBump: "4 clicks",
    frontRebound: "6 clicks",
    rearRebound: "5 clicks",
    frontARB: "3-4",
    rearARB: "2-3",
    frontHeight: "58-62mm",
    rearHeight: "63-67mm",
    frontCamber: "-3.5°",
    rearCamber: "-2.8°",
    frontToe: "0.00°",
    rearToe: "+0.10°",
    caster: "10.0-11.0°",
  },
  tires: {
    frontLeftPressure: "27.2 psi",
    frontRightPressure: "27.2 psi",
    rearLeftPressure: "26.8 psi",
    rearRightPressure: "26.8 psi",
    frontCompound: "Dry",
    rearCompound: "Dry",
  },
  brake: {
    bias: "54-56%",
    systemPressure: "75-80%",
    frontPads: "Pad 2",
    rearPads: "Pad 2",
  },
  differential: {
    preload: "80-100 Nm",
    power: "65-75%",
    coast: "35-45%",
  },
  trackTemp: "20-30°C",
};

// Automobilista 2 GT3 baseline
const ams2GT3Baseline: BaselineSetup = {
  aero: {
    frontWing: "Medium (3-4)",
    rearWing: "Medium-High (5-6)",
  },
  suspension: {
    frontSpring: "Medium-Stiff",
    rearSpring: "Medium",
    frontBump: "Medium",
    rearBump: "Medium-Soft",
    frontRebound: "Medium-Stiff",
    rearRebound: "Medium",
    frontARB: "Medium",
    rearARB: "Medium-Soft",
    frontHeight: "55-60mm",
    rearHeight: "60-65mm",
    frontCamber: "-3.5° (target 7°C temp diff)",
    rearCamber: "-2.8° (target 3-5°C temp diff)",
    frontToe: "-0.8° to -1.0°",
    rearToe: "0.5-0.8°",
    caster: "11.0-12.0°",
  },
  tires: {
    frontLeftPressure: "25-26 psi (adjust for temp)",
    frontRightPressure: "25-26 psi",
    rearLeftPressure: "24-25 psi",
    rearRightPressure: "24-25 psi",
    frontCompound: "Soft/Medium",
    rearCompound: "Soft/Medium",
  },
  brake: {
    bias: "56-60%",
    systemPressure: "85-100%",
  },
  differential: {
    preload: "Medium",
    power: "Medium-High",
    coast: "Medium",
  },
  trackTemp: "20-30°C",
};

// Automobilista 2 Formula baseline
const ams2FormulaBaseline: BaselineSetup = {
  aero: {
    frontWing: "High downforce",
    rearWing: "High downforce",
  },
  suspension: {
    frontSpring: "Stiff",
    rearSpring: "Stiff",
    frontBump: "Stiff",
    rearBump: "Medium-Stiff",
    frontRebound: "Stiff",
    rearRebound: "Medium-Stiff",
    frontARB: "Stiff",
    rearARB: "Medium",
    frontHeight: "Low (35-40mm)",
    rearHeight: "Low (40-45mm)",
    frontCamber: "-3.5° to -4.0°",
    rearCamber: "-2.5° to -3.0°",
    frontToe: "-0.5° to -0.8°",
    rearToe: "0.3-0.5°",
    caster: "12.0-13.0°",
  },
  tires: {
    frontLeftPressure: "23-24 psi",
    frontRightPressure: "23-24 psi",
    rearLeftPressure: "21-22 psi",
    rearRightPressure: "21-22 psi",
    frontCompound: "Soft",
    rearCompound: "Soft",
  },
  brake: {
    bias: "58-62%",
    systemPressure: "100%",
  },
  differential: {
    preload: "Low-Medium",
    power: "Low-Medium",
    coast: "High",
  },
  trackTemp: "20-30°C",
};

// Assetto Corsa generic baseline
const acGenericBaseline: BaselineSetup = {
  aero: {
    frontWing: "3-4",
    rearWing: "4-5",
  },
  suspension: {
    frontSpring: "Medium",
    rearSpring: "Medium",
    frontBump: "5 clicks",
    rearBump: "5 clicks",
    frontRebound: "6 clicks",
    rearRebound: "6 clicks",
    frontARB: "Medium",
    rearARB: "Medium",
    frontHeight: "50-55mm",
    rearHeight: "55-60mm",
    frontCamber: "-3.0°",
    rearCamber: "-2.5°",
    frontToe: "-0.05°",
    rearToe: "+0.05°",
    caster: "8.0-10.0°",
  },
  tires: {
    frontLeftPressure: "24-26 psi",
    frontRightPressure: "24-26 psi",
    rearLeftPressure: "23-25 psi",
    rearRightPressure: "23-25 psi",
    frontCompound: "Medium",
    rearCompound: "Medium",
  },
  brake: {
    bias: "56-58%",
    systemPressure: "85-95%",
  },
  differential: {
    preload: "Medium",
    power: "70-80%",
    coast: "40-50%",
  },
  trackTemp: "20-30°C",
};

// RaceRoom GT3 baseline
const raceRoomGT3Baseline: BaselineSetup = {
  aero: {
    frontWing: "Medium",
    rearWing: "Medium-High",
  },
  suspension: {
    frontSpring: "Medium-Stiff",
    rearSpring: "Medium",
    frontBump: "Medium",
    rearBump: "Medium",
    frontRebound: "Medium",
    rearRebound: "Medium",
    frontARB: "Medium",
    rearARB: "Medium-Soft",
    frontHeight: "55-60mm",
    rearHeight: "60-65mm",
    frontCamber: "-3.5°",
    rearCamber: "-3.0°",
    frontToe: "0.0°",
    rearToe: "+0.10°",
    caster: "11.0°",
  },
  tires: {
    frontLeftPressure: "26-28 psi",
    frontRightPressure: "26-28 psi",
    rearLeftPressure: "25-27 psi",
    rearRightPressure: "25-27 psi",
    frontCompound: "Soft/Medium",
    rearCompound: "Soft/Medium",
  },
  brake: {
    bias: "56-58%",
    systemPressure: "90-100%",
  },
  differential: {
    preload: "Medium",
    power: "70-80%",
    coast: "40-50%",
  },
  trackTemp: "20-30°C",
};

// Generic baseline for other cars/tracks
const genericBaseline: BaselineSetup = {
  aero: {
    frontWing: "Medium downforce",
    rearWing: "Medium downforce",
    rake: "0.5°",
  },
  suspension: {
    frontSpring: "Medium stiffness",
    rearSpring: "Medium stiffness",
    frontBump: "5 clicks",
    rearBump: "5 clicks",
    frontRebound: "5 clicks",
    rearRebound: "5 clicks",
    frontARB: "Medium",
    rearARB: "Medium",
    frontHeight: "50mm",
    rearHeight: "55mm",
    frontCamber: "-3.0°",
    rearCamber: "-2.5°",
    frontToe: "0.0°",
    rearToe: "0.0°",
    caster: "5.0°",
  },
  tires: {
    frontLeftPressure: "24 psi",
    frontRightPressure: "24 psi",
    rearLeftPressure: "22 psi",
    rearRightPressure: "22 psi",
    frontCompound: "Medium",
    rearCompound: "Medium",
  },
  brake: {
    bias: "56%",
    systemPressure: "100%",
  },
  differential: {
    preload: "100 Nm",
    power: "75%",
    coast: "50%",
    finalRatio: "3.50",
  },
  trackTemp: "20-25°C",
};

export function getBaselineSetup(
  simulator: string,
  car: string,
  track: string,
  condition: string
): BaselineSetup {
  // Assetto Corsa Competizione detection
  if (simulator === "Assetto Corsa Competizione") {
    // GT3 cars
    if (car.includes("GT3")) {
      return accGT3Baseline;
    }
    // GT4 cars
    if (car.includes("GT4")) {
      return accGT4Baseline;
    }
  }

  // Automobilista 2 detection
  if (simulator === "Automobilista 2") {
    // Formula cars
    if (
      car.includes("Formula") ||
      car.includes("F1") ||
      car.includes("F3") ||
      car.includes("F-V8")
    ) {
      return ams2FormulaBaseline;
    }
    // GT3 and GT cars
    if (car.includes("GT3") || car.includes("GT")) {
      return ams2GT3Baseline;
    }
  }

  // Assetto Corsa detection
  if (simulator === "Assetto Corsa" || simulator === "Assetto Corsa EVO") {
    return acGenericBaseline;
  }

  // RaceRoom Racing Experience detection
  if (simulator === "RaceRoom Racing Experience") {
    if (car.includes("GT3") || car.includes("DTM")) {
      return raceRoomGT3Baseline;
    }
  }

  // iRacing NASCAR Next Gen detection
  if (simulator === "iRacing" && car.includes("NASCAR Next Gen")) {
    // Short oval tracks
    if (
      track.includes("Phoenix") ||
      track.includes("Richmond") ||
      track.includes("Martinsville") ||
      track.includes("Bristol")
    ) {
      return nascarNextGenOvalShort;
    }
    
    // Intermediate/Speedway tracks
    if (
      track.includes("Charlotte") ||
      track.includes("Las Vegas") ||
      track.includes("Kansas") ||
      track.includes("Homestead") ||
      track.includes("Texas") ||
      track.includes("Atlanta") ||
      track.includes("Darlington")
    ) {
      return nascarNextGenOvalIntermediate;
    }
  }

  // Default to generic baseline for unknown combinations
  return genericBaseline;
}
