const prices = {
  classics: 3.50,
  hots: 3.95,
  specials: 3.75
};

export const categories = [
  {
    title: "Kitchen Classics",
    items: [
      {
        name: "Roast ham ploughmans",
        price: prices.classics
      },
      {
        name: "Roast ham salad",
        price: prices.classics
      },
      {
        name: "Roast ham, chedder & picalilli",
        price: prices.classics
      }
    ]
  },
  {
    title: "Hot Sarnies",
    items: [
      {
        name: "Bacon",
        price: 3.00
      },
      {
        name: "Bacon & sausage",
        price: 3.50
      },
      {
        name: "Bacon, sausage & black pudding",
        price: prices.hots
      }
    ]
  },
  {
    title: "Something Special",
    items: [
      {
        name: "Basil pesto chicken & sunblushed tomatoes",
        price: prices.specials
      },
      {
        name: "Roast beef, balsamic onions & horseradish mayo",
        price: prices.specials
      },
      {
        name: "Roast beef, Yorkshire blue & onion marmalade",
        price: prices.specials
      }
    ]
  }
];
