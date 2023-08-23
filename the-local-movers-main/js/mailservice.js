const nodemailer = require('nodemailer');

// Create a transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  service: 'gmail', // e.g., 'Gmail', 'Outlook'
  auth: {
    user: 'your_email@example.com',
    pass: 'your_email_password',
  },
});

// Function to send email
const sendEmail = (formData) => {
  const htmlContent = `
    <table>
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Message</th>
      </tr>
      <tr>
        <td>${formData.name}</td>
        <td>${formData.email}</td>
        <td>${formData.message}</td>
      </tr>
    </table>
  `;

  const mailOptions = {
    from: 'your_email@example.com',
    to: 'recipient@example.com',
    subject: 'New Form Submission',
    html: htmlContent,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

// Example form data
const formData = {
  name: 'John Doe',
  email: 'johndoe@example.com',
  message: 'Hello, this is a test email!',
};

// Call the sendEmail function with the form data
sendEmail(formData);
