import React, { useEffect, useRef, useState } from "react";
import { withStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";


import DataService from "../../services/DataService";
import styles from "./styles";

const Home = (props) => {
  const { classes } = props;

  console.log(
    "================================== Home ======================================"
  );

  const inputFile = useRef(null);

  // Component States
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [question, setQuestion] = useState("");

  // Setup Component
  useEffect(() => {}, []);

  // Handlers
  const handleImageUploadClick = () => {
    inputFile.current.click();
  };

  const handleSubmit = (event) => {
    console.log("loginfile", event.target.files);

    var formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("question", event.target.question);
    DataService.Predict(formData).then(function (response) {
      console.log(response.data);
      setPrediction(response.data);
    });
  };
  return (
    <div className={classes.root}>
      <form onSubmit={handleSubmit}>
        <main className={classes.main}>
          <Container maxWidth="md" className={classes.container}>
            {prediction && (
              <Typography variant="h4" gutterBottom align="center">
                {!prediction.poisonous && (
                  <span className={classes.safe}>
                    {prediction.prediction_label +
                      " (" +
                      prediction["accuracy"] +
                      "%)"}
                  </span>
                )}
                {prediction.poisonous && (
                  <span className={classes.poisonous}>
                    {prediction.prediction_label +
                      " (" +
                      prediction["accuracy"] +
                      "%)"}
                    &nbsp;&nbsp;Poisonous
                  </span>
                )}
              </Typography>
            )}
            <h3>Image:</h3>
            <div
              className={classes.dropzone}
              onClick={() => handleImageUploadClick()}
            >
              <input
                type="file"
                accept="image/*"
                capture="camera" //
                on
                autocomplete="off"
                tabindex="-1"
                className={classes.fileInput}
                ref={inputFile}
                onChange={(e) =>
                  setImage(URL.createObjectURL(e.target.files[0]))
                }
              />
              <div>
                <img className={classes.preview} src={image} alt="" />
              </div>
              <div className={classes.help}>
                Click to take a picture!
              </div>
            </div>
            <div>
              <h3>Question:</h3>
              <input
                label="Question"
                onChange={(e) => setQuestion(e.target.value)}
                type="text"
                value={question}
              />
            </div>
            <div>
              <input type="Submit" />
            </div>
          </Container>
        </main>
      </form>
    </div>
  );
};

export default withStyles(styles)(Home);
