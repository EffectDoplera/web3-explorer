export const copyContent = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
  } catch (e) {
    // TODO: add toast
    console.error('Failed to copy: ', e)
  }
}
