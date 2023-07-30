export function useUpdateFormData({ formData, setFormData }) {

  function updateFormData(fieldName, inputValue) {
    const newFormData = {
      ...formData,
      [fieldName]: inputValue
    }
    setFormData(newFormData);
    return newFormData;
  }

  return updateFormData;
}