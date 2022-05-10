import { useState, useEffect } from 'react';
import axios from 'axios';

const useTeams = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3003/proxy/api/bootstrap-static/');
        setTeamData(data.teams);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return teamData;
};

export default useTeams;
