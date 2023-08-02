import { useState, createContext, useContext } from 'react';

const FlashMessageContext = createContext(null);

export function FlashMessageProvider({ children }) {

  const [showFlashMessage, setShowFlashMessage] = useState(false);
  const [flashMessage, setFlashMessage] = useState({ type: '', message: '' });

  const flashMessageProps = {
    showFlashMessage: showFlashMessage,
    setShowFlashMessage: setShowFlashMessage,
    flashMessage: flashMessage,
    setFlashMessage: setFlashMessage
  }

  return (
    <FlashMessageContext.Provider value={flashMessageProps}>
      {children}
    </FlashMessageContext.Provider>
  );
}

export function useFlashMessageContext() {
  return useContext(FlashMessageContext);
}
