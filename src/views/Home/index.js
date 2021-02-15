import React, { useState } from "react";
import { Box, Container, makeStyles, Tabs, Tab } from "@material-ui/core";
import Page from "../../components/Page";
import Results from "./Results";
import Toolbar from "./Toolbar";
import data from "./data";
import PropTypes from "prop-types";

// import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3),
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

const HomeView = (props) => {
  console.log(props);
  const { match, history } = props;
  //const { params } = match;
  //const { page } = params;

  const classes = useStyles();
  const [customers] = useState(data);

  console.log(history);

  const [selectedTab, setSelectedTab] = useState("myTasks");

  const handleTabsChange = (event, value) => {
    // history.push(value);
    setSelectedTab(value);
  };

  const tabs = [
    { value: "myTasks", label: "My Tasks" },
    { value: "myTeamTasks", label: "My Team Tasks" },
  ];

  return (
    <Container maxWidth={false}>
      <Page className={classes.pageClass} title="">
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
            {selectedTab === "myTasks" && <Results customers={customers} />}
            {selectedTab === "myTeamTasks" && <Results customers={customers} />}
          </div>
        </Box>
      </Page>
    </Container>
  );
};

HomeView.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired,
};

export default HomeView;
