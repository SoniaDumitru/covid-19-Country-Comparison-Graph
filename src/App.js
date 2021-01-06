import './App.css';
import React, { useState, useEffect }  from 'react';

function App() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const runCall = async () => {
          let apiValue = await fetchData();
          const header = apiValue.split('\n').slice(0).map(line => (line.split(',')))[0].slice(4);
          const usaData = apiValue.split('\n').slice(0).map((line) => line.split(','))[226].slice(4)
          const charData = [];
          for (let i = 0; i < header.length; i++) {
            const newRow = {};
            newRow.name = header[i];
            newRow.data = parseInt(usaData[i]);
            charData.push(newRow);
          }
          setData(charData);
          setIsLoading(false);
          return null;
      }
      const fetchData = async () => {
          const requestOption = {
              method: 'GET',
              redirect: 'follow'
          }
          const apiUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv`
          try {
              const response = await fetch(apiUrl, requestOption);
              return response.ok ? response.text() : null;
          } catch (err) {
              console.log(err);
              return null;
          }
      }
      runCall();
  }, [])

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
