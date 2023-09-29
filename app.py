from flask import Flask, request, render_template, redirect, url_for
import random

app = Flask(__name__)

# Your existing code for functions, dice rolls, and game logic goes here
# ...

# Initialize global scores
skill_score, stamina_score, luck_score = None, None, None

@app.route('/', methods=['GET', 'POST'])  # Allow both GET and POST requests
def start_game():
    if request.method == 'POST':
        # Handle POST request (e.g., when rolling dice)
        global skill_score, stamina_score, luck_score

        # Roll the dice for skill, stamina, and luck scores
        skill_rolls = roll_dice()
        stamina_rolls = roll_dice()
        luck_rolls = roll_dice()
        
        # Calculate the scores based on dice rolls
        skill_score = calculate_skill_score(skill_rolls)
        stamina_score = calculate_stamina_score(stamina_rolls)
        luck_score = calculate_luck_score(luck_rolls)
    
        # Redirect to the '/game' route to continue the game
        return redirect(url_for('game'))

    # Render the initial game content and form for user input (GET request)
    return redirect(url_for('intro'))  # Redirect to the 'intro' route

@app.route('/intro', methods=['GET', 'POST'])
def intro():
    # Render the updated scores and game content in the HTML template
    return render_template('intro.html', skill_score=skill_score, stamina_score=stamina_score, luck_score=luck_score)


@app.route('/roll')
def roll():
    # Add any necessary logic for rolling dice or preparing the roll page here
    return render_template('roll.html', skill_score=skill_score, stamina_score=stamina_score, luck_score=luck_score)

@app.route('/roll2')
def roll2():
    # Add any necessary logic for rolling dice or preparing the roll page here
    return render_template('roll2.html', skill_score=skill_score, stamina_score=stamina_score, luck_score=luck_score)


@app.route('/play', methods=['POST'])
def play_game():
    # Handle the game logic when the form is submitted
    # You can place your game logic here

    # Redirect to the '/intro' route to continue the game
    return redirect(url_for('intro'))

@app.route('/game')
def game():
    # Render the 'game.html' page
    return render_template('game.html', skill_score=skill_score, stamina_score=stamina_score, luck_score=luck_score)

if __name__ == '__main__':
    app.run(debug=True)
