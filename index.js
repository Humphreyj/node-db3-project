const server = require('./server.js');
const apiRoutes = require('./api/apiRoutes');
const PORT = process.env.PORT || 5000;
const SchemeRouter = require('./schemes/scheme-router.js');

server.use('/api',apiRoutes);
server.use('/api/schemes', SchemeRouter);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});