import nodemailer from 'nodemailer';

export async function POST(req, res) {
  const { name, email, message } = await req.json();
  console.log(process.env.EMAIL_PASS);
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,  // or 465 for SSL
    secure: false,  // or true for SSL
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'jeweltutin@gmail.com',
    subject: `Message from ${name} (${email})`,
    html: `<h3>You have received a new message from your contact form</h3>
           <p><strong>Name:</strong> ${name}<br />
           <strong>Email:</strong> ${email}</p>
           <p><strong>Message:</strong><br>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully');
    return new Response(JSON.stringify({ success: true, message: 'Email sent successfully' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log('Error sending test email:', error);
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}


//import nodemailer from 'nodemailer';

/* export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();  // Get data from the request body

    //console.log(process.env.SMTP_HOST);
    //return;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      //secure: process.env.SMTP_PORT, // SSL (465), TLS (587)
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER, // Your email
      to: 'jeweltutin@gmail.com',  // The recipient's email
      subject: `Message from ${name} (${email})`,  // Dynamic subject
      text: `You have received a new message from your contact form.\n\n
            Name: ${name}\n
            Email: ${email}\n
            Message: ${message}`,  // Body of the email
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: error.message });
  }
} */


/* import nodemailer from 'nodemailer';

async function testEmail() {
  const transporter = nodemailer.createTransport({
    host: 'mail.dx360.com.bd',
    port: 587,  // or 465 for SSL
    secure: false,  // or true for SSL
    auth: {
      user: 'jewel@dx360.com.bd',
      pass: 'expasswd',
    },
  });

  const mailOptions = {
    from: 'jewel@dx360.com.bd',
    to: 'jeweltutin@gmail.com',
    subject: 'Test Email',
    text: 'This is a test email.',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Test email sent successfully');
  } catch (error) {
    console.log('Error sending test email:', error);
  }
}

testEmail(); 
 */