const Validation = (obj) => {
    const errors = {};

    const email_reg = /^[^\s@]+@[^\s@]+\.[^\s@]{2,6}$/;

    if(obj.subject === "") {
        errors.subject = "Name is Required";
    }

    if(obj.email === "") {
        errors.email = "Email is Required";
    } 
    
    if(!email_reg.test(obj.email)) {
        errors.email = "Email is not Valid";
    }

    if(obj.text === "") {
        errors.text = "Message is required";
    }

    return errors;
}

const isObjectEmpty = (objectName) => {
    return Object.keys(objectName).length === 0 && objectName.constructor === Object;
  }

export {
    Validation,
    isObjectEmpty
};