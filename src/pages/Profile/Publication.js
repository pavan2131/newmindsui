import React, { useState } from 'react';
import { Card, CardContent, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import '../../styles/Layout.css';
import useStyles from '../../styles/EducationCardStyles';

const Publication = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState({
    title: '',
    date: '',
    inputLink: '',
  });
  const [educationCards, setEducationCards] = useState([]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEducationDetails({
      title: '',
      date: '',
      inputLink: '',
    });
  };

  const handleSaveEducation = () => {
    const newEducationCard = (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <div>
            <Typography variant="subtitle2" className={classes.boldText}>
              {educationDetails.title}
            </Typography>
            <Typography variant="subtitle2">{educationDetails.date}</Typography>
            {educationDetails.inputLink && (
            
              <Button className={classes.skillButton}  href={educationDetails.inputLink}>
              <Typography variant="body2" color="inherit">
               Show Publication
              </Typography>
            </Button>
            )}
          </div>
        </CardContent>
      </Card>
    );

    setEducationCards((prevCards) => [...prevCards, newEducationCard]);
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
          Publication
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

      {educationCards.map((card, index) => (
        <div key={index}>
          {card}
          {index !== educationCards.length - 1 && <div className="card-separator" />}
        </div>
      ))}

      <Dialog open={dialogOpen} onClose={handleCloseDialog} classes={{ paper: classes.dialog }}>
        <DialogTitle>
          <div className={classes.DialogTitle}>
            Add publication
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
          <TextField
            margin="dense"
            name="date"
           
            type="date"
            variant="outlined"
            required
            fullWidth
            value={educationDetails.date}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="inputLink"
            label="Input Link"
            type="text"
            variant="outlined"
            fullWidth
            value={educationDetails.inputLink}
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

export default Publication;
