export default function getGfFieldId(fieldId: number) {
  if (!fieldId || typeof fieldId !== 'number') {
    return fieldId
  }

  return `field-${fieldId}`
}
