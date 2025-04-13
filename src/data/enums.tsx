export enum Faction {
  Ultramarines = "Ultramarines",
  Orks = "Orks",
}

export enum Role {
  Regular = "Regular",           // Faction Color
  Leader = "Leader",             // Yellow
  HeavyWeapons = "Heavy Weapons" // Red
}

export enum Type {
  Infantry = "Infantry",          // Yellow Defence Shield
  LightVehicle = "Light Vehicle", // Red Defence Shield
  HeavyVehicle = "Heavy Vehicle", // Gray Defence Shield
}

export enum Release {
  BM = "Bad Moon Reinforcements",
  CB = "Core Box",
  CK = "Cassius and Kragot Promo",
  ORK = "Ork Reinforcements",
  ULTRA = "Ultramarine Reinforcements",
  VSF = "Vanguard Squad & Freebooterz",
  ZK = "Zoggrim"
}

export enum Size {
  Individual = "Individual",      // 368x368
  Squad = "Squad",                // 422x422
  Mech = "Mech",                  // 552x422
  Vehicle = "Vehicle",            // 472x768
  LargeVehicle = "Large Vehicle", // 906x906
  LongVehicle = "Long Vehicle",   // 466x929
  SmallTitan = "Small Titan",     // 1400x1400
}
