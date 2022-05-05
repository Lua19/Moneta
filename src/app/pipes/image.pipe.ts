import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Interfaces/Product.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(product: Product): string {
    if (product != null) {
      return product.storeProductImageList[0].imageData;
    }
    return 'https://thumbs.dreamstime.com/b/groceries-97077851.jpg';
  }

}
