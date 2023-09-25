import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(2),
    background: '#ffffff',
    borderRadius:'8px',
  },

  titleContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  title: {
    fontSize: '1.5rem',
  },
  card: {
    boxShadow: 'none',
    border: 'none',
   
  },
  cardContent: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    width: '48px',
    height: '48px',
    marginRight: theme.spacing(2),
  },
  contact_icon:
  {
   
    marginRight: theme.spacing(2),
  },
  boldText: {
    fontWeight: 'bold',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
    
  },
  dialog: {
    minWidth: '800px', // Set the desired width for the dialog
    maxHeight:'650px',
   borderRadius: '8px'
  },
  DialogTitle:{
    display: 'flex',
     justifyContent: 'space-between',
      alignItems: 'center',
      
  },
  skillButton: {
    borderRadius: theme.spacing(5),
    border: `2px solid ${theme.palette.grey[400]}`,
    color: theme.palette.grey[400],
    textTransform: 'none',
    padding: theme.spacing(1, 2),
    
    '&:hover': {
      borderColor: theme.palette.grey[600],
    },
  
  },
  skillcontainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: theme.spacing(1),
    boxShadow: 'None',
  },
}));

export default useStyles;
