import React, { useState } from 'react';
import { Card, CardContent, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import '../../styles/Layout.css';
import useStyles from '../../styles/EducationCardStyles';

const EducationCard = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState({
    university: '',
    degree: '',
    duration: '',
    grade: '',
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [educationCards, setEducationCards] = useState([]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
    setSelectedImage(null); // Reset selected image when the dialog opens
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setSelectedImage(null);
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
  };

  const handleSaveEducation = () => {
    const newEducationCard = (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Post-Graduation University, Country logo"
              className={classes.logo}
            />
          )}
          
          <div>
            
            <Typography variant="subtitle2" className={classes.boldText}>
              {educationDetails.university}
            </Typography>
            <Typography variant="subtitle2">{educationDetails.degree}</Typography>
            <Typography variant="subtitle2">{educationDetails.duration}</Typography>
            <Typography variant="body2">Grade: {educationDetails.grade}</Typography>
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

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h6" className={classes.title}>
          Education
        </Typography>
        <div>
          <IconButton className={classes.addButton} aria-label="Add new education" onClick={handleOpenDialog}>
            <AddIcon />
          </IconButton>
          <IconButton className={classes.addButton} aria-label="Edit education">
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
            Add education
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
            name="university"
            label="University"
            type="text"
            variant="outlined"
            required
            fullWidth
            value={educationDetails.university}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="degree"
            label="Degree"
            type="text"
            variant="outlined"
            fullWidth
            value={educationDetails.degree}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="duration"
            label="Duration"
            type="text"
            variant="outlined"
            fullWidth
            value={educationDetails.duration}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="grade"
            label="Grade"
            type="text"
            variant="outlined"
            fullWidth
            value={educationDetails.grade}
            onChange={handleInputChange}
          />
          <input
            accept="image/*"
            id="upload-photo"
            type="file"
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
          <label htmlFor="upload-photo">
            <Button variant="outlined" component="span">
              Upload Photo
            </Button>
          </label>
          {selectedImage && (
            <div className={classes.imageContainer}>
              <img
                src={selectedImage}
                alt="Post-Graduation University, Country logo"
                className={classes.logo}
              />
              <Button variant="outlined" color="secondary" className='MuiButton' onClick={handleRemoveImage}>
                Remove Image
              </Button>
            </div>
          )}
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

export default EducationCard;
