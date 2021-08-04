import { Tooltip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontSize: "0.9rem",
    fontFamily: "inherit",
  },
}));

function BlackToolTip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default BlackToolTip;
