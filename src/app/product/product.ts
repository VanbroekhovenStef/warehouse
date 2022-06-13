import { User } from "../security/user";
import { Item } from "./item/item";
import { Packaging } from "./packaging/packaging";

export interface Product {
    id: number;
    amountInStock: number;
    userId: number;
    itemId: number;
    packagingId: number;
    packaging: Packaging;
    user: User;
    item: Item;
}