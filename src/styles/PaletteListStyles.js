export default {
  root: {
    backgroundColor: "blue",
    height: "100vh",
    display: "flex",
    alinItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    color: "white",
    justifyContent: "space-between",
  },
  palettes: {
    boxSizing: "border-box",
    display: "grid",
    width: "100%",
    gridTemplateColumns: "repeat(3,30%)",
    gridGap: "5%",
  },
};
