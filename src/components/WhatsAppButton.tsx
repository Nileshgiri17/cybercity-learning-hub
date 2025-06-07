
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '919111061787'; // Main contact number
  const message = encodeURIComponent(
    'Hello! I am interested in knowing more about the courses at Cybercity Institute. Please provide me with details about admission and fee structure.'
  );
  
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

  const handleClick = () => {
    window.open(whatsappURL, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </button>
  );
};

export default WhatsAppButton;
