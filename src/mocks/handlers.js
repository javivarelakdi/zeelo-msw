// src/mocks/handlers.js
import { rest } from 'msw'
export const handlers = [
  
  rest.get('/items', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 0,
          image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
          title: "The Hobbit",
          author: "JRR Tolkien",
          price: 26.99
        },
        {
          id: 1,
          image: "https://upload.wikimedia.org/wikipedia/en/8/8e/The_Fellowship_of_the_Ring_cover.gif",
          title: "The Fellowship of the Ring",
          author: "JRR Tolkien",
          price: 26.99
        }
      ])
    )
  }),

  
]