from flask import Flask, request, render_template, redirect, url_for
import random

app = Flask(__name__)

# Initialize global scores
skill_score, stamina_score, luck_score = None, None, None




@app.route('/')
def start_game():
    # You can start the game by rendering an HTML template that includes
    # the game's initial content and form for user input
    return render_template('index.html')

@app.route('/play', methods=['POST'])
def play_game():
    global skill_score, stamina_score, luck_score
    print("Welcome to Stage 1. The offices of VIPERCALL TECHNOLOGIES - YOUR FIRST DAY\n")
    sleep(3)
    print("""You are a keen gamer with decent technology skills and last week you finished 
working your dead-end job as a fast-food delivery rider.\n """)
    # This route handles the form submission and game logic
    # You can access user choices and process the game here
    # Example:
    choice = request.form.get('choice')
    
    if choice == '1':
        # Handle user choice 1
        print("Checking choice2...\n")
    elif choice == '2':
        # Handle user choice 2
        print("Checking choice2...\n")

    # After processing the user's choice, you can render a new HTML template
    # with the updated game content
    return render_template('game.html')

if __name__ == '__main__':
    app.run(debug=True)
