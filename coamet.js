try {
  // Code that may throw an exception
} catch (e) {
  if (e instanceof MyException) {
    // Code to handle the MyException exception
    console.error('MyException occurred:', e);
  } else if (e instanceof AnotherException) {
    // Code to handle the AnotherException exception
    console.error('AnotherException occurred:', e);
  } else {
    // Code to handle any other type of exception
    console.error('An unexpected error occurred:', e);
    throw e; // Re-throwing the exception if it's not one of the expected types
  }
}
