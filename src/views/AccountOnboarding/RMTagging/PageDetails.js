import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  MenuItem,
} from "@material-ui/core";

import relationshipManagerNameInJSON from "../data/relationshipManagerName.json";

import entityDataInJSON from "../data/entity.json";
import rmSalesCodeDataInJSON from "../data/rmSalesCode.json";
import lmNameDataInJSON from "../data/lmName.json";
import accountTypeDataInJSON from "../data/accountType.json";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const PageDetails = ({ className, ...rest }) => {
  const { register, handleSubmit } = useForm();

  const classes = useStyles();

  const [values, setValues] = useState({
    relManagerNameVal: "relManagerNameA",
    entityVal: "entityValA",
    rmSalesCodeVal: "rmSalesCodeValA",
    lmNameVal: "lmNameValA",
    accountTypeVal: "accountTypeValA",
  });

  const [
    relManagerNameDrpdwnVals,
    setRelManagerNameDrpdwnVals,
  ] = React.useState([]);

  const [entityDrpdwnVals, setEntityDrpdwnVals] = useState([]);
  const [rmSalesCodeDrpdwnVals, setRmSalesCodeDrpdwnVals] = useState([]);
  const [lmNameDrpdwnVals, setLmNameDrpdwnVals] = useState([]);
  const [accountTypeDrpdwnVals, setAccountTypeDrpdwnVals] = useState([]);

  useEffect(() => {
    setRelManagerNameDrpdwnVals(
      relationshipManagerNameInJSON.drpDownVals.map((val) => ({
        label: val.label,
        value: val.value,
      }))
    );

    setEntityDrpdwnVals(
      entityDataInJSON.drpDownVals.map((values) => ({
        label: values.label,
        value: values.value,
      }))
    );

    setRmSalesCodeDrpdwnVals(
      rmSalesCodeDataInJSON.drpDownVals.map((values) => ({
        label: values.label,
        value: values.value,
      }))
    );

    setLmNameDrpdwnVals(
      lmNameDataInJSON.drpDownVals.map((values) => ({
        label: values.label,
        value: values.value,
      }))
    );

    setAccountTypeDrpdwnVals(
      accountTypeDataInJSON.drpDownVals.map((values) => ({
        label: values.label,
        value: values.value,
      }))
    );
  }, []);

  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (data) => {
    console.log(data);
    alert(JSON.stringify(data));
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Card>
        <CardHeader subheader="" title="RM Mapping to Client" />
        <Divider />
        <CardContent>
          <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select Relationship Manager Name"
                name="relManagerNameVal"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.relManagerNameVal}
                variant="outlined"
                inputRef={register}
              >
                {relManagerNameDrpdwnVals.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select Entity"
                name="entityVal"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.entityVal}
                variant="outlined"
                inputRef={register}
              >
                {entityDrpdwnVals.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select RM Sales Code"
                name="rmSalesCodeVal"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.rmSalesCodeVal}
                variant="outlined"
                inputRef={register}
              >
                {rmSalesCodeDrpdwnVals.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select LM Name"
                name="lmNameVal"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.lmNameVal}
                variant="outlined"
                inputRef={register}
              >
                {lmNameDrpdwnVals.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                fullWidth
                label="Select Account Type"
                name="accountTypeVal"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.accountTypeVal}
                variant="outlined"
                inputRef={register}
              >
                {accountTypeDrpdwnVals.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}></Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box display="flex" justifyContent="flex-end" p={2}>
          <div className={classes.root}>
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
      </Card>
    </form>
  );
};

PageDetails.propTypes = {
  className: PropTypes.string,
};

export default PageDetails;
