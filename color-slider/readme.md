Voilà comment je comprends le sujet :

On a un slider, un div avec une couleur appartenant au cercle chromatique, on bouge le slider, ça met à jour la couleur

Je peux rajouter deux sliders additionnels pour gérer la luminosité et la saturation
********************\_\_********************
| |
| |
| Orange |
| |
| |
| |
|********************\_********************|

                    |-----------------------o------------------------| teinte
                    |-----------------------o------------------------| saturation
                    |-----------------------o------------------------| luminosité


                    __________________________________________
                    |                                         |
                    |                                         |
                    |                vert                     |
                    |                                         |
                    |                                         |
                    |                                         |
                    |_________________________________________|



                    |------------------------------------o-----------|

// idée n°1 : ça ne me convient pas, je suis forcé d'attendre que tous les sliders emettent

```js
combineLatest([colorSlider$, saturationSlider$, lightnessSlider$]).subscribe(
  ([hue, saturation, lightness]) => {
    coloredDiv.style.backgroundColor = sliderToHSL(hue, {
      saturation,
      lightness,
    });
  },
);
```

//idée n°2 : merger les observables puis accumuler les valeurs et souscrire dessus pour générer la bonne couleur pour l'arrière plan du div.

```js
merge(colorSlider$, saturationSlider$, lightnessSlider$).pipe(
  startWith({hue:70, saturation: 50, lightness: 50}),
  scan(
    (acc, curr) => ({ ...acc, ...curr }),
    {} as { hue: number, saturation: number, lightness: number }))
  .subscribe(color => coloredDiv.style.backgroundColor = sliderToHSL(color.hue, {saturation: color.saturation, lightness: color.lightness})
  )
```
