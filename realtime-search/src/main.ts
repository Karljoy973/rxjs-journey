import { rugstocks } from "./database";
import { sanitizeKey } from "./utils";
import "./style.css";
import {
  distinctUntilChanged,
  filter,
  from,
  fromEvent,
  map,
  scan,
  switchMap,
} from "rxjs";

const productWrapper = document.getElementById(
  "product-wrapper",
) as HTMLDivElement;
const searchbar = document.getElementById("searchbar") as HTMLInputElement;
const rugstockObservable$ = from(rugstocks);
const searchbarEvent$ = fromEvent<KeyboardEvent>(searchbar, "keydown");

const searchbarInput$ = searchbarEvent$.pipe(
  map((e) => sanitizeKey(e.key)),
  filter((key): key is string => !!key),
  scan((acc, key) => {
    if (key === "Backspace") return acc.slice(0, -1);
    return acc + key;
  }, ""),
);

const filteredRugstock$ = searchbarInput$.pipe(
  switchMap((input) =>
    rugstockObservable$.pipe(
      filter((value) => value.name.includes(input.toLocaleLowerCase())),
    ),
  ),
);
filteredRugstock$.subscribe((rugstock) => {
  let product = document.createElement("div");
  product.setAttribute("class", "product");
  product.setAttribute("id", `rugstock-${rugstock.id}`);
  product.innerHTML = `
    <p class="rugstock-name ">${rugstock.name}</p>
    <p class="rugstock-arrival -date">${rugstock.arrivalDate}</p>
    <p class="rugstock-availability ">${rugstock.availability}</p>
    <p class="rugstock-price ">${rugstock.price}</p>
    <div class="rugstock-colors " id="rugstock-color-wrapper></div>
  `;
  productWrapper.appendChild(product);
});

searchbarInput$
  .pipe(
    map((userQuery) => userQuery.trim().toLowerCase()),
    distinctUntilChanged(),
  )
  .subscribe((distinctUserQuery) => {
    let children = [...productWrapper.children] as HTMLElement[];
    from(children)
      .pipe(
        filter(
          (child) =>
            !child.innerText
              .toLocaleLowerCase()
              .includes(distinctUserQuery.toLocaleLowerCase()),
        ),
      )
      .subscribe((child) => productWrapper.removeChild(child));
  });
