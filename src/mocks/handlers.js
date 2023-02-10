// src/mocks/handlers.js
import { rest } from 'msw'
export const handlers = [
  
  rest.get('/items', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: 0,
          title: "The Hobbit",
          author: "JRR Tolkien",
        },
        {
          id: 1,
          title: "The Fellowship of the Ring",
          author: "JRR Tolkien",
        },
        {
          id: 2,
          title: "The Two Towers",
          author: "JRR Tolkien",
        },
        {
          id: 3,
          title: "The Return of the King",
          author: "JRR Tolkien",
        }
      ])
    )
  }),
 
  rest.post('/items', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 4,
        title: req.body,
        author: "JRR Tolkien",
      })
    )
  }),

  
]