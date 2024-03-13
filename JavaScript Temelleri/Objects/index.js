/* 
    1- Sipariş bilgierini object içinde saklayınız.
    2- Her siparişin ayrı bir şekilde KDV dahil ücretini hesaplayınız. (KDV: %18)
    3- Tüm siparişlerin KDV dahil toplam ücretini hesaplayınız.

    sipariş id: 101                                                                     
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

        sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye
*/


let customerOrderInfo = [
    {
        orderId:101,
        orderDate: "31.12.2022",
        orderType: "Kredi Kartı",
        orderAdress: "Maslak Mahallesi Levent/Istanbul",
        orderProductList: [
            {
                productId: 5,
                productName: "iPhone 13 Pro",
                productURL: "http://abc.com/iphone-13-pro",
                productPrice: 20000
            },
            {
                productId: 6,
                productName: "iPhone 13 Pro Max",
                productURL: "http://abc.com/iphone-13-pro-max",
                productPrice: 25000
            }
        ],
        customerInfo: {
            customerId: 12
        },
        sellerInfo: {
            sellerId: 34,
            sellerName: "Apple Türkiye"
        }
    },
    {
        orderId:102,
        orderDate: "30.12.2022",
        orderType: "Kredi Kartı",
        orderAdress: "Maslak Mahallesi Levent/Istanbul",
        orderProductList:{
            productId: 6,
            productName: "iPhone 13 Pro Max",
            productURL: "http://abc.com/iphone-13-pro-max",
            productPrice: 25000
        },
        customerInfo: {
            customerId: 13
        },
        sellerInfo: {
            sellerId: 34,
            sellerName: "Apple Türkiye"
        }
    }
];

let order1Price = (customerOrderInfo[0].orderProductList[0].productPrice + customerOrderInfo[0].orderProductList[1].productPrice);
let order1Tax = ((customerOrderInfo[0].orderProductList[0].productPrice + customerOrderInfo[0].orderProductList[1].productPrice) * 0.18);
let order2Price = customerOrderInfo[1].orderProductList.productPrice;
let order2Tax = (customerOrderInfo[1].orderProductList.productPrice * 0.18);

let allOrderPrice = ((order1Price + order1Tax) + (order2Price + order2Tax));

console.log(allOrderPrice);