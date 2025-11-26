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
  ffb: {
    overallForce?: string;
    damping?: string;
    kerbEffects?: string;
    roadEffects?: string;
    understeerEffect?: string;
    slipEffect?: string;
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
  ffb: {
    overallForce: "15-20 Nm",
    damping: "10-20%",
    kerbEffects: "20%",
    roadEffects: "15%",
    understeerEffect: "20%",
    slipEffect: "15%",
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
  ffb: {
    overallForce: "15-20 Nm",
    damping: "10-20%",
    kerbEffects: "20%",
    roadEffects: "15%",
    understeerEffect: "20%",
    slipEffect: "15%",
  },
  trackTemp: "75-85°F",
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
  ffb: {
    overallForce: "10-15 Nm",
    damping: "15%",
    kerbEffects: "25%",
    roadEffects: "20%",
    understeerEffect: "15%",
    slipEffect: "20%",
  },
  trackTemp: "20-25°C",
};

export function getBaselineSetup(
  simulator: string,
  car: string,
  track: string,
  condition: string
): BaselineSetup {
  // NASCAR Next Gen detection
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

  // Add more specific baselines for other cars/simulators here
  // For now, return generic baseline for unknown combinations
  return genericBaseline;
}
