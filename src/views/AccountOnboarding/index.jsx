import React from "react";
import {
  Tabs,
  Tab,
  AppBar,
  Divider,
  Paper,
  Container,
  makeStyles,
  Box,
} from "@material-ui/core";
import Page from "../../components/Page";

//import '../styles/home.css';
// import "../styles/AccountOnboarding.css";
import Grid from "@material-ui/core/Grid";

import RMTagging from "./RMTagging/index";
import KYCWriteup from "./KYCWriteup/index";
import RiskAssessment from "./RiskAssessment/index";
import DocumentUpload from "./DocumentUpload/index";
import SubmitAccountOnboarding from "./Submit/index";

//import RMTagging1 from "./RMTagging/index";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
  },
  tabs: {
    marginTop: theme.spacing(3),
  },
  pageClass: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(3),
  },
  indicator: {
    backgroundColor: "#c0bb2d",
    height: "5px",
    top: "45px",
  },
  flexContainer: {
    height: "50px",
    background: "#c02d4d",
  },
  selected: {
    background: "#c02d4d",
    color: "white",
  },
}));

const AccountOnboarding = (props) => {
  // const { match, history } = props;
  // const { params } = match;
  // const { page } = params;

  const classes = useStyles();

  const tabNameToIndex = {
    1: "rmTagging",
    2: "kycWriteup",
    3: "riskAssessment",
    4: "documentUpload",
    5: "submit",
  };

  const indexToTabName = {
    rmTagging: 1,
    kycWriteup: 2,
    riskAssessment: 3,
    documentUpload: 4,
    submit: 5,
  };

  const [selectedTab, setSelectedTab] = React.useState("rmTagging");

  const handleTabsChange = (event, newValue) => {
    //alert(newValue);
    console.log(newValue);
    //history.push(`/accountOnboarding/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  const tabs = [
    { value: "rmTagging", label: "RM Tagging" },
    { value: "kycWriteup", label: "KYC Writeup" },
    { value: "riskAssesment", label: "Risk Assesment" },
    { value: "documentUpload", label: "Document Upload" },
    { value: "submit", label: "Submit" },
  ];

  const toggleTab = (newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Container maxWidth={false}>
      <Page className={classes.pageClass} title="Account Onboarding">
        <Tabs
          classes={{
            flexContainer: classes.flexContainer,
            indicator: classes.indicator,
          }}
          onChange={handleTabsChange}
          scrollButtons="auto"
          value={selectedTab}
          variant="scrollable"
        >
          {tabs.map((tab) => (
            <Tab
              className={classes.selected}
              key={tab.value}
              label={tab.label}
              value={tab.value}
            />
          ))}
        </Tabs>

        <Box mt={3}>
          <div className={classes.content}>
            {selectedTab === "rmTagging" && <RMTagging />}
            {selectedTab === "kycWriteup" && <KYCWriteup />}
            {selectedTab === "riskAssesment" && <RiskAssessment />}
            {selectedTab === "documentUpload" && <DocumentUpload />}
            {selectedTab === "submit" && <SubmitAccountOnboarding />}
          </div>
        </Box>
      </Page>
    </Container>
  );
};

export default AccountOnboarding;
