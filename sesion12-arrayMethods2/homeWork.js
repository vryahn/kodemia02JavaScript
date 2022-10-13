// Elabora un ejercicio por cada inciso.

// 1. Dado un arreglo de palabras, recupera un string con todas las palabras utilizando la función map.

const nombres = ['Su','Abraham','Yael','Chofis']

const palabras = nombres.reduce((prev,actual) =>prev+=actual)
console.log(palabras);

// 2. Dado un arreglo de objetos literales, calcula la suma total de los precios de los productos.

json = [{
  "nombre": "Bouq All Italian - Primerba",
  "precio": 43.03
}, {
  "nombre": "Cake - Sheet Strawberry",
  "precio": 34.51
}, {
  "nombre": "Chicken Breast Wing On",
  "precio": 52.04
}, {
  "nombre": "Brandy - Bar",
  "precio": 28.25
}, {
  "nombre": "Soup - Cream Of Broccoli, Dry",
  "precio": 10.8
}, {
  "nombre": "Pie Shell - 5",
  "precio": 82.13
}, {
  "nombre": "Egg - Salad Premix",
  "precio": 10.22
}, {
  "nombre": "Curry Powder Madras",
  "precio": 85.7
}, {
  "nombre": "Hot Choc Vending",
  "precio": 94.48
}, {
  "nombre": "Myers Planters Punch",
  "precio": 46.89
}, {
  "nombre": "Cheese - Brie, Cups 125g",
  "precio": 11.37
}, {
  "nombre": "Sprouts - Corn",
  "precio": 48.04
}, {
  "nombre": "Wine - Zinfandel California 2002",
  "precio": 17.8
}, {
  "nombre": "Beer - Alexander Kieths, Pale Ale",
  "precio": 82.95
}, {
  "nombre": "Wine - Rosso Toscano Igt",
  "precio": 55.13
}, {
  "nombre": "Butcher Twine 4r",
  "precio": 94.14
}, {
  "nombre": "Basil - Pesto Sauce",
  "precio": 52.2
}, {
  "nombre": "Skirt - 29 Foot",
  "precio": 91.28
}, {
  "nombre": "Muffin Mix - Banana Nut",
  "precio": 41.41
}, {
  "nombre": "Corn Meal",
  "precio": 14.68
}, {
  "nombre": "Egg - Salad Premix",
  "precio": 20.46
}, {
  "nombre": "Beer - Creemore",
  "precio": 92.44
}, {
  "nombre": "Bread - Granary Small Pull",
  "precio": 14.24
}, {
  "nombre": "Clams - Littleneck, Whole",
  "precio": 82.95
}, {
  "nombre": "Juice - Cranberry 284ml",
  "precio": 60.6
}, {
  "nombre": "Beer - Sleemans Honey Brown",
  "precio": 33.46
}, {
  "nombre": "Wine - Fino Tio Pepe Gonzalez",
  "precio": 14.86
}, {
  "nombre": "Beans - Wax",
  "precio": 45.77
}, {
  "nombre": "Scallops - 20/30",
  "precio": 75.46
}, {
  "nombre": "Coffee - Flavoured",
  "precio": 96.9
}, {
  "nombre": "Bread - 10 Grain",
  "precio": 78.12
}, {
  "nombre": "Red Snapper - Fresh, Whole",
  "precio": 61.26
}, {
  "nombre": "Mustard - Pommery",
  "precio": 57.81
}, {
  "nombre": "Maintenance Removal Charge",
  "precio": 88.32
}, {
  "nombre": "Beans - Green",
  "precio": 20.78
}, {
  "nombre": "Lid - 0090 Clear",
  "precio": 83.21
}, {
  "nombre": "Wine - Rubyport",
  "precio": 67.54
}, {
  "nombre": "Wine - White, Cooking",
  "precio": 63.72
}, {
  "nombre": "Sauce - Oyster",
  "precio": 4.0
}, {
  "nombre": "Puree - Blackcurrant",
  "precio": 62.3
}, {
  "nombre": "Nougat - Paste / Cream",
  "precio": 51.71
}, {
  "nombre": "Lettuce - Baby Salad Greens",
  "precio": 53.59
}, {
  "nombre": "Duck - Fat",
  "precio": 35.94
}, {
  "nombre": "Water - Mineral, Carbonated",
  "precio": 10.54
}, {
  "nombre": "Pastry - Cherry Danish - Mini",
  "precio": 56.38
}, {
  "nombre": "Macaroons - Homestyle Two Bit",
  "precio": 78.99
}, {
  "nombre": "Pepper - Black, Whole",
  "precio": 84.91
}, {
  "nombre": "Pepper - Sorrano",
  "precio": 36.9
}, {
  "nombre": "Ham - Smoked, Bone - In",
  "precio": 28.52
}, {
  "nombre": "Appetizer - Seafood Assortment",
  "precio": 51.0
}, {
  "nombre": "Flower - Carnations",
  "precio": 33.78
}, {
  "nombre": "Extract - Lemon",
  "precio": 10.71
}, {
  "nombre": "Clam Nectar",
  "precio": 34.49
}, {
  "nombre": "Dried Cranberries",
  "precio": 84.46
}, {
  "nombre": "Cheese - Goat",
  "precio": 93.29
}, {
  "nombre": "Grand Marnier",
  "precio": 87.29
}, {
  "nombre": "Transfer Sheets",
  "precio": 59.01
}, {
  "nombre": "Mince Meat - Filling",
  "precio": 59.7
}, {
  "nombre": "Puree - Pear",
  "precio": 7.71
}, {
  "nombre": "Mints - Striped Red",
  "precio": 82.53
}, {
  "nombre": "Quail - Eggs, Fresh",
  "precio": 98.09
}, {
  "nombre": "Mahi Mahi",
  "precio": 85.29
}, {
  "nombre": "Soup - French Can Pea",
  "precio": 80.23
}, {
  "nombre": "Pasta - Penne, Rigate, Dry",
  "precio": 60.98
}, {
  "nombre": "Wine - Red, Antinori Santa",
  "precio": 71.94
}, {
  "nombre": "Eggplant - Regular",
  "precio": 39.72
}, {
  "nombre": "True - Vue Containers",
  "precio": 55.43
}, {
  "nombre": "Mousse - Passion Fruit",
  "precio": 52.43
}, {
  "nombre": "Rabbit - Frozen",
  "precio": 45.33
}, {
  "nombre": "Oil - Peanut",
  "precio": 78.68
}, {
  "nombre": "Paper - Brown Paper Mini Cups",
  "precio": 99.98
}, {
  "nombre": "Pineapple - Golden",
  "precio": 22.3
}, {
  "nombre": "Pastry - Baked Scones - Mini",
  "precio": 2.03
}, {
  "nombre": "Cheese - Brie, Triple Creme",
  "precio": 1.21
}, {
  "nombre": "Pears - Fiorelle",
  "precio": 62.27
}, {
  "nombre": "Grapes - Red",
  "precio": 31.44
}, {
  "nombre": "Soup - Cream Of Potato / Leek",
  "precio": 80.48
}, {
  "nombre": "Soup - Canadian Pea, Dry Mix",
  "precio": 1.65
}, {
  "nombre": "Gatorade - Lemon Lime",
  "precio": 55.9
}, {
  "nombre": "Lid - 10,12,16 Oz",
  "precio": 42.11
}, {
  "nombre": "Muffin - Mix - Strawberry Rhubarb",
  "precio": 44.14
}, {
  "nombre": "Lobster - Baby, Boiled",
  "precio": 88.1
}, {
  "nombre": "Soup - Cream Of Potato / Leek",
  "precio": 87.63
}, {
  "nombre": "Vodka - Hot, Lnferno",
  "precio": 15.14
}, {
  "nombre": "Pepper - Roasted Red",
  "precio": 47.88
}, {
  "nombre": "Burger Veggie",
  "precio": 41.87
}, {
  "nombre": "Pecan Raisin - Tarts",
  "precio": 48.65
}, {
  "nombre": "Pepper - Chilli Seeds Mild",
  "precio": 76.38
}, {
  "nombre": "Wine - White, Lindemans Bin 95",
  "precio": 54.98
}, {
  "nombre": "Veal - Round, Eye Of",
  "precio": 18.02
}, {
  "nombre": "Filter - Coffee",
  "precio": 41.24
}, {
  "nombre": "Coffee - Decafenated",
  "precio": 49.42
}, {
  "nombre": "Flax Seed",
  "precio": 29.52
}, {
  "nombre": "Soup - Campbells, Butternut",
  "precio": 15.32
}, {
  "nombre": "Lamb - Leg, Diced",
  "precio": 35.07
}, {
  "nombre": "Lamb - Ground",
  "precio": 32.61
}, {
  "nombre": "Wasabi Paste",
  "precio": 61.74
}, {
  "nombre": "Wheat - Soft Kernal Of Wheat",
  "precio": 39.85
}, {
  "nombre": "Cauliflower",
  "precio": 65.94
}, {
  "nombre": "Beer - Maudite",
  "precio": 85.44
}]

const data = JSON.stringify(json);

const sumaTotal = data.reduce((sum,datos) => sum+=datos);

sumaTotal(data.precio);