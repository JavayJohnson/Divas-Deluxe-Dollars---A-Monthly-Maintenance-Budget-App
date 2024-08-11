document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.budget-form');
  form.onsubmit = function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Retrieve the values from the form and calculate their numeric values
      const monthlyBudget = parseFloat(document.getElementById('monthlyBudget').value) || 0;
      const hairSalon = parseFloat(document.getElementById('hairSalon').value) || 0;
      const nailSpa = parseFloat(document.getElementById('nailSpa').value) || 0;
      const skinCareproducts = parseFloat(document.getElementById('skinCareproducts').value) || 0;
      const fitnessClass = parseFloat(document.getElementById('fitnessClass').value) || 0;
      const wardrobeSubscriptions = parseFloat(document.getElementById('wardrobeSubscriptions').value) || 0;
      const facial = parseFloat(document.getElementById('facial').value) || 0;
      const massage = parseFloat(document.getElementById('massage').value) || 0;
      const yoga = parseFloat(document.getElementById('yoga').value) || 0;
      const foodSubscription = parseFloat(document.getElementById('foodSubscription').value) || 0;
      const poppingChampagne = parseFloat(document.getElementById('poppingChampagne').value) || 0;

      // Calculate total expenses by summing all inputs
      const totalExpenses = hairSalon + nailSpa + skinCareproducts + fitnessClass + wardrobeSubscriptions + facial + massage + yoga + foodSubscription + poppingChampagne;

      // Calculate the remaining balance
      const remainingBalance = monthlyBudget - totalExpenses;

      // Construct the output message based on the remaining balance
      let outputMessage;
      if (remainingBalance > 0) {
          outputMessage = `${remainingBalance} is positive. You have $${remainingBalance} left! Keep slaying, Diva! You are stacking RACKS on RACKS on RACKS! 💵💵💵`;
      } else if (remainingBalance === 0) {
          outputMessage = `$${remainingBalance} is zero. Neutral. That's What's up! You have successfully balanced your $${monthlyBudget} Diva Well-being Monthly Maintenance Budget to $${remainingBalance}! Stay beautiful Girlie!`;
      } else {
          outputMessage = `$${remainingBalance} is negative. So, you need to cut back, or either get a part-time job fr fr. You have gone over your $${monthlyBudget}! I'm just keeping it 100 Sis, you are NOT managing your money well! Chill on 🍾🥂 popping bottles 🍾🥂 for a while.`;
      }

      // Display the message using an alert
      alert(outputMessage);
  };
});
