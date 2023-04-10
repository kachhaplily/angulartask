import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from './Service/productservice.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data: any[] = [];
  constructor(private myService: ProductserviceService) {

  }
  ngOnInit(): void {
    this.myService.getData().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

}
