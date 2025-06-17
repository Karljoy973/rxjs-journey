import "./style.css";
import {
  distinctUntilChanged,
  fromEvent,
  map,
  merge,
  scan,
  startWith,
} from "rxjs";

const coloredDiv = document.getElementById("colored-div") as HTMLDivElement;
const colorSlider = document.getElementById("color-slider") as HTMLInputElement;
const saturationSlider = document.getElementById(
  "saturation-slider",
) as HTMLInputElement;
const lightnessSlider = document.getElementById(
  "luminosite-slider",
) as HTMLInputElement;

const colorSlider$ = fromEvent<InputEvent>(colorSlider, "input").pipe(
  map((sliderEvent) => (sliderEvent.target as HTMLInputElement).value),
  distinctUntilChanged(),
  map((strValue) => ({ hue: +strValue })),
);

const saturationSlider$ = fromEvent<InputEvent>(saturationSlider, "input").pipe(
  map((sliderEvent) => (sliderEvent.target as HTMLInputElement).value),
  distinctUntilChanged(),
  map((strValue) => ({ saturation: +strValue })),
);
const lightnessSlider$ = fromEvent<InputEvent>(lightnessSlider, "input").pipe(
  map((sliderEvent) => (sliderEvent.target as HTMLInputElement).value),
  distinctUntilChanged(),
  map((strValue) => ({ lightness: +strValue })),
);

type HSLSpecs = {
  min: number;
  max: number;
  saturation: number;
  lightness: number;
};
const sliderToHSL = (
  value: number,
  {
    min = 0,
    max = 100,
    saturation = 100,
    lightness = 50,
  }: Partial<HSLSpecs> = {},
) => {
  const hue = Math.round(((value - min) / (max - min)) * 360);
  return `hsl(${hue},${saturation}%,${lightness}%)`;
};

merge(colorSlider$, saturationSlider$, lightnessSlider$)
  .pipe(
    startWith({ hue: 70, saturation: 50, lightness: 50 }),
    scan(
      (acc, curr) => ({ ...acc, ...curr }),
      {} as { hue: number; saturation: number; lightness: number },
    ),
  )
  .subscribe(
    (color) =>
      (coloredDiv.style.backgroundColor = sliderToHSL(color.hue, {
        saturation: color.saturation,
        lightness: color.lightness,
      })),
  );
