import React, { useState, useEffect } from "react";
//import '../styles/mytasks.css';
import clsx from "clsx";
import styled from "styled-components";

import Grid from "@material-ui/core/Grid";
import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  Select,
  MenuItem,
  Box,
  TextField,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  Divider,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import KYCWriteup from "../KYCWriteup/index";

import { useForm } from "react-hook-form";

import countriesDataInJSON from "../data/countries.json";
import identificationTypeDataInJSON from "../data/identificationType.json";

const StyledBox = styled(Box)`
  background-color: #efefef;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
    formControl: {
      margin: theme.spacing(12),
      minWidth: 120,
    },
    formClass: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  },
}));

const ClientParticulars = ({
  className,
  countriesDrpdwnVals,
  handleChange,
  ...rest
}) => {
  const { register, handleSubmit } = useForm();

  const [givenName, setGivenName] = useState("");
  const [surName, setSurName] = useState("");
  const [dob, setDOB] = useState("");
  const [clientName, setClientName] = useState("");
  const [identificationNo, setIdentificationNo] = useState("");

  const [issueDate, setIssueDate] = useState("");
  const [validTo, setValidTo] = useState("");

  const [nationalitySelVal, setNationalitySelVal] = useState("SG");
  const [countryOfDomicileSelVal, setCountryOfDomicileSelVal] = useState("SG");

  const [taxResidenceSelVal, setTaxResidenceSelVal] = useState("IN");
  const [identificationTypeSelVal, setIdentificationTypeSelVal] = useState(0);

  const [
    identificationTypeDrpdwnVals,
    setIdentificationTypeDrpdwnVals,
  ] = useState([]);

  useEffect(() => {
    setIdentificationTypeDrpdwnVals(
      identificationTypeDataInJSON.drpDownVals.map((values) => ({
        label: values.label,
        value: values.value,
      }))
    );
  }, []);

  const classes = useStyles();

  return (
    <div>
      <Card>
        <CardHeader subheader="" title="Client Particulars (Individual)" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Given Name"
                name="givenName"
                onChange={(event) => handleChange(event)}
                required
                SelectProps={{ native: true }}
                value={givenName}
                variant="outlined"
                inputRef={register}
              ></TextField>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Sur Name"
                name="surName"
                onChange={KYCWriteup.handleChange}
                required
                SelectProps={{ native: true }}
                value={givenName}
                variant="outlined"
                inputRef={register}
              ></TextField>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="DOB"
                name="dob"
                onChange={KYCWriteup.handleChange}
                required
                SelectProps={{ native: true }}
                value={dob}
                variant="outlined"
                inputRef={register}
              ></TextField>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Client Name"
                name="clientName"
                onChange={KYCWriteup.handleChange}
                required
                SelectProps={{ native: true }}
                value={givenName}
                variant="outlined"
                inputRef={register}
              ></TextField>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Select Nationality"
                name="nationality"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={nationalitySelVal}
                variant="outlined"
                inputRef={register}
              >
                {countriesDrpdwnVals.map((values) => {
                  return (
                    <option key={values.value} value={values.value}>
                      {values.label}
                    </option>
                  );
                })}
              </TextField>
            </Grid>
            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Select Country of Domicile"
                name="countryOfDomicile"
                onChange={KYCWriteup.handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={countryOfDomicileSelVal}
                variant="outlined"
                inputRef={register}
              >
                {countriesDrpdwnVals.map((values) => {
                  return (
                    <option key={values.value} value={values.value}>
                      {values.label}
                    </option>
                  );
                })}
              </TextField>
            </Grid>

            <Grid item lg={4} md={4} xs={12}>
              <TextField
                fullWidth
                label="Select Tax Residence"
                name="taxResidence"
                onChange={KYCWriteup.handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={taxResidenceSelVal}
                variant="outlined"
                inputRef={register}
              >
                {countriesDrpdwnVals.map((values) => {
                  return (
                    <option key={values.value} value={values.value}>
                      {values.label}
                    </option>
                  );
                })}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientParticulars;
