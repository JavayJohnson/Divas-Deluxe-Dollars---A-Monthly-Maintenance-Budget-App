document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.budget-form');
  form.onsubmit = function(event) {
      event.preventDefault(); // Prevent the default form submission behavior

      // Retrieve the values from the form
      const monthlyBudget = Number(document.getElementById('monthlyBudget').value);
      const hairSalon = Number(document.getElementById('hairSalon').value);
      const nailSpa = Number(document.getElementById('nailSpa').value);
      const skinCareproducts = Number(document.getElementById('skinCareproducts').value);
      const fitnessClass = Number(document.getElementById('fitnessClass').value);
      const wardrobeSubscriptions = Number(document.getElementById('wardrobeSubscriptions').value);
      const facial = Number(document.getElementById('facial').value);
      const massage = Number(document.getElementById('massage').value);
      const yoga = Number(document.getElementById('yoga').value);
      const foodSubscription = Number(document.getElementById('foodSubscription').value);
      const poppingChampagne = Number(document.getElementById('poppingChampagne').value);

      // Calculate total expenses
      const totalExpenses = hairSalon + nailSpa + skinCareproducts + fitnessClass + wardrobeSubscriptions + facial + massage + yoga + foodSubscription + poppingChampagne;

      // Calculate remaining balance
      const remainingBalance = monthlyBudget - totalExpenses;

      // Output results
      let outputMessage;
      if (remainingBalance > 0) {
          outputMessage = `${remainingBalance} is positive. You have $${remainingBalance} left! Keep slaying, Diva! You are stacking RACKS on RACKS on RACKS! 💵💵💵`;
      } else if (remainingBalance === 0) {
          outputMessage = `$${remainingBalance} is zero. Neutral. That's What's up! You have successfully balanced your $${monthlyBudget} Diva Well-being Monthly Maintenance Budget to $${remainingBalance}! Stay beautiful Girlie!`;
      } else {
          outputMessage = `$${remainingBalance} is negative. So, you need to cut back, or either get a part-time job fr fr. You have gone over your $${monthlyBudget}! I'm just keeping it 100 Sis, you are NOT managing your money well! Chill on 🍾🥂 popping bottles 🍾🥂 for a while.`;
      }

      // Display the message
      alert(outputMessage);
  };
});
