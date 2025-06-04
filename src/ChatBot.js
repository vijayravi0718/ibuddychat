import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack,
  AppBar,
  Toolbar,
  Container
} from "@mui/material";

function ChatBot() {
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you?", from: "bot" }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { text: input, from: "user" }];
    const botResponse = {
      text: "You said: " + input,
      from: "bot"
    };
    setMessages([...newMessages, botResponse]);
    setInput("");
  };

  return (
    <Container maxWidth="sm" sx={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Instant Buddy Chat</Typography>
        </Toolbar>
      </AppBar>

      <Paper
        elevation={3}
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          mt: 2,
          mb: 1,
          bgcolor: "#f9f9f9",
          borderRadius: 2
        }}
      >
        <Stack spacing={1}>
          {messages.map((msg, idx) => (
            <Box
              key={idx}
              sx={{
                alignSelf: msg.from === "user" ? "flex-end" : "flex-start",
                bgcolor: msg.from === "user" ? "#1976d2" : "#e0e0e0",
                color: msg.from === "user" ? "white" : "black",
                px: 2,
                py: 1,
                borderRadius: 2,
                maxWidth: "70%"
              }}
            >
              {msg.text}
            </Box>
          ))}
        </Stack>
      </Paper>

      <Box sx={{ display: "flex", gap: 1 }}>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <Button variant="contained" onClick={sendMessage}>
          Send
        </Button>
      </Box>
    </Container>
  );
}

export default ChatBot;
