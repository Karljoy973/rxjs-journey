export type Availability = "available" | "unavailable"
export type ArrivalDate = `${number}/${number}/${number}` // DD-MM-AAAA ce type d'est pas du tout suffisant on pourrait écrire 1/34/-14 et ça satifairait le type
export type AvailableColors = string[]



export type RugStock = {
  
  id: number, 
  name: string, 
  price: string, 
  availability: Availability, 
  arrivalDate: ArrivalDate,  //créer un type pour ça 
  colors: AvailableColors

}

export let rugstocks: RugStock[] = [
  {
    "id": 1,
    "name": "Tapis Floral",
    "price": "338.75€",
    "availability": "available",
    "arrivalDate": "04/04/2024",
    "colors": [
      "lavande"
    ]
  },
  {
    "id": 2,
    "name": "Tapisserie Jute",
    "price": "308.63€",
    "availability": "available",
    "arrivalDate": "30/09/2024",
    "colors": [
      "lavande"
    ]
  },
  {
    "id": 3,
    "name": "Revêtement Coton",
    "price": "304.45€",
    "availability": "unavailable",
    "arrivalDate": "03/12/2025",
    "colors": [
      "blanc",
      "noir",
      "jaune"
    ]
  },
  {
    "id": 4,
    "name": "Moquette Shaggy",
    "price": "437.05€",
    "availability": "available",
    "arrivalDate": "16/05/2024",
    "colors": [
      "chocolat",
      "marron"
    ]
  },
  {
    "id": 5,
    "name": "Tapis d'intérieur Persan",
    "price": "340.60€",
    "availability": "unavailable",
    "arrivalDate": "30/05/2025",
    "colors": [
      "bleu",
      "saumon"
    ]
  },
  {
    "id": 6,
    "name": "Tapisserie Imprimé",
    "price": "218.51€",
    "availability": "unavailable",
    "arrivalDate": "17/04/2025",
    "colors": [
      "gris",
      "chocolat"
    ]
  },
  {
    "id": 7,
    "name": "Tapis Minimaliste",
    "price": "160.26€",
    "availability": "unavailable",
    "arrivalDate": "03/02/2024",
    "colors": [
      "lavande"
    ]
  },
  {
    "id": 8,
    "name": "Tapis d'extérieur Moderne",
    "price": "188.05€",
    "availability": "unavailable",
    "arrivalDate": "14/04/2024",
    "colors": [
      "prune"
    ]
  },
  {
    "id": 9,
    "name": "Tapisserie Berbère",
    "price": "486.90€",
    "availability": "unavailable",
    "arrivalDate": "24/11/2025",
    "colors": [
      "rouge"
    ]
  },
  {
    "id": 10,
    "name": "Tapisserie Persan",
    "price": "239.73€",
    "availability": "unavailable",
    "arrivalDate": "20/11/2025",
    "colors": [
      "orange",
      "moutarde",
      "jaune"
    ]
  },
  {
    "id": 11,
    "name": "Tapis d'intérieur Graphique",
    "price": "446.57€",
    "availability": "unavailable",
    "arrivalDate": "01/08/2025",
    "colors": [
      "prune",
      "cyan"
    ]
  },
  {
    "id": 12,
    "name": "Revêtement Oriental",
    "price": "69.53€",
    "availability": "available",
    "arrivalDate": "01/07/2024",
    "colors": [
      "moutarde"
    ]
  },
  {
    "id": 13,
    "name": "Moquette Oriental",
    "price": "317.43€",
    "availability": "available",
    "arrivalDate": "02/12/2024",
    "colors": [
      "marron",
      "ocre",
      "blanc"
    ]
  },
  {
    "id": 14,
    "name": "Tapis Imprimé",
    "price": "339.74€",
    "availability": "available",
    "arrivalDate": "07/05/2025",
    "colors": [
      "jaune",
      "ocre",
      "cyan",
      "orange"
    ]
  },
  {
    "id": 15,
    "name": "Tapisserie Shaggy",
    "price": "87.69€",
    "availability": "unavailable",
    "arrivalDate": "26/05/2025",
    "colors": [
      "gris",
      "blanc",
      "marron",
      "ivoire"
    ]
  },
  {
    "id": 16,
    "name": "Tapis Jute",
    "price": "149.69€",
    "availability": "available",
    "arrivalDate": "14/01/2024",
    "colors": [
      "bleu"
    ]
  },
  {
    "id": 17,
    "name": "Revêtement Moderne",
    "price": "341.68€",
    "availability": "available",
    "arrivalDate": "09/06/2025",
    "colors": [
      "rose"
    ]
  },
  {
    "id": 18,
    "name": "Tapis d'intérieur Luxueux",
    "price": "441.86€",
    "availability": "available",
    "arrivalDate": "15/05/2024",
    "colors": [
      "beige",
      "prune"
    ]
  },
  {
    "id": 19,
    "name": "Tapis Coton",
    "price": "492.39€",
    "availability": "unavailable",
    "arrivalDate": "16/06/2024",
    "colors": [
      "bleu",
      "ocre"
    ]
  },
  {
    "id": 20,
    "name": "Tapis d'intérieur Outdoor",
    "price": "305.30€",
    "availability": "unavailable",
    "arrivalDate": "18/07/2025",
    "colors": [
      "bleu",
      "turquoise"
    ]
  },
  {
    "id": 21,
    "name": "Tapisserie Classique",
    "price": "291.52€",
    "availability": "unavailable",
    "arrivalDate": "23/11/2024",
    "colors": [
      "lavande",
      "rose",
      "ivoire",
      "saumon"
    ]
  },
  {
    "id": 22,
    "name": "Revêtement Vintage",
    "price": "441.38€",
    "availability": "available",
    "arrivalDate": "23/08/2025",
    "colors": [
      "gris",
      "beige",
      "ivoire"
    ]
  },
  {
    "id": 23,
    "name": "Tapis d'extérieur Shaggy",
    "price": "65.78€",
    "availability": "unavailable",
    "arrivalDate": "27/12/2025",
    "colors": [
      "rouge",
      "ivoire",
      "moutarde"
    ]
  },
  {
    "id": 24,
    "name": "Tapisserie Minimaliste",
    "price": "344.65€",
    "availability": "available",
    "arrivalDate": "25/03/2024",
    "colors": [
      "vert",
      "prune",
      "moutarde",
      "blanc"
    ]
  },
  {
    "id": 25,
    "name": "Tapisserie Floral",
    "price": "460.58€",
    "availability": "available",
    "arrivalDate": "04/07/2025",
    "colors": [
      "rouge",
      "beige",
      "rose",
      "gris"
    ]
  },
  {
    "id": 26,
    "name": "Tapis Persan",
    "price": "416.94€",
    "availability": "available",
    "arrivalDate": "29/04/2024",
    "colors": [
      "moutarde",
      "bleu"
    ]
  },
  {
    "id": 27,
    "name": "Tapisserie Classique",
    "price": "134.51€",
    "availability": "unavailable",
    "arrivalDate": "03/02/2025",
    "colors": [
      "vert",
      "rose",
      "turquoise"
    ]
  },
  {
    "id": 28,
    "name": "Tapis d'intérieur Jute",
    "price": "67.15€",
    "availability": "available",
    "arrivalDate": "05/04/2024",
    "colors": [
      "rouge",
      "orange",
      "gris"
    ]
  },
  {
    "id": 29,
    "name": "Tapis d'extérieur Tissé",
    "price": "495.26€",
    "availability": "unavailable",
    "arrivalDate": "19/06/2024",
    "colors": [
      "vert",
      "jaune",
      "turquoise",
      "beige"
    ]
  },
  {
    "id": 30,
    "name": "Tapisserie Vintage",
    "price": "68.53€",
    "availability": "unavailable",
    "arrivalDate": "13/08/2024",
    "colors": [
      "moutarde",
      "lavande"
    ]
  },
  {
    "id": 31,
    "name": "Revêtement Berbère",
    "price": "427.49€",
    "availability": "unavailable",
    "arrivalDate": "22/09/2025",
    "colors": [
      "vert",
      "jaune"
    ]
  },
  {
    "id": 32,
    "name": "Tapis Moderne",
    "price": "117.77€",
    "availability": "unavailable",
    "arrivalDate": "25/05/2024",
    "colors": [
      "rose",
      "turquoise",
      "jaune",
      "ocre"
    ]
  },
  {
    "id": 33,
    "name": "Tapis d'intérieur Tissé",
    "price": "369.03€",
    "availability": "available",
    "arrivalDate": "29/11/2025",
    "colors": [
      "cyan"
    ]
  },
  {
    "id": 34,
    "name": "Revêtement Floral",
    "price": "207.17€",
    "availability": "unavailable",
    "arrivalDate": "03/04/2025",
    "colors": [
      "beige",
      "saumon",
      "ivoire"
    ]
  },
  {
    "id": 35,
    "name": "Tapis d'intérieur Cuir",
    "price": "334.53€",
    "availability": "unavailable",
    "arrivalDate": "02/10/2024",
    "colors": [
      "orange"
    ]
  },
  {
    "id": 36,
    "name": "Tapis d'intérieur Coton",
    "price": "470.86€",
    "availability": "available",
    "arrivalDate": "10/02/2025",
    "colors": [
      "rose",
      "orange"
    ]
  },
  {
    "id": 37,
    "name": "Moquette Luxueux",
    "price": "63.49€",
    "availability": "unavailable",
    "arrivalDate": "12/12/2025",
    "colors": [
      "lavande",
      "moutarde"
    ]
  },
  {
    "id": 38,
    "name": "Tapisserie Imprimé",
    "price": "322.63€",
    "availability": "unavailable",
    "arrivalDate": "28/12/2025",
    "colors": [
      "moutarde",
      "ocre",
      "noir",
      "ivoire"
    ]
  },
  {
    "id": 39,
    "name": "Tapisserie Velours",
    "price": "374.73€",
    "availability": "available",
    "arrivalDate": "19/05/2024",
    "colors": [
      "blanc",
      "cyan",
      "gris",
      "bleu"
    ]
  },
  {
    "id": 40,
    "name": "Moquette Laine",
    "price": "421.68€",
    "availability": "available",
    "arrivalDate": "04/01/2024",
    "colors": [
      "chocolat",
      "bleu",
      "vert",
      "blanc"
    ]
  },
  {
    "id": 41,
    "name": "Tapis d'intérieur Vintage",
    "price": "385.47€",
    "availability": "available",
    "arrivalDate": "26/03/2025",
    "colors": [
      "lavande",
      "chocolat"
    ]
  },
  {
    "id": 42,
    "name": "Tapisserie Rond",
    "price": "197.13€",
    "availability": "available",
    "arrivalDate": "22/11/2024",
    "colors": [
      "gris",
      "moutarde"
    ]
  },
  {
    "id": 43,
    "name": "Revêtement Coton",
    "price": "143.54€",
    "availability": "unavailable",
    "arrivalDate": "06/04/2025",
    "colors": [
      "vert",
      "orange"
    ]
  },
  {
    "id": 44,
    "name": "Revêtement Coton",
    "price": "66.43€",
    "availability": "available",
    "arrivalDate": "06/06/2025",
    "colors": [
      "chocolat"
    ]
  },
  {
    "id": 45,
    "name": "Moquette Coton",
    "price": "147.01€",
    "availability": "available",
    "arrivalDate": "15/05/2025",
    "colors": [
      "rose",
      "moutarde"
    ]
  },
  {
    "id": 46,
    "name": "Tapis d'extérieur Imprimé",
    "price": "58.86€",
    "availability": "unavailable",
    "arrivalDate": "13/11/2025",
    "colors": [
      "lavande"
    ]
  },
  {
    "id": 47,
    "name": "Moquette Oriental",
    "price": "111.03€",
    "availability": "available",
    "arrivalDate": "01/11/2025",
    "colors": [
      "cyan",
      "bleu",
      "prune"
    ]
  },
  {
    "id": 48,
    "name": "Tapis d'intérieur Coton",
    "price": "76.36€",
    "availability": "unavailable",
    "arrivalDate": "23/01/2024",
    "colors": [
      "beige",
      "lavande"
    ]
  },
  {
    "id": 49,
    "name": "Moquette Coloré",
    "price": "193.04€",
    "availability": "unavailable",
    "arrivalDate": "22/07/2025",
    "colors": [
      "bleu",
      "orange",
      "ivoire"
    ]
  },
  {
    "id": 50,
    "name": "Tapis d'intérieur Floral",
    "price": "403.22€",
    "availability": "unavailable",
    "arrivalDate": "08/07/2025",
    "colors": [
      "bleu"
    ]
  },
  {
    "id": 51,
    "name": "Tapis d'extérieur Floral",
    "price": "313.47€",
    "availability": "unavailable",
    "arrivalDate": "16/03/2024",
    "colors": [
      "beige"
    ]
  },
  {
    "id": 52,
    "name": "Moquette Classique",
    "price": "88.02€",
    "availability": "available",
    "arrivalDate": "04/06/2024",
    "colors": [
      "jaune",
      "bleu",
      "vert"
    ]
  },
  {
    "id": 53,
    "name": "Tapisserie Minimaliste",
    "price": "392.86€",
    "availability": "unavailable",
    "arrivalDate": "05/12/2024",
    "colors": [
      "rouge",
      "lavande",
      "beige"
    ]
  },
  {
    "id": 54,
    "name": "Tapis Outdoor",
    "price": "325.49€",
    "availability": "unavailable",
    "arrivalDate": "28/04/2025",
    "colors": [
      "jaune",
      "rose"
    ]
  },
  {
    "id": 55,
    "name": "Tapis d'intérieur Berbère",
    "price": "276.86€",
    "availability": "available",
    "arrivalDate": "02/01/2024",
    "colors": [
      "noir",
      "ocre",
      "vert",
      "prune"
    ]
  },
  {
    "id": 56,
    "name": "Tapis d'intérieur Graphique",
    "price": "113.98€",
    "availability": "unavailable",
    "arrivalDate": "21/06/2025",
    "colors": [
      "ocre",
      "rose",
      "jaune",
      "blanc"
    ]
  },
  {
    "id": 57,
    "name": "Revêtement Imprimé",
    "price": "104.68€",
    "availability": "available",
    "arrivalDate": "02/11/2025",
    "colors": [
      "noir",
      "turquoise",
      "prune"
    ]
  },
  {
    "id": 58,
    "name": "Tapis d'extérieur Coton",
    "price": "486.64€",
    "availability": "available",
    "arrivalDate": "29/04/2024",
    "colors": [
      "beige",
      "cyan"
    ]
  },
  {
    "id": 59,
    "name": "Tapis d'extérieur Berbère",
    "price": "446.89€",
    "availability": "available",
    "arrivalDate": "29/09/2025",
    "colors": [
      "gris",
      "bleu",
      "ocre",
      "blanc"
    ]
  },
  {
    "id": 60,
    "name": "Tapis Persan",
    "price": "95.11€",
    "availability": "unavailable",
    "arrivalDate": "28/09/2025",
    "colors": [
      "gris"
    ]
  },
  {
    "id": 61,
    "name": "Tapis Vintage",
    "price": "462.58€",
    "availability": "unavailable",
    "arrivalDate": "31/01/2024",
    "colors": [
      "vert",
      "marron"
    ]
  },
  {
    "id": 62,
    "name": "Tapisserie Vintage",
    "price": "280.46€",
    "availability": "unavailable",
    "arrivalDate": "15/08/2025",
    "colors": [
      "beige",
      "jaune",
      "cyan",
      "noir"
    ]
  },
  {
    "id": 63,
    "name": "Tapis Classique",
    "price": "79.15€",
    "availability": "unavailable",
    "arrivalDate": "28/05/2025",
    "colors": [
      "cyan"
    ]
  },
  {
    "id": 64,
    "name": "Revêtement Minimaliste",
    "price": "79.75€",
    "availability": "available",
    "arrivalDate": "17/09/2024",
    "colors": [
      "vert",
      "orange"
    ]
  },
  {
    "id": 65,
    "name": "Revêtement Imprimé",
    "price": "74.06€",
    "availability": "available",
    "arrivalDate": "19/07/2025",
    "colors": [
      "beige",
      "ocre",
      "bleu"
    ]
  },
  {
    "id": 66,
    "name": "Tapis Luxueux",
    "price": "177.83€",
    "availability": "available",
    "arrivalDate": "03/04/2024",
    "colors": [
      "prune"
    ]
  },
  {
    "id": 67,
    "name": "Moquette Scandinave",
    "price": "376.57€",
    "availability": "available",
    "arrivalDate": "08/07/2024",
    "colors": [
      "rose",
      "orange",
      "moutarde"
    ]
  },
  {
    "id": 68,
    "name": "Moquette Jute",
    "price": "179.25€",
    "availability": "available",
    "arrivalDate": "31/10/2024",
    "colors": [
      "orange",
      "chocolat",
      "beige",
      "saumon"
    ]
  },
  {
    "id": 69,
    "name": "Tapisserie Shaggy",
    "price": "414.43€",
    "availability": "available",
    "arrivalDate": "26/01/2025",
    "colors": [
      "ivoire"
    ]
  },
  {
    "id": 70,
    "name": "Moquette Imprimé",
    "price": "215.57€",
    "availability": "unavailable",
    "arrivalDate": "02/09/2025",
    "colors": [
      "rouge",
      "turquoise"
    ]
  },
  {
    "id": 71,
    "name": "Moquette Coloré",
    "price": "168.24€",
    "availability": "unavailable",
    "arrivalDate": "15/09/2025",
    "colors": [
      "blanc",
      "ivoire"
    ]
  },
  {
    "id": 72,
    "name": "Revêtement Graphique",
    "price": "258.10€",
    "availability": "unavailable",
    "arrivalDate": "21/05/2024",
    "colors": [
      "ivoire",
      "cyan",
      "saumon",
      "chocolat"
    ]
  },
  {
    "id": 73,
    "name": "Tapis d'intérieur Shaggy",
    "price": "319.72€",
    "availability": "unavailable",
    "arrivalDate": "25/04/2025",
    "colors": [
      "orange",
      "prune",
      "rose",
      "ocre"
    ]
  },
  {
    "id": 74,
    "name": "Revêtement Classique",
    "price": "96.89€",
    "availability": "available",
    "arrivalDate": "15/12/2025",
    "colors": [
      "turquoise"
    ]
  },
  {
    "id": 75,
    "name": "Moquette Coloré",
    "price": "456.09€",
    "availability": "available",
    "arrivalDate": "07/11/2024",
    "colors": [
      "jaune",
      "orange",
      "blanc"
    ]
  },
  {
    "id": 76,
    "name": "Tapis Graphique",
    "price": "221.91€",
    "availability": "unavailable",
    "arrivalDate": "25/06/2024",
    "colors": [
      "lavande",
      "ivoire",
      "bleu",
      "gris"
    ]
  },
  {
    "id": 77,
    "name": "Tapisserie Laine",
    "price": "94.26€",
    "availability": "unavailable",
    "arrivalDate": "25/12/2024",
    "colors": [
      "ivoire",
      "prune"
    ]
  },
  {
    "id": 78,
    "name": "Tapis Moderne",
    "price": "56.95€",
    "availability": "unavailable",
    "arrivalDate": "22/08/2025",
    "colors": [
      "ocre",
      "bleu",
      "gris"
    ]
  },
  {
    "id": 79,
    "name": "Moquette Graphique",
    "price": "172.08€",
    "availability": "unavailable",
    "arrivalDate": "25/11/2024",
    "colors": [
      "cyan",
      "ivoire",
      "prune"
    ]
  },
  {
    "id": 80,
    "name": "Moquette Minimaliste",
    "price": "467.59€",
    "availability": "unavailable",
    "arrivalDate": "02/05/2024",
    "colors": [
      "vert"
    ]
  },
  {
    "id": 81,
    "name": "Tapis Floral",
    "price": "415.48€",
    "availability": "unavailable",
    "arrivalDate": "12/10/2024",
    "colors": [
      "ocre"
    ]
  },
  {
    "id": 82,
    "name": "Revêtement Shaggy",
    "price": "184.32€",
    "availability": "available",
    "arrivalDate": "23/04/2025",
    "colors": [
      "vert",
      "cyan"
    ]
  },
  {
    "id": 83,
    "name": "Tapis Tissé",
    "price": "238.95€",
    "availability": "available",
    "arrivalDate": "23/10/2024",
    "colors": [
      "saumon",
      "beige"
    ]
  },
  {
    "id": 84,
    "name": "Tapis d'extérieur Luxueux",
    "price": "92.73€",
    "availability": "available",
    "arrivalDate": "24/11/2025",
    "colors": [
      "beige"
    ]
  },
  {
    "id": 85,
    "name": "Moquette Velours",
    "price": "432.78€",
    "availability": "unavailable",
    "arrivalDate": "21/06/2024",
    "colors": [
      "prune"
    ]
  },
  {
    "id": 86,
    "name": "Tapis d'intérieur Coton",
    "price": "302.93€",
    "availability": "unavailable",
    "arrivalDate": "24/12/2025",
    "colors": [
      "vert",
      "prune",
      "jaune",
      "orange"
    ]
  },
  {
    "id": 87,
    "name": "Revêtement Laine",
    "price": "135.14€",
    "availability": "available",
    "arrivalDate": "15/03/2024",
    "colors": [
      "jaune",
      "blanc"
    ]
  },
  {
    "id": 88,
    "name": "Tapis d'intérieur Coloré",
    "price": "471.41€",
    "availability": "available",
    "arrivalDate": "07/11/2024",
    "colors": [
      "bleu"
    ]
  },
  {
    "id": 89,
    "name": "Tapisserie Graphique",
    "price": "376.61€",
    "availability": "unavailable",
    "arrivalDate": "11/02/2025",
    "colors": [
      "gris",
      "moutarde",
      "turquoise",
      "jaune"
    ]
  },
  {
    "id": 90,
    "name": "Tapis Jute",
    "price": "277.06€",
    "availability": "unavailable",
    "arrivalDate": "30/11/2025",
    "colors": [
      "noir"
    ]
  },
  {
    "id": 91,
    "name": "Tapis Outdoor",
    "price": "429.49€",
    "availability": "unavailable",
    "arrivalDate": "21/12/2025",
    "colors": [
      "chocolat"
    ]
  },
  {
    "id": 92,
    "name": "Tapis Cuir",
    "price": "302.82€",
    "availability": "unavailable",
    "arrivalDate": "20/04/2024",
    "colors": [
      "cyan",
      "rose",
      "moutarde",
      "noir"
    ]
  },
  {
    "id": 93,
    "name": "Revêtement Shaggy",
    "price": "123.02€",
    "availability": "available",
    "arrivalDate": "21/09/2025",
    "colors": [
      "noir"
    ]
  },
  {
    "id": 94,
    "name": "Moquette Graphique",
    "price": "93.54€",
    "availability": "available",
    "arrivalDate": "16/03/2024",
    "colors": [
      "noir",
      "ivoire"
    ]
  },
  {
    "id": 95,
    "name": "Tapisserie Coton",
    "price": "261.19€",
    "availability": "unavailable",
    "arrivalDate": "10/07/2024",
    "colors": [
      "moutarde",
      "rose",
      "prune"
    ]
  },
  {
    "id": 96,
    "name": "Tapis d'intérieur Coloré",
    "price": "218.47€",
    "availability": "unavailable",
    "arrivalDate": "03/10/2024",
    "colors": [
      "rose"
    ]
  },
  {
    "id": 97,
    "name": "Tapis Luxueux",
    "price": "180.53€",
    "availability": "unavailable",
    "arrivalDate": "31/12/2025",
    "colors": [
      "bleu",
      "saumon"
    ]
  },
  {
    "id": 98,
    "name": "Moquette Shaggy",
    "price": "160.97€",
    "availability": "unavailable",
    "arrivalDate": "04/06/2025",
    "colors": [
      "moutarde",
      "rouge",
      "ocre"
    ]
  },
  {
    "id": 99,
    "name": "Moquette Laine",
    "price": "240.04€",
    "availability": "unavailable",
    "arrivalDate": "04/12/2024",
    "colors": [
      "lavande"
    ]
  },
  {
    "id": 100,
    "name": "Tapis Imprimé",
    "price": "128.85€",
    "availability": "unavailable",
    "arrivalDate": "18/10/2025",
    "colors": [
      "turquoise",
      "cyan",
      "lavande"
    ]
  },
  {
    "id": 101,
    "name": "Revêtement Coloré",
    "price": "179.95€",
    "availability": "unavailable",
    "arrivalDate": "12/02/2025",
    "colors": [
      "rouge",
      "noir"
    ]
  },
  {
    "id": 102,
    "name": "Revêtement Coton",
    "price": "370.39€",
    "availability": "available",
    "arrivalDate": "18/05/2024",
    "colors": [
      "beige",
      "bleu",
      "gris"
    ]
  },
  {
    "id": 103,
    "name": "Tapisserie Floral",
    "price": "401.36€",
    "availability": "unavailable",
    "arrivalDate": "04/07/2025",
    "colors": [
      "rose",
      "rouge",
      "ivoire",
      "turquoise"
    ]
  },
  {
    "id": 104,
    "name": "Tapisserie Rond",
    "price": "374.40€",
    "availability": "available",
    "arrivalDate": "16/11/2024",
    "colors": [
      "ivoire",
      "saumon",
      "prune",
      "ocre"
    ]
  },
  {
    "id": 105,
    "name": "Tapis d'intérieur Minimaliste",
    "price": "449.17€",
    "availability": "available",
    "arrivalDate": "04/08/2024",
    "colors": [
      "bleu",
      "blanc",
      "prune",
      "ivoire"
    ]
  },
  {
    "id": 106,
    "name": "Tapis Shaggy",
    "price": "191.80€",
    "availability": "available",
    "arrivalDate": "18/03/2025",
    "colors": [
      "chocolat",
      "marron",
      "bleu",
      "vert"
    ]
  },
  {
    "id": 107,
    "name": "Tapis d'intérieur Jute",
    "price": "446.69€",
    "availability": "unavailable",
    "arrivalDate": "06/12/2024",
    "colors": [
      "bleu"
    ]
  },
  {
    "id": 108,
    "name": "Moquette Coloré",
    "price": "212.61€",
    "availability": "available",
    "arrivalDate": "23/10/2025",
    "colors": [
      "jaune",
      "blanc",
      "noir"
    ]
  },
  {
    "id": 109,
    "name": "Tapis d'extérieur Graphique",
    "price": "188.29€",
    "availability": "unavailable",
    "arrivalDate": "06/06/2025",
    "colors": [
      "beige",
      "rouge"
    ]
  },
  {
    "id": 110,
    "name": "Revêtement Luxueux",
    "price": "312.60€",
    "availability": "unavailable",
    "arrivalDate": "23/07/2024",
    "colors": [
      "ivoire",
      "orange",
      "ocre"
    ]
  },
  {
    "id": 111,
    "name": "Tapis d'intérieur Tissé",
    "price": "171.09€",
    "availability": "unavailable",
    "arrivalDate": "11/11/2025",
    "colors": [
      "saumon",
      "rouge",
      "jaune"
    ]
  },
  {
    "id": 112,
    "name": "Tapis d'extérieur Berbère",
    "price": "81.86€",
    "availability": "available",
    "arrivalDate": "01/03/2024",
    "colors": [
      "moutarde",
      "ocre"
    ]
  },
  {
    "id": 113,
    "name": "Revêtement Outdoor",
    "price": "174.47€",
    "availability": "available",
    "arrivalDate": "02/06/2024",
    "colors": [
      "rouge",
      "marron",
      "moutarde"
    ]
  },
  {
    "id": 114,
    "name": "Tapisserie Floral",
    "price": "224.34€",
    "availability": "available",
    "arrivalDate": "15/05/2024",
    "colors": [
      "rouge",
      "bleu",
      "ivoire"
    ]
  },
  {
    "id": 115,
    "name": "Tapis Cuir",
    "price": "363.41€",
    "availability": "unavailable",
    "arrivalDate": "03/12/2025",
    "colors": [
      "turquoise"
    ]
  },
  {
    "id": 116,
    "name": "Tapis d'intérieur Vintage",
    "price": "474.75€",
    "availability": "available",
    "arrivalDate": "26/09/2025",
    "colors": [
      "moutarde",
      "lavande",
      "blanc",
      "noir"
    ]
  },
  {
    "id": 117,
    "name": "Tapis Coton",
    "price": "155.75€",
    "availability": "available",
    "arrivalDate": "20/03/2024",
    "colors": [
      "rouge",
      "bleu",
      "rose"
    ]
  },
  {
    "id": 118,
    "name": "Moquette Vintage",
    "price": "76.09€",
    "availability": "available",
    "arrivalDate": "17/03/2024",
    "colors": [
      "ocre"
    ]
  },
  {
    "id": 119,
    "name": "Revêtement Graphique",
    "price": "378.77€",
    "availability": "unavailable",
    "arrivalDate": "21/05/2025",
    "colors": [
      "marron"
    ]
  },
  {
    "id": 120,
    "name": "Tapis d'extérieur Laine",
    "price": "334.67€",
    "availability": "available",
    "arrivalDate": "12/11/2024",
    "colors": [
      "marron",
      "rouge",
      "cyan",
      "noir"
    ]
  },
  {
    "id": 121,
    "name": "Tapisserie Floral",
    "price": "380.09€",
    "availability": "available",
    "arrivalDate": "03/05/2025",
    "colors": [
      "ocre",
      "bleu",
      "prune",
      "lavande"
    ]
  },
  {
    "id": 122,
    "name": "Revêtement Coloré",
    "price": "251.95€",
    "availability": "available",
    "arrivalDate": "28/04/2024",
    "colors": [
      "turquoise",
      "noir"
    ]
  },
  {
    "id": 123,
    "name": "Tapis d'intérieur Floral",
    "price": "498.36€",
    "availability": "unavailable",
    "arrivalDate": "08/11/2025",
    "colors": [
      "orange"
    ]
  },
  {
    "id": 124,
    "name": "Moquette Luxueux",
    "price": "375.51€",
    "availability": "available",
    "arrivalDate": "09/12/2025",
    "colors": [
      "blanc",
      "chocolat",
      "moutarde"
    ]
  },
  {
    "id": 125,
    "name": "Revêtement Jute",
    "price": "416.37€",
    "availability": "available",
    "arrivalDate": "27/09/2025",
    "colors": [
      "noir"
    ]
  },
  {
    "id": 126,
    "name": "Tapis Rond",
    "price": "70.41€",
    "availability": "unavailable",
    "arrivalDate": "25/06/2024",
    "colors": [
      "prune"
    ]
  },
  {
    "id": 127,
    "name": "Revêtement Outdoor",
    "price": "298.08€",
    "availability": "available",
    "arrivalDate": "27/01/2025",
    "colors": [
      "orange",
      "noir",
      "beige",
      "turquoise"
    ]
  },
  {
    "id": 128,
    "name": "Revêtement Moderne",
    "price": "256.13€",
    "availability": "available",
    "arrivalDate": "05/10/2024",
    "colors": [
      "cyan"
    ]
  },
  {
    "id": 129,
    "name": "Tapis d'intérieur Minimaliste",
    "price": "311.90€",
    "availability": "unavailable",
    "arrivalDate": "27/03/2025",
    "colors": [
      "turquoise",
      "rose"
    ]
  },
  {
    "id": 130,
    "name": "Tapisserie Cuir",
    "price": "180.15€",
    "availability": "available",
    "arrivalDate": "20/03/2025",
    "colors": [
      "bleu",
      "ivoire",
      "rouge"
    ]
  },
  {
    "id": 131,
    "name": "Revêtement Classique",
    "price": "441.61€",
    "availability": "unavailable",
    "arrivalDate": "05/02/2025",
    "colors": [
      "ocre",
      "rose",
      "saumon",
      "jaune"
    ]
  },
  {
    "id": 132,
    "name": "Moquette Imprimé",
    "price": "270.84€",
    "availability": "unavailable",
    "arrivalDate": "03/03/2025",
    "colors": [
      "cyan"
    ]
  },
  {
    "id": 133,
    "name": "Moquette Floral",
    "price": "228.04€",
    "availability": "available",
    "arrivalDate": "03/03/2024",
    "colors": [
      "lavande",
      "rouge",
      "orange",
      "turquoise"
    ]
  },
  {
    "id": 134,
    "name": "Tapisserie Minimaliste",
    "price": "294.46€",
    "availability": "available",
    "arrivalDate": "06/10/2024",
    "colors": [
      "rose",
      "orange"
    ]
  },
  {
    "id": 135,
    "name": "Tapis d'intérieur Berbère",
    "price": "96.76€",
    "availability": "unavailable",
    "arrivalDate": "21/07/2024",
    "colors": [
      "turquoise"
    ]
  },
  {
    "id": 136,
    "name": "Moquette Vintage",
    "price": "219.95€",
    "availability": "available",
    "arrivalDate": "03/10/2024",
    "colors": [
      "lavande",
      "blanc"
    ]
  },
  {
    "id": 137,
    "name": "Revêtement Berbère",
    "price": "229.83€",
    "availability": "available",
    "arrivalDate": "07/05/2024",
    "colors": [
      "rouge",
      "bleu",
      "ivoire",
      "noir"
    ]
  },
  {
    "id": 138,
    "name": "Tapis d'intérieur Jute",
    "price": "50.21€",
    "availability": "unavailable",
    "arrivalDate": "15/11/2024",
    "colors": [
      "ivoire",
      "prune",
      "beige"
    ]
  },
  {
    "id": 139,
    "name": "Revêtement Cuir",
    "price": "412.17€",
    "availability": "unavailable",
    "arrivalDate": "03/10/2024",
    "colors": [
      "ivoire",
      "marron",
      "prune"
    ]
  },
  {
    "id": 140,
    "name": "Tapisserie Tissé",
    "price": "163.82€",
    "availability": "available",
    "arrivalDate": "22/09/2024",
    "colors": [
      "moutarde",
      "vert",
      "blanc"
    ]
  },
  {
    "id": 141,
    "name": "Moquette Oriental",
    "price": "57.91€",
    "availability": "unavailable",
    "arrivalDate": "31/05/2025",
    "colors": [
      "prune",
      "blanc",
      "moutarde"
    ]
  },
  {
    "id": 142,
    "name": "Tapis Rond",
    "price": "382.77€",
    "availability": "available",
    "arrivalDate": "28/06/2024",
    "colors": [
      "noir",
      "rouge",
      "bleu"
    ]
  },
  {
    "id": 143,
    "name": "Tapis d'intérieur Classique",
    "price": "332.45€",
    "availability": "available",
    "arrivalDate": "07/01/2024",
    "colors": [
      "lavande",
      "marron",
      "beige",
      "prune"
    ]
  },
  {
    "id": 144,
    "name": "Revêtement Classique",
    "price": "371.81€",
    "availability": "unavailable",
    "arrivalDate": "30/06/2025",
    "colors": [
      "marron",
      "cyan",
      "saumon"
    ]
  },
  {
    "id": 145,
    "name": "Moquette Shaggy",
    "price": "476.36€",
    "availability": "available",
    "arrivalDate": "07/01/2024",
    "colors": [
      "marron"
    ]
  },
  {
    "id": 146,
    "name": "Tapis d'extérieur Oriental",
    "price": "122.59€",
    "availability": "available",
    "arrivalDate": "20/05/2024",
    "colors": [
      "vert"
    ]
  },
  {
    "id": 147,
    "name": "Tapis d'intérieur Vintage",
    "price": "325.34€",
    "availability": "unavailable",
    "arrivalDate": "10/12/2024",
    "colors": [
      "lavande",
      "vert",
      "bleu",
      "orange"
    ]
  },
  {
    "id": 148,
    "name": "Tapis Berbère",
    "price": "436.86€",
    "availability": "available",
    "arrivalDate": "03/11/2024",
    "colors": [
      "jaune",
      "orange",
      "lavande",
      "turquoise"
    ]
  },
  {
    "id": 149,
    "name": "Tapis Jute",
    "price": "51.93€",
    "availability": "available",
    "arrivalDate": "17/10/2025",
    "colors": [
      "gris",
      "noir",
      "ocre",
      "jaune"
    ]
  },
  {
    "id": 150,
    "name": "Tapis d'extérieur Rond",
    "price": "380.02€",
    "availability": "unavailable",
    "arrivalDate": "07/05/2025",
    "colors": [
      "noir",
      "vert",
      "chocolat"
    ]
  },
  {
    "id": 151,
    "name": "Moquette Laine",
    "price": "297.17€",
    "availability": "unavailable",
    "arrivalDate": "27/12/2025",
    "colors": [
      "saumon"
    ]
  },
  {
    "id": 152,
    "name": "Moquette Berbère",
    "price": "241.61€",
    "availability": "unavailable",
    "arrivalDate": "31/12/2025",
    "colors": [
      "orange",
      "prune",
      "rose",
      "lavande"
    ]
  },
  {
    "id": 153,
    "name": "Tapis d'extérieur Moderne",
    "price": "84.73€",
    "availability": "available",
    "arrivalDate": "19/06/2025",
    "colors": [
      "lavande",
      "ivoire"
    ]
  },
  {
    "id": 154,
    "name": "Tapis d'intérieur Moderne",
    "price": "321.76€",
    "availability": "unavailable",
    "arrivalDate": "04/02/2024",
    "colors": [
      "orange",
      "cyan",
      "jaune"
    ]
  },
  {
    "id": 155,
    "name": "Moquette Floral",
    "price": "302.28€",
    "availability": "unavailable",
    "arrivalDate": "04/03/2025",
    "colors": [
      "cyan"
    ]
  },
  {
    "id": 156,
    "name": "Tapis Moderne",
    "price": "165.64€",
    "availability": "available",
    "arrivalDate": "31/10/2024",
    "colors": [
      "ivoire"
    ]
  },
  {
    "id": 157,
    "name": "Revêtement Floral",
    "price": "384.27€",
    "availability": "unavailable",
    "arrivalDate": "15/01/2025",
    "colors": [
      "gris",
      "orange"
    ]
  },
  {
    "id": 158,
    "name": "Tapisserie Berbère",
    "price": "469.85€",
    "availability": "unavailable",
    "arrivalDate": "14/09/2025",
    "colors": [
      "ivoire",
      "rose"
    ]
  },
  {
    "id": 159,
    "name": "Moquette Rond",
    "price": "256.96€",
    "availability": "available",
    "arrivalDate": "27/02/2025",
    "colors": [
      "lavande",
      "ocre",
      "rose",
      "prune"
    ]
  },
  {
    "id": 160,
    "name": "Revêtement Scandinave",
    "price": "286.03€",
    "availability": "available",
    "arrivalDate": "04/01/2024",
    "colors": [
      "turquoise",
      "beige",
      "prune",
      "rouge"
    ]
  },
  {
    "id": 161,
    "name": "Revêtement Graphique",
    "price": "394.29€",
    "availability": "unavailable",
    "arrivalDate": "16/05/2025",
    "colors": [
      "vert",
      "saumon",
      "lavande"
    ]
  },
  {
    "id": 162,
    "name": "Tapis d'intérieur Minimaliste",
    "price": "399.10€",
    "availability": "unavailable",
    "arrivalDate": "04/11/2025",
    "colors": [
      "blanc",
      "chocolat"
    ]
  },
  {
    "id": 163,
    "name": "Revêtement Persan",
    "price": "61.80€",
    "availability": "unavailable",
    "arrivalDate": "20/09/2024",
    "colors": [
      "beige",
      "orange",
      "turquoise",
      "lavande"
    ]
  },
  {
    "id": 164,
    "name": "Tapis d'intérieur Outdoor",
    "price": "277.88€",
    "availability": "available",
    "arrivalDate": "21/03/2025",
    "colors": [
      "beige",
      "moutarde"
    ]
  },
  {
    "id": 165,
    "name": "Revêtement Laine",
    "price": "287.10€",
    "availability": "available",
    "arrivalDate": "22/07/2024",
    "colors": [
      "turquoise"
    ]
  },
  {
    "id": 166,
    "name": "Revêtement Shaggy",
    "price": "207.41€",
    "availability": "unavailable",
    "arrivalDate": "22/12/2024",
    "colors": [
      "noir",
      "beige",
      "blanc",
      "rouge"
    ]
  },
  {
    "id": 167,
    "name": "Moquette Graphique",
    "price": "329.44€",
    "availability": "unavailable",
    "arrivalDate": "21/07/2024",
    "colors": [
      "blanc",
      "bleu"
    ]
  },
  {
    "id": 168,
    "name": "Tapis Moderne",
    "price": "96.60€",
    "availability": "unavailable",
    "arrivalDate": "07/04/2024",
    "colors": [
      "turquoise",
      "lavande",
      "orange"
    ]
  },
  {
    "id": 169,
    "name": "Tapis d'intérieur Coton",
    "price": "474.28€",
    "availability": "available",
    "arrivalDate": "23/01/2025",
    "colors": [
      "prune",
      "marron"
    ]
  },
  {
    "id": 170,
    "name": "Tapis d'intérieur Coloré",
    "price": "395.02€",
    "availability": "unavailable",
    "arrivalDate": "30/11/2024",
    "colors": [
      "chocolat",
      "noir",
      "beige"
    ]
  },
  {
    "id": 171,
    "name": "Tapis d'extérieur Luxueux",
    "price": "382.76€",
    "availability": "available",
    "arrivalDate": "09/06/2025",
    "colors": [
      "cyan",
      "prune",
      "chocolat",
      "orange"
    ]
  },
  {
    "id": 172,
    "name": "Tapis Rond",
    "price": "308.10€",
    "availability": "available",
    "arrivalDate": "26/06/2024",
    "colors": [
      "blanc",
      "orange"
    ]
  },
  {
    "id": 173,
    "name": "Tapisserie Classique",
    "price": "349.89€",
    "availability": "available",
    "arrivalDate": "07/09/2024",
    "colors": [
      "lavande",
      "orange"
    ]
  },
  {
    "id": 174,
    "name": "Tapisserie Rond",
    "price": "321.74€",
    "availability": "available",
    "arrivalDate": "04/04/2024",
    "colors": [
      "saumon",
      "chocolat",
      "gris"
    ]
  },
  {
    "id": 175,
    "name": "Tapis d'intérieur Graphique",
    "price": "187.66€",
    "availability": "available",
    "arrivalDate": "10/11/2024",
    "colors": [
      "moutarde"
    ]
  },
  {
    "id": 176,
    "name": "Moquette Shaggy",
    "price": "119.31€",
    "availability": "available",
    "arrivalDate": "23/08/2025",
    "colors": [
      "saumon",
      "chocolat",
      "turquoise"
    ]
  },
  {
    "id": 177,
    "name": "Tapis Minimaliste",
    "price": "381.95€",
    "availability": "unavailable",
    "arrivalDate": "20/02/2024",
    "colors": [
      "marron",
      "ivoire",
      "beige",
      "chocolat"
    ]
  },
  {
    "id": 178,
    "name": "Revêtement Coloré",
    "price": "396.82€",
    "availability": "unavailable",
    "arrivalDate": "06/07/2024",
    "colors": [
      "ivoire",
      "cyan"
    ]
  },
  {
    "id": 179,
    "name": "Revêtement Minimaliste",
    "price": "109.67€",
    "availability": "available",
    "arrivalDate": "25/04/2024",
    "colors": [
      "ocre",
      "noir",
      "beige",
      "cyan"
    ]
  },
  {
    "id": 180,
    "name": "Revêtement Imprimé",
    "price": "475.81€",
    "availability": "unavailable",
    "arrivalDate": "08/08/2024",
    "colors": [
      "prune",
      "saumon",
      "bleu"
    ]
  },
  {
    "id": 181,
    "name": "Tapis d'intérieur Oriental",
    "price": "180.53€",
    "availability": "available",
    "arrivalDate": "17/09/2025",
    "colors": [
      "moutarde",
      "prune",
      "marron",
      "noir"
    ]
  },
  {
    "id": 182,
    "name": "Tapisserie Coloré",
    "price": "102.82€",
    "availability": "unavailable",
    "arrivalDate": "29/01/2024",
    "colors": [
      "ocre",
      "orange"
    ]
  },
  {
    "id": 183,
    "name": "Moquette Minimaliste",
    "price": "383.43€",
    "availability": "unavailable",
    "arrivalDate": "28/05/2025",
    "colors": [
      "ocre",
      "blanc",
      "orange"
    ]
  },
  {
    "id": 184,
    "name": "Tapis d'intérieur Velours",
    "price": "113.49€",
    "availability": "unavailable",
    "arrivalDate": "18/09/2024",
    "colors": [
      "blanc",
      "prune",
      "rose",
      "beige"
    ]
  },
  {
    "id": 185,
    "name": "Tapis d'extérieur Persan",
    "price": "332.15€",
    "availability": "unavailable",
    "arrivalDate": "06/04/2024",
    "colors": [
      "jaune",
      "chocolat",
      "rose"
    ]
  },
  {
    "id": 186,
    "name": "Revêtement Scandinave",
    "price": "381.92€",
    "availability": "available",
    "arrivalDate": "16/04/2024",
    "colors": [
      "rose",
      "turquoise",
      "chocolat"
    ]
  },
  {
    "id": 187,
    "name": "Moquette Scandinave",
    "price": "254.17€",
    "availability": "unavailable",
    "arrivalDate": "16/09/2025",
    "colors": [
      "jaune",
      "turquoise",
      "saumon",
      "prune"
    ]
  },
  {
    "id": 188,
    "name": "Tapis d'intérieur Berbère",
    "price": "122.12€",
    "availability": "available",
    "arrivalDate": "20/07/2025",
    "colors": [
      "orange"
    ]
  },
  {
    "id": 189,
    "name": "Moquette Graphique",
    "price": "306.39€",
    "availability": "unavailable",
    "arrivalDate": "02/01/2025",
    "colors": [
      "ivoire",
      "moutarde",
      "cyan",
      "jaune"
    ]
  },
  {
    "id": 190,
    "name": "Tapis Coloré",
    "price": "156.67€",
    "availability": "available",
    "arrivalDate": "08/05/2025",
    "colors": [
      "ivoire",
      "cyan",
      "rouge"
    ]
  },
  {
    "id": 191,
    "name": "Revêtement Cuir",
    "price": "430.24€",
    "availability": "available",
    "arrivalDate": "15/08/2024",
    "colors": [
      "vert",
      "chocolat",
      "orange",
      "saumon"
    ]
  },
  {
    "id": 192,
    "name": "Tapis d'intérieur Graphique",
    "price": "157.05€",
    "availability": "available",
    "arrivalDate": "17/07/2024",
    "colors": [
      "rouge"
    ]
  },
  {
    "id": 193,
    "name": "Tapis d'extérieur Laine",
    "price": "349.04€",
    "availability": "available",
    "arrivalDate": "20/10/2024",
    "colors": [
      "cyan"
    ]
  },
  {
    "id": 194,
    "name": "Tapisserie Luxueux",
    "price": "52.33€",
    "availability": "available",
    "arrivalDate": "17/09/2024",
    "colors": [
      "lavande"
    ]
  },
  {
    "id": 195,
    "name": "Revêtement Outdoor",
    "price": "486.63€",
    "availability": "unavailable",
    "arrivalDate": "16/12/2025",
    "colors": [
      "turquoise",
      "ocre"
    ]
  },
  {
    "id": 196,
    "name": "Tapisserie Shaggy",
    "price": "249.25€",
    "availability": "unavailable",
    "arrivalDate": "30/01/2025",
    "colors": [
      "noir",
      "ocre"
    ]
  },
  {
    "id": 197,
    "name": "Tapisserie Cuir",
    "price": "57.48€",
    "availability": "available",
    "arrivalDate": "19/11/2025",
    "colors": [
      "rose"
    ]
  },
  {
    "id": 198,
    "name": "Tapis d'intérieur Laine",
    "price": "303.97€",
    "availability": "available",
    "arrivalDate": "08/12/2025",
    "colors": [
      "moutarde",
      "saumon"
    ]
  },
  {
    "id": 199,
    "name": "Tapis d'extérieur Persan",
    "price": "99.41€",
    "availability": "unavailable",
    "arrivalDate": "23/10/2025",
    "colors": [
      "saumon",
      "orange"
    ]
  },
  {
    "id": 200,
    "name": "Tapis d'extérieur Shaggy",
    "price": "398.36€",
    "availability": "available",
    "arrivalDate": "04/12/2025",
    "colors": [
      "rouge"
    ]
  }
]