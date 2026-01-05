import express from 'express';
import cors from 'cors';
import os from 'os';

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory storage for messages (in production, use a database)
let messages = [];

// Routes
app.get('/api/messages', (req, res) => {
  res.json(messages);
});

app.post('/api/messages', (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const newMessage = {
    id: Date.now().toString(),
    name,
    email,
    phone: phone || '',
    message,
    timestamp: new Date().toISOString(),
    ip: req.ip
  };

  messages.push(newMessage);
  res.status(201).json(newMessage);
});

app.delete('/api/messages/:id', (req, res) => {
  const { id } = req.params;
  const index = messages.findIndex(msg => msg.id === id);

  if (index === -1) {
    return res.status(404).json({ error: 'Message not found' });
  }

  messages.splice(index, 1);
  res.json({ success: true });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  // Get the local IP address
  const networkInterfaces = os.networkInterfaces();
  let localIP = 'localhost';
  
  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    for (const iface of interfaces) {
      if (iface.family === 'IPv4' && !iface.internal) {
        localIP = iface.address;
        break;
      }
    }
    if (localIP !== 'localhost') break;
  }

  console.log(`🚀 Server running on:`);
  console.log(`   Local: http://localhost:${PORT}`);
  console.log(`   Network: http://${localIP}:${PORT}`);
  console.log(`📱 Access from other devices: http://${localIP}:${PORT}`);
  console.log(`🔗 Frontend: http://${localIP}:3000`);
});