import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  price:Number

  paymentRequest!:google.payments.api.PaymentDataRequest;


 
  constructor() { }

  ngOnInit(): void {
    this.paymentRequest={
      apiVersion:2,
      apiVersionMinor:0,
      allowedPaymentMethods:[
        {
          type:'CARD',
          parameters:{
            allowedAuthMethods:['PAN_ONLY','CRYPTOGRAM_3DS'],
            allowedCardNetworks:['MASTERCARD','VISA'],
          },
          tokenizationSpecification:{
            type:'PAYMENT_GATEWAY',
            parameters:{
              gateway:'example',
              gatewayMerchantId:'exampleGateWayMerchantId',
            },
          },
        },
      ],
      merchantInfo:{
        merchantId:'BCR2DN4T6DHPHHI2',
        merchantName:'ABCcompany',
      },
      transactionInfo:{
        totalPriceStatus:'FINAL',
        totalPriceLabel:'Total',
        totalPrice:this.price.toFixed(2),
        currencyCode:'INR',
        countryCode:'IND',

      },
    }
  }

 async onLoadPaymentData(event:Event)  {
   const paymentData=(event as CustomEvent<google.payments.api.PaymentData>).detail;

   }

}
