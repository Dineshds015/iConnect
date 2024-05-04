// validator.js
export const validateFormData = (formData) => {
    const errors = {};
  
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
  
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[a-zA-Z0-9._%+-]+@mnnit\.ac\.in$/.test(formData.email)) {
      errors.email = 'Please enter gSuite Id';
    }
    
  
    if (!formData.password.trim()) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
  
    if (formData.password !== formData.cPassword) {
      errors.cPassword = 'Passwords do not match';
    }
  
    return errors;
  };
  