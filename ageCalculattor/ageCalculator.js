function calculateAge() {
    const birthDate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date();
  
    const yearsDiff = currentDate.getFullYear() - birthDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const birthMonth = birthDate.getMonth() + 1;
  
    let monthsDiff = currentMonth - birthMonth;
    if (monthsDiff < 0 || (monthsDiff === 0 && currentDate.getDate() < birthDate.getDate())) {
      yearsDiff--;
      monthsDiff = (12 - birthMonth) + currentMonth;
    }
  
    let daysDiff = currentDate.getDate() - birthDate.getDate();
    if (daysDiff < 0) {
      const lastMonthDate = new Date(currentDate.getFullYear(), currentMonth - 1, 0).getDate();
      daysDiff = lastMonthDate - birthDate.getDate() + currentDate.getDate();
      monthsDiff--;
    }
  
    const ageString = `${yearsDiff} years ${monthsDiff} months ${daysDiff} days`;
    document.getElementById('result').innerText = `Your age is: ${ageString}`;
  }
  