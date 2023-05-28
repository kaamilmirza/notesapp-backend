const cron = require('node-cron');
const File = require('../models/file.model');
console.log('Trending cron job started');
// Schedule the task to run every day at midnight (00:00)
cron.schedule('0 0 * * *', async () => {
  try {
    // Update accessToday to 0 for all documents
    await File.updateMany({}, { $set: { accessToday: 0 } });

    console.log('accessToday field updated for all documents');
    client.close();
  } catch (error) {
    console.error('Error updating accessToday:', error);
  }
});

// Schedule the task to run every week on Sunday at midnight (00:00)
cron.schedule('0 0 * * 0', async () => {
  try {
    // Update accessWeekly to 0 for all documents
    await File.updateMany({}, { $set: { accessWeekly: 0 } });

    console.log('accessWeekly field updated for all documents');
    client.close();
  } catch (error) {
    console.error('Error updating accessWeekly:', error);
  }
});
