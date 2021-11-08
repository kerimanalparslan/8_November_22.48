function addToChart(quantity, productName="armut") {
    console.log("Sepete eklendi : " + productName + "   " + "Eklenen adet :" + quantity )
}

//addToChart()
//addToChart("yumurta",10)
//addToChart("karpuz")
addToChart(10)

let sayHello = ()=>{
    console.log("Hello World!")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello World 2!")
}
sayHello2()


function addToChart2(productName, quantity, unitPrice) {
    console.log(productName + " - " + quantity + " - " + unitPrice)
}
addToChart2("Elma",5,10)
addToChart2("Armut",2,20)

let product1 = {productName:"Elma", quantity:10,unitPrice:5}
function addToChart3(product) {
    console.log("Ürün : " + product.productName)
    console.log("Adet : " + product.quantity)
    console.log("Fiyat : " + product.unitPrice)
}

addToChart3(product1)

let product2 = {productName:"Elma", quantity:10,unitPrice:5}
let product3 = {productName:"Elma", quantity:10,unitPrice:5}
product2=product3
product2.productName="KARPUZ"
console.log(product3.productName)

function addToChart4(x) {
    console.log(products)
}

let products = [
    {productName:"Elma", quantity:10,unitPrice:5},
    {productName:"Armut", quantity:10,unitPrice:5},
    {productName:"Karpuz", quantity:10,unitPrice:5}
]

addToChart4(products)

function add(...numbers) { //eğer 2 parametreden fazlasını toplamak istersek 'rest(...)' yapmak iyi olur.
    
    let toplam=0
    for (let i = 0; i < numbers.length; i++) {
        toplam = toplam + numbers[i]
    }
    console.log(toplam)
}
add(20,30)
add(20,30,40)

//math.max gibi şeyleri kullanırken verilerin ayrılmış olması gerekir. bunu da 'spread' etmek lazım
let numbers=[30,40,500,160,800]
console.log(Math.max(...numbers))

//bazen verilerin ayrılmış olması gerekir. eğer içiçe array ler yer alırsa parçalamak gerekir.
// bunu da 'destructure' ile yapmak lazım;

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu", population:"20M"}, 
    {name:"Marmara", population:"30M"}, 
    {name:"Karadeniz", population:"10M"}, 
    [
        ["Ankara,Konya"],
        ["İstanbul,Bursa"],
        ["Sinop,Trabzon"],

    ]
]

console.log(icAnadoluSehirleri)
console.log(icAnadolu)
console.log(marmara)
console.log("Bölge: " +  karadeniz.name + "  Nüfus: " + karadeniz.population)

let newProductName,newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity}= {productName:"Elma", quantity:10,unitPrice:5})
console.log(newProductName)
console.log(newUnitPrice)
console.log(newQuantity)

