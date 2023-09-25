import React, { useState } from 'react';
import { Card, CardContent, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import '../../styles/Layout.css';
import useStyles from '../../styles/EducationCardStyles';
import { styled } from '@mui/material/styles';

const MaxLinesTypography = styled(Typography)(({ theme }) => ({
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': '2.5', // Maximum number of lines to be displayed
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxHeight: '4.5em', // Height of two and a half lines
  }));
  
const ProjectsCard = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState({
    Project: '',
    Description: '',
    StartDate: '',
    EndDate: '',
    Link: '',
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
              alt="Project"
              className={classes.logo}
            />
          )}
          
          <div>
            
            <Typography variant="subtitle2" className={classes.boldText}>
              {educationDetails.Project}
            </Typography>
            
            <MaxLinesTypography variant="body2" color="text.secondary" textAlign="left">
            {educationDetails.Description}
          </MaxLinesTypography>
            {educationDetails.inputLink && (
            
            <Button className={classes.skillButton}  href={educationDetails.inputLink}>
            <Typography variant="body2" color="inherit">
             Show Project
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
          Project
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
            Add Project
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
            name="Project"
            label="Project"
            type="text"
            variant="outlined"
            required
            fullWidth
            value={educationDetails.Project}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="Description"
            label="Description"
            multiline
        minRows={3}
            type="text"
            variant="outlined"
            fullWidth
            value={educationDetails.Description}
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

export default ProjectsCard;
