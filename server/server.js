require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const projectRoutes = require('./routes/projects');
const uploadRoutes = require('./routes/uploads');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/projects', projectRoutes);
app.use('/uploads', uploadRoutes);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
