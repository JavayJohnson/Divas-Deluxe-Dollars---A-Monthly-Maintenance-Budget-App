document.addEventListener('DOMContentLoaded', function() {
    // Budget Form Submission
    const budgetForm = document.querySelector('.budget-form');
    budgetForm.onsubmit = function(event) {
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
            outputMessage = `${remainingBalance} You have $${remainingBalance} left! Keep slaying, Diva! You are stacking cash! You are in Millionaire Mode!💵💵💵`;
        } else if (remainingBalance === 0) {
            outputMessage = `$${remainingBalance} That's What's up! You have successfully balanced your budget of $${monthlyBudget} Divas Deluxe Dollars to $${remainingBalance}! Stay beautiful Diva!`;
        } else {
            outputMessage = `$${remainingBalance} So, you need to cut back, or either get a part-time job for real. You have gone over your monthly budget of $${monthlyBudget} You're NOT managing your money well! No 🍾🥂 popping CHAMPAGNE bottles for you 🍾🥂.`;
        }



        
        // Display the message using an alert
        alert(outputMessage);
    };

    // Change input boxes to hotpink when numeric text is entered
    const budgetInputs = document.querySelectorAll('.budget-form input[type="number"]');
    budgetInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.backgroundColor = 'hotpink'; // Change background color to hotpink when text is entered
                this.style.color = 'white'; // Optional: change text color to white for better contrast
            } else {
                this.style.backgroundColor = 'white'; // Reset background color when text is removed
                this.style.color = 'black'; // Reset text color
            }
        });
    });

    // Registration Form Submission
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = registrationForm.elements['name'].value;
        const email = registrationForm.elements['email'].value;
        const password = registrationForm.elements['password'].value;
        const confirmPassword = registrationForm.elements['confirmPassword'].value;
        const termsAccepted = registrationForm.elements['terms'].checked;

        // Username Validation
        const usernameRegex = /^[a-zA-Z0-9]{4,}$/;
        const uniqueChars = new Set(username).size;
        if (!usernameRegex.test(username) || uniqueChars < 2) {
            alert("Username must be at least four characters long, and not include special characters or spaces.");
            return;
        }

        // Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email.endsWith("@example.com")) {
            alert("Please enter a valid email address that is not from the domain 'example.com'.");
            return;
        }

        // Password Validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
        if (!passwordRegex.test(password) || password.toLowerCase().includes("password") || password.toLowerCase().includes(username.toLowerCase())) {
            alert("Password must be at least 4 characters long, contain at least one uppercase letter, one lowercase letter, one number, one special character, and cannot contain the word 'password' or your username.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please ensure both password fields are identical.");
            return;
        }

        // Terms and Conditions Validation
        if (!termsAccepted) {
            alert("You must accept the terms and conditions to register.");
            return;
        }

        // If all validations pass
        alert("Registration successful!");
    });

    // Login Form Submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const loginEmail = loginForm.elements['loginEmail'].value;
        const loginPassword = loginForm.elements['loginPassword'].value;

        // Simple validation checks
        if (!loginEmail || !loginPassword) {
            alert("Please fill in all fields.");
            return;
        }

        // Process login (e.g., send data to server)
        alert("Login successful!");
    });
});
