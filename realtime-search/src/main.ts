import { rugstocks } from './database';
import './style.css'
import {filter, from, fromEvent, interval, map, reduce, scan, startWith, Subscription, switchMap, takeUntil, withLatestFrom, type OperatorFunction} from 'rxjs'

const productWrapper = document.getElementById('product-wrapper') as HTMLDivElement;
const searchbar = document.getElementById('searchbar') as HTMLInputElement;

const sanitizeKey = (key: string): string | null => {
  if (/^[a-zA-Z-\s]$/.test(key)) return key; // Autorise seulement une lettre simple
  if (key === 'Backspace') return key;
  return null;
};


const rugstockObservable$ = from(rugstocks)
const searchbarInputObservable$ = fromEvent<KeyboardEvent>(searchbar, 'keydown')
  .pipe(
    map(e => sanitizeKey(e.key)),
    filter((key): key is string => key !== null),
    scan((acc, key) => {
      if (key === 'Backspace') return acc.slice(0, -1);
      return acc + key;
    }, ''),
    
  ); 
  // const removeOldRugStock$ = searchbarInputObservable$.pipe(switchMap(input => rugstockObservable$.pipe(filter(value => value.id)))) creer l'observable sur le dom
  const filteredRugstock$ = searchbarInputObservable$.pipe(switchMap((input) => rugstockObservable$.pipe(filter(value => value.name.includes(input))))) 
  filteredRugstock$.subscribe(rugstock => {
  let product = document.createElement('div')
  product.setAttribute('class', 'product')
  product.setAttribute('id', `rugstock-${rugstock.id}`)
  product.innerHTML = `
    <p class="rugstock-name">${rugstock.name}</p>
    <p class="rugstock-arrival-date">${rugstock.arrivalDate}</p>
    <p class="rugstock-availability">${rugstock.availability}</p>
    <p class="rugstock-price">${rugstock.price}</p>
    <div class="rugstock-colors" id="rugstock-color-wrapper></div>
  `
  productWrapper.appendChild(product)  
  })

  from(productWrapper.childNodes).subscribe(x => console.log(x))


//il faut gérer les produits qui ont satisfait le filter mais qui ne le satisfont plus
//je pense que je vais observer le dom et retirer les div qui ne matchent pas le filter 
