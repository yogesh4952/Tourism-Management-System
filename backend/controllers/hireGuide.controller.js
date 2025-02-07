import { sendEmail } from './emailService'; // Adjust the path to your service file

export const hireGuide = async (req, res) => {
  const { userEmail, guideName, guideEmail, bookingDetails } = req.body;

  if (!userEmail || !guideName || !guideEmail || !bookingDetails) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const userSubject = 'Guide Booking Confirmation';
  const guideSubject = 'New Guide Assignment';

  const userEmailHtml = `
    <h1>Guide Booking Confirmed</h1>
    <p>Thank you for hiring ${guideName} for your trip.</p>
    <p>Booking Details:</p>
    <ul>
      <li>Location: ${bookingDetails.location}</li>
      <li>Date: ${bookingDetails.date}</li>
      <li>Duration: ${bookingDetails.duration}</li>
    </ul>
  `;

  const guideEmailHtml = `
    <h1>You Have Been Assigned a New Trip</h1>
    <p>Dear ${guideName},</p>
    <p>You have been hired by a user. Below are the booking details:</p>
    <ul>
      <li>User Email: ${userEmail}</li>
      <li>Location: ${bookingDetails.location}</li>
      <li>Date: ${bookingDetails.date}</li>
      <li>Duration: ${bookingDetails.duration}</li>
    </ul>
  `;

  try {
    // Send confirmation to user
    await sendEmail(userEmail, userSubject, userEmailHtml);

    // Send assignment notification to the guide
    await sendEmail(guideEmail, guideSubject, guideEmailHtml);

    res
      .status(200)
      .json({ message: 'Guide hired and emails sent successfully' });
  } catch (error) {
    console.error('Error in hiring guide:', error.message);
    res.status(500).json({ error: 'Failed to hire guide and send emails' });
  }
};
