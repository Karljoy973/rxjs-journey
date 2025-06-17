const { Observable } = require("rxjs");
const { map } = require("rxjs/operators");
const users = {
  data: [
    { status: "active", id: 15 },
    { status: "active", id: 12 },
    { status: "inactive", id: 17 },
    { status: "active", id: 159 },
    { status: "inactive", id: 11 },
  ],
};
const observable = new Observable((sub) => {
  sub.next(users);
  sub.complete();
  sub.next(2);
  sub.next("Hello world");
}).pipe(
  map((value) => {
    if (value.data != undefined) {
      console.info(value.data);
      return value.data;
    }
  }),
  map((value) => {
    // attention aux data type reçus ici !
    value.map((e) => e.id++);
    return value;
  }),
  map((value) => {
    // attention aux data type reçus ici !
    console.info(value);
    return value.filter((user) => user.status == "active");
  }),
  map((value) => {
    // attention aux data type reçus ici !
    console.info(value);
    return value;
  }),
);

const observer = {
  next: (data) => console.log(`Observer got the value of ${data}`),
  error: (err) => console.error(err),
  complete: () => console.info(`Observer recieved a complete notification`),
};

observable.subscribe(observer);
