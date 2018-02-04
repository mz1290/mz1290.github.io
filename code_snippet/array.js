
// example of a simple array
var favoriteFoods = ["pizza", "steak", "burger"];


// example of array wiht multiple data types
var menu = [
    "pizza",
    [10, 12, 15],
    [true, true, false],
    "this array makes no sense!"
];

// forEach example
favoriteFoods.forEach (function (item, index, array) {
    console.log (item, index);
})
// pizza 0
// steak 1
// burger 2

// map() example
var favoriteRestaurant = favoriteFoods.map (function (restaurant) {
    restaurant += " house";
    restaurant = restaurant.toUpperCase();
    return restaurant;
})
// PIZZA HOUSE, STEAK HOUSE, BURGER HOUSE

