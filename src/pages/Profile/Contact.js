import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, IconButton, Typography, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Button } from '@material-ui/core';
import { Mail, LinkedIn, Close, Edit } from '@material-ui/icons';
import useStyles from '../../styles/EducationCardStyles';
import CloseIcon from '@material-ui/icons/Close';

const Contact = () => {
  const classes = useStyles();

  const [isEditing, setIsEditing] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState({
    linkedInURL: 'https://www.linkedin.com/in/pavan-kumar-m-306847195',
    email: 'pavankumarmpk3@gmail.com',
  });

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleSaveChanges = () => {
    setContactInfo({
      linkedInURL: linkedInURLValue,
      email: emailValue,
    });
    setDialogOpen(false);
    setIsEditing(false);
  };

  const handleEditIconClick = () => {
    setIsEditing(true);
    setDialogOpen(true);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContactInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const { linkedInURL, email } = contactInfo;
  const linkedInURLValue = isEditing ? linkedInURL : '';
  const emailValue = isEditing ? email : '';

  return (
    <div className={classes.container}>
      <div className={classes.titleContainer}>
        <Typography variant="h6" className={classes.title}>
          Contact Info
        </Typography>
        <div>
          <IconButton className={classes.editButton} aria-label="Edit contact" onClick={handleEditIconClick}>
            <Edit />
          </IconButton>
        </div>
      </div>

      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <LinkedIn className={classes.contact_icon} sx={{ paddingRight: '8px' }} />
          <div>
            <Typography sx={{ fontWeight: 'bold' }}>
              Profile
            </Typography>
            <Typography variant="subtitle2" className={classes.link}>
              <a href={linkedInURL} target="_blank" rel="noopener noreferrer">
                {linkedInURL}
              </a>
            </Typography>
          </div>
        </CardContent>
      </Card>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Mail className={classes.contact_icon}  />
          <div>
            <Typography  sx={{ fontWeight: 'bold' }}>
              Email
            </Typography>
            <Typography variant="subtitle2" className={classes.link}>
              <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
                {email}
              </a>
            </Typography>
          </div>
        </CardContent>
      </Card>

  
      <Dialog open={dialogOpen} onClose={handleCloseDialog} classes={{ paper: classes.dialog }}>
        <DialogTitle>
          <div className={classes.DialogTitle}>
            Add Contact
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
            name="linkedInURL"
            label="LinkedIn URL"
            type="url"
            variant="outlined"
            required
            fullWidth
            value={linkedInURLValue}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            variant="outlined"
            required
            fullWidth
            value={emailValue}
            onChange={handleInputChange}
          />
 
          
          
        </DialogContent>
        <div className="card-separator" />
        <DialogActions>
          <Button onClick={handleSaveChanges} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contact;
