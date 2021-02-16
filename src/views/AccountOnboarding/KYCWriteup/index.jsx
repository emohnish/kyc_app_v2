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
  Container,
  Card,
  CardHeader,
  Divider,
  CardContent,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import Page from "../../../components/Page";
import { useForm } from "react-hook-form";

import countriesDataInJSON from "../data/countries.json";
import identificationTypeDataInJSON from "../data/identificationType.json";
import ClientIdentification from "./ClientIdentification";
import ClientParticulars from "./ClientParticulars";

const StyledBox = styled(Box)`
  background-color: #efefef;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  buttonClass: {
    "& > *": {
      margin: theme.spacing(0.5),
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

  // const [nationalitySelVal, setNationalitySelVal] = useState("SG");
  const [countryOfDomicileSelVal, setCountryOfDomicileSelVal] = useState("SG");

  const [taxResidenceSelVal, setTaxResidenceSelVal] = useState("IN");
  const [identificationTypeSelVal, setIdentificationTypeSelVal] = useState(0);

  const [countriesDrpdwnVals, setCountriesDrpdwnVals] = useState([]);
  const [
    identificationTypeDrpdwnVals,
    setIdentificationTypeDrpdwnVals,
  ] = useState([]);

  const [values, setValues] = useState({
    givenName: "",
    surName: "",
    dob: "",
    clientName: "",
    nationalitySelVal: "SG",
    countryOfDomicileSelVal: "SG",
    taxResidenceSelVal: "IN",
    identificationTypeSelVal: "DL",
    identificationNo: "",
    issueCountry: "SG",
    issueDate: "",
    validTo: "",
  });

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

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Page className={classes.root} title="KYC Writeup">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item lg={12} md={12} xs={12}>
              {/*} <ClientParticulars
                countriesDrpdwnVals={countriesDrpdwnVals}
                handleChange={() => handleChange()}
  /> */}

              <Card>
                <CardHeader
                  subheader=""
                  title="Client Particulars (Individual)"
                />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Given Name"
                        name="givenName"
                        onChange={handleChange}
                        required
                        SelectProps={{ native: true }}
                        value={values.givenName}
                        variant="outlined"
                        inputRef={register}
                        InputLabelProps={{ shrink: true }}
                      ></TextField>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Sur Name"
                        name="surName"
                        onChange={handleChange}
                        required
                        SelectProps={{ native: true }}
                        value={values.surName}
                        variant="outlined"
                        inputRef={register}
                        InputLabelProps={{ shrink: true }}
                      ></TextField>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="DOB"
                        type="date"
                        name="dob"
                        onChange={handleChange}
                        required
                        SelectProps={{ native: true }}
                        value={values.dob}
                        variant="outlined"
                        inputRef={register}
                        InputLabelProps={{ shrink: true }}
                      ></TextField>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Client Name"
                        name="clientName"
                        onChange={handleChange}
                        required
                        SelectProps={{ native: true }}
                        value={values.clientName}
                        variant="outlined"
                        inputRef={register}
                        InputLabelProps={{ shrink: true }}
                      ></TextField>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Select Nationality"
                        name="nationalitySelVal"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.nationalitySelVal}
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
                        name="countryOfDomicileSelVal"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.countryOfDomicileSelVal}
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
                        name="taxResidenceSelVal"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.taxResidenceSelVal}
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
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              {/* <ClientIdentification
                countriesDrpdwnVals={countriesDrpdwnVals}
                identificationTypeDrpdwnVals={identificationTypeDrpdwnVals}
            />*/}

              <Card>
                <CardHeader subheader="" title="Client Identification" />
                <Divider />
                <CardContent>
                  <Grid container spacing={3}>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Select Identification Type"
                        name="identificationTypeSelVal"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.identificationTypeSelVal}
                        variant="outlined"
                        inputRef={register}
                      >
                        {identificationTypeDrpdwnVals.map((values) => {
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
                        label="Identification No."
                        name="identificationNo"
                        onChange={handleChange}
                        required
                        SelectProps={{ native: true }}
                        value={values.identificationNo}
                        variant="outlined"
                        inputRef={register}
                        InputLabelProps={{ shrink: true }}
                      ></TextField>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Select Issue Country"
                        name="issueCountrySelVal"
                        onChange={handleChange}
                        required
                        select
                        SelectProps={{ native: true }}
                        value={values.issueCountrySelVal}
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
                        label="Issue Date"
                        name="issueDate"
                        type="date"
                        onChange={handleChange}
                        required
                        SelectProps={{ native: true }}
                        value={values.issueDate}
                        variant="outlined"
                        inputRef={register}
                        InputLabelProps={{ shrink: true }}
                      ></TextField>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <TextField
                        fullWidth
                        label="Issue Date"
                        name="validTo"
                        type="date"
                        onChange={handleChange}
                        required
                        SelectProps={{ native: true }}
                        value={values.validTo}
                        variant="outlined"
                        inputRef={register}
                        InputLabelProps={{ shrink: true }}
                      ></TextField>
                    </Grid>
                  </Grid>

                  <Grid item lg={12} md={12} xs={12}>
                    <Box display="flex" justifyContent="flex-end" p={2}>
                      <div className={classes.buttonClass}>
                        <Button
                          color="contained"
                          size="small"
                          variant="outlined"
                        >
                          +
                        </Button>
                        <Button
                          color="contained"
                          size="small"
                          variant="outlined"
                        >
                          -
                        </Button>
                      </div>
                    </Box>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            <Grid item lg={12} md={12} xs={12}>
              <Box display="flex" justifyContent="flex-end" p={2}>
                <div className={classes.buttonClass}>
                  <Button color="secondary" variant="contained">
                    Previous
                  </Button>
                  <Button
                    color="secondary"
                    variant="contained"
                    onClick={handleSubmit(onSubmit)}
                  >
                    Save
                  </Button>
                  <Button color="secondary" variant="contained">
                    Next
                  </Button>
                </div>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Page>
    </form>
  );
};

export default KYCWriteup;
