import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import StarIcon from '@mui/icons-material/Star';
import DescriptionIcon from '@mui/icons-material/Description';
import SecurityIcon from '@mui/icons-material/Security';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import EditIcon from '@mui/icons-material/Edit';
import LanguageIcon from '@mui/icons-material/Language';
import BusinessIcon from '@mui/icons-material/Business';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import PauseIcon from '@mui/icons-material/Pause';
import WorkIcon from '@mui/icons-material/Work';
import FolderIcon from '@mui/icons-material/Folder';
import MailIcon from '@mui/icons-material/Mail';
import {  useDispatch } from 'react-redux';
import { itemUpdate } from '../redux/actions/action';
import store from '../redux/store';
import { useState, useEffect } from 'react';


const data = [
  {
    label: 'Core',
    icon: null,
    sublinks: [
      { label: 'Add education', icon: <SchoolIcon sx={{ color: '#666666' }} /> },
      { label: 'Add position', icon: <WorkIcon sx={{ color: '#666666' }} /> },
      { label: 'Add career break', icon: <PauseIcon sx={{ color: '#666666' }} /> },
      { label: 'Add skills', icon: <SportsSoccerIcon sx={{ color: '#666666' }} /> },
    ],
  },
  {
    label: 'Recommended',
    icon: null,
    sublinks: [
      { label: 'Add featured', icon: <FavoriteIcon sx={{ color: '#666666' }} /> },
      { label: 'Add licenses & certifications', icon: <SecurityIcon sx={{ color: '#666666' }} /> },
      { label: 'Add projects', icon: <FolderIcon sx={{ color: '#666666' }} /> },
      { label: 'Add courses', icon: <DescriptionIcon sx={{ color: '#666666' }} /> },
      { label: 'Add recommendations', icon: <StarIcon sx={{ color: '#666666' }} /> },
    ],
  },
  {
    label: 'Additional',
    icon: null,
    sublinks: [
      { label: 'Add volunteer experience', icon: <EditIcon sx={{ color: '#666666' }} /> },
      { label: 'Add publications', icon: <LanguageIcon sx={{ color: '#666666' }} /> },
      { label: 'Add patents', icon: <BusinessIcon sx={{ color: '#666666' }} /> },
      { label: 'Add honors & awards', icon: <FavoriteIcon sx={{ color: '#666666' }} /> },
      { label: 'Add test scores', icon: <PhoneIcon sx={{ color: '#666666' }} /> },
      { label: 'Add languages', icon: <LanguageIcon sx={{ color: '#666666' }} /> },
      { label: 'Add organizations', icon: <HomeIcon sx={{ color: '#666666' }} /> },
      { label: 'Add causes', icon: <FavoriteIcon sx={{ color: '#666666' }} /> },
      { label: 'Add contact info', icon: <MailIcon sx={{ color: '#666666' }} /> },
    ],
  },
];
const match = (index, sublinkIndex, sublinksCountArray) => {
  let uniqueNumber = 0;

  // Calculate the unique number based on the provided 'sublinksCountArray'
  for (let i = 0; i < index; i++) {
    uniqueNumber += sublinksCountArray[i];
  }
  uniqueNumber += sublinkIndex;
  console.log(uniqueNumber)
  return uniqueNumber;
};
const sublinksCountArray = data.map((linkData) => linkData.sublinks.length);


const NavLink = styled(ListItemButton)(({ theme }) => ({
  '& .MuiListItemText-primary': {
    color: '#666666', // Dark color (#666666) for link text
  },
}));

const ExpandIcon = styled(ListItemIcon)({
  color: '#666666', // Dark color (#666666) for expand/collapse icon
});

const CardContainer = styled(Paper)({
  width: '25%', // Set card width to 25% of 1200px resolution width
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Gray border shadow
});

export default function AddProfile() {
  const [expandedIndex, setExpandedIndex] = React.useState(0);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(itemUpdate(text));
    console.log('store', store.getState());
  }, [text, dispatch]);
  const handleToggleExpand = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };
  const handleInputChange = (val) => {
    setText(val);
  };

  return (
    <>
    <Box sx={{ display: 'flex' }}>
      <ThemeProvider
        theme={createTheme({
          components: {
            MuiListItemButton: {
              defaultProps: {
                disableTouchRipple: true,
              },
            },
          },
          palette: {
            mode: 'light', // Use light mode
            primary: { main: 'rgb(102, 157, 246)' },
            background: { paper: '#FFFFFF' }, // White background color
          },
        })}
      >
        <CardContainer elevation={0} sx={{ maxWidth: '25%', minWidth: 250, p: 2 }}>
          <List component="nav" disablePadding>
            {data.map((linkData, index) => (
              <React.Fragment key={index}>
                {index !== 0 && <Divider />}
                <NavLink
                  component="div"
                  onClick={() => handleToggleExpand(index)}
                  sx={{
                    px: 3,
                    py: 2.5,
                    '&:hover, &:focus': { '& svg': { opacity: 1 } },
                  }}
                >
                  <ExpandIcon>
                    {expandedIndex === index ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                  </ExpandIcon>
                  <ListItemText
                    primary={linkData.label}
                    primaryTypographyProps={{
                      fontSize: 15,
                      fontWeight: 'medium',
                      lineHeight: '20px',
                      mb: '2px',
                      pl: 2, // Add left padding to indent the main menu links
                    }}
                  />
                </NavLink>
                {linkData.sublinks.length > 0 && expandedIndex === index && (
                  <React.Fragment>
                    <Divider />
                    <Box sx={{ display: 'block', pl: 4 }}>
                      {linkData.sublinks.map((sublink, sublinkIndex) => (
                        <NavLink
                          key={sublinkIndex}
                          onClick={() =>  handleInputChange(match(index, sublinkIndex, sublinksCountArray))} // Attach onClick event
                        >
                          <ListItemIcon sx={{ minWidth: 32, pr: 1 }}> {/* Add right padding to separate icon */}
                            {sublink.icon}
                          </ListItemIcon>
                          <ListItemText
                            primary={sublink.label}
                            primaryTypographyProps={{ fontSize: 14, pl: 1 }} // Add left padding to align with icon
                          />
                        </NavLink>
                      ))}
                    </Box>
                  </React.Fragment>
                )}
              </React.Fragment>
            ))}
            <Divider />
          </List>
        </CardContainer>
      </ThemeProvider>
    </Box>
    
     <div className='Price'>Price {text}</div>
</>
  );
}
