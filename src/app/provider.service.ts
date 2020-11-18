import { Injectable } from '@angular/core';
import * as domtoimage from 'dom-to-image';

@Injectable()
export class PrintProvider{
constructor() {}

    print(componentName) {
      var node = document.getElementById(componentName);

      domtoimage.toPng(node)
      .then(function (dataUrl) {
          var popup=window.open();
            popup.document.write('<img src=' + dataUrl + '>');
            popup.document.close();
            popup.focus();
            popup.print();
            popup.close();
      })
      .catch(function (error) {
          console.error('oops, something went wrong!', error);
      });
    }
}