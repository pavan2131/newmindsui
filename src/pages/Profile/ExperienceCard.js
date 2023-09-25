import React from 'react';
import { Card, CardContent, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close'; // Import the close icon
import mvjLogo from '../../assets/mvj.png';
import '../../styles/Layout.css';
import useStyles from '../../styles/EducationCardStyles';

const ExperienceCard = () => {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [educationDetails, setEducationDetails] = React.useState({
    title: '',
    employment_type: '',
    company: '',
    
  });
  const [educationCards, setEducationCards] = React.useState([]);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSaveEducation = () => {
    // Create a new education card with the entered details
    const newEducationCard = (
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <img src={mvjLogo} alt="Post-Graduation University, Country logo" className={classes.logo} />
          <div>
            <Typography variant="subtitle2" className={classes.boldText}>
              {educationDetails.title}
            </Typography>
            <Typography variant="subtitle2">{educationDetails.employment_type}</Typography>
            <Typography variant="subtitle2">{educationDetails.company}</Typography>
           
          </div>
        </CardContent>
      </Card>
    );

    // Update the education cards state array
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
        Experience
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
            Add experience
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
            value={educationDetails.university}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="employment_type"
            label="Employment type"
            type="text"
            variant="outlined"
            fullWidth
            value={educationDetails.degree}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="company"
            label="Company"
            type="text"
            variant="outlined"
            fullWidth
            value={educationDetails.duration}
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

export default ExperienceCard;
