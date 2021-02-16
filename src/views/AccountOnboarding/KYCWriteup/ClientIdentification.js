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

import { useForm } from "react-hook-form";

import KYCWriteup from "../KYCWriteup/index";

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

const ClientIdentification = ({
  className,
  countriesDrpdwnVals,
  identificationTypeDrpdwnVals,
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

  const [issueCountrySelVal, setIssueCountrySelVal] = useState("IN");

  useEffect(() => {}, []);

  const onSubmit = (data) => {
    //setGivenName(data.givenName);
    alert(JSON.stringify(data));
  };

  const classes = useStyles();

  return (
    <div>
      <div>
        <form
          autoComplete="off"
          noValidate
          className={clsx(classes.root, className)}
          {...rest}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Card>
            <CardHeader subheader="" title="Client Identification" />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item lg={4} md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Select Identification Type"
                    name="identificationType"
                    onChange={KYCWriteup.handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={givenName}
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
                    onChange={KYCWriteup.handleChange}
                    required
                    SelectProps={{ native: true }}
                    value={identificationNo}
                    variant="outlined"
                    inputRef={register}
                  ></TextField>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Select Issue Country"
                    name="issueCountry"
                    onChange={KYCWriteup.handleChange}
                    required
                    select
                    SelectProps={{ native: true }}
                    value={issueCountrySelVal}
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
                    onChange={KYCWriteup.handleChange}
                    required
                    SelectProps={{ native: true }}
                    value={issueDate}
                    variant="outlined"
                    inputRef={register}
                  ></TextField>
                </Grid>
                <Grid item lg={4} md={4} xs={12}>
                  <TextField
                    fullWidth
                    label="Valid To"
                    name="validTo"
                    type="date"
                    onChange={KYCWriteup.handleChange}
                    required
                    SelectProps={{ native: true }}
                    value={validTo}
                    variant="outlined"
                    inputRef={register}
                  ></TextField>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  );
};

export default ClientIdentification;
