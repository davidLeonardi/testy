export interface Location {
    name: string;
    zip: string;
    locationCode: string;
}
export interface Result extends Location {
    tempC: string;
    currentConditions: string;
    rawTime: string
}