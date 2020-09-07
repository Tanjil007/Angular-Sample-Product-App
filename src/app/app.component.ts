import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "Product App";
  products: IProduct[] = [];
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  searchText = "";
  constructor() {}

  ngOnInit() {
    this.products = this.getProducts();
    console.log(this.products);
  }
  toggleImage(){
    this.showImage = !this.showImage;
  }

  getProducts(): IProduct[] {
    return [
      {
        productId: 1,
        productName: "Leaf Rake",
        productCode: "GDN-0011",
        releaseDate: "March 19, 2020",
        description: "lorem1 tanjil shaikh ameen shaikh sahil shaikh",
        price: 19.5,
        starRating: 3.2,
        imageUrl: "assets/images/leaf-rake.png"
      },
      {
        productId: 2,
        productName: "Leaf Roon",
        productCode: "GDN-0022",
        releaseDate: "March 20, 2020",
        description: "lorem1 tanjil shaikh ameen shaikh sahil shaikh",
        price: 20.25,
        starRating: 4.4,
        imageUrl: "assets/images/leaf_rake.png"
      },
      {
        productId: 3,
        productName: "Pen",
        productCode: "GDN-0033",
        releaseDate: "March 21, 2020",
        description: "lorem1 tanjil shaikh ameen shaikh sahil shaikh",
        price: 21.5,
        starRating: 4.5,
        imageUrl: "assets/images/leaf_rake.png"
      },
        {
        productId: 4,
        productName: "Samsung",
        productCode: "GDN-0044",
        releaseDate: "March 22, 2020",
        description: "samsung m - 31 - s",
        price: 25000,
        starRating: 4.5,
        imageUrl: "assets/images/leaf_rake.png"
      }
    ];
  }
}
