import { nanoid } from 'nanoid';
import Dropzone from 'react-dropzone';
import { Controller } from 'react-hook-form';
import { makeStyles } from 'tss-react/mui';

import { CloudUpload, InsertDriveFile } from '@mui/icons-material';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';

const useStyles = makeStyles()({
  root: {
    backgroundColor: '#eee',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#333',
    padding: '10px',
    marginTop: '20px',
  },
  icon: {
    marginTop: '16px',
    color: '#888888',
    fontSize: '42px',
  },
});

export const FileInput = ({ control, name }: any) => {
  const { classes } = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={[]}
      render={({ onChange, onBlur, value }: any) => (
        <>
          <Dropzone onDrop={onChange}>
            {({ getRootProps, getInputProps }) => (
              <Paper
                variant="outlined"
                className={classes.root}
                {...getRootProps()}
              >
                <CloudUpload className={classes.icon} />
                <input {...getInputProps()} name={name} onBlur={onBlur} />
                <p>
                  Drag &apos;n&apos; drop files here, or click to select files
                </p>
              </Paper>
            )}
          </Dropzone>
          <List>
            {value.map((f: any) => (
              <ListItem key={nanoid()}>
                <ListItemIcon>
                  <InsertDriveFile />
                </ListItemIcon>
                <ListItemText primary={f.name} secondary={f.size} />
              </ListItem>
            ))}
          </List>
        </>
      )}
    />
  );
};
