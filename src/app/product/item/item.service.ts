import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private httpClient : HttpClient) { }
    getItems() : Observable<Item[]> {
      return this.httpClient.get<Item[]>("https://localhost:44306/api/items");
    }

    getItemById(id: number): Observable<Item> {
      return this.httpClient.get<Item>("https://localhost:44306/api/items/" + id)
    }

    postItem(item: Item): Observable<Item> {
      return this.httpClient.post<Item>("https://localhost:44306/api/items/", item);
    }

    putItem(id: number, item: Item): Observable<Item> {
      return this.httpClient.put<Item>("https://localhost:44306/api/items/" + id, item);
    }

    deleteItem(id: number): Observable<Item> {
      return this.httpClient.delete<Item>("https://localhost:44306/api/items/" + id);
    }
}
