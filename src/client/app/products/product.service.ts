import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';

import { IProduct } from './product';
import { IPaziente } from './paziente';

@Injectable()
export class ProductService {
    //private _productUrl = 'api/products/products.json';
    private _productUrl = 'http://127.0.0.1:4001/pazienti';

    constructor(private _http: Http) { 

        console.log('ProductService ctor');
    }

    getProducts(): Observable<IPaziente[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => response.json().data)
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    }

    getProducts2(): Observable<IProduct[]> {
        return this._http.get(this._productUrl)
            .map((response: Response) => <IProduct[]> response.json())
            .do(data => console.log('All: ' +  JSON.stringify(data)))
            .catch(this.handleError);
    } 

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts2()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
