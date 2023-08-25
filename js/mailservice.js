let myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer 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");
myHeaders.append("Content-Type", "application/json");




async function sendEmail(){

  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const fromAddress = document.getElementById('from-address').value;
  const toAddress = document.getElementById('to-address').value;
  const moveDetails = document.getElementById('move-details').value;

  const formDataHTML = `
    <table>
      <tr>
        <th>Full Name</th>
        <td>${fullName}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>${email}</td>
      </tr>
      <tr>
        <th>Phone</th>
        <td>${phone}</td>
      </tr>
      <tr>
        <th>From Address</th>
        <td>${fromAddress}</td>
      </tr>
      <tr>
        <th>To Address</th>
        <td>${toAddress}</td>
      </tr>
      <tr>
        <th>Move Details</th>
        <td>${moveDetails}</td>
      </tr>
    </table>
  `;


  let raw = JSON.stringify({
    "personalizations": [
      {
        "to": [
          {
            "email": "yogeshkakkar521@gmail.com",
            "name": "John Doe"
          }
        ],
        "subject": "Hello, World!"
      }
    ],
    "content": [
      {
        "type": "text/plain",
        "value": "Heya!"
      },
      {
        "type": "text/html",
        "value": `${formDataHTML}`
      }
    ],
    "from": {
      "email": "Gurlal9646@gmail.com",
      "name": "Gurlal Singh"
    },
    "reply_to": {
      "email": "Gurlal9646@gmail.com",
      "name": "Gurlal Singh"
    }
  });


let requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

  fetch("https://api.sendgrid.com/v3/mail/send", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

}
