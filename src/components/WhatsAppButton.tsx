import { FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "917000275998"; // Replace with actual number
    const message = "Hello! I'm interested in your properties.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg cursor-pointer hover:bg-green-600 transition-colors duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleWhatsAppClick}
      title="Chat on WhatsApp"
    >
      <FaWhatsapp size={24} />
    </motion.div>
  );
}
