export interface Office {
    name: string;
    code: string;
}

export interface Route {
    origin: string;
    destination: string;
    dateFrom: string;
    dateTo: string;
}
export interface Result extends Location {
    price: string;
    duration: string;
    airline: string;
    code: string;
    date: string;
}

export interface Kiwi {
    search_id: string;
    data?: (DataEntity)[] | null;
    connections?: (null)[] | null;
    time: number;
    currency: string;
    currency_rate: number;
    fx_rate: number;
    refresh?: (null)[] | null;
    del: number;
    ref_tasks?: (null)[] | null;
    search_params: SearchParams;
    all_stopover_airports?: (null)[] | null;
    all_airlines?: (null)[] | null;
}
export interface DataEntity {
    id: string;
    route?: (RouteEntity)[] | null;
    dTime: number;
    dTimeUTC: number;
    aTime: number;
    aTimeUTC: number;
    nightsInDest?: null;
    duration: Duration;
    fly_duration: string;
    flyFrom: string;
    cityFrom: string;
    cityCodeFrom: string;
    countryFrom: CountryFromOrCountryTo;
    mapIdfrom: string;
    flyTo: string;
    cityTo: string;
    cityCodeTo: string;
    countryTo: CountryFromOrCountryTo;
    mapIdto: string;
    distance: number;
    routes?: ((string)[] | null)[] | null;
    airlines?: (string)[] | null;
    pnr_count: number;
    virtual_interlining: boolean;
    has_airport_change: boolean;
    technical_stops: number;
    price: number;
    bags_price: BagsPrice;
    baglimit: Baglimit;
    availability: Availability;
    facilitated_booking_available: boolean;
    p1: number;
    p2: number;
    p3: number;
    transfers?: (null)[] | null;
    type_flights?: (string)[] | null;
    found_on?: (string)[] | null;
    conversion: Conversion;
    quality: number;
    booking_token: string;
    deep_link: string;
}
export interface RouteEntity {
    fare_basis: string;
    fare_category: string;
    fare_classes: string;
    price: number;
    fare_family: string;
    found_on: string;
    last_seen: number;
    refresh_timestamp: number;
    source: string;
    return: number;
    bags_recheck_required: boolean;
    guarantee: boolean;
    id: string;
    combination_id: string;
    original_return: number;
    aTime: number;
    dTime: number;
    aTimeUTC: number;
    dTimeUTC: number;
    mapIdfrom: string;
    mapIdto: string;
    cityTo: string;
    cityFrom: string;
    cityCodeFrom: string;
    cityCodeTo: string;
    flyTo: string;
    flyFrom: string;
    airline: string;
    operating_carrier: string;
    equipment?: string | null;
    latFrom: number;
    lngFrom: number;
    latTo: number;
    lngTo: number;
    flight_no: number;
    vehicle_type: string;
    operating_flight_no: string;
}
export interface Duration {
    departure: number;
    return: number;
    total: number;
}
export interface CountryFromOrCountryTo {
    code: string;
    name: string;
}
export interface BagsPrice {
    1: number;
    2?: number | null;
}
export interface Baglimit {
    hand_width: number;
    hand_height: number;
    hand_length: number;
    hand_weight: number;
    hold_width: number;
    hold_height: number;
    hold_length: number;
    hold_dimensions_sum: number;
    hold_weight: number;
}
export interface Availability {
    seats?: number | null;
}
export interface Conversion {
    EUR: number;
}
export interface SearchParams {
    flyFrom_type: string;
    to_type: string;
    seats: Seats;
}
export interface Seats {
    passengers: number;
    adults: number;
    children: number;
    infants: number;
}
