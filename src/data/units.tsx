export interface Unit {
    name: string;
    image: string;
    move: number;
    defence: number;
    infantry: number;
    lightVehicles: number;
    heavyVehicles: number;
}

export const units: Unit[] = [
    {
        name: "Sgt. Vorolanus",
        image: "sgt-vorolanus.jpg",
        move: 4,
        defence: 6,
        infantry: 2,
        lightVehicles: 1,
        heavyVehicles: 0,
    },
    {
        name: "Plasma Gun",
        image: "plasma-gun.jpg",
        move: 3,
        defence: 6,
        infantry: 3,
        lightVehicles: 3,
        heavyVehicles: 2
    },
    {
        name: "Tactical",
        image: "tactical.jpg",
        move: 3,
        defence: 5,
        infantry: 3,
        lightVehicles: 2,
        heavyVehicles: 0,
    },
    {
        name: "Heavy Bolter",
        image: "heavy-bolter.jpg",
        move: 3,
        defence: 5,
        infantry: 4,
        lightVehicles: 3,
        heavyVehicles: 1,
    },
    {
        name: "Lascannon",
        image: "lascannon.jpg",
        move: 3,
        defence: 5,
        infantry: 3,
        lightVehicles: 5,
        heavyVehicles: 4,
    }
].sort((a, b) => a.name.localeCompare(b.name))
