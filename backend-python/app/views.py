# Importing the application
from app import gameInstance

# Importing the db connection
from . import db

# Importng flask related content serving
from flask import request, jsonify

# Importing the game engine
from .GameEngine import GameEngine 

# Importing the Result data model
from .models import Results

# Initiating the game engine in memory
game = GameEngine()

# Initial endpoint
@gameInstance.route('/')
def home():
    return "Welcome to the rock paper scissors game!!!"

# Endpoint for the game 
@gameInstance.route('/game')
def rps_game():
    """
    The game for rock paper scissors
    """
    # Getting the user outcome
    user_outcome = request.args.get("outcome")

    # Ensuring lowercase
    user_outcome = user_outcome.lower()

    # Generating outcome for the computer
    computer_outcome = game.generate_outcome()

    # Comparing the two
    final_outcome = game.compare_outcomes(computer_outcome, user_outcome)

    # Creating a commit to db 
    result = Results(sign_user=user_outcome, sign_AI=computer_outcome, result=final_outcome)

    # Saving the info to database
    db.session.add(result)
    db.session.commit()

    # Returning a json with the outcome
    return jsonify({
        'outcome': final_outcome,
        'computer_sign': computer_outcome
    })

# Endpoint for the global game statistics
@gameInstance.route('/stats')
def stats():
    """
    The game for rock paper scissors
    """
    # Total games played 
    n = Results.query.count()

    # Couting human wins
    humanWins = Results.query.filter_by(result=1).count()

    # Counting AI wins 
    AIWins = Results.query.filter_by(result=-1).count()

    # Counting draws
    draws = Results.query.filter_by(result=0).count()

    # Most popular user signs
    scissor_n = Results.query.filter_by(sign_user='scissors').count()
    paper_n = Results.query.filter_by(sign_user='paper').count()
    rock_n = Results.query.filter_by(sign_user='rock').count()

    # Returning a json with the outcome
    return jsonify({
        'total_games': n,
        'human_wins': humanWins,
        'ai_wins': AIWins,
        'draws': draws,
        'scissor_n': scissor_n,
        'paper_n': paper_n,
        'rock_n': rock_n
        })