import ReactGA from "react-ga4";

const gaEventTracker = ({
  category = "err",
  action = "Tracking Buttons",
  label = "Buttons",
}) => {
  console.log("1", category);
  ReactGA.event({ category, action, label }, { debug: true });
  console.log("2", category);
};
export default gaEventTracker;
