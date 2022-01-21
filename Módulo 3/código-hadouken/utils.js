const isEmpty =(value) => {
    if(typeof value === 'string') {
        return !value;
    }
    
    if(typeof value === 'number') {
        return false;
    }

    if(typeof value === 'boolean') {
        return false;
    }

    return true;

};

const isEmail = (value) =>
    value.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );

const formValid = (value, key) =>{
    if(isEmpty(value)){
        console.error(`${key} is empty`)
    }

    if(key === 'email' &&isEmail(value)){
        console.error(`${value} is not email`);
    }
}

module.export = {isEmpty, formValid};