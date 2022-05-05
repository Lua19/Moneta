import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'item'
})
export class ItemPipe implements PipeTransform {

  transform(imageData: string | null | undefined): string {
    if (imageData == null || imageData == undefined) {
      return 'https://thumbs.dreamstime.com/b/groceries-97077851.jpg';
    }
    return imageData
  }

}
