from . import db

class Results(db.Model):
    __tablename__ = 'results'

    id = db.Column(db.Integer, primary_key=True)
    sign_user = db.Column(db.String())
    sign_AI = db.Column(db.String())
    result = db.Column(db.Integer())

    def __init__(self, sign_user, sign_AI, result):
        self.sign_user = sign_user
        self.sign_AI = sign_AI
        self.result = result