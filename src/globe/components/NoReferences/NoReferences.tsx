import { Box } from "@material-ui/core";
// import lostXtrem from "/images/lostXtrem.png";

export const NoReferences = () => {
  return (
    <Box>
      <img
        src="/images/lostXtrem.png"
        width="250"
        border-radius="50%"
        alt="Logo"
style={{
          borderRadius: "50%",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "20px 20px 50px grey",
          display: "block",
        }}

      />
      <h2>
        We have not listed any club in this country for the moment. Feel free to
        submit one !
      </h2>
    </Box>
  );
};
