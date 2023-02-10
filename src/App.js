import './styles/theme.scss';
import React, { useEffect, useState, useCallback } from 'react';
import Box from "./components/box/box";
import Link from "./components/link/link";
import Button from "./components/button/button";


const App = () => {
  const [itemsList, setItemsList] = useState(null)
  const [itemId, setItemId] = useState(0);
  const [title, setTitle] = useState('');
  const [submitDisabled, setSubmitDisabled] = useState(false)

  const handleItemClick = useCallback((id) => {
    setItemId(id)
  }, [])

  const handleTitleChange = useCallback((event) => {
    setTitle(event.target.value)
  }, [])

  const handleFormSubmit = useCallback((event) => {
      event.preventDefault()
      // Perform a POST request and send the title
      fetch('/items', {
        method: 'POST',
        body: title
      }).then((res) => res.json())
      .then((data) => {
        setItemsList([...itemsList, data]);
        setSubmitDisabled(true)
      })
    },[title, itemsList]
  )

  useEffect(() => {
    fetch('/items', {
        method: 'GET',
      }).then((res) => res.json())
      .then((data) => {
        setItemsList(data);
      })
  },[]);


  return (
    <Box pa={4} flex="row" justifyContent="between">
      <Box tagName="ul" xsCol={4} ph={3}>
        { itemsList !== null
          && itemsList.map((item) => {
          return (<Box tagName="li" key={item.id}><Link onClick={() => handleItemClick(item.id)}>{item.title}</Link></Box>)
        })}
      </Box> 
      <Box xsCol={4} ph={3}>
        { itemsList !== null
          && <Box>
            <Box>Title: {itemsList[itemId].title}</Box>
            <Box>Author: {itemsList[itemId].author}</Box>
          </Box>
        }
      </Box> 
      <Box xsCol={4} ph={3}>
        <form onSubmit={handleFormSubmit}>
          <Box>
            <label htmlFor="title">Title: </label>
            <input
              type ="text"
              id="title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </Box>
          <Box mt={2}><Button type="submit" disabled={submitDisabled}>Submit</Button></Box>
        </form>
      </Box>
    </Box>
   
  );
}

export default App;
