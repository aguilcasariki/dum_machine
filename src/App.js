
import './App.css';
import { useState } from 'react';
import { Paper,Box,Grid,Typography, Container,Button } from '@mui/material';

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

const App = () => {
  const [letter, setLetter] = useState("");
  const handleClick = (event) => {
    setLetter(event.target.id);
    const sound = document.getElementById(event.target.name);
    console.log(sound);
    sound.play();
  };

  const handleKeyPress = (event) => {
    var btnPress = document.getElementById(
      bankOne.find((e, i) => e.keyCode === event.keyCode).id
    );

    setLetter(btnPress.id);
    const sound = document.getElementById(btnPress.name);
    sound.play();
  };
  document.addEventListener("keydown", handleKeyPress);

  return (
    <div id="drum-machine">
      <Container maxWidth="sm">
      <Box marginTop={20}>
        <Paper elevation={10}>
          <Grid
            container
          padding={4}
            display="flex"
            flexDirection={{ xs: "column", md: "row" }}
            alignContent="center"
          >
            <Grid item xs={6}>
              <Grid container spacing={2}>
                {bankOne.map((e, i) => {
                  return (
                    <Grid item xs={4} key={i}>
                      <Button
                        className="drum-pad"
                        variant='contained'
                        color='success'
                        onClick={handleClick}
                        id={e.id}
                        keycode={e.keyCode}
                        name={e.keyTrigger}
                        style={{ width: "3rem" }}
                      >
                        <audio
                          src={e.url}
                          id={e.keyTrigger}
                          className="clip"
                        ></audio>
                        {e.keyTrigger}
                      </Button>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>

            <Grid
              item
              xs={6}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              paddingTop={{xs:2,md:0}}
              
            >
              <div
                id="display"
                style={{display:"flex",justifyContent:"center"}}
              >
                <Typography variant="h3" color="green" component="h1">
                  {letter}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </Box>
      </Container>
    </div>
  );
};

export default App;
