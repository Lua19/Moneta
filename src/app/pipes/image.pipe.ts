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
    return 'https://www.pngitem.com/pimgs/m/533-5339762_icon-box-vector-boxes-outline-hd-png-download.png';
  }

}
