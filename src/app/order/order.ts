import { Address } from "../address/address";

export interface Order {
    id: number;
    addressId: number;
    userId: number;
    confirm: boolean;
    address: Address;
}