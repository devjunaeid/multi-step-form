
export const CheckInput = (currentStep, formInput) => {
    const error = {}

    // Regex pattern for checking name.
    var nameRegex = /^[a-zA-Z ]{2,30}$/;

    if (currentStep === 1) {
       if (!formInput.name || formInput.name.trim().length === 0) {
          error.name = "Name is required"
       }else if (!nameRegex.test(formInput.name)){
         error.name = "Enter a valid name(only letters, min 2char)"
       }
    }

    return error
}