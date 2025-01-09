import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  products: any=[
    {name:'pen',price:'10',rating:'3',FreeDelivery:'true'},
    {name:'phone',price:'100',rating:'2',FreeDelivery:'false'},
    {name:'Shirt',price:'400',rating:'4',FreeDelivery:'true'},
    {name:'cap',price:'200',rating:'5',FreeDelivery:'false'},
    {name:'mobilecase',price:'300',rating:'2',FreeDelivery:'true'},
    {name:'remote',price:'400',rating:'2.5',FreeDelivery:'false'}
  ];

  text:string="";
  search(){
    this.products=this.products.filter((product:any)=>product.name.includes(this.text));
  }

  freedelivery(){
    this.products=this.products.filter((product:any)=>product.FreeDelivery.includes(true))
    /* this.products.filter((this.product.any)=>pro) */
  }

  sortlowtoheigh(){
    this.products.sort((a:any,b:any)=>a.price-b.price);  //for sorting asc order
    
  }
  sortheightolow(){
    this.products.sort((a:any,b:any)=>b.price-a.price); 
  }

  sortlowtoheighrating(){
    this.products.sort((a:any,b:any)=>a.rating-b.rating); 
  }
  sortheightolowrating(){
    this.products.sort((a:any,b:any)=>b.rating-a.rating); 
  }
  
  discount(){
      this.products=this.products.map((product:any)=>{
      product.price=product.price*0.5;
      return product 
    })
  }

  charge(){
    this.products=this.products.map((product:any)=>{
    product.price=parseInt(product.price)+Number(50);
    return product;
    })
  }

  totalprice(){
    let totalprice=this.products.reduce((sum:any,product:any)=>Number(sum)+Number(product.price),0)
      alert(totalprice);
  }
  totalcartitem(){
  
    let totelitems=this.products.forEach(() => {
      let count=0;
      count++;
    });
    /* let totalitms=this.products.reduce((count:any ,product:any)=>Number(count)+Number(product.length)); */
    console.log(totelitems);
    alert(totelitems)
  }
}
