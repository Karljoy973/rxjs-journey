import "./style.css";
import { fromEvent, interval, map, takeUntil, Subscription } from "rxjs";

const startButton = document.getElementById(
  "start-button",
) as HTMLButtonElement;
const stopButton = document.getElementById("stop-button") as HTMLButtonElement;
const resetButton = document.getElementById(
  "reset-button",
) as HTMLButtonElement;
const countOutput = document.getElementById("count") as HTMLParagraphElement;
let intervalSubscription: Subscription = new Subscription();
let increment = 0;

const resetIncrement$ = fromEvent(resetButton, "click");
const stopIncrement$ = fromEvent(stopButton, "click");
const startIncrement$ = fromEvent(startButton, "click");

const countOuputObserver = {
  next: (value: number) => {
    console.info(`countOuputObserver recieved ${value} `);
    countOutput.innerText = `${value}`;
  },
  error: (value: Error) => console.error(value),
  complete: () => {
    countOutput.innerText = `${0}`;
  },
};

startIncrement$.subscribe(() => {
  if (intervalSubscription) intervalSubscription.unsubscribe();
  const i = interval(1000);
  intervalSubscription = i
    .pipe(
      map(() => increment++),
      takeUntil(resetIncrement$),
    )
    .subscribe(countOuputObserver);
});

resetIncrement$.subscribe(() => {
  countOuputObserver.complete();
  increment = 0;
});

stopIncrement$.subscribe(() => {
  if (intervalSubscription) intervalSubscription.unsubscribe();
});
