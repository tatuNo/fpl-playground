import React, { useState } from 'react';
import { Input, Button } from 'semantic-ui-react';
import axios from 'axios';

const App = () => {
  const [id, setId] = useState(undefined); // my id 3623724
  const [team, setTeam] = useState([]);

  const handleOnClick = async (e) => {
    e.preventDefault();
    try {
      // const data = await axios.get('http://localhost:3003/proxy/api/bootstrap-static/'); working
      const data = await axios.get(`http://localhost:3003/proxy/api/entry/${id}/`);
      setTeam(data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(team);

  return (
    <div>
      <Input
        placeholder="Enter team id"
        onChange={(e) => setId(e.target.value)}
      />
      <Button onClick={handleOnClick}>Enter</Button>
    </div>
  );
};

export default App;