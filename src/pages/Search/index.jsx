import React, { useState } from 'react';
import { Container, Paper, Grid, Box, Button, Typography, TextField, MenuItem, TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Avatar } from '@mui/material';

import logo from '../../assets/badeel.png'
import './search.css';

const options = ['Option 1', 'Option 2', 'Option 3'];

function SearchPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedOption1, setSelectedOption1] = useState(options[0]);
  const [selectedOption2, setSelectedOption2] = useState(options[0]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Simulate a search action and update the search results
    const results = [
      // Your search results here
      {
        column1: 'testing1',
        column2: 'testing2',
        column3: 'testing3',
      },
    ];
    setSearchResults(results);
  };

  return (
    <Container maxWidth="xl">
      <Paper elevation={2}>
        <Box p={3} textAlign="center">
          <img src={logo} className="logo" alt="badeel logo" />
          <Grid container spacing={2} alignItems="center" justifyContent="center">
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Your Country"
                value={selectedOption1}
                onChange={(e) => setSelectedOption1(e.target.value)}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Search for product"
                value={selectedOption2}
                onChange={(e) => setSelectedOption2(e.target.value)}
              >
                {options.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" onClick={handleSearch}>
                Search
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>

      {searchResults.length > 0 && (
        <TableContainer component={Paper} style={{ marginTop: '20px' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Column 1</TableCell>
                <TableCell>Column 2</TableCell>
                <TableCell>Column 3</TableCell>
                {/* Add more columns as needed */}
              </TableRow>
            </TableHead>
            <TableBody>
              {searchResults.map((result, index) => (
                <TableRow key={index}>
                  <TableCell>{result.column1}</TableCell>
                  <TableCell>{result.column2}</TableCell>
                  <TableCell>{result.column3}</TableCell>
                  {/* Add more cells as needed */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
}

export default SearchPage;
