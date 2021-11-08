let sayi1=10;
sayi1="Engin Demiroğ"
let student={id:1,name:"Engin"}
//console.log(student);

function save(puan=10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student); //parantez içine yazdığımız parametreyi fuction içerisine atayıp ordan kullanıyor.

let students = ["Engin Demiroğ", "Halit Kalaycı", "Engin Toprak", "Büşra"]

//console.log(students)

let students2 = [student, {id:2, name:"Halit"},"Ankara",{city:"İstanbul"}]
//console.log(students2)

//rest (geriye kalanlar demek.) 
//c# da params demektir.
let showProducts = function (id,...products) {
    // bir değişkene fonksiyon atanabilir
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts) //typeof ile en son atananın ne tipte olduğunu görürüz
showProducts(10,["elma","armut","karpuz"],"kiraz") //id undefined olarak döndü, ama products boş bir array olarak geldi

//spread - ayrıştırmak demektir.  bir array ı parametere gibi virgüllerle ayırmaya yarar.
let points = [1,2,3,4,80,54,15]
console.log(...points)
console.log(Math.max(...points)) //elimizdeki sayıları direkt yazarsak ...points yerine yazarız. 
//fakat başka bi yerden bi array gelirse o zaman değerleri okuması için spread yaparız.
console.log(..."ABC","D",..."EFG","H") 

//Destructuring: eldeki array ın değerlerini değişkenlere atamaktır.(parçalamak)
let populations = [10000,20000,30000,[40000,100000]]
let [small,medium,high,[veryHigh, maximum]] = populations //destructring yapıldı. içiçe destructing yapıldı
console.log(small,medium,high,veryHigh,maximum)

function someFunction([small1],number) {
    console.log(small1)
}
someFunction(populations)

let category = {id:7, name:"içecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)

