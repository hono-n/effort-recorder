export function useUpdateFormValue({ formData, setFormData }) {

  function updateFormValue(fieldName, inputValue) {
    const newFormData = {
      ...formData,
      [fieldName]: inputValue
    }
    setFormData(newFormData);
    return newFormData;
  }

  return updateFormValue;
}