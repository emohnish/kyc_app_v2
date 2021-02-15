import React, { useState, useEffect } from "react";
//import '../styles/mytasks.css';

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

import entityDataInJSON from "../data/entity.json";
import relationshipManagerNameInJSON from "../data/relationshipManagerName.json";
import rmSalesCodeDataInJSON from "../data/rmSalesCode.json";
import lmNameDataInJSON from "../data/lmName.json";
import accountTypeDataInJSON from "../data/accountType.json";

import {
  Typography,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  FormLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { useForm } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
}));

const RMTagging = () => {
  const { register, handleSubmit } = useForm();

  const [relManagerNameVal, setRelManagerNameVal] = useState(0);
  const [entityVal, setEntityVal] = useState(0);
  const [rmSalesCodeVal, setRmSalesCodeVal] = useState(0);
  const [lmNameVal, setLmNameVal] = useState(0);
  const [accountTypeVal, setAccountTypeVal] = useState(0);

  const [
    relManagerNameDrpdwnVals,
    setRelManagerNameDrpdwnVals,
  ] = React.useState([]);

  const [entityDrpdwnVals, setEntityDrpdwnVals] = useState([]);
  const [rmSalesCodeDrpdwnVals, setRmSalesCodeDrpdwnVals] = useState([]);
  const [lmNameDrpdwnVals, setLmNameDrpdwnVals] = useState([]);
  const [accountTypeDrpdwnVals, setAccountTypeDrpdwnVals] = useState([]);

  useEffect(() => {
    //console.log(relManagerNameVal);
    //const entityData1 = JSON.parse(entityDataInJSON);
    //console.log(entityData1.values);
    //setEntityData(entityData1.map({ (e, key) }) => ({ label: name, value: name }));
    //setEntityData(
    //  entityDataInJSON.values.map((label, value) => console.log(label))
    //);

    //console.log(entityDataInJSON.values);

    setRelManagerNameDrpdwnVals(
      relationshipManagerNameInJSON.drpDownVals.map((values) => ({
        label: values.label,
        value: values.value,
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

    //console.log(entityData);
  }, [relManagerNameVal, entityVal, rmSalesCodeVal, lmNameVal, accountTypeVal]);

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const classes = useStyles();

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Typography variant="h6" gutterBottom>
          RM Mapping to Client
        </Typography>

        <Box m={2} p={1} display="block">
          <Grid container>
            <Grid item xs={4}>
              <Typography variant="body2" gutterBottom>
                Relationship Manager Name
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <FormControl>
                <select
                  name="relManagerName"
                  ref={register}
                  value={relManagerNameVal}
                  onChange={(e) => setRelManagerNameVal(e.currentTarget.value)}
                >
                  {relManagerNameDrpdwnVals.map((values) => {
                    return (
                      <option key={values.value} value={values.value}>
                        {values.label}
                      </option>
                    );
                  })}
                </select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="body2" gutterBottom>
                Entity
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <FormControl>
                <select
                  name="entity"
                  ref={register}
                  value={entityVal}
                  onChange={(e) => setEntityVal(e.currentTarget.value)}
                >
                  {entityDrpdwnVals.map((values) => {
                    return (
                      <option key={values.value} value={values.value}>
                        {values.label}
                      </option>
                    );
                  })}
                </select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="body2" gutterBottom>
                RM Sales Code
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <FormControl>
                <select
                  name="rmSalesCode"
                  ref={register}
                  value={rmSalesCodeVal}
                  onChange={(e) => setRmSalesCodeVal(e.currentTarget.value)}
                >
                  {rmSalesCodeDrpdwnVals.map((values) => {
                    return (
                      <option key={values.value} value={values.value}>
                        {values.label}
                      </option>
                    );
                  })}
                </select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="body2" gutterBottom>
                LM Name
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <FormControl>
                <select
                  name="lmName"
                  ref={register}
                  value={lmNameVal}
                  onChange={(e) => setLmNameVal(e.currentTarget.value)}
                >
                  {lmNameDrpdwnVals.map((values) => {
                    return (
                      <option key={values.value} value={values.value}>
                        {values.label}
                      </option>
                    );
                  })}
                </select>
              </FormControl>
            </Grid>

            <Grid item xs={4}>
              <Typography variant="body2" gutterBottom>
                Account Type
              </Typography>
            </Grid>
            <Grid item xs={1}></Grid>
            <Grid item xs={7}>
              <FormControl>
                <select
                  name="accountType"
                  ref={register}
                  value={accountTypeVal}
                  onChange={(e) => setAccountTypeVal(e.currentTarget.value)}
                >
                  {accountTypeDrpdwnVals.map((values) => {
                    return (
                      <option key={values.value} value={values.value}>
                        {values.label}
                      </option>
                    );
                  })}
                </select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={12}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <div className={classes.root}>
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
          </Grid>
        </Box>
      </form>
    </div>
  );
};

export default RMTagging;
