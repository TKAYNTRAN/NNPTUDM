
// Cau 1:
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}



/// Cau 2 :
const products = [
    new Product(1, "Bàn phím cơ", 1500000, 20, "Phụ kiện", true),
    new Product(2, "Chuột gaming", 800000, 15, "Phụ kiện", true),
    new Product(3, "Tai nghe", 1200000, 10, "Phụ kiện", true),
    new Product(4, "Laptop Dell", 20000000, 5, "Thiết bị", true),
    new Product(5, "Màn hình 24 inch", 4500000, 8, "Thiết bị", true),
    new Product(6, "Ổ cứng SSD", 1800000, 12, "Thiết bị", false),
    new Product(7, "Mouse", 250000, 2, "Thiết bị", false)
];

console.log(products);



/// Cau 3:
const newProducts = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log(newProducts);



/// Cau 4:
const Still = products.filter(p => ({
    quantity: p.quantity>0
}));
console.log(Still);



/// Cau 5:
const priceEx = products.some(p => p.price > 30000000);
console.log(priceEx);


/// Cau 6:
const result = products.some(p => p.category === "Accessories") &&
               products
                 .filter(p => p.category === "Accessories")
                 .every(p => p.isAvailable === true);

console.log(result);



/// Cau 7:
const totalValue = products.reduce(
    (sum, p) => sum + p.price * p.quantity,
    0
);

console.log(totalValue);


/// Cau 8:
for (const p of products) {
    console.log(`${p.name} - ${p.category} - ${p.isAvailable}`);
}


/// Cau 9:
for (const product of products) {
    console.log("----- Sản phẩm -----");
    for (const key in product) {
        console.log(`${key}: ${product[key]}`);
    }
}


/// Cau 10:
const sellingProducts = products
    .filter(p => p.isAvailable === true && p.quantity > 0)
    .map(p => p.name);

console.log(sellingProducts);