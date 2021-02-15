import React, { useState, useEffect } from "react";
//import '../styles/mytasks.css';

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
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

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

const KYCWriteup = () => {
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

  const [countriesDrpdwnVals, setCountriesDrpdwnVals] = useState([]);
  const [
    identificationTypeDrpdwnVals,
    setIdentificationTypeDrpdwnVals,
  ] = useState([]);

  useEffect(() => {
    setCountriesDrpdwnVals(
      countriesDataInJSON.drpDownVals.map((values) => ({
        label: values.label,
        value: values.value,
      }))
    );

    setIdentificationTypeDrpdwnVals(
      identificationTypeDataInJSON.drpDownVals.map((values) => ({
        label: values.label,
        value: values.value,
      }))
    );
  }, []);

  const onSubmit = (data) => {
    //setGivenName(data.givenName);
    alert(JSON.stringify(data));
  };

  const classes = useStyles();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className={classes.formClass}>
        <Typography variant="h6" gutterBottom>
          Client Particulars (Individual)
        </Typography>

        <StyledBox m={2} p={1} display="block">
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={5}>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Given Name:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Input
                    name="givenName"
                    value={givenName}
                    inputRef={register}
                    onChange={(e) => setGivenName(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Surname:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Input
                    name="surName"
                    value={surName}
                    inputRef={register}
                    onChange={(e) => setSurName(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    DOB:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Input
                    name="dob"
                    value={dob}
                    inputRef={register}
                    onChange={(e) => setDOB(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={5}>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Client Name:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Input
                    name="clientName"
                    value={clientName}
                    inputRef={register}
                    onChange={(e) => setClientName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Nationality:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormControl>
                    <select
                      name="nationality"
                      ref={register}
                      value={nationalitySelVal}
                      onChange={(e) =>
                        setNationalitySelVal(e.currentTarget.value)
                      }
                    >
                      {countriesDrpdwnVals.map((values) => {
                        return (
                          <option key={values.value} value={values.value}>
                            {values.label}
                          </option>
                        );
                      })}
                    </select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Country of Domicile:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormControl>
                    <select
                      name="countryOfDomicile"
                      ref={register}
                      value={countryOfDomicileSelVal}
                      onChange={(e) =>
                        setCountryOfDomicileSelVal(e.currentTarget.value)
                      }
                    >
                      {countriesDrpdwnVals.map((values) => {
                        return (
                          <option key={values.value} value={values.value}>
                            {values.label}
                          </option>
                        );
                      })}
                    </select>
                  </FormControl>
                </Grid>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={5}>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Tax Residence:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormControl>
                    <select
                      name="taxResidence"
                      ref={register}
                      value={taxResidenceSelVal}
                      onChange={(e) =>
                        setTaxResidenceSelVal(e.currentTarget.value)
                      }
                    >
                      {countriesDrpdwnVals.map((values) => {
                        return (
                          <option key={values.value} value={values.value}>
                            {values.label}
                          </option>
                        );
                      })}
                    </select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container item xs={8}></Grid>
            </Grid>
          </Grid>
        </StyledBox>

        <Typography variant="h6" gutterBottom>
          Client Identification
        </Typography>

        <StyledBox m={2} p={1} display="block">
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={5}>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Identification Type:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormControl>
                    <select
                      name="identificationType"
                      ref={register}
                      value={identificationTypeSelVal}
                      onChange={(e) =>
                        setIdentificationTypeSelVal(e.currentTarget.value)
                      }
                    >
                      {identificationTypeDrpdwnVals.map((values) => {
                        return (
                          <option key={values.value} value={values.value}>
                            {values.label}
                          </option>
                        );
                      })}
                    </select>
                  </FormControl>
                </Grid>
              </Grid>

              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Identification No:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <Input
                    name="identificationNo"
                    value={identificationNo}
                    inputRef={register}
                    onChange={(e) => setIdentificationNo(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid container item xs={4}></Grid>
            </Grid>
            <Grid container item xs={12} spacing={5}>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Issue Country:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <FormControl>
                    <select
                      name="issueCountry"
                      ref={register}
                      value={nationalitySelVal}
                      onChange={(e) =>
                        setNationalitySelVal(e.currentTarget.value)
                      }
                    >
                      {countriesDrpdwnVals.map((values) => {
                        return (
                          <option key={values.value} value={values.value}>
                            {values.label}
                          </option>
                        );
                      })}
                    </select>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Issue Date:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="issueDate"
                    type="date"
                    name="issueDate"
                    value={issueDate}
                    inputRef={register}
                    inputProps={{ style: { fontSize: 14 } }}
                    onChange={(e) => setIssueDate(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid container item xs={4}>
                <Grid item xs={6}>
                  <Typography variant="body2" gutterBottom>
                    Valid To:
                  </Typography>
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="validTo"
                    type="date"
                    name="validTo"
                    value={validTo}
                    inputRef={register}
                    inputProps={{ style: { fontSize: 14 } }}
                    onChange={(e) => setValidTo(e.target.value)}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </StyledBox>
        {/*
        <StyledBox m={2} p={1} display="block">
          <Grid container spacing={1}>
            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Identification Type:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl>
                <select
                  name="identificationType"
                  ref={register}
                  value={identificationTypeSelVal}
                  onChange={(e) =>
                    setIdentificationTypeSelVal(e.currentTarget.value)
                  }
                >
                  {identificationTypeDrpdwnVals.map((values) => {
                    return (
                      <option key={values.value} value={values.value}>
                        {values.label}
                      </option>
                    );
                  })}
                </select>
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Identification No:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>
            <Grid item xs={4}></Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Issue Country:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <FormControl>
                <select
                  name="issueCountry"
                  ref={register}
                  value={nationalitySelVal}
                  onChange={(e) => setNationalitySelVal(e.currentTarget.value)}
                >
                  {countriesDrpdwnVals.map((values) => {
                    return (
                      <option key={values.value} value={values.value}>
                        {values.label}
                      </option>
                    );
                  })}
                </select>
              </FormControl>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Issue Date:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="body2" gutterBottom>
                Valid To:
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <select name="taxResidence" ref={register}>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
              </select>
            </Grid>
          </Grid>
        </StyledBox>
                */}

        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className={classes.root}>
            <Button color="contained" size="small" variant="outlined">
              +
            </Button>
            <Button color="contained" size="small" variant="outlined">
              -
            </Button>
          </div>
        </Grid>

        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <div className={classes.root}>
            <Button color="contained" size="small" variant="outlined">
              PREVIOUS
            </Button>
            <Button
              color="contained"
              size="small"
              variant="outlined"
              onClick={handleSubmit(onSubmit)}
            >
              SAVE
            </Button>
            <Button color="contained" size="small" variant="outlined">
              NEXT
            </Button>
          </div>
        </Grid>
      </form>
    </div>
  );
};

export default KYCWriteup;
