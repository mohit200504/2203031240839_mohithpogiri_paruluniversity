
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

import React, { useState } from 'react';
import axios from 'axios';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  Alert,
} from '@mui/material';

const ShortenerPage = () => {
  const [url, setUrl] = useState('');
  const [validity, setValidity] = useState('');
  const [shortcode, setShortcode] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:5000/shorturls', {
        url,
        validity: validity ? Number(validity) : undefined,
        shortcode: shortcode || undefined,
      });

      setResult(res.data);
      setError('');
    } catch (err) {
      setError(err.response?.data?.error || 'Something went wrong');
      setResult(null);
    }
  };


function User(){


let nav=useNavigate();
    let token = useSelector((s)=>{
        return s.token;

    })

    let [userdata,setuser]=useState();


    useEffect((


    )=>{


        if(token){
            let res= axios.get("http://localhost:4000/user",{headers:{
            "x-token":token
        }})

        console.log(res)
        }


        
    },[token])


    if(!token){
        return nav("login")
    }

    









  return (
    <Container maxWidth="sm">
      <Box mt={5}>
        <Typography variant="h4" gutterBottom>
          URL Shortener
        </Typography>
        <TextField
          label="Enter long URL"
          fullWidth
          margin="normal"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <TextField
          label="Validity in minutes (optional)"
          fullWidth
          margin="normal"
          type="number"
          value={validity}
          onChange={(e) => setValidity(e.target.value)}
        />
        <TextField
          label="Custom shortcode (optional)"
          fullWidth
          margin="normal"
          value={shortcode}
          onChange={(e) => setShortcode(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          sx={{ mt: 2 }}
        >
          Shorten URL
        </Button>

        {error && (
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        )}

        {result && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Short URL:{' '}
            <a href={result.shortLink} target="_blank" rel="noreferrer">
              {result.shortLink}
            </a>
            <br />
            Expires at: {new Date(result.expiry).toLocaleString()}
          </Alert>
        )}
      </Box>
    </Container>
  );
};















        
       
    )
}


export default User;
