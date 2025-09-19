document.getElementById("calorie-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value);
    const weightUnit = document.querySelector('input[name="weight-unit"]:checked').value;
    let age = parseInt(document.getElementById("age").value);
    let gender = document.getElementById("gender").value;
    let activityLevel = parseFloat(document.getElementById("activity").value);

    if (weightUnit === 'lbs') {
        weight = weight * 0.453592;
    }

    // Calculate BMR using the Mifflin-St Jeor Equation
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // Calculate TDEE by adjusting BMR with activity level
    let tdee = bmr * activityLevel;

    // Calculate calories for weight loss (TDEE - 20%)
    let caloriesForLoss = tdee - (tdee * 0.2);

    // Calculate calories for weight gain (TDEE + 10%)
    let caloriesForGain = tdee + (tdee * 0.1);

    // Display results
    document.getElementById("bmr").textContent = `BMR: ${Math.round(bmr)} kcal/day`;
    document.getElementById("tdee").textContent = `TDEE: ${Math.round(tdee)} kcal/day`;
    document.getElementById("calories").textContent = `Calories for Weight Loss: ${Math.round(caloriesForLoss)} kcal/day`;
    document.getElementById("calories-gain").textContent = `Calories for Weight Gain: ${Math.round(caloriesForGain)} kcal/day`;
    
    let mealPlan = "";

    if (Math.round(caloriesForLoss) <= 1500) {
        mealPlan = `
            <strong>Meal Plan:</strong><br>
            <strong>Breakfast:</strong> Scrambled eggs with spinach and whole-grain toast. 1 small apple.<br>
            <strong>Lunch:</strong> Grilled chicken breast with salad (olive oil & balsamic dressing).<br>
            <strong>Snack:</strong> Greek yogurt with berries.<br>
            <strong>Dinner:</strong> Baked salmon with roasted Brussels sprouts and quinoa.<br>
        `;
    } else if (Math.round(caloriesForLoss) <= 2000) {
        mealPlan = `
            <strong>Meal Plan:</strong><br>
            <strong>Breakfast:</strong> Boiled eggs, avocado, and whole-grain toast. 1 banana.<br>
            <strong>Lunch:</strong> Turkey and avocado wrap with whole-wheat tortilla. Salad with olive oil dressing.<br>
            <strong>Snack:</strong> Almonds and a small orange.<br>
            <strong>Dinner:</strong> Grilled chicken breast with sweet potato and broccoli.<br>
        `;
    } else if (Math.round(caloriesForGain) >= 2500) {
        mealPlan = `
            <strong>Meal Plan:</strong><br>
            <strong>Breakfast:</strong> Scrambled eggs, oatmeal with almond butter. 1 glass of whole milk.<br>
            <strong>Lunch:</strong> Grilled steak with mashed potatoes and green beans.<br>
            <strong>Snack:</strong> Protein smoothie with banana, protein powder, and almond milk.<br>
            <strong>Dinner:</strong> Baked chicken thighs with quinoa and roasted vegetables.<br>
        `;
    } else if (Math.round(caloriesForGain) >= 3000) {
        mealPlan = `
            <strong>Meal Plan:</strong><br>
            <strong>Breakfast:</strong> Pancakes with maple syrup, scrambled eggs, and bacon. 1 glass of orange juice.<br>
            <strong>Lunch:</strong> Spaghetti with meatballs and garlic bread. Caesar salad.<br>
            <strong>Snack:</strong> Peanut butter sandwich and a glass of milk.<br>
            <strong>Dinner:</strong> Beef stir-fry with rice and steamed vegetables.<br>
        `;
    }

    document.getElementById("meal-plan").innerHTML = mealPlan;

    document.getElementById("meal-suggestions").style.display = "flex";
    
})