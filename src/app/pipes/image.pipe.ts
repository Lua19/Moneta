import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Interfaces/Product.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(product: Product,): string {
    if (!product.imageData == null) {
      return product.imageData;
    }
    if (!product.imageURL == null) {
      return product.imageURL;
    }
    return 'https://thumbs.dreamstime.com/b/groceries-97077851.jpg';
  }

}
