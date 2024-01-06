import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';

function RegisterPage() {
  const [registrationData, setRegistrationData] = useState({
    'first_name': '',
    'last_name': '',
    'username': '',
    'password': '',
    'email': ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegistrationData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/user/createuser/', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registrationData),
      });

      if (!response.ok) {
        // Handle non-successful response (e.g., show an error message)
        console.error('Registration failed:', response.statusText);
        return;
      }

      // Registration successful, you can handle the success as needed
      console.log('Registration successful');
    } catch (error) {
      // Handle any network or fetch errors
      console.error('Error during registration:', error);
    }
  };

  return (
    <MDBContainer fluid>
      <MDBRow className='justify-content-center align-items-center m-5'>
        <MDBCard>
          <MDBCardBody className='px-4'>
            <h3 className="fw-bold mb-4 pb-2 pb-md-0 mb-md-5">Customer Registration Form</h3>

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='First Name'
                  size='lg'
                  id='first_name'
                  type='text'
                  name='first_name'
                  value={registrationData.first_name}
                  onChange={handleInputChange}
                />
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Last Name'
                  size='lg'
                  id='last_name'
                  type='text'
                  name='last_name'
                  value={registrationData.last_name}
                  onChange={handleInputChange}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Username'
                  size='lg'
                  id='username'
                  type='text'
                  name='username'
                  value={registrationData.username}
                  onChange={handleInputChange}
                />
              </MDBCol>
              <MDBCol md='6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Password'
                  size='lg'
                  id='password'
                  type='password'
                  name='password'
                  value={registrationData.password}
                  onChange={handleInputChange}
                />
              </MDBCol>
            </MDBRow>

            <MDBRow>
              <MDBCol md='6'>
                <MDBInput
                  wrapperClass='mb-4'
                  label='Email'
                  size='lg'
                  id='email'
                  type='email'
                  name='email'
                  value={registrationData.email}
                  onChange={handleInputChange}
                />
              </MDBCol>
            </MDBRow>

            <MDBBtn className='mb-4' size='lg' onClick={registerUser}>Register</MDBBtn>

          </MDBCardBody>
        </MDBCard>
      </MDBRow>
    </MDBContainer>
  );
}

export default RegisterPage;
