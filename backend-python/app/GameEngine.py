import numpy as np 


class GameEngine():

    def __init__(self):
        pass 

    @staticmethod
    def generate_outcome():
        """
        A method to generate either rock, paper or scissors
        """
        return np.random.choice(['rock', 'paper', 'scissors'])

    @staticmethod
    def compare_outcomes(out1, out2):
        """
        Compares the two outcomes of a game of rock-paper-scissors
        1 - out2 won 
        0 - draw 
        -1 - out2 lost
        """
        if out1 == out2:
            return 0
        
        elif out1 == 'paper':
            if out2 == 'scissors':
                return 1 
            else:
                return -1 
        
        elif out1 == 'rock':
            if out2 == 'paper':
                return 1 
            else:
                return -1 

        elif out1 == 'scissors':
            if out2 == 'rock':
                return 1 
            else:
                return -1
