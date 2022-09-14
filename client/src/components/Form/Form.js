import React, { useState } from "react";
import useStyles from "./styles";
import { Typography, Button, Paper, TextField } from "@material-ui/core";
import FileBase from "react-file-base64";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleSubmit = () => {};
  const clear = () => {};
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
        className={classes.form}
      >
        <Typography variant="h6">Create a Memory</Typography>

        <TextField
          variant="outlined"
          name="creator"
          label="Creator"
          value={postData.creator}
          onChange={(e) => {
            setPostData({ ...postData, creator: e.target.value });
          }}
          fullWidth
        />
        <TextField
          variant="outlined"
          name="title"
          label="Title"
          value={postData.title}
          onChange={(e) => {
            setPostData({ ...postData, title: e.target.value });
          }}
          fullWidth
        />
        <TextField
          variant="outlined"
          name="message"
          label="Message"
          value={postData.message}
          onChange={(e) => {
            setPostData({ ...postData, message: e.target.value });
          }}
          fullWidth
        />
        <TextField
          variant="outlined"
          name="tags"
          label="Tags"
          value={postData.tags}
          onChange={(e) => {
            setPostData({ ...postData, tags: e.target.value });
          }}
          fullWidth
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={(base64) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
        <Button
          color="secondary"
          variant="contained"
          size="large"
          fullWidth
          onClick={clear}
        >
          Reset
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
