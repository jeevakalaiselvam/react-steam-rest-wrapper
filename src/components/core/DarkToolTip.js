import { makeStyles, Tooltip } from "@material-ui/core";

const useStylesBootstrap = makeStyles((theme) => ({
  arrow: {
    color: theme.palette.common.black,
  },
  tooltip: {
    backgroundColor: theme.palette.common.black,
    fontFamily: "inherit",
    fontSize: "0.75rem",
  },
}));

function DarkToolTip(props) {
  const classes = useStylesBootstrap();

  return <Tooltip arrow classes={classes} {...props} />;
}

export default DarkToolTip;
