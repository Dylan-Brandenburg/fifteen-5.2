let _ = require("lodash");
let cars = [
  {
    img: "2004_Porsche_911_Carrera_type_997.jpg",
    manufacturer: "Porsche",
    model: "911",
    price: 135000,
    quality: [
      {
        name: "overall",
        rating: 1
      },
      {
        name: "mechanical",
        rating: 4
      },
      {
        name: "powertrain",
        rating: 2
      },
      {
        name: "body",
        rating: 4
      },
      {
        name: "interior",
        rating: 3
      },
      {
        name: "accessories",
        rating: 2
      }
    ],
    wiki: "http://en.wikipedia.org/wiki/Porsche_997"
  },
  {
    img: "250px-Nissan_GT-R.jpg",
    manufacturer: "Nissan",
    model: "GT-R",
    price: 80000,
    quality: [
      {
        name: "overall",
        rating: 2
      },
      {
        name: "mechanical",
        rating: 3
      },
      {
        name: "powertrain",
        rating: 5
      },
      {
        name: "body",
        rating: 4
      },
      {
        name: "interior",
        rating: 2
      },
      {
        name: "accessories",
        rating: 2
      }
    ],
    wiki: "http://en.wikipedia.org/wiki/Nissan_Gt-r"
  },
  {
    img: "250px-BMW_M3_E92.jpg",
    manufacturer: "BMW",
    model: "M3",
    price: 60500,
    quality: [
      {
        name: "overall",
        rating: 3
      },
      {
        name: "mechanical",
        rating: 5
      },
      {
        name: "powertrain",
        rating: 3
      },
      {
        name: "body",
        rating: 4
      },
      {
        name: "interior",
        rating: 5
      },
      {
        name: "accessories",
        rating: 3
      }
    ],
    wiki: "http://en.wikipedia.org/wiki/Bmw_m3"
  },
  {
    img: "250px-Audi_S5.jpg",
    manufacturer: "Audi",
    model: "S5",
    price: 53000,
    quality: [
      {
        name: "overall",
        rating: 4
      },
      {
        name: "mechanical",
        rating: 1
      },
      {
        name: "powertrain",
        rating: 1
      },
      {
        name: "body",
        rating: 4
      },
      {
        name: "interior",
        rating: 1
      },
      {
        name: "accessories",
        rating: 5
      }
    ],
    wiki: "http://en.wikipedia.org/wiki/Audi_S5#Audi_S5"
  },
  {
    img: "250px-2007_Audi_TT_Coupe.jpg",
    manufacturer: "Audi",
    model: "TT",
    price: 40000,
    quality: [
      {
        name: "overall",
        rating: 5
      },
      {
        name: "mechanical",
        rating: 2
      },
      {
        name: "powertrain",
        rating: 2
      },
      {
        name: "body",
        rating: 3
      },
      {
        name: "interior",
        rating: 4
      },
      {
        name: "accessories",
        rating: 1
      }
    ],
    wiki: "http://en.wikipedia.org/wiki/Audi_TT"
  }
];
let car = cars[0];
let myCars = cars
  .filter(c => c.manufacturer === "Audi")
  .sort((a, b) => (a.price > b.price ? 1 : -1))
  .map(c => ({ manufacturer: c.manufacturer, img: c.img }));

myCars;

let props = _.map(car, (_, key) => key); // pluck

props;

let carManufacturers = _.map(cars, car => car.manufacturer);

carManufacturers;

let audi = _.find(cars, ["manufacturer", "Audi"]);

audi;

let audis = _.filter(cars, ["manufacturer", "Audi"]); // where
audis;

let deduplicated = _.union(
  _.map([{ name: "shea" }, { name: "shea" }], c => c.name)
);
console.log("deduplicated: ", deduplicated);

let es6Deduplicated = [...new Set(carManufacturers, carManufacturers.slice())];
console.log("es6Deduplicated: ", es6Deduplicated);

let intersection = _.intersection([1, 2, 3], [1, 3, 5]);
console.log("intersection: ", intersection);

let admin = [
  { name: "shea", age: 34 },
  { name: "Erik", age: 34 },
  { name: "Steven", age: 27 }
];
console.log("admin: ", admin);

let group = _.groupBy(admin, "age");
console.log("group: ", group);

let group2 = admin.reduce((obj, cur) => {
  if (obj[cur["age"]]) {
    obj[cur["age"]].push(cur);
    return obj;
  } else {
    obj[cur["age"]] = [cur];
    return obj;
  }
}, {});
console.log("group2: ", group2);

function add(x, y) {
  console.log(x, y);
  return x + y;
}

let memoizedAdd = _.memoize(add);
let added = memoizedAdd(4, 5);
let added2 = memoizedAdd(4, 5);
added;
added2;
