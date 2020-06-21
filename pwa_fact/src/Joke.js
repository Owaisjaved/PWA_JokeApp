import React, { useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';



const refreshPage = () => {
  window.location.reload(false);
}

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect( () => {
  const fetchData=async()=>{
    const url = "https://sv443.net/jokeapi/v2/joke/Any?type=twopart";
    const response = await fetch(url, {method: "GET"}
    );
    const data = await response.json();
   
    setData(data);
    setLoading(false);}
    fetchData();
  }, []);
  
  return { data, loading };
};

const Joke = () => {
 
  
   const url = "https://sv443.net/jokeapi/v2/joke/Any?type=twopart";
  const { data, loading } = useFetch(url);

  return (
    <Card  variant="outlined">
      <CardContent >
        <Typography  color="textprimary" variant="h6" gutterBottom>
        <span role="img" aria-label="sheep">🤣 </span> Keep Smiling<span role="img" aria-label="sheep"> 🤣</span>
        </Typography>
        <Typography variant="h4" component="h2">
          {loading ? <div><CircularProgress /></div> : <div>{data.setup}</div>}
        </Typography>
        <Typography variant="h5" component="h2">
          {loading ? <div></div> : <div>{data.delivery}</div>}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="large" onClick={refreshPage}><span role="img" aria-label="sheep">😜</span> Click Me <span role="img" aria-label="sheep">🤪</span></Button>

      </CardActions>
    </Card>
  );
};
export default Joke;