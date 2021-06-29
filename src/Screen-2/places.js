import faker from "faker"
import niceColors from "nice-color-palettes"
faker.seed(1)

const data = [
  {
    name: "London",
    image:
      "https://images.pexels.com/photos/1647120/pexels-photo-1647120.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    country: "England",
  },
  {
    name: "Paris",
    image:
      "https://images.pexels.com/photos/3596708/pexels-photo-3596708.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    country: "France",
  },
  {
    name: "Venice",
    image:
      "https://images.pexels.com/photos/4558737/pexels-photo-4558737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    country: "Italy",
  },
  {
    name: "Barcelona",
    image:
      "https://images.pexels.com/photos/819764/pexels-photo-819764.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    country: "Spain",
  },
  {
    name: "Moscow",
    image:
      "https://images.pexels.com/photos/753339/pexels-photo-753339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    country: "Russia",
  },
  {
    name: "Dubai",
    image:
      "https://images.pexels.com/photos/3243025/pexels-photo-3243025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    country: "Arab Emirates",
  },
  {
    name: "Zurich",
    image:
      "https://images.pexels.com/photos/4857651/pexels-photo-4857651.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    country: "Switzerland",
  },
]

export default data.map(item => ({
  ...item,
  key: faker.random.uuid(),
  description: faker.lorem.paragraph(),
}))
