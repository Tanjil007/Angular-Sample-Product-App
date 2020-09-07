import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from "./IProduct";
@Pipe({
  name: 'productsearch'
})

export class ProductSearchPipe implements PipeTransform {

transform(value: IProduct[], args: string): IProduct[] {

if(!args){
  return value;
}
return value.filter(
item=> item.productName.toLowerCase().indexOf(args.toLowerCase()) > -1 )

}

}

