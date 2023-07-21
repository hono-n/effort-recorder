export function useUpdateFormValue({ formData, setFormData }) {

  function updateFormValue(fieldName, inputValue) {
    const newValue = {
      ...formData,
      [fieldName]: inputValue
    }
    return setFormData(newValue);
  }

  return updateFormValue;
}