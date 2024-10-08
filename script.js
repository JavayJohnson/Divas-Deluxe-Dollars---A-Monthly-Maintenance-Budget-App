document.addEventListener('DOMContentLoaded', function() {
    
    const budgetForm = document.querySelector('.budget-form');
    budgetForm.onsubmit = function(event) {
        event.preventDefault();

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

        const totalExpenses = hairSalon + nailSpa + skinCareproducts + fitnessClass + wardrobeSubscriptions + facial + massage + yoga + foodSubscription + poppingChampagne;
        const remainingBalance = monthlyBudget - totalExpenses;

        let outputMessage;
        if (remainingBalance > 0) {
            outputMessage = `You have $${remainingBalance} left! Keep slaying, Diva! You are stacking cash! You are in Millionaire Mode!💵💵💵`;
        } else if (remainingBalance === 0) {
            outputMessage = `Your balance is: $${remainingBalance} That's What's up! You have successfully balanced your budget of $${monthlyBudget} Divas Deluxe Dollars to $${remainingBalance}! Stay beautiful Diva!`;
        } else {
            outputMessage = `Diva! You are in the HOLE by: $${remainingBalance} Honey, you need to cut back, or either get a part-time job! You have gone over your monthly budget of $${monthlyBudget} You're NOT managing your money well! No 🍾🥂 popping CHAMPAGNE bottles for you 🍾🥂.`;
        }

        alert(outputMessage);
    };

    const budgetInputs = document.querySelectorAll('.budget-form input[type="number"]');
    budgetInputs.forEach(input => {
        input.addEventListener('input', function() {
            if (this.value.trim() !== '') {
                this.style.backgroundColor = 'hotpink';
                this.style.color = 'white';
            } else {
                this.style.backgroundColor = 'white';
                this.style.color = 'black';
            }
        });
    });

    
    const registrationForm = document.getElementById('registrationForm');
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = registrationForm.elements['name'].value;
        const email = registrationForm.elements['email'].value;
        const password = registrationForm.elements['password'].value;
        const confirmPassword = registrationForm.elements['confirmPassword'].value;
        const termsAccepted = registrationForm.elements['terms'].checked;

        const usernameRegex = /^[a-zA-Z0-9]{4,}$/;
        const uniqueChars = new Set(username).size;
        if (!usernameRegex.test(username) || uniqueChars < 2) {
            alert("Username must be at least four characters long, and not include special characters or spaces.");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email) || email.endsWith("@example.com")) {
            alert("Please enter a valid email address that is not from the domain 'example.com'.");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/;
        if (!passwordRegex.test(password) || password.toLowerCase().includes("password") || password.toLowerCase().includes(username.toLowerCase())) {
            alert("Password must be at least 4 characters long, contain at least one uppercase letter, one lowercase letter, one number, one special character, and cannot contain the word 'password' or your username.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match. Please ensure both password fields are identical.");
            return;
        }

        if (!termsAccepted) {
            alert("You must accept the terms and conditions to register.");
            return;
        }

       
        alert("Registration successful!");

      
        const newParagraph = document.createElement('p');
        newParagraph.innerText = `Welcome, ${username}! Thank you for registering.`;

        
        const registrationSection = document.querySelector('.registration-form-section');
        registrationSection.appendChild(newParagraph);
    });

    
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const loginEmail = loginForm.elements['loginEmail'].value;
        const loginPassword = loginForm.elements['loginPassword'].value;

        if (!loginEmail || !loginPassword) {
            alert("Please fill in all fields.");
            return;
        }

        alert("Login successful!");
    });
});
