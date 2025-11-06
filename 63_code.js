// const products = [
//     { id: 1, title: "Phone", category: "tech", price: 1000 },
//     { id: 2, title: "Shirt", category: "fashion", price: 50 },
//     { id: 3, title: "Laptop", category: "tech", price: 2000 },
//     { id: 4, title: "Watch", category: "fashion", price: 200 },
//     { id: 5, title: "Toys", category: "kids", price: 20 },
//     { id: 6, title: "Book", category: "books", price: 10 },
// ];

// function countCategories(products: any[]) {
//     return products.reduce((acc, product) => {
//         acc[product.category] = (acc[product.category] || 0) + 1;
//         return acc;
//     }, {});
// }
// const uniqueCategories = [
//     ...new Set(products.map((product) => product.category)),
// ];
// console.log(uniqueCategories); // Output: ["tech", "fashion", "kids", "books"]
// console.log(countCategories(products));

{
    const products = [
        { id: 1, title: "Phone", category: "tech" },
        { id: 2, title: "Phone", category: "tech" }, // duplicate
        { id: 3, title: "Shirt", category: "fashion" },
        { id: 4, title: "Shirt", category: "fashion" }, // duplicate
        { id: 5, title: "Laptop", category: "tech" },
    ];

    const uniqueTitles = new Set();

    console.log(
        products.filter((prod) => {
            if (uniqueTitles.has(prod.title)) {
                return false;
            } else {
                uniqueTitles.add(prod.title);
                return true;
            }
        })
    );
    const uniqueTitlesAndCat = new Set();

    console.log(
        products.filter((prod) => {
            if (uniqueTitlesAndCat.has(`${prod.title}-${prod.category}`)) {
                return false;
            }
            uniqueTitlesAndCat.add(`${prod.title}-${prod.category}`);
            return true;
        })
    );
    const duplicatesByTitle = new Set();
    console.log(
        products.filter((prod) => {
            if (duplicatesByTitle.has(prod.title)) {
                return true;
            }
            duplicatesByTitle.add(prod.title);
            return false;
        })
    );
}
