// Definições de campos específicos para cada simulador
// Baseado nas opções reais de garage de cada jogo

export interface SetupField {
  name: string;
  label: string;
  category: 'aero' | 'suspension' | 'tires' | 'brakes' | 'differential' | 'electronics' | 'drivetrain';
}

export interface SimulatorFields {
  aero: SetupField[];
  suspension: SetupField[];
  tires: SetupField[];
  brakes: SetupField[];
  differential: SetupField[];
  electronics?: SetupField[];
  drivetrain?: SetupField[];
}

// =====================================
// iRACING - Campos baseados no garage real do iRacing
// =====================================
export const iRacingFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing Angle', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing Angle', category: 'aero' },
    { name: 'frontSplitter', label: 'Front Splitter', category: 'aero' },
    { name: 'rearGurney', label: 'Rear Gurney Flap', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height', category: 'aero' },
    { name: 'frontFenderFlare', label: 'Front Fender Flare', category: 'aero' },
    { name: 'rearFenderFlare', label: 'Rear Fender Flare', category: 'aero' },
    { name: 'brakeDuctFront', label: 'Front Brake Duct', category: 'aero' },
    { name: 'brakeDuctRear', label: 'Rear Brake Duct', category: 'aero' },
    { name: 'radiatorOpening', label: 'Radiator Opening', category: 'aero' },
  ],
  suspension: [
    { name: 'lfSpring', label: 'LF Spring Rate', category: 'suspension' },
    { name: 'rfSpring', label: 'RF Spring Rate', category: 'suspension' },
    { name: 'lrSpring', label: 'LR Spring Rate', category: 'suspension' },
    { name: 'rrSpring', label: 'RR Spring Rate', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'lfShockComp', label: 'LF Shock Compression', category: 'suspension' },
    { name: 'lfShockReb', label: 'LF Shock Rebound', category: 'suspension' },
    { name: 'rfShockComp', label: 'RF Shock Compression', category: 'suspension' },
    { name: 'rfShockReb', label: 'RF Shock Rebound', category: 'suspension' },
    { name: 'lrShockComp', label: 'LR Shock Compression', category: 'suspension' },
    { name: 'lrShockReb', label: 'LR Shock Rebound', category: 'suspension' },
    { name: 'rrShockComp', label: 'RR Shock Compression', category: 'suspension' },
    { name: 'rrShockReb', label: 'RR Shock Rebound', category: 'suspension' },
    { name: 'lfCamber', label: 'LF Camber', category: 'suspension' },
    { name: 'rfCamber', label: 'RF Camber', category: 'suspension' },
    { name: 'lrCamber', label: 'LR Camber', category: 'suspension' },
    { name: 'rrCamber', label: 'RR Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
    { name: 'frontCaster', label: 'Front Caster', category: 'suspension' },
    { name: 'steeringRatio', label: 'Steering Ratio', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Cold Pressure (psi)', category: 'tires' },
    { name: 'rfPressure', label: 'RF Cold Pressure (psi)', category: 'tires' },
    { name: 'lrPressure', label: 'LR Cold Pressure (psi)', category: 'tires' },
    { name: 'rrPressure', label: 'RR Cold Pressure (psi)', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
    { name: 'stagger', label: 'Stagger (Oval)', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'brakeDiscType', label: 'Brake Disc Type', category: 'brakes' },
    { name: 'brakePadType', label: 'Brake Pad Type', category: 'brakes' },
    { name: 'brakeMasterCylinder', label: 'Master Cylinder', category: 'brakes' },
    { name: 'pedalRatio', label: 'Pedal Ratio', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload (Nm)', category: 'differential' },
    { name: 'powerRamp', label: 'Power Ramp Angle', category: 'differential' },
    { name: 'coastRamp', label: 'Coast Ramp Angle', category: 'differential' },
    { name: 'clutchPlates', label: 'Clutch Plates', category: 'differential' },
  ],
  drivetrain: [
    { name: 'gearFinal', label: 'Final Drive Ratio', category: 'drivetrain' },
    { name: 'gear1', label: '1st Gear', category: 'drivetrain' },
    { name: 'gear2', label: '2nd Gear', category: 'drivetrain' },
    { name: 'gear3', label: '3rd Gear', category: 'drivetrain' },
    { name: 'gear4', label: '4th Gear', category: 'drivetrain' },
    { name: 'gear5', label: '5th Gear', category: 'drivetrain' },
    { name: 'gear6', label: '6th Gear', category: 'drivetrain' },
    { name: 'ballast', label: 'Ballast (kg)', category: 'drivetrain' },
    { name: 'ballastPosition', label: 'Ballast Position', category: 'drivetrain' },
    { name: 'fuelLevel', label: 'Fuel Level (L)', category: 'drivetrain' },
  ],
};

// =====================================
// ASSETTO CORSA COMPETIZIONE - Campos do garage real
// =====================================
export const accFields: SimulatorFields = {
  aero: [
    { name: 'frontSplitter', label: 'Front Splitter', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height (mm)', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height (mm)', category: 'aero' },
    { name: 'brakeDuctFront', label: 'Front Brake Duct', category: 'aero' },
    { name: 'brakeDuctRear', label: 'Rear Brake Duct', category: 'aero' },
  ],
  suspension: [
    { name: 'frontWheelRate', label: 'Front Wheel Rate (N/mm)', category: 'suspension' },
    { name: 'rearWheelRate', label: 'Rear Wheel Rate (N/mm)', category: 'suspension' },
    { name: 'frontBumpStopRate', label: 'Front Bump Stop Rate', category: 'suspension' },
    { name: 'rearBumpStopRate', label: 'Rear Bump Stop Rate', category: 'suspension' },
    { name: 'frontBumpStopRange', label: 'Front Bump Stop Range (mm)', category: 'suspension' },
    { name: 'rearBumpStopRange', label: 'Rear Bump Stop Range (mm)', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBumpSlow', label: 'Front Bump Slow', category: 'suspension' },
    { name: 'frontBumpFast', label: 'Front Bump Fast', category: 'suspension' },
    { name: 'frontReboundSlow', label: 'Front Rebound Slow', category: 'suspension' },
    { name: 'frontReboundFast', label: 'Front Rebound Fast', category: 'suspension' },
    { name: 'rearBumpSlow', label: 'Rear Bump Slow', category: 'suspension' },
    { name: 'rearBumpFast', label: 'Rear Bump Fast', category: 'suspension' },
    { name: 'rearReboundSlow', label: 'Rear Rebound Slow', category: 'suspension' },
    { name: 'rearReboundFast', label: 'Rear Rebound Fast', category: 'suspension' },
    { name: 'lfCamber', label: 'LF Camber (°)', category: 'suspension' },
    { name: 'rfCamber', label: 'RF Camber (°)', category: 'suspension' },
    { name: 'lrCamber', label: 'LR Camber (°)', category: 'suspension' },
    { name: 'rrCamber', label: 'RR Camber (°)', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe (mm)', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe (mm)', category: 'suspension' },
    { name: 'frontCaster', label: 'Front Caster (°)', category: 'suspension' },
    { name: 'steeringRatio', label: 'Steering Ratio', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Pressure (psi)', category: 'tires' },
    { name: 'rfPressure', label: 'RF Pressure (psi)', category: 'tires' },
    { name: 'lrPressure', label: 'LR Pressure (psi)', category: 'tires' },
    { name: 'rrPressure', label: 'RR Pressure (psi)', category: 'tires' },
    { name: 'tyreSet', label: 'Tyre Set', category: 'tires' },
    { name: 'compoundFront', label: 'Front Compound', category: 'tires' },
    { name: 'compoundRear', label: 'Rear Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'brakePower', label: 'Brake Power (%)', category: 'brakes' },
    { name: 'brakePadFront', label: 'Front Brake Pad', category: 'brakes' },
    { name: 'brakePadRear', label: 'Rear Brake Pad', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload (Nm)', category: 'differential' },
  ],
  electronics: [
    { name: 'tc1', label: 'TC1 (Traction Control)', category: 'electronics' },
    { name: 'tc2', label: 'TC2 (TC Cut)', category: 'electronics' },
    { name: 'abs', label: 'ABS', category: 'electronics' },
    { name: 'ecuMap', label: 'ECU Map', category: 'electronics' },
  ],
  drivetrain: [
    { name: 'fuelLevel', label: 'Fuel (L)', category: 'drivetrain' },
  ],
};

// =====================================
// AUTOMOBILISTA 2 - Campos baseados no jogo (motor rFactor 2)
// =====================================
export const automobilista2Fields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height (mm)', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height (mm)', category: 'aero' },
    { name: 'brakeDucts', label: 'Brake Ducts', category: 'aero' },
    { name: 'radiator', label: 'Radiator Opening', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpring', label: 'Front Spring Rate (N/mm)', category: 'suspension' },
    { name: 'rearSpring', label: 'Rear Spring Rate (N/mm)', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontSlowBump', label: 'Front Slow Bump', category: 'suspension' },
    { name: 'frontFastBump', label: 'Front Fast Bump', category: 'suspension' },
    { name: 'frontSlowRebound', label: 'Front Slow Rebound', category: 'suspension' },
    { name: 'frontFastRebound', label: 'Front Fast Rebound', category: 'suspension' },
    { name: 'rearSlowBump', label: 'Rear Slow Bump', category: 'suspension' },
    { name: 'rearFastBump', label: 'Rear Fast Bump', category: 'suspension' },
    { name: 'rearSlowRebound', label: 'Rear Slow Rebound', category: 'suspension' },
    { name: 'rearFastRebound', label: 'Rear Fast Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber (°)', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber (°)', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe (°)', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe (°)', category: 'suspension' },
    { name: 'frontCaster', label: 'Front Caster (°)', category: 'suspension' },
    { name: 'steeringLock', label: 'Steering Lock', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Pressure (kPa)', category: 'tires' },
    { name: 'rfPressure', label: 'RF Pressure (kPa)', category: 'tires' },
    { name: 'lrPressure', label: 'LR Pressure (kPa)', category: 'tires' },
    { name: 'rrPressure', label: 'RR Pressure (kPa)', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'brakePressure', label: 'Brake Pressure (%)', category: 'brakes' },
    { name: 'frontDiscType', label: 'Front Disc Type', category: 'brakes' },
    { name: 'rearDiscType', label: 'Rear Disc Type', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload (Nm)', category: 'differential' },
    { name: 'powerLock', label: 'Power Lock (%)', category: 'differential' },
    { name: 'coastLock', label: 'Coast Lock (%)', category: 'differential' },
    { name: 'pumpDiff', label: 'Pump Differential', category: 'differential' },
  ],
  electronics: [
    { name: 'tractionControl', label: 'Traction Control', category: 'electronics' },
    { name: 'absLevel', label: 'ABS Level', category: 'electronics' },
    { name: 'engineBrake', label: 'Engine Brake', category: 'electronics' },
  ],
  drivetrain: [
    { name: 'gearFinal', label: 'Final Drive', category: 'drivetrain' },
    { name: 'gear1', label: '1st Gear', category: 'drivetrain' },
    { name: 'gear2', label: '2nd Gear', category: 'drivetrain' },
    { name: 'gear3', label: '3rd Gear', category: 'drivetrain' },
    { name: 'gear4', label: '4th Gear', category: 'drivetrain' },
    { name: 'gear5', label: '5th Gear', category: 'drivetrain' },
    { name: 'gear6', label: '6th Gear', category: 'drivetrain' },
    { name: 'fuelLevel', label: 'Fuel (L)', category: 'drivetrain' },
  ],
};

// =====================================
// ASSETTO CORSA EVO - Campos do novo jogo Kunos
// =====================================
export const assettoCornaEVOFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height (mm)', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height (mm)', category: 'aero' },
    { name: 'frontSplitter', label: 'Front Splitter', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpring', label: 'Front Spring (kg/mm)', category: 'suspension' },
    { name: 'rearSpring', label: 'Rear Spring (kg/mm)', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBump', label: 'Front Bump', category: 'suspension' },
    { name: 'frontRebound', label: 'Front Rebound', category: 'suspension' },
    { name: 'rearBump', label: 'Rear Bump', category: 'suspension' },
    { name: 'rearRebound', label: 'Rear Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber (°)', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber (°)', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe (°)', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe (°)', category: 'suspension' },
    { name: 'caster', label: 'Caster (°)', category: 'suspension' },
    { name: 'steeringRatio', label: 'Steering Ratio', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Pressure (psi)', category: 'tires' },
    { name: 'rfPressure', label: 'RF Pressure (psi)', category: 'tires' },
    { name: 'lrPressure', label: 'LR Pressure (psi)', category: 'tires' },
    { name: 'rrPressure', label: 'RR Pressure (psi)', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'brakePower', label: 'Brake Power', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'power', label: 'Power (%)', category: 'differential' },
    { name: 'coast', label: 'Coast (%)', category: 'differential' },
  ],
  electronics: [
    { name: 'tractionControl', label: 'Traction Control', category: 'electronics' },
    { name: 'abs', label: 'ABS', category: 'electronics' },
    { name: 'engineBraking', label: 'Engine Braking', category: 'electronics' },
  ],
  drivetrain: [
    { name: 'fuelLevel', label: 'Fuel (L)', category: 'drivetrain' },
  ],
};

// =====================================
// ASSETTO CORSA (Original) - Campos do jogo original
// =====================================
export const assettoCorsa1Fields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height (mm)', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height (mm)', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpring', label: 'Front Spring (kg/mm)', category: 'suspension' },
    { name: 'rearSpring', label: 'Rear Spring (kg/mm)', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBump', label: 'Front Bump', category: 'suspension' },
    { name: 'frontRebound', label: 'Front Rebound', category: 'suspension' },
    { name: 'rearBump', label: 'Rear Bump', category: 'suspension' },
    { name: 'rearRebound', label: 'Rear Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber (°)', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber (°)', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe (°)', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe (°)', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Pressure (psi)', category: 'tires' },
    { name: 'rfPressure', label: 'RF Pressure (psi)', category: 'tires' },
    { name: 'lrPressure', label: 'LR Pressure (psi)', category: 'tires' },
    { name: 'rrPressure', label: 'RR Pressure (psi)', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'brakePower', label: 'Brake Power', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'power', label: 'Power (%)', category: 'differential' },
    { name: 'coast', label: 'Coast (%)', category: 'differential' },
  ],
  electronics: [
    { name: 'tractionControl', label: 'Traction Control', category: 'electronics' },
    { name: 'abs', label: 'ABS', category: 'electronics' },
    { name: 'stabilityControl', label: 'Stability Control', category: 'electronics' },
  ],
  drivetrain: [
    { name: 'fuelLevel', label: 'Fuel (L)', category: 'drivetrain' },
  ],
};

// =====================================
// ASSETTO CORSA RALLY - Campos específicos para rally
// =====================================
export const assettoCorsaRallyFields: SimulatorFields = {
  aero: [
    { name: 'frontAero', label: 'Front Aero', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height (mm)', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height (mm)', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpring', label: 'Front Spring', category: 'suspension' },
    { name: 'rearSpring', label: 'Rear Spring', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBump', label: 'Front Bump', category: 'suspension' },
    { name: 'frontRebound', label: 'Front Rebound', category: 'suspension' },
    { name: 'rearBump', label: 'Rear Bump', category: 'suspension' },
    { name: 'rearRebound', label: 'Rear Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber (°)', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber (°)', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe (°)', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe (°)', category: 'suspension' },
    { name: 'groundClearance', label: 'Ground Clearance', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Pressure (bar)', category: 'tires' },
    { name: 'rfPressure', label: 'RF Pressure (bar)', category: 'tires' },
    { name: 'lrPressure', label: 'LR Pressure (bar)', category: 'tires' },
    { name: 'rrPressure', label: 'RR Pressure (bar)', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'handbrakeBias', label: 'Handbrake Bias', category: 'brakes' },
    { name: 'brakePower', label: 'Brake Power', category: 'brakes' },
  ],
  differential: [
    { name: 'frontDiffPreload', label: 'Front Diff Preload', category: 'differential' },
    { name: 'centerDiffPreload', label: 'Center Diff Preload', category: 'differential' },
    { name: 'rearDiffPreload', label: 'Rear Diff Preload', category: 'differential' },
    { name: 'frontPower', label: 'Front Power (%)', category: 'differential' },
    { name: 'rearPower', label: 'Rear Power (%)', category: 'differential' },
    { name: 'centerTorqueSplit', label: 'Center Torque Split', category: 'differential' },
  ],
  drivetrain: [
    { name: 'gearFinal', label: 'Final Drive', category: 'drivetrain' },
    { name: 'gear1', label: '1st Gear', category: 'drivetrain' },
    { name: 'gear2', label: '2nd Gear', category: 'drivetrain' },
    { name: 'gear3', label: '3rd Gear', category: 'drivetrain' },
    { name: 'gear4', label: '4th Gear', category: 'drivetrain' },
    { name: 'gear5', label: '5th Gear', category: 'drivetrain' },
    { name: 'gear6', label: '6th Gear', category: 'drivetrain' },
    { name: 'fuelLevel', label: 'Fuel (L)', category: 'drivetrain' },
  ],
};

// =====================================
// RACEROOM RACING EXPERIENCE - Campos simplificados do R3E
// =====================================
export const raceroomFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpring', label: 'Front Spring', category: 'suspension' },
    { name: 'rearSpring', label: 'Rear Spring', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBump', label: 'Front Bump', category: 'suspension' },
    { name: 'frontRebound', label: 'Front Rebound', category: 'suspension' },
    { name: 'rearBump', label: 'Rear Bump', category: 'suspension' },
    { name: 'rearRebound', label: 'Rear Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Pressure', category: 'tires' },
    { name: 'rfPressure', label: 'RF Pressure', category: 'tires' },
    { name: 'lrPressure', label: 'LR Pressure', category: 'tires' },
    { name: 'rrPressure', label: 'RR Pressure', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'brakePressure', label: 'Brake Pressure', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'powerLock', label: 'Power Lock', category: 'differential' },
    { name: 'coastLock', label: 'Coast Lock', category: 'differential' },
  ],
  electronics: [
    { name: 'tractionControl', label: 'Traction Control', category: 'electronics' },
    { name: 'abs', label: 'ABS', category: 'electronics' },
  ],
  drivetrain: [
    { name: 'fuelLevel', label: 'Fuel', category: 'drivetrain' },
  ],
};

// =====================================
// LE MANS ULTIMATE - Campos detalhados (motor rFactor 2)
// =====================================
export const leMansUltimateFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing Angle', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing Angle', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height (mm)', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height (mm)', category: 'aero' },
    { name: 'rake', label: 'Rake (mm)', category: 'aero' },
    { name: 'brakeDuctFront', label: 'Front Brake Duct', category: 'aero' },
    { name: 'brakeDuctRear', label: 'Rear Brake Duct', category: 'aero' },
    { name: 'radiator', label: 'Radiator Opening', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpring', label: 'Front Spring (N/mm)', category: 'suspension' },
    { name: 'rearSpring', label: 'Rear Spring (N/mm)', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontSlowBump', label: 'Front Slow Bump', category: 'suspension' },
    { name: 'frontFastBump', label: 'Front Fast Bump', category: 'suspension' },
    { name: 'frontSlowRebound', label: 'Front Slow Rebound', category: 'suspension' },
    { name: 'frontFastRebound', label: 'Front Fast Rebound', category: 'suspension' },
    { name: 'rearSlowBump', label: 'Rear Slow Bump', category: 'suspension' },
    { name: 'rearFastBump', label: 'Rear Fast Bump', category: 'suspension' },
    { name: 'rearSlowRebound', label: 'Rear Slow Rebound', category: 'suspension' },
    { name: 'rearFastRebound', label: 'Rear Fast Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber (°)', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber (°)', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe (°)', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe (°)', category: 'suspension' },
    { name: 'frontCaster', label: 'Front Caster (°)', category: 'suspension' },
    { name: 'thirdSpringFront', label: 'Third Spring Front', category: 'suspension' },
    { name: 'thirdSpringRear', label: 'Third Spring Rear', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Pressure (kPa)', category: 'tires' },
    { name: 'rfPressure', label: 'RF Pressure (kPa)', category: 'tires' },
    { name: 'lrPressure', label: 'LR Pressure (kPa)', category: 'tires' },
    { name: 'rrPressure', label: 'RR Pressure (kPa)', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'brakeMigration', label: 'Brake Migration', category: 'brakes' },
    { name: 'brakePressure', label: 'Max Brake Pressure', category: 'brakes' },
    { name: 'brakeDuctsFront', label: 'Front Brake Ducts', category: 'brakes' },
    { name: 'brakeDuctsRear', label: 'Rear Brake Ducts', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload (Nm)', category: 'differential' },
    { name: 'onPower', label: 'On-Power Lock (%)', category: 'differential' },
    { name: 'offPower', label: 'Off-Power Lock (%)', category: 'differential' },
  ],
  electronics: [
    { name: 'tractionControl', label: 'Traction Control', category: 'electronics' },
    { name: 'abs', label: 'ABS', category: 'electronics' },
    { name: 'hybridDeploy', label: 'Hybrid Deployment Mode', category: 'electronics' },
    { name: 'regenLevel', label: 'Regen Level', category: 'electronics' },
    { name: 'energyTarget', label: 'Energy Target (MJ/lap)', category: 'electronics' },
    { name: 'pushToPass', label: 'Push-to-Pass', category: 'electronics' },
  ],
  drivetrain: [
    { name: 'gearFinal', label: 'Final Drive', category: 'drivetrain' },
    { name: 'gear1', label: '1st Gear', category: 'drivetrain' },
    { name: 'gear2', label: '2nd Gear', category: 'drivetrain' },
    { name: 'gear3', label: '3rd Gear', category: 'drivetrain' },
    { name: 'gear4', label: '4th Gear', category: 'drivetrain' },
    { name: 'gear5', label: '5th Gear', category: 'drivetrain' },
    { name: 'gear6', label: '6th Gear', category: 'drivetrain' },
    { name: 'gear7', label: '7th Gear', category: 'drivetrain' },
    { name: 'fuelLevel', label: 'Fuel (L)', category: 'drivetrain' },
    { name: 'ballast', label: 'Ballast (kg)', category: 'drivetrain' },
  ],
};

// =====================================
// PROJECT MOTOR RACING - Campos estimados baseados em outros sims
// =====================================
export const projectMotorRacingFields: SimulatorFields = {
  aero: [
    { name: 'frontWing', label: 'Front Wing', category: 'aero' },
    { name: 'rearWing', label: 'Rear Wing', category: 'aero' },
    { name: 'frontRideHeight', label: 'Front Ride Height', category: 'aero' },
    { name: 'rearRideHeight', label: 'Rear Ride Height', category: 'aero' },
    { name: 'brakeDucts', label: 'Brake Ducts', category: 'aero' },
  ],
  suspension: [
    { name: 'frontSpring', label: 'Front Spring', category: 'suspension' },
    { name: 'rearSpring', label: 'Rear Spring', category: 'suspension' },
    { name: 'frontARB', label: 'Front Anti-Roll Bar', category: 'suspension' },
    { name: 'rearARB', label: 'Rear Anti-Roll Bar', category: 'suspension' },
    { name: 'frontBump', label: 'Front Bump', category: 'suspension' },
    { name: 'frontRebound', label: 'Front Rebound', category: 'suspension' },
    { name: 'rearBump', label: 'Rear Bump', category: 'suspension' },
    { name: 'rearRebound', label: 'Rear Rebound', category: 'suspension' },
    { name: 'frontCamber', label: 'Front Camber', category: 'suspension' },
    { name: 'rearCamber', label: 'Rear Camber', category: 'suspension' },
    { name: 'frontToe', label: 'Front Toe', category: 'suspension' },
    { name: 'rearToe', label: 'Rear Toe', category: 'suspension' },
  ],
  tires: [
    { name: 'lfPressure', label: 'LF Pressure', category: 'tires' },
    { name: 'rfPressure', label: 'RF Pressure', category: 'tires' },
    { name: 'lrPressure', label: 'LR Pressure', category: 'tires' },
    { name: 'rrPressure', label: 'RR Pressure', category: 'tires' },
    { name: 'tireCompound', label: 'Tire Compound', category: 'tires' },
  ],
  brakes: [
    { name: 'brakeBias', label: 'Brake Bias (%)', category: 'brakes' },
    { name: 'brakePressure', label: 'Brake Pressure', category: 'brakes' },
  ],
  differential: [
    { name: 'preload', label: 'Preload', category: 'differential' },
    { name: 'power', label: 'Power', category: 'differential' },
    { name: 'coast', label: 'Coast', category: 'differential' },
  ],
  electronics: [
    { name: 'tractionControl', label: 'Traction Control', category: 'electronics' },
    { name: 'abs', label: 'ABS', category: 'electronics' },
  ],
  drivetrain: [
    { name: 'fuelLevel', label: 'Fuel', category: 'drivetrain' },
  ],
};

// =====================================
// Mapa de simuladores para seus campos específicos
// =====================================
export const simulatorFieldsMap: Record<string, SimulatorFields> = {
  'iRacing': iRacingFields,
  'Automobilista 2': automobilista2Fields,
  'Assetto Corsa Competizione': accFields,
  'Assetto Corsa EVO': assettoCornaEVOFields,
  'Assetto Corsa': assettoCorsa1Fields,
  'Assetto Corsa Rally': assettoCorsaRallyFields,
  'RaceRoom Racing Experience': raceroomFields,
  'Le Mans Ultimate': leMansUltimateFields,
  'Project Motor Racing': projectMotorRacingFields,
};

// =====================================
// Função para obter campos de um simulador específico
// =====================================
export const getSimulatorFields = (simulator: string): SimulatorFields => {
  return simulatorFieldsMap[simulator] || iRacingFields;
};

// Função para obter todas as categorias disponíveis para um simulador
export const getAvailableCategories = (simulator: string): string[] => {
  const fields = getSimulatorFields(simulator);
  const categories: string[] = ['aero', 'suspension', 'tires', 'brakes', 'differential'];
  
  if (fields.electronics && fields.electronics.length > 0) {
    categories.push('electronics');
  }
  if (fields.drivetrain && fields.drivetrain.length > 0) {
    categories.push('drivetrain');
  }
  
  return categories;
};
