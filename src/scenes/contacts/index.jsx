import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
/* import { mockDataContacts } from "../../data/mockData"; */
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import React, { useState, useEffect } from 'react';
import fetchData from '../../data/fetcher.js';


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
   
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "first name",
      headerName: "first name",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
    {
      field: "occupation",
      headerName: "occupation",
      flex: 1,
    },
    {
      field: "birth date",
      headerName: "birth date",
      flex: 1,
    },
    {
      field: "ID number",
      headerName: "ID number",
      flex: 1,
    },

  ];
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetchData(); // Call the fetchData function
        setData(response.data); // Update state with fetched data
      } catch (error) {
        console.error(error);
        // Handle errors here (e.g., display an error message)
      }
    };

    getData();
  }, []);

  return (
    <Box m="20px">
      <Header
        title="LIST OF CLIENTS"
        subtitle="THIS IS OUR CLIENTS DATA"
      />
      <Box
        m="10px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        <DataGrid
          rows={data}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
  );
};

export default Contacts;
