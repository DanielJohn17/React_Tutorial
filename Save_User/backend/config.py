from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

app = Flask(__name__)
app.url_map.strict_slashes = False
CORS(app)

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+mysqldb://root:root@localhost\
:3306/ReactProject"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
