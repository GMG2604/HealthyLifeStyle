function openModal(category) {
    const modal = document.getElementById('body-modal');
    const title = document.getElementById('modal-title');
    const info = document.getElementById('modal-info');

    if (category === 'lose-weight') {
        title.textContent = 'Losing Weight';
        info.innerHTML = `
            <h3>Overview:</h3>
            <p>Losing weight involves creating a calorie deficit, meaning you consume fewer calories than your body burns.</p>

            <h3>Calorie Deficit:</h3>
            <ul>
                <li>Aim for a 500-1000 calorie deficit per day for healthy weight loss.</li>
                <li>Gradual weight loss 1-2 pounds/week is healthier and more sustainable.</li>
                <li>Extreme calorie restriction can lead to muscle loss and nutritional deficiencies.</li>
            </ul>

            <h3>Diet:</h3>
            <ul>
                <li>Focus on whole, nutrient-dense foods like fruits, vegetables, lean proteins, and whole grains.</li>
                <li>Ensure adequate protein intake 1.6-2.0g/kg of body weight to preserve muscle mass.</li>
                <li>Limit processed foods and added sugars.</li>
            </ul>

            <h3>Exercise:</h3>
            <ul>
                <li>Incorporate both cardio and strength training.</li>
                <li>Cardio helps burn calories, while strength training helps maintain muscle mass.</li>
                <li>HIIT can be particularly effective for fat loss.</li>
            </ul>

            <h3>Sleep & Stress Management:</h3>
            <ul>
                <li>Aim for 7-9 hours of sleep per night to avoid hormone imbalances.</li>
                <li>Manage stress through relaxation techniques like yoga or meditation.</li>
            </ul>

            <h3>Hydration:</h3>
            <ul>
                <li>Drink at least 2 liters of water daily to support metabolism and reduce appetite.</li>
            </ul>

            <h3>Tracking Progress:</h3>
            <ul>
                <li>Track your progress with measurements, body fat percentage, and how your clothes fit, not just the scale.</li>
                <li>Set realistic goals and focus on small, consistent improvements.</li>
            </ul>

            <h3>Sustainable Changes:</h3>
            <p>Make permanent changes to your lifestyle, such as healthier eating and regular exercise, rather than relying on fad diets.</p>
        `;
    } else if (category === 'gain-weight') {
        title.textContent = 'Gaining Weight';
        info.innerHTML = `
        <h3>Overview:</h3>
        <p>Gaining weight requires a calorie surplus, meaning you consume more calories than you burn. It should be advised to focus on gaining lean muscle mass rather than excess fat.</p>

        <h3>Calorie Surplus:</h3>
        <ul>
            <li>Aim for a 300-500 calorie surplus per day for gradual, healthy weight gain.</li>
            <li>Gain weight at a rate of 0.5-1 lb per week.</li>
            <li>Excessive surplus may result in fat gain instead of lean muscle.</li>
        </ul>

        <h3>Diet:</h3>
        <ul>
            <li>Eat nutrient-dense, calorie-rich foods like lean meats, whole grains, dairy products, and healthy fats like olive oil, avocado, nuts, seeds.</li>
            <li>Consume a lot of protein to support muscle health, at least 1g per kg of body weight.</li>
            <li>Include carbohydrates like rice, potatoes, quinoa, and oats for energy.</li>
            <li>Eat at least 4-5 meals per day, including snacks like protein shakes, nuts, and energy bars.</li>
        </ul>

        <h3>Recovery:</h3>
        <ul>
            <li>Sleep 7-9 hours per night for muscle recovery and growth.</li>
            <li>Take 1-2 rest days per week to avoid overtraining.</li>
            <li>Ensure adequate recovery time between workouts to allow muscles to repair and grow.</li>
        </ul>

        <h3>Hydration:</h3>
        <ul>
            <li>Stay hydrated with at least 2 liters of water daily to aid in digestion and nutrient absorption.</li>
        </ul>

        <h3>Sustainable Changes:</h3>
        <p>Gaining weight requires patience. Focus on long-term consistency in diet, exercise, and recovery for the best results.</p>
    `;
    } else if (category === 'lose-build-muscle') {
        title.textContent = 'Losing Weight & Building Muscle';
        info.innerHTML = `
        <h3>Overview:</h3>
       <p>
                Losing weight and building muscle requires a delicate balance of a slight calorie deficit, strength training, and high protein intake. 
                Achieving both goals simultaneously can be challenging but possible with the right approach. While fat loss requires a calorie deficit, 
                muscle building requires adequate energy, which means high protein intake and strength training. The trick is to balance these 
                elements so that you can burn fat while preserving or building lean muscle mass.
            </p>

            <h3>Calorie Deficit:</h3>
            <ul>
                <li>A moderate calorie deficit of 10-20% of your daily calorie needs is ideal for fat loss without sacrificing muscle.</li>
                <li>To preserve muscle during fat loss, consume 1.6-2.2g of protein per kilogram of body weight.</li>
                <li>Avoid too large of a calorie deficit as it can lead to muscle loss, especially if protein intake is inadequate.</li>
                <li>Track your calorie intake with apps like MyFitnessPal to ensure you're in a slight deficit but still consuming enough nutrients for muscle maintenance.</li>
            </ul>

            <h3>Strength Training:</h3>
            <ul>
                <li>Focus on compound exercises like squats, deadlifts, bench press, pull-ups, overhead press to target multiple muscle groups at once.</li>
                <li>These exercises help build overall strength and muscle mass, which is crucial when you are in a calorie deficit.</li>
                <li>Progressive overload is key to building muscle. Gradually increase the weight or number of reps you are lifting each week.</li>
                <li>Aim for 3-5 strength training sessions per week, targeting different muscle groups like upper body, lower body, and full-body workouts.</li>
                <li>For hypertrophy, also known as muscle growth, focus on sets of 6-12 reps with moderate to heavy weight, pushing yourself to failure on the last set of each exercise.</li>
            </ul>

            <h3>Cardio for Fat Loss:</h3>
            <ul>
                <li>Cardio is important for creating a calorie deficit and burning fat. Aim for 2-4 cardio sessions per week.</li>
                <li>Incorporate a mix of moderate-intensity cardio such asjogging, cycling and high-intensity interval training or HIIT to maximize fat loss without sacrificing muscle mass.</li>
                <li>HIIT can be particularly effective because it burns more calories in less time and has been shown to preserve lean muscle while burning fat.</li>
                <li>HIIT can be done 1-2 times per week for 20-30 minutes, alternating between short bursts of high-intensity exercise and brief periods of recovery.</li>
            </ul>

            <h3>Nutrition for Fat Loss and Muscle Gain:</h3>
            <ul>
                <li>Consume high-quality, nutrient-dense foods. Prioritize lean proteins, vegetables, whole grains, and healthy fats.</li>
                <li>Protein is essential for preserving muscle mass while losing fat. Aim to consume 1.6-2.2g of protein per kilogram of body weight per day.</li>
                <li>Choose protein-rich foods such as chicken breast, turkey, fish, eggs, tofu, legumes, and quinoa.</li>
                <li>Carbohydrates are important for fueling your workouts and aiding recovery. Include whole grains like brown rice, oats, sweet potatoes, and legumes in your meals.</li>
                <li>Healthy fats support hormone production including testosterone, which helps with muscle growth. Include sources like avocado, olive oil, nuts, seeds, and fatty fish.</li>
                <li>Eat a variety of vegetables to ensure you're getting sufficient vitamins and minerals for optimal health and performance.</li>
            </ul>

            <h3>Recovery and Sleep:</h3>
            <ul>
                <li>Recovery is as important as training. Without proper recovery, muscle repair and growth will be limited.</li>
                <li>Aim for 7-9 hours of sleep each night to allow your body to recover and repair muscle tissues that were stressed during workouts.</li>
                <li>Rest days are essential. Take at least 1-2 rest days per week to prevent overtraining, which can result in muscle breakdown and fatigue.</li>
                <li>Active recovery like walking, yoga, stretching on rest days can help improve circulation and aid in muscle recovery without compromising fat loss.</li>
            </ul>

            <h3>Hydration:</h3>
            <ul>
                <li>Proper hydration is crucial for overall health, muscle recovery, and fat loss.</li>
                <li>Drink at least 2 liters of water a day, and increase your intake if you're engaging in strenuous exercise.</li>
                <li>Consider consuming electrolyte-rich drinks if you're doing intense workouts to help with hydration and muscle function.</li>
            </ul>

            <h3>Supplements - Optional:</h3>
            <ul>
                <li>Whey protein is a great option for muscle recovery. It's a fast-digesting protein that helps repair muscle tissue after intense workouts.</li>
                <li>Creatine monohydrate is one of the most studied supplements for increasing strength and muscle mass. It helps your muscles retain water, which also enhances muscle fullness.</li>
                <li>BCAAs or Branched-Chain Amino Acids can help reduce muscle soreness and accelerate recovery when training in a calorie deficit.</li>
                <li>Multivitamins can help fill in any nutritional gaps, ensuring your body gets the micronutrients it needs to perform optimally while in a calorie deficit.</li>
            </ul>

            <h3>Tracking Progress:</h3>
            <ul>
                <li>Track fat loss with measurements for your waist, hips, thighs and body fat percentage, rather than relying solely on the scale.</li>
                <li>Monitor strength gains in the gym to see if you're getting stronger over time. Strength increases often indicate muscle growth.</li>
                <li>Adjust your calories and protein intake based on your progress. If you're losing too much muscle, increase your protein intake or reduce your calorie deficit slightly.</li>
            </ul>

            <h3>Sustainable Changes:</h3>
            <p>
                Losing weight while building muscle takes time and consistency. Rather than seeking rapid results, focus on making sustainable, long-term changes to your diet and workout routine.
                Consistency and patience will yield the best results in achieving both fat loss and muscle gain over time.
            </p>
        `;
    } else if (category === 'gain-build-muscle') {
        title.textContent = 'Gaining Weight & Building Muscle';
        info.innerHTML = `
        <h3>Overview:</h3>
        <p>Gaining weight and building muscle requires a calorie surplus, strength training, and proper recovery.</p>

        <h3>Calorie Surplus:</h3>
        <ul>
            <li>Aim for a 300-500 calorie surplus per day for gradual, healthy muscle gain.</li>
            <li>Gain weight at a rate of 0.5-1 lb per week.</li>
            <li>Moderate surplus ensures muscle gain without excessive fat accumulation.</li>
        </ul>

        <h3>Diet:</h3>
        <ul>
            <li>Consume 1.6-2.2g of protein per kg of body weight for muscle growth.</li>
            <li>Include healthy fats like, olive oil, avocado for hormonal health.</li>
            <li>Eat complex carbohydrates like whole grains, potatoes, and fruits for energy.</li>
            <li>Eat 4-6 meals per day, including calorie-dense snacks like protein shakes and nuts.</li>
        </ul>

        <h3>Strength Training:</h3>
        <ul>
            <li>Focus on compound exercises like squats, deadlifts, and bench press.</li>
            <li>Progressively overload by increasing the weight or reps over time.</li>
            <li>Train 3-5 times per week, targeting different muscle groups.</li>
        </ul>

        <h3>Recovery:</h3>
        <ul>
            <li>Get 7-9 hours of sleep for optimal muscle recovery and growth.</li>
            <li>Take 1-2 rest days per week to allow muscles to recover.</li>
            <li>Ensure proper recovery between intense workouts to avoid overtraining.</li>
        </ul>

        <h3>Supplements - Optional:</h3>
        <ul>
            <li>Whey protein, creatine, and mass gainer shakes can help support muscle gain.</li>
            <li>Creatine improves strength, while whey protein aids muscle recovery.</li>
        </ul>

        <h3>Tracking Progress:</h3>
        <ul>
            <li>Track strength gains and body measurements to monitor muscle growth.</li>
            <li>Adjust your calorie intake if you're not gaining muscle or if you're gaining too much fat.</li>
        </ul>

        <h3>Sustainable Changes:</h3>
        <p>Focus on long-term consistency and making healthy, sustainable changes to your lifestyle for optimal muscle growth.</p>
    `;
    }

    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('body-modal');
    modal.style.display = 'none';
}