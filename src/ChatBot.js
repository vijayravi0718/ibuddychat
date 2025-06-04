import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  Stack
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
    <Paper
      elevation={10}
      sx={{
        width: 350,
        height: 500,
        borderRadius: 3,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        bgcolor: "white",
        overflow: "hidden",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      {/* Header */}
      <Box
        sx={{
          bgcolor: "#1976d2",
          color: "white",
          px: 2,
          py: 1.5,
          fontWeight: 600,
          fontSize: 16
        }}
      >
        Instant Buddy Chat
      </Box>

      {/* Messages */}
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 2,
          py: 1,
          background: "#f5f5f5"
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
                maxWidth: "75%",
                fontSize: 14
              }}
            >
              {msg.text}
            </Box>
          ))}
        </Stack>
      </Box>

      {/* Input */}
      <Box
        sx={{
          display: "flex",
          p: 1,
          borderTop: "1px solid #ddd",
          bgcolor: "#f9f9f9"
        }}
      >
        <TextField
          fullWidth
          size="small"
          variant="outlined"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          sx={{ bgcolor: "white" }}
        />
        <Button
          onClick={sendMessage}
          variant="contained"
          sx={{
            ml: 1,
            borderRadius: 2,
            px: 3,
            fontWeight: 600
          }}
        >
          SEND
        </Button>
      </Box>
    </Paper>
  );
}

export default ChatBot;
