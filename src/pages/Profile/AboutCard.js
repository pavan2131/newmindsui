import React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import CloseIcon from '@mui/icons-material/Close';
import "../../styles/Layout.css"
const MaxLinesTypography = styled(Typography)(({ theme }) => ({
  display: '-webkit-box',
  '-webkit-box-orient': 'vertical',
  '-webkit-line-clamp': '2.5', // Maximum number of lines to be displayed
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxHeight: '4.5em', // Height of two and a half lines
}));

const SeeMoreButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

const CancelButtonContainer = styled('div')({
  display: 'flex',
  justifyContent: 'flex-end',
});

export default function AboutCard() {
  const [expanded, setExpanded] = React.useState(false);
  const [editing, setEditing] = React.useState(false);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [content, setContent] = React.useState(
    'This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.'
  );
  const [originalContent, setOriginalContent] = React.useState(content);

  const handleEditClick = () => {
    setOriginalContent(content);
    setEditing(true);
    setDialogOpen(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
    setDialogOpen(false);
    // Save the edited content
    // You can implement your logic here to update the content variable or perform API calls to save the changes
  };

  const handleCancelClick = () => {
    setEditing(false);
    setDialogOpen(false);
    setContent(originalContent);
    // Reset the content to its original value
  };

  const handleSeeMoreClick = () => {
    setExpanded(true);
  };

  const handleSeeLessClick = () => {
    setExpanded(false);
  };

  return (
    <Card sx={{ boxShadow: 'none',borderRadius:'8px' }}>
      <CardHeader 
        action={
          <div>
            <IconButton aria-label="settings" onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
          </div>
        }
        titleTypographyProps={{ textAlign: 'left' }}
        title="About"
      />
      <CardContent>
        {editing ? (
          <TextField multiline fullWidth value={content} onChange={(e) => setContent(e.target.value)} />
        ) : expanded ? (
          <Typography variant="body2" color="text.secondary" textAlign="left">
            {content}
          </Typography>
        ) : (
          <MaxLinesTypography variant="body2" color="text.secondary" textAlign="left">
            {content}
          </MaxLinesTypography>
        )}
        {!expanded && (
          <SeeMoreButtonContainer>
            <Button color="primary" onClick={handleSeeMoreClick}>
              See More...
            </Button>
          </SeeMoreButtonContainer>
        )}
        {expanded && (
          <SeeMoreButtonContainer>
            <Button color="primary" onClick={handleSeeLessClick}>
              See Less
            </Button>
          </SeeMoreButtonContainer>
        )}
      </CardContent>

      <Dialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "800px", // Set your width here
            },
          },
        }}
      >
        <DialogTitle>
          <span>Edit Content</span>
          <CancelButtonContainer>
            <IconButton aria-label="close" onClick={handleCancelClick} sx={{ position: 'absolute', right: 0, top: 0 }}>
              <CloseIcon />
            </IconButton>
          </CancelButtonContainer>
        </DialogTitle>
        <DialogContent>
          <TextField multiline fullWidth value={content} onChange={(e) => setContent(e.target.value)} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSaveClick}>Save</Button>
        </DialogActions>
      </Dialog>
    </Card>
  );
}
