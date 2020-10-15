export default {
  root: {
    backgroundColor: "white",
    overflow: "hidden",
    border: "1px solid black",
    position: "relative",
    borderRadius: "5px",
    padding: "0.5rem",
    "&:hover": {
      cursor: "pointer",
    },
  },
  colors: {
    backgroundColor: "#dae1e4",
    height: "120px",
    width: "100%",
    borderRadius: "5px",
    overflow: "hidden",
  },
  title: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0px",

    paddingTop: "0.5rem",
    color: "black",
    fontSize: "1rem",
    //paddingTop: "0.2rem",
  },
  emoji: {
    fontSize: "1.3rem",
  },
  miniColor: {
    height: "25%",
    width: "20%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-5px",
  },
};
