import { makeStyles } from "@material-ui/core/styles";
import { Tooltip } from "@material-ui/core";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
    zIndex: 10001,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: "0.9rem",
    fontFamily: "inherit",
    zIndex: 10001,
  },
}));

function BlackToolTip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default BlackToolTip;
