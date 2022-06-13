import { Country } from "../admin/country/country";

export interface Address {
    id: number;
    street: string;
    city: string;
    countryId: number;
    country: Country;
}