import faker from "faker"
import niceColors from "nice-color-palettes"
faker.seed(1)

export const ORANGE = "#FB9B06"
// https://www.flaticon.com/packs/linear-color-housekeeping-elements

const data = [
  {
    type: "Soup",
    image:
      "https://images.unsplash.com/photo-1605909388460-74ec8b204127?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
  },
  {
    type: "Salad",
  },
  {
    type: "Rice",
  },
  {
    type: "Sushi",
  },
  {
    type: "Spaguetti",
  },
  {
    type: "Pizza",
    image:
      "https://images.unsplash.com/photo-1613246977156-0054ac3081e1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=900&ixid=MXwxfDB8MXxyYW5kb218fHx8fHx8fA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1600",
  },
  {
    type: "Burger",
  },
]

const colors = niceColors[1]
export const tabs = [
  "Today",
  "Chips",
  "Fish",
  "Tea",
  "Burger",
  "Coffe",
  "Drinks",
  "Breakfast",
]

export default data.map((item, index) => ({
  ...item,
  key: faker.random.uuid(),
  subType: faker.commerce.productName(),
  color: `${colors[index % colors.length]}66`,
  fullColor: colors[index % colors.length],
  description: [...Array(2).keys()]
    .map(faker.commerce.productDescription)
    .join(". "),
  price: `${(faker.random.number(200) + 50) / 100}`,
  subcategories: faker.helpers.shuffle(data).slice(0, 3),
}))

export const popularFood = faker.helpers.shuffle(data).map(item => ({
  ...item,
  key: faker.random.uuid(),
  rating: (faker.random.number(30) + 20) / 10,
  price: `${(faker.random.number(200) + 50) / 100}`,
}))
