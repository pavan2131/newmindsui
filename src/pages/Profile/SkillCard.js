import React, { useState } from 'react';
import { Card, CardContent, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import '../../styles/Layout.css';
import useStyles from '../../styles/EducationCardStyles';

const SkillCard = () => {
  const classes = useStyles();

  const [dialogOpen, setDialogOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState({
    title: '',
  });
  const [educationCards, setEducationCards] = useState([]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEducationDetails({
      title: '',
    });
  };

  const handleSaveEducation = () => {
    setEducationCards((prevCards) => [...prevCards, educationDetails]);
    handleCloseDialog();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEducationDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h6" className={classes.title}>
          Skills
        </Typography>
        <div>
          <IconButton className={classes.addButton} aria-label="Add new publication" onClick={handleOpenDialog}>
            <AddIcon />
          </IconButton>
          <IconButton className={classes.addButton} aria-label="Edit publication">
            <EditIcon />
          </IconButton>
        </div>
      </div>

      <div className={classes.skillcontainer}>
        {educationCards.map((education, index) => ( // Use educationCards to map the skills
          <Button key={index} className={classes.skillButton}>
            <Typography variant="body2" color="inherit">
              {education.title}
            </Typography>
          </Button>
        ))}
      </div>

      <Dialog open={dialogOpen} onClose={handleCloseDialog} classes={{ paper: classes.dialog }}>
        <DialogTitle>
          <div className={classes.DialogTitle}>
            Add skills
            <IconButton aria-label="Close" className={classes.closeButton} onClick={handleCloseDialog}>
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        <div className="card-separator" />
        <DialogContent className={classes.dialogContent}>
          <span>* Indicates required</span>
          <TextField
            autoFocus
            margin="dense"
            name="title"
            label="Title"
            type="text"
            variant="outlined"
            required
            fullWidth
            value={educationDetails.title}
            onChange={handleInputChange}
          />
        </DialogContent>
        <div className="card-separator" />
        <DialogActions>
          <Button onClick={handleSaveEducation} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default SkillCard;
