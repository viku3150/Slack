import { Button } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { auth, db } from "../firebase";
import firebase from "@firebase/app-compat";
import { useAuthState } from "react-firebase-hooks/auth";

function ChatInput({ channelName, channelId, chatRef }) {
  
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const displayName = user?.displayName;
  const userImageURL = user?.photoURL;

  const sendMessage = (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    db.collection("rooms").doc(channelId).collection("messages").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      user: displayName,
      userImage: userImageURL,
    });

    setInput("");
  };
  chatRef?.current?.scrollIntoView({
    behavior: "smooth",
  });
  return (
    <ChatInputContainer>
      <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder={`Message #${channelName || "Slack"}`}
        />
        <Button hidden type="submit" onClick={sendMessage}>
          Send
        </Button>
      </form>
    </ChatInputContainer>
  );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;
  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 60%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
